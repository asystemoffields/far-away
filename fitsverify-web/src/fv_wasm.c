/*
 * WASM glue for libfitsverify.
 *
 * Exposes a single entry point, fv_verify_blob(), callable from JavaScript:
 * it runs libfitsverify on an in-memory FITS buffer, collects every output
 * message through the fv_set_output() callback, and serialises the result
 * (counts + per-message detail) into a freshly malloc'd JSON string. The
 * JS side reads the string off the WASM heap and frees it with fv_free().
 *
 * Keeping the JS boundary a single JSON string (rather than exposing the C
 * structs through embind) keeps the wrapper tiny and decoupled from
 * libfitsverify's ABI.
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "fitsverify.h"

/* EMSCRIPTEN_KEEPALIVE marks exports for the WASM build; it's a no-op for
 * native compilation, which lets the same shim be reused unchanged in the
 * native-vs-WASM differential test harness. */
#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#else
#define EMSCRIPTEN_KEEPALIVE
#endif

/* ------------------------------------------------------------------ */
/* A growable byte buffer for assembling the JSON document.            */
typedef struct {
    char  *data;
    size_t len;
    size_t cap;
} sbuf;

static void sb_init(sbuf *s) { s->cap = 4096; s->len = 0; s->data = malloc(s->cap); s->data[0] = 0; }
static void sb_ensure(sbuf *s, size_t extra) {
    if (s->len + extra + 1 <= s->cap) return;
    while (s->len + extra + 1 > s->cap) s->cap *= 2;
    s->data = realloc(s->data, s->cap);
}
static void sb_putc(sbuf *s, char c) { sb_ensure(s, 1); s->data[s->len++] = c; s->data[s->len] = 0; }
static void sb_puts(sbuf *s, const char *str) {
    size_t n = strlen(str);
    sb_ensure(s, n);
    memcpy(s->data + s->len, str, n);
    s->len += n;
    s->data[s->len] = 0;
}
/* Append a JSON-escaped string (without surrounding quotes). */
static void sb_putjson(sbuf *s, const char *str) {
    if (!str) return;
    for (const unsigned char *p = (const unsigned char *)str; *p; p++) {
        switch (*p) {
            case '"':  sb_puts(s, "\\\""); break;
            case '\\': sb_puts(s, "\\\\"); break;
            case '\n': sb_puts(s, "\\n");  break;
            case '\r': sb_puts(s, "\\r");  break;
            case '\t': sb_puts(s, "\\t");  break;
            default:
                if (*p < 0x20) {
                    char tmp[8];
                    snprintf(tmp, sizeof tmp, "\\u%04x", *p);
                    sb_puts(s, tmp);
                } else {
                    sb_putc(s, (char)*p);
                }
        }
    }
}

/* ------------------------------------------------------------------ */
/* Output-callback state: accumulate messages as a JSON array.         */
typedef struct {
    sbuf *out;
    int   count;
} collector;

static const char *severity_name(fv_msg_severity sev) {
    switch (sev) {
        case FV_MSG_INFO:    return "info";
        case FV_MSG_WARNING: return "warning";
        case FV_MSG_ERROR:   return "error";
        case FV_MSG_SEVERE:  return "severe";
        default:             return "info";
    }
}

static void on_message(const fv_message *m, void *userdata) {
    collector *c = (collector *)userdata;
    /* Only surface actionable messages (warnings + errors + severe). The
     * info-level lines are libfitsverify's human-readable report banner;
     * keeping them out makes the structured result clean for callers. The
     * full text report is available separately via the FILE* path if a
     * caller wants it. */
    if (m->severity < FV_MSG_WARNING) return;
    if (c->count++) sb_putc(c->out, ',');
    sb_puts(c->out, "{\"severity\":\"");
    sb_puts(c->out, severity_name(m->severity));
    sb_puts(c->out, "\",\"code\":");
    char num[16];
    snprintf(num, sizeof num, "%d", (int)m->code);
    sb_puts(c->out, num);
    sb_puts(c->out, ",\"hdu\":");
    snprintf(num, sizeof num, "%d", m->hdu_num);
    sb_puts(c->out, num);
    sb_puts(c->out, ",\"text\":\"");
    sb_putjson(c->out, m->text);
    sb_putc(c->out, '"');
    if (m->fix_hint) {
        sb_puts(c->out, ",\"fixHint\":\"");
        sb_putjson(c->out, m->fix_hint);
        sb_putc(c->out, '"');
    }
    if (m->explain) {
        sb_puts(c->out, ",\"explain\":\"");
        sb_putjson(c->out, m->explain);
        sb_putc(c->out, '"');
    }
    sb_putc(c->out, '}');
}

/* ------------------------------------------------------------------ */
/* Public entry points (exported to JS).                               */

/*
 * Verify a FITS buffer. `options` is a bitmask:
 *   bit 0: fix hints      (FV_OPT_FIX_HINTS)
 *   bit 1: explanations   (FV_OPT_EXPLAIN)
 *   bit 2: test checksums  (FV_OPT_TESTCSUM)
 *   bit 3: errors only     (FV_OPT_ERR_REPORT = 1)
 * Returns a malloc'd, NUL-terminated JSON string the caller must fv_free().
 */
EMSCRIPTEN_KEEPALIVE
char *fv_verify_blob(const unsigned char *buf, int size, const char *label, int options) {
    fv_context *ctx = fv_context_new();
    if (!ctx) {
        char *err = malloc(48);
        strcpy(err, "{\"error\":\"failed to allocate fv_context\"}");
        return err;
    }
    if (options & 0x1) fv_set_option(ctx, FV_OPT_FIX_HINTS, 1);
    if (options & 0x2) fv_set_option(ctx, FV_OPT_EXPLAIN, 1);
    if (options & 0x4) fv_set_option(ctx, FV_OPT_TESTCSUM, 1);
    if (options & 0x8) fv_set_option(ctx, FV_OPT_ERR_REPORT, 1);

    sbuf messages;
    sb_init(&messages);
    sb_putc(&messages, '[');
    collector c = { &messages, 0 };
    fv_set_output(ctx, on_message, &c);

    fv_result r;
    memset(&r, 0, sizeof r);
    int rc = fv_verify_memory(ctx, buf, (size_t)size,
                              label ? label : "uploaded.fits", NULL, &r);
    sb_putc(&messages, ']');

    sbuf doc;
    sb_init(&doc);
    char num[16];
    sb_puts(&doc, "{\"ok\":");
    sb_puts(&doc, rc == 0 && r.num_errors == 0 ? "true" : "false");
    sb_puts(&doc, ",\"numErrors\":");
    snprintf(num, sizeof num, "%d", r.num_errors); sb_puts(&doc, num);
    sb_puts(&doc, ",\"numWarnings\":");
    snprintf(num, sizeof num, "%d", r.num_warnings); sb_puts(&doc, num);
    sb_puts(&doc, ",\"numHdus\":");
    snprintf(num, sizeof num, "%d", r.num_hdus); sb_puts(&doc, num);
    sb_puts(&doc, ",\"aborted\":");
    sb_puts(&doc, r.aborted ? "true" : "false");
    sb_puts(&doc, ",\"version\":\"");
    sb_putjson(&doc, fv_version());
    sb_puts(&doc, "\",\"messages\":");
    sb_puts(&doc, messages.data);
    sb_putc(&doc, '}');

    free(messages.data);
    fv_context_free(ctx);
    return doc.data;
}

EMSCRIPTEN_KEEPALIVE
void fv_free(char *p) { free(p); }

EMSCRIPTEN_KEEPALIVE
const char *fv_lib_version(void) { return fv_version(); }
