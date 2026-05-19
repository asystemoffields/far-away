#!/usr/bin/env bash
# Build the libfitsverify WASM module.
#
# Produces dist/fitsverify.mjs + dist/fitsverify.wasm — an ES module that
# validates FITS files entirely in the browser (no upload, no install).
#
# Prerequisites:
#   - Emscripten on PATH (source emsdk_env.sh). Tested with emcc 5.0.7.
#   - The two upstream sources checked out next to this script, or set
#     CFITSIO_SRC / FITSVERIFY_SRC env vars:
#       git clone --depth 1 https://github.com/HEASARC/cfitsio
#       git clone --depth 1 https://github.com/demitri/fitsverify
#
# Layout assumed (override with env vars):
#   $CFITSIO_SRC       cfitsio source tree         (default: ./vendor/cfitsio)
#   $FITSVERIFY_SRC    demitri/fitsverify tree     (default: ./vendor/fitsverify)
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CFITSIO_SRC="${CFITSIO_SRC:-$HERE/vendor/cfitsio}"
FITSVERIFY_SRC="${FITSVERIFY_SRC:-$HERE/vendor/fitsverify}"
BUILD="$HERE/build"
DIST="$HERE/dist"

command -v emcc >/dev/null || { echo "emcc not on PATH — source emsdk_env.sh"; exit 1; }

# Vendor the upstream sources on first run (pinned to the tags we built/
# tested against). vendor/ is gitignored — we don't redistribute their
# trees, only link against them at build time.
CFITSIO_TAG="${CFITSIO_TAG:-cfitsio-4.6.2}"
mkdir -p "$HERE/vendor"
[ -d "$CFITSIO_SRC" ] || git clone --depth 1 -b "$CFITSIO_TAG" \
  https://github.com/HEASARC/cfitsio "$CFITSIO_SRC" 2>/dev/null \
  || git clone --depth 1 https://github.com/HEASARC/cfitsio "$CFITSIO_SRC"
[ -d "$FITSVERIFY_SRC" ] || git clone --depth 1 \
  https://github.com/demitri/fitsverify "$FITSVERIFY_SRC"

SYSROOT="$(em-config CACHE)/sysroot"
embuilder build zlib >/dev/null 2>&1 || true   # ensure the zlib port exists
ZLIB_INC="$SYSROOT/include"
ZLIB_LIB="$SYSROOT/lib/wasm32-emscripten/libz.a"

# 0. Teach cfitsio that wasm32 is a 32-bit little-endian machine.
#    Its fitsio2.h endianness chain has no wasm branch, so it falls through
#    to the big-endian default and silently byte-swaps backwards. wasm32
#    matches the generic-IBMPC profile exactly (BYTESWAPPED TRUE,
#    CFITSIO_MACHINE IBMPC — whose only effect is a harmless extra seek —
#    LONGSIZE 32). Idempotent.
if ! grep -q '__wasm__' "$CFITSIO_SRC/fitsio2.h"; then
  sed -i 's@#elif defined(__i386) || defined(__i386__)@#elif defined(__wasm__) || defined(__i386) || defined(__i386__)@' \
    "$CFITSIO_SRC/fitsio2.h"
  echo "✓ patched fitsio2.h for wasm32 endianness"
fi

# 1. cfitsio → static WASM archive.
#    -DgFortran lets cfortran.h compile under Emscripten (the Fortran
#    wrappers are dead code for us; emcc strips them at link).
#    -DM_LIB=m satisfies cfitsio's find_library(m) (math is in libc here).
rm -rf "$BUILD/cfitsio" && mkdir -p "$BUILD/cfitsio"
( cd "$BUILD/cfitsio" && emcmake cmake "$CFITSIO_SRC" \
    -DCMAKE_BUILD_TYPE=Release -DBUILD_SHARED_LIBS=OFF \
    -DUSE_CURL=OFF -DUSE_BZIP2=OFF -DTESTS=OFF -DUTILS=OFF -DUSE_PTHREADS=OFF \
    -DZLIB_INCLUDE_DIR="$ZLIB_INC" -DZLIB_LIBRARY="$ZLIB_LIB" \
    -DM_LIB=m -DCMAKE_C_FLAGS="-DgFortran -O2" \
    -DCMAKE_INSTALL_PREFIX="$BUILD/install" >/dev/null \
  && emmake make -j"$(nproc)" install >/dev/null )
echo "✓ cfitsio.a (wasm)"

# 2. libfitsverify sources + our JS shim → final module.
mkdir -p "$DIST"
FV_SRC="$FITSVERIFY_SRC/libfitsverify/src"
emcc -O2 -DgFortran \
  -I "$FITSVERIFY_SRC/libfitsverify/include" \
  -I "$BUILD/install/include" \
  "$FV_SRC/fv_api.c" "$FV_SRC/fv_hints.c" \
  "$FV_SRC/fvrf_data.c" "$FV_SRC/fvrf_file.c" "$FV_SRC/fvrf_head.c" \
  "$FV_SRC/fvrf_key.c" "$FV_SRC/fvrf_misc.c" \
  "$HERE/src/fv_wasm.c" \
  "$BUILD/install/lib/libcfitsio.a" "$ZLIB_LIB" \
  -sMODULARIZE=1 -sEXPORT_ES6=1 \
  -sEXPORTED_FUNCTIONS=_fv_verify_blob,_fv_free,_fv_lib_version,_malloc,_free \
  -sEXPORTED_RUNTIME_METHODS=ccall,cwrap,UTF8ToString,HEAPU8 \
  -sALLOW_MEMORY_GROWTH=1 -sENVIRONMENT=web,worker,node \
  -o "$DIST/fitsverify.mjs"
echo "✓ dist/fitsverify.mjs + dist/fitsverify.wasm"
ls -la "$DIST"/fitsverify.wasm | awk '{printf "  wasm: %d bytes\n", $5}'
