(function(fn,rr){typeof exports=="object"&&typeof module<"u"?rr(exports):typeof define=="function"&&define.amd?define(["exports"],rr):(fn=typeof globalThis<"u"?globalThis:fn||self,rr(fn.DAMITViewer={}))})(this,function(fn){"use strict";const rr='.uplot,.uplot *,.uplot *:before,.uplot *:after{box-sizing:border-box}.uplot{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5;width:min-content}.u-title{text-align:center;font-size:18px;font-weight:700}.u-wrap{position:relative;user-select:none}.u-over,.u-under{position:absolute}.u-under{overflow:hidden}.uplot canvas{display:block;position:relative;width:100%;height:100%}.u-axis{position:absolute}.u-legend{font-size:14px;margin:auto;text-align:center}.u-inline{display:block}.u-inline *{display:inline-block}.u-inline tr{margin-right:16px}.u-legend th{font-weight:600}.u-legend th>*{vertical-align:middle;display:inline-block}.u-legend .u-marker{width:1em;height:1em;margin-right:4px;background-clip:padding-box!important}.u-inline.u-live th:after{content:":";vertical-align:middle}.u-inline:not(.u-live) .u-value{display:none}.u-series>*{padding:4px}.u-series th{cursor:pointer}.u-legend .u-off>*{opacity:.3}.u-select{background:#00000012;position:absolute;pointer-events:none}.u-cursor-x,.u-cursor-y{position:absolute;left:0;top:0;pointer-events:none;will-change:transform}.u-hz .u-cursor-x,.u-vt .u-cursor-y{height:100%;border-right:1px dashed #607D8B}.u-hz .u-cursor-y,.u-vt .u-cursor-x{width:100%;border-bottom:1px dashed #607D8B}.u-cursor-pt{position:absolute;top:0;left:0;border-radius:50%;border:0 solid;pointer-events:none;will-change:transform;background-clip:padding-box!important}.u-axis.u-off,.u-select.u-off,.u-cursor-x.u-off,.u-cursor-y.u-off,.u-cursor-pt.u-off{display:none}',Tl=":where(.damit-viewer-host) :where(.dv-btn,.dv-select,.dv-range-label,.dv-range-label input,.dv-labeled,.dv-title,.dv-meta,.dv-footer,.dv-cite,.dv-controls,.dv-header,.dv-scene,.dv-plot,.dv-scene-col,.dv-plot-col,.dv-split,.damit-viewer-root){all:revert;font-family:inherit;color:inherit;box-sizing:border-box}.damit-viewer-host{display:block;width:100%;height:100%;min-height:480px;color:#e7eaf2;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#0b0d12;border-radius:8px;overflow:hidden;contain:layout size}.damit-viewer-root{display:flex;flex-direction:column;height:100%;min-height:0}.dv-header{display:flex;justify-content:space-between;align-items:baseline;padding:10px 14px;border-bottom:1px solid #1c212b;flex-wrap:wrap;gap:8px}.dv-title{font-weight:600;font-size:15px;letter-spacing:.02em}.dv-meta{font-size:12px;color:#9aa3b2;font-variant-numeric:tabular-nums}.dv-split{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);flex:1 1 auto;min-height:0}.dv-scene-col,.dv-plot-col{display:flex;flex-direction:column;min-width:0;min-height:0}.dv-scene-col{border-right:1px solid #1c212b}.dv-scene{flex:1 1 0;min-height:0;position:relative}.dv-plot{flex:1 1 0;min-height:0;position:relative;padding:8px 8px 0;overflow:hidden}.dv-plot .u-wrap{background:transparent}.dv-plot .u-title{color:#e7eaf2}.dv-plot .u-legend{color:#c9d0db;font-size:12px}.dv-footer{display:flex;flex-wrap:wrap;align-items:baseline;padding:6px 12px;font-size:11px;color:#8a93a4;border-top:1px solid #1c212b;gap:4px 12px}.dv-cite{font-style:italic;margin-left:auto}.dv-jd-readout{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-variant-numeric:tabular-nums;color:#c9d0db}.dv-controls{display:flex;align-items:center;flex-wrap:wrap;gap:8px 14px;padding:8px 12px;border-top:1px solid #1c212b;font-size:12px;flex-shrink:0}.dv-labeled{display:inline-flex;align-items:center;gap:6px;color:#9aa3b2;flex-wrap:wrap}.dv-select{background:#161a22;color:#e7eaf2;border:1px solid #2a313d;padding:4px 8px;border-radius:4px;font:inherit;max-width:100%;min-width:0}.dv-btn{background:#1b2230;color:#e7eaf2;border:1px solid #2a313d;padding:4px 12px;border-radius:4px;cursor:pointer;font:inherit}.dv-btn:hover{background:#232c3d}.dv-range-label{display:inline-flex;align-items:center;gap:6px;color:#9aa3b2}.dv-range-label input[type=range]{vertical-align:middle;width:100px}@media (max-width: 720px){.dv-split{grid-template-columns:1fr;grid-template-rows:1fr 1fr}.dv-scene-col{border-right:none;border-bottom:1px solid #1c212b}.dv-header{padding:8px 10px}.dv-title{font-size:14px}.dv-meta{font-size:11px}.dv-controls{padding:8px 10px;gap:6px 12px}.dv-controls .dv-select,.dv-controls .dv-labeled,.dv-controls .dv-range-label{flex:1 1 100%}.dv-controls .dv-btn{flex:0 0 auto}.dv-controls .dv-range-label input[type=range]{flex:1 1 auto;min-width:0}}";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ka="166",Si="",Zn="srgb",Mi="srgb-linear",Ha="display-p3",Cs="display-p3-linear",Rs="linear",At="srgb",Ps="rec709",Ls="p3",bl="300 es";class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wa=Math.PI/180,Xa=180/Math.PI;function yi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function Sn(i,e,t){return Math.max(e,Math.min(t,i))}function uh(i,e){return(i%e+e)%e}function qa(i,e,t){return(1-t)*i+t*e}function Jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,r,s,a,o,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],u=n[7],h=n[2],m=n[5],_=n[8],v=r[0],p=r[3],d=r[6],y=r[1],S=r[4],E=r[7],F=r[2],w=r[5],R=r[8];return s[0]=a*v+o*y+l*F,s[3]=a*p+o*S+l*w,s[6]=a*d+o*E+l*R,s[1]=c*v+f*y+u*F,s[4]=c*p+f*S+u*w,s[7]=c*d+f*E+u*R,s[2]=h*v+m*y+_*F,s[5]=h*p+m*S+_*w,s[8]=h*d+m*E+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-n*s*f+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=f*a-o*c,h=o*l-f*s,m=c*s-a*l,_=t*u+n*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=u*v,e[1]=(r*c-f*n)*v,e[2]=(o*n-r*a)*v,e[3]=h*v,e[4]=(f*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ya.makeScale(e,t)),this}rotate(e){return this.premultiply(Ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ya=new tt;function Al(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fh(){const i=Ds("canvas");return i.style.display="block",i}const wl={};function $a(i){i in wl||(wl[i]=!0,console.warn(i))}function hh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Cl=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rl=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Us={[Mi]:{transfer:Rs,primaries:Ps,toReference:i=>i,fromReference:i=>i},[Zn]:{transfer:At,primaries:Ps,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Cs]:{transfer:Rs,primaries:Ls,toReference:i=>i.applyMatrix3(Rl),fromReference:i=>i.applyMatrix3(Cl)},[Ha]:{transfer:At,primaries:Ls,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Rl),fromReference:i=>i.applyMatrix3(Cl).convertLinearToSRGB()}},dh=new Set([Mi,Cs]),_t={enabled:!0,_workingColorSpace:Mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!dh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Us[e].toReference,r=Us[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Us[i].primaries},getTransfer:function(i){return i===Si?Rs:Us[i].transfer}};function ar(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ja(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let or;class ph{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{or===void 0&&(or=Ds("canvas")),or.width=e.width,or.height=e.height;const n=or.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=or}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ar(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ar(t[n]/255)*255):t[n]=ar(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mh=0;class Pl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ka(r[a].image)):s.push(Ka(r[a]))}else s=Ka(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ph.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gh=0;class hn extends sr{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=hn.DEFAULT_ANISOTROPY,f=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=yi(),this.name="",this.source=new Pl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null,hn.DEFAULT_MAPPING=300,hn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,n=0,r=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],m=l[5],_=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,E=(m+1)/2,F=(d+1)/2,w=(f+h)/4,R=(u+v)/4,I=(_+p)/4;return S>E&&S>F?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=w/n,s=R/n):E>F?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=w/r,s=I/r):F<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),n=R/s,r=I/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-_)*(p-_)+(u-v)*(u-v)+(h-f)*(h-f));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(u-v)/y,this.z=(h-f)/y,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _h extends sr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new hn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends _h{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ll extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vh extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],f=n[r+2],u=n[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(u!==v||l!==h||c!==m||f!==_){let p=1-o;const d=l*h+c*m+f*_+u*v,y=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const F=Math.sqrt(S),w=Math.atan2(F,d*y);p=Math.sin(p*w)/F,o=Math.sin(o*w)/F}const E=o*y;if(l=l*p+h*E,c=c*p+m*E,f=f*p+_*E,u=u*p+v*E,p===1-o){const F=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=F,c*=F,f*=F,u*=F}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],f=n[r+3],u=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+f*u+l*m-c*h,e[t+1]=l*_+f*h+c*u-o*m,e[t+2]=c*_+f*m+o*h-l*u,e[t+3]=f*_-o*u-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(r/2),u=o(s/2),h=l(n/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*f*u+c*m*_,this._y=c*m*u-h*f*_,this._z=c*f*_+h*m*u,this._w=c*f*u-h*m*_;break;case"YXZ":this._x=h*f*u+c*m*_,this._y=c*m*u-h*f*_,this._z=c*f*_-h*m*u,this._w=c*f*u+h*m*_;break;case"ZXY":this._x=h*f*u-c*m*_,this._y=c*m*u+h*f*_,this._z=c*f*_+h*m*u,this._w=c*f*u-h*m*_;break;case"ZYX":this._x=h*f*u-c*m*_,this._y=c*m*u+h*f*_,this._z=c*f*_-h*m*u,this._w=c*f*u+h*m*_;break;case"YZX":this._x=h*f*u+c*m*_,this._y=c*m*u+h*f*_,this._z=c*f*_-h*m*u,this._w=c*f*u-h*m*_;break;case"XZY":this._x=h*f*u-c*m*_,this._y=c*m*u-h*f*_,this._z=c*f*_+h*m*u,this._w=c*f*u+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],u=t[10],h=n+o+u;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-n*c,this._z=s*f+a*c+n*l-r*o,this._w=a*f-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),u=Math.sin((1-t)*f)/c,h=Math.sin(t*f)/c;return this._w=a*u+this._w*h,this._x=n*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),f=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*f,this.y=n+l*f+o*c-s*u,this.z=r+l*u+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Za.copy(this).projectOnVector(e),this.sub(Za)}reflect(e){return this.sub(Za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Za=new Y,Dl=new Qr;class es{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(s,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Is.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(e.matrixWorld),this.union(Is)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),Ns.subVectors(this.max,ts),lr.subVectors(e.a,ts),cr.subVectors(e.b,ts),ur.subVectors(e.c,ts),Ei.subVectors(cr,lr),Ti.subVectors(ur,cr),Bi.subVectors(lr,ur);let t=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-Bi.z,Bi.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,Bi.z,0,-Bi.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-Bi.y,Bi.x,0];return!Ja(t,lr,cr,ur,Ns)||(t=[1,0,0,0,1,0,0,0,1],!Ja(t,lr,cr,ur,Ns))?!1:(Fs.crossVectors(Ei,Ti),t=[Fs.x,Fs.y,Fs.z],Ja(t,lr,cr,ur,Ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],zn=new Y,Is=new es,lr=new Y,cr=new Y,ur=new Y,Ei=new Y,Ti=new Y,Bi=new Y,ts=new Y,Ns=new Y,Fs=new Y,Oi=new Y;function Ja(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Oi.fromArray(i,s);const o=r.x*Math.abs(Oi.x)+r.y*Math.abs(Oi.y)+r.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),f=n.dot(Oi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const xh=new es,ns=new Y,Qa=new Y;class Bs{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const t=ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ns,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(Qa)),this.expandByPoint(ns.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new Y,eo=new Y,Os=new Y,bi=new Y,to=new Y,zs=new Y,no=new Y;class Ul{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){eo.copy(e).add(t).multiplyScalar(.5),Os.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(eo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Os),o=bi.dot(this.direction),l=-bi.dot(Os),c=bi.lengthSq(),f=Math.abs(1-a*a);let u,h,m,_;if(f>0)if(u=a*l-o,h=a*o-l,_=s*f,u>=0)if(h>=-_)if(h<=_){const v=1/f;u*=v,h*=v,m=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;else h<=-_?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+h*(h+2*l)+c):h<=_?(u=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+h*(h+2*l)+c);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(eo).addScaledVector(Os,h),m}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const n=ci.dot(this.direction),r=ci.dot(ci)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,r,s){to.subVectors(t,e),zs.subVectors(n,e),no.crossVectors(to,zs);let a=this.direction.dot(no),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bi.subVectors(this.origin,e);const l=o*this.direction.dot(zs.crossVectors(bi,zs));if(l<0)return null;const c=o*this.direction.dot(to.cross(bi));if(c<0||l+c>a)return null;const f=-o*bi.dot(no);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,n,r,s,a,o,l,c,f,u,h,m,_,v,p){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,f,u,h,m,_,v,p)}set(e,t,n,r,s,a,o,l,c,f,u,h,m,_,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=f,d[10]=u,d[14]=h,d[3]=m,d[7]=_,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/fr.setFromMatrixColumn(e,0).length(),s=1/fr.setFromMatrixColumn(e,1).length(),a=1/fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=a*f,m=a*u,_=o*f,v=o*u;t[0]=l*f,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*f,m=l*u,_=c*f,v=c*u;t[0]=h+v*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*f,t[9]=-o,t[2]=m*o-_,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*f,m=l*u,_=c*f,v=c*u;t[0]=h-v*o,t[4]=-a*u,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*f,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*f,m=a*u,_=o*f,v=o*u;t[0]=l*f,t[4]=_*c-m,t[8]=h*c+v,t[1]=l*u,t[5]=v*c+h,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,v=o*c;t[0]=l*f,t[4]=v-h*u,t[8]=_*u+m,t[1]=u,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=m*u+_,t[10]=h-v*u}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,v=o*c;t[0]=l*f,t[4]=-u,t[8]=c*f,t[1]=h*u+v,t[5]=a*f,t[9]=m*u-_,t[2]=_*u-m,t[6]=o*f,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sh,e,Mh)}lookAt(e,t,n){const r=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Ai.crossVectors(n,En),Ai.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Ai.crossVectors(n,En)),Ai.normalize(),Gs.crossVectors(En,Ai),r[0]=Ai.x,r[4]=Gs.x,r[8]=En.x,r[1]=Ai.y,r[5]=Gs.y,r[9]=En.y,r[2]=Ai.z,r[6]=Gs.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],u=n[5],h=n[9],m=n[13],_=n[2],v=n[6],p=n[10],d=n[14],y=n[3],S=n[7],E=n[11],F=n[15],w=r[0],R=r[4],I=r[8],b=r[12],x=r[1],C=r[5],G=r[9],N=r[13],O=r[2],W=r[6],z=r[10],Z=r[14],K=r[3],fe=r[7],ce=r[11],pe=r[15];return s[0]=a*w+o*x+l*O+c*K,s[4]=a*R+o*C+l*W+c*fe,s[8]=a*I+o*G+l*z+c*ce,s[12]=a*b+o*N+l*Z+c*pe,s[1]=f*w+u*x+h*O+m*K,s[5]=f*R+u*C+h*W+m*fe,s[9]=f*I+u*G+h*z+m*ce,s[13]=f*b+u*N+h*Z+m*pe,s[2]=_*w+v*x+p*O+d*K,s[6]=_*R+v*C+p*W+d*fe,s[10]=_*I+v*G+p*z+d*ce,s[14]=_*b+v*N+p*Z+d*pe,s[3]=y*w+S*x+E*O+F*K,s[7]=y*R+S*C+E*W+F*fe,s[11]=y*I+S*G+E*z+F*ce,s[15]=y*b+S*N+E*Z+F*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],m=e[14],_=e[3],v=e[7],p=e[11],d=e[15];return _*(+s*l*u-r*c*u-s*o*h+n*c*h+r*o*m-n*l*m)+v*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*f-s*l*f)+p*(+t*c*u-t*o*m-s*a*u+n*a*m+s*o*f-n*c*f)+d*(-r*o*f-t*l*u+t*o*h+r*a*u-n*a*h+n*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],m=e[11],_=e[12],v=e[13],p=e[14],d=e[15],y=u*p*c-v*h*c+v*l*m-o*p*m-u*l*d+o*h*d,S=_*h*c-f*p*c-_*l*m+a*p*m+f*l*d-a*h*d,E=f*v*c-_*u*c+_*o*m-a*v*m-f*o*d+a*u*d,F=_*u*l-f*v*l-_*o*h+a*v*h+f*o*p-a*u*p,w=t*y+n*S+r*E+s*F;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=y*R,e[1]=(v*h*s-u*p*s-v*r*m+n*p*m+u*r*d-n*h*d)*R,e[2]=(o*p*s-v*l*s+v*r*c-n*p*c-o*r*d+n*l*d)*R,e[3]=(u*l*s-o*h*s-u*r*c+n*h*c+o*r*m-n*l*m)*R,e[4]=S*R,e[5]=(f*p*s-_*h*s+_*r*m-t*p*m-f*r*d+t*h*d)*R,e[6]=(_*l*s-a*p*s-_*r*c+t*p*c+a*r*d-t*l*d)*R,e[7]=(a*h*s-f*l*s+f*r*c-t*h*c-a*r*m+t*l*m)*R,e[8]=E*R,e[9]=(_*u*s-f*v*s-_*n*m+t*v*m+f*n*d-t*u*d)*R,e[10]=(a*v*s-_*o*s+_*n*c-t*v*c-a*n*d+t*o*d)*R,e[11]=(f*o*s-a*u*s-f*n*c+t*u*c+a*n*m-t*o*m)*R,e[12]=F*R,e[13]=(f*v*r-_*u*r+_*n*h-t*v*h-f*n*p+t*u*p)*R,e[14]=(_*o*r-a*v*r-_*n*l+t*v*l+a*n*p-t*o*p)*R,e[15]=(a*u*r-f*o*r+f*n*l-t*u*l-a*n*h+t*o*h)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+n,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,u=o+o,h=s*c,m=s*f,_=s*u,v=a*f,p=a*u,d=o*u,y=l*c,S=l*f,E=l*u,F=n.x,w=n.y,R=n.z;return r[0]=(1-(v+d))*F,r[1]=(m+E)*F,r[2]=(_-S)*F,r[3]=0,r[4]=(m-E)*w,r[5]=(1-(h+d))*w,r[6]=(p+y)*w,r[7]=0,r[8]=(_+S)*R,r[9]=(p-y)*R,r[10]=(1-(h+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=fr.set(r[0],r[1],r[2]).length();const a=fr.set(r[4],r[5],r[6]).length(),o=fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const c=1/s,f=1/a,u=1/o;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=f,Gn.elements[5]*=f,Gn.elements[6]*=f,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,t.setFromRotationMatrix(Gn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3){const l=this.elements,c=2*s/(t-e),f=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r);let m,_;if(o===2e3)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===2001)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3){const l=this.elements,c=1/(t-e),f=1/(n-r),u=1/(a-s),h=(t+e)*c,m=(n+r)*f;let _,v;if(o===2e3)_=(a+s)*u,v=-2*u;else if(o===2001)_=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fr=new Y,Gn=new Dt,Sh=new Y(0,0,0),Mh=new Y(1,1,1),Ai=new Y,Gs=new Y,En=new Y,Il=new Dt,Nl=new Qr;class Qn{constructor(e=0,t=0,n=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],u=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Il,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Fl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yh=0;const Bl=new Y,hr=new Qr,ui=new Dt,Vs=new Y,is=new Y,Eh=new Y,Th=new Qr,Ol=new Y(1,0,0),zl=new Y(0,1,0),Gl=new Y(0,0,1),Vl={type:"added"},bh={type:"removed"},dr={type:"childadded",child:null},io={type:"childremoved",child:null};class kt extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new Y,t=new Qn,n=new Qr,r=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new tt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(Ol,e)}rotateY(e){return this.rotateOnAxis(zl,e)}rotateZ(e){return this.rotateOnAxis(Gl,e)}translateOnAxis(e,t){return Bl.copy(e).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ol,e)}translateY(e){return this.translateOnAxis(zl,e)}translateZ(e){return this.translateOnAxis(Gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vs.copy(e):Vs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(is,Vs,this.up):ui.lookAt(Vs,is,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),hr.setFromRotationMatrix(ui),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vl),dr.child=e,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bh),io.child=e,this.dispatchEvent(io),io.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vl),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,Eh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Th,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),u=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}kt.DEFAULT_UP=new Y(0,1,0),kt.DEFAULT_MATRIX_AUTO_UPDATE=!0,kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new Y,fi=new Y,ro=new Y,hi=new Y,pr=new Y,mr=new Y,kl=new Y,so=new Y,ao=new Y,oo=new Y;class kn{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vn.subVectors(e,t),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Vn.subVectors(r,t),fi.subVectors(n,t),ro.subVectors(e,t);const a=Vn.dot(Vn),o=Vn.dot(fi),l=Vn.dot(ro),c=fi.dot(fi),f=fi.dot(ro),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,m=(c*l-o*f)*h,_=(a*f-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static isFrontFacing(e,t,n,r){return Vn.subVectors(n,t),fi.subVectors(e,t),Vn.cross(fi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Vn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;pr.subVectors(r,n),mr.subVectors(s,n),so.subVectors(e,n);const l=pr.dot(so),c=mr.dot(so);if(l<=0&&c<=0)return t.copy(n);ao.subVectors(e,r);const f=pr.dot(ao),u=mr.dot(ao);if(f>=0&&u<=f)return t.copy(r);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(pr,a);oo.subVectors(e,s);const m=pr.dot(oo),_=mr.dot(oo);if(_>=0&&m<=_)return t.copy(s);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(mr,o);const p=f*_-m*u;if(p<=0&&u-f>=0&&m-_>=0)return kl.subVectors(s,r),o=(u-f)/(u-f+(m-_)),t.copy(r).addScaledVector(kl,o);const d=1/(p+v+h);return a=v*d,o=h*d,t.copy(n).addScaledVector(pr,a).addScaledVector(mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},ks={h:0,s:0,l:0};function lo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=_t.workingColorSpace){if(e=uh(e,1),t=Sn(t,0,1),n=Sn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=lo(a,s,e+1/3),this.g=lo(a,s,e),this.b=lo(a,s,e-1/3)}return _t.toWorkingColorSpace(this,r),this}setStyle(e,t=Zn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zn){const n=Hl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return _t.fromWorkingColorSpace(ln.copy(this),e),Math.round(Sn(ln.r*255,0,255))*65536+Math.round(Sn(ln.g*255,0,255))*256+Math.round(Sn(ln.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(ln.copy(this),t);const n=ln.r,r=ln.g,s=ln.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=f<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Zn){_t.fromWorkingColorSpace(ln.copy(this),e);const t=ln.r,n=ln.g,r=ln.b;return e!==Zn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(ks);const n=qa(wi.h,ks.h,t),r=qa(wi.s,ks.s,t),s=qa(wi.l,ks.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new lt;lt.NAMES=Hl;let Ah=0;class zi extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class co extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new Y,Hs=new et;class Mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return $a("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hs.fromBufferAttribute(this,t),Hs.applyMatrix3(e),this.setXY(t,Hs.x,Hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class Wl extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xl extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ln extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wh=0;const Dn=new Dt,uo=new kt,gr=new Y,Tn=new es,rs=new es,Kt=new Y;class Un extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Al(e)?Xl:Wl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return uo.lookAt(e),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(Tn.min,rs.min),Tn.expandByPoint(Kt),Kt.addVectors(Tn.max,rs.max),Tn.expandByPoint(Kt)):(Tn.expandByPoint(rs.min),Tn.expandByPoint(rs.max))}Tn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Kt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Kt.fromBufferAttribute(o,c),l&&(gr.fromBufferAttribute(e,c),Kt.add(gr)),r=Math.max(r,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new Y,l[I]=new Y;const c=new Y,f=new Y,u=new Y,h=new et,m=new et,_=new et,v=new Y,p=new Y;function d(I,b,x){c.fromBufferAttribute(n,I),f.fromBufferAttribute(n,b),u.fromBufferAttribute(n,x),h.fromBufferAttribute(s,I),m.fromBufferAttribute(s,b),_.fromBufferAttribute(s,x),f.sub(c),u.sub(c),m.sub(h),_.sub(h);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(v.copy(f).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(C),p.copy(u).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(C),o[I].add(v),o[b].add(v),o[x].add(v),l[I].add(p),l[b].add(p),l[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,b=y.length;I<b;++I){const x=y[I],C=x.start,G=x.count;for(let N=C,O=C+G;N<O;N+=3)d(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const S=new Y,E=new Y,F=new Y,w=new Y;function R(I){F.fromBufferAttribute(r,I),w.copy(F);const b=o[I];S.copy(b),S.sub(F.multiplyScalar(F.dot(b))).normalize(),E.crossVectors(w,b);const C=E.dot(l[I])<0?-1:1;a.setXYZW(I,S.x,S.y,S.z,C)}for(let I=0,b=y.length;I<b;++I){const x=y[I],C=x.start,G=x.count;for(let N=C,O=C+G;N<O;N+=3)R(e.getX(N+0)),R(e.getX(N+1)),R(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new Y,s=new Y,a=new Y,o=new Y,l=new Y,c=new Y,f=new Y,u=new Y;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(f),l.add(f),c.add(f),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,u=o.normalized,h=new c.constructor(l.length*f);let m=0,_=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*f;for(let d=0;d<f;d++)h[_++]=c[m++]}return new Mn(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,u=c.length;f<u;f++){const h=c[f],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const m=c[u];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],u=s[c];for(let h=0,m=u.length;h<m;h++)f.push(u[h].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ql=new Dt,Gi=new Ul,Ws=new Bs,Yl=new Y,_r=new Y,vr=new Y,xr=new Y,fo=new Y,Xs=new Y,qs=new et,Ys=new et,$s=new et,$l=new Y,jl=new Y,Kl=new Y,js=new Y,Ks=new Y;class Hn extends kt{constructor(e=new Un,t=new co){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Xs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],u=s[l];f!==0&&(fo.fromBufferAttribute(u,e),a?Xs.addScaledVector(fo,f):Xs.addScaledVector(fo.sub(t),f))}t.add(Xs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),Gi.copy(e.ray).recast(e.near),!(Ws.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Ws,Yl)===null||Gi.origin.distanceToSquared(Yl)>(e.far-e.near)**2))&&(ql.copy(s).invert(),Gi.copy(e.ray).applyMatrix4(ql),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const p=h[_],d=a[p.materialIndex],y=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=y,F=S;E<F;E+=3){const w=o.getX(E),R=o.getX(E+1),I=o.getX(E+2);r=Zs(this,d,e,n,c,f,u,w,R,I),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const y=o.getX(p),S=o.getX(p+1),E=o.getX(p+2);r=Zs(this,a,e,n,c,f,u,y,S,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const p=h[_],d=a[p.materialIndex],y=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=y,F=S;E<F;E+=3){const w=E,R=E+1,I=E+2;r=Zs(this,d,e,n,c,f,u,w,R,I),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const y=p,S=p+1,E=p+2;r=Zs(this,a,e,n,c,f,u,y,S,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Ch(i,e,t,n,r,s,a,o){let l;if(e.side===1?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===0,o),l===null)return null;Ks.copy(o),Ks.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ks);return c<t.near||c>t.far?null:{distance:c,point:Ks.clone(),object:i}}function Zs(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,_r),i.getVertexPosition(l,vr),i.getVertexPosition(c,xr);const f=Ch(i,e,t,n,_r,vr,xr,js);if(f){r&&(qs.fromBufferAttribute(r,o),Ys.fromBufferAttribute(r,l),$s.fromBufferAttribute(r,c),f.uv=kn.getInterpolation(js,_r,vr,xr,qs,Ys,$s,new et)),s&&(qs.fromBufferAttribute(s,o),Ys.fromBufferAttribute(s,l),$s.fromBufferAttribute(s,c),f.uv1=kn.getInterpolation(js,_r,vr,xr,qs,Ys,$s,new et)),a&&($l.fromBufferAttribute(a,o),jl.fromBufferAttribute(a,l),Kl.fromBufferAttribute(a,c),f.normal=kn.getInterpolation(js,_r,vr,xr,$l,jl,Kl,new Y),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new Y,materialIndex:0};kn.getNormal(_r,vr,xr,u.normal),f.face=u}return f}class ss extends Un{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],u=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ln(c,3)),this.setAttribute("normal",new Ln(f,3)),this.setAttribute("uv",new Ln(u,2));function _(v,p,d,y,S,E,F,w,R,I,b){const x=E/R,C=F/I,G=E/2,N=F/2,O=w/2,W=R+1,z=I+1;let Z=0,K=0;const fe=new Y;for(let ce=0;ce<z;ce++){const pe=ce*C-N;for(let Te=0;Te<W;Te++){const he=Te*x-G;fe[v]=he*y,fe[p]=pe*S,fe[d]=O,c.push(fe.x,fe.y,fe.z),fe[v]=0,fe[p]=0,fe[d]=w>0?1:-1,f.push(fe.x,fe.y,fe.z),u.push(Te/R),u.push(1-ce/I),Z+=1}}for(let ce=0;ce<I;ce++)for(let pe=0;pe<R;pe++){const Te=h+pe+W*ce,he=h+pe+W*(ce+1),Q=h+(pe+1)+W*(ce+1),se=h+(pe+1)+W*ce;l.push(Te,he,se),l.push(he,Q,se),K+=6}o.addGroup(m,K,b),m+=K,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function dn(i){const e={};for(let t=0;t<i.length;t++){const n=Sr(i[t]);for(const r in n)e[r]=n[r]}return e}function Rh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const Ph={clone:Sr,merge:dn};var Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=Dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=Rh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jl extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=2e3}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new Y,Ql=new et,ec=new et;class In extends Jl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xa*2*Math.atan(Math.tan(Wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,Ql,ec),t.subVectors(ec,Ql)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mr=-90,yr=1;class Uh extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(Mr,yr,e,t);r.layers=this.layers,this.add(r);const s=new In(Mr,yr,e,t);s.layers=this.layers,this.add(s);const a=new In(Mr,yr,e,t);a.layers=this.layers,this.add(a);const o=new In(Mr,yr,e,t);o.layers=this.layers,this.add(o);const l=new In(Mr,yr,e,t);l.layers=this.layers,this.add(l);const c=new In(Mr,yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(u,h,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class tc extends hn{constructor(e,t,n,r,s,a,o,l,c,f){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,n,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ih extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new tc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ss(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new Hn(r,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Uh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const ho=new Y,Nh=new Y,Fh=new tt;class Vi{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ho.subVectors(n,t).cross(Nh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ho),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fh.getNormalMatrix(e),r=this.coplanarPoint(ho).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Bs,Js=new Y;class po{constructor(e=new Vi,t=new Vi,n=new Vi,r=new Vi,s=new Vi,a=new Vi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],f=r[5],u=r[6],h=r[7],m=r[8],_=r[9],v=r[10],p=r[11],d=r[12],y=r[13],S=r[14],E=r[15];if(n[0].setComponents(l-s,h-c,p-m,E-d).normalize(),n[1].setComponents(l+s,h+c,p+m,E+d).normalize(),n[2].setComponents(l+a,h+f,p+_,E+y).normalize(),n[3].setComponents(l-a,h-f,p-_,E-y).normalize(),n[4].setComponents(l-o,h-u,p-v,E-S).normalize(),t===2e3)n[5].setComponents(l+o,h+u,p+v,E+S).normalize();else if(t===2001)n[5].setComponents(o,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Js.x=r.normal.x>0?e.max.x:e.min.x,Js.y=r.normal.y>0?e.max.y:e.min.y,Js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Bh(i){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const f=l.array,u=l._updateRange,h=l.updateRanges;if(i.bindBuffer(c,o),u.count===-1&&h.length===0&&i.bufferSubData(c,0,f),h.length!==0){for(let m=0,_=h.length;m<_;m++){const v=h[m];i.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*f.BYTES_PER_ELEMENT,f,u.offset,u.count),u.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Qs extends Un{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,f=l+1,u=e/o,h=t/l,m=[],_=[],v=[],p=[];for(let d=0;d<f;d++){const y=d*h-a;for(let S=0;S<c;S++){const E=S*u-s;_.push(E,-y,0),v.push(0,0,1),p.push(S/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const S=y+c*d,E=y+c*(d+1),F=y+1+c*(d+1),w=y+1+c*d;m.push(S,E,w),m.push(E,F,w)}this.setIndex(m),this.setAttribute("position",new Ln(_,3)),this.setAttribute("normal",new Ln(v,3)),this.setAttribute("uv",new Ln(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Oh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$h=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,od=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ld=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",md=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Od=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,np=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nt={alphahash_fragment:Oh,alphahash_pars_fragment:zh,alphamap_fragment:Gh,alphamap_pars_fragment:Vh,alphatest_fragment:kh,alphatest_pars_fragment:Hh,aomap_fragment:Wh,aomap_pars_fragment:Xh,batching_pars_vertex:qh,batching_vertex:Yh,begin_vertex:$h,beginnormal_vertex:jh,bsdfs:Kh,iridescence_fragment:Zh,bumpmap_pars_fragment:Jh,clipping_planes_fragment:Qh,clipping_planes_pars_fragment:ed,clipping_planes_pars_vertex:td,clipping_planes_vertex:nd,color_fragment:id,color_pars_fragment:rd,color_pars_vertex:sd,color_vertex:ad,common:od,cube_uv_reflection_fragment:ld,defaultnormal_vertex:cd,displacementmap_pars_vertex:ud,displacementmap_vertex:fd,emissivemap_fragment:hd,emissivemap_pars_fragment:dd,colorspace_fragment:pd,colorspace_pars_fragment:md,envmap_fragment:gd,envmap_common_pars_fragment:_d,envmap_pars_fragment:vd,envmap_pars_vertex:xd,envmap_physical_pars_fragment:Pd,envmap_vertex:Sd,fog_vertex:Md,fog_pars_vertex:yd,fog_fragment:Ed,fog_pars_fragment:Td,gradientmap_pars_fragment:bd,lightmap_pars_fragment:Ad,lights_lambert_fragment:wd,lights_lambert_pars_fragment:Cd,lights_pars_begin:Rd,lights_toon_fragment:Ld,lights_toon_pars_fragment:Dd,lights_phong_fragment:Ud,lights_phong_pars_fragment:Id,lights_physical_fragment:Nd,lights_physical_pars_fragment:Fd,lights_fragment_begin:Bd,lights_fragment_maps:Od,lights_fragment_end:zd,logdepthbuf_fragment:Gd,logdepthbuf_pars_fragment:Vd,logdepthbuf_pars_vertex:kd,logdepthbuf_vertex:Hd,map_fragment:Wd,map_pars_fragment:Xd,map_particle_fragment:qd,map_particle_pars_fragment:Yd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:jd,morphinstance_vertex:Kd,morphcolor_vertex:Zd,morphnormal_vertex:Jd,morphtarget_pars_vertex:Qd,morphtarget_vertex:ep,normal_fragment_begin:tp,normal_fragment_maps:np,normal_pars_fragment:ip,normal_pars_vertex:rp,normal_vertex:sp,normalmap_pars_fragment:ap,clearcoat_normal_fragment_begin:op,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:cp,iridescence_pars_fragment:up,opaque_fragment:fp,packing:hp,premultiplied_alpha_fragment:dp,project_vertex:pp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:vp,shadowmap_pars_fragment:xp,shadowmap_pars_vertex:Sp,shadowmap_vertex:Mp,shadowmask_pars_fragment:yp,skinbase_vertex:Ep,skinning_pars_vertex:Tp,skinning_vertex:bp,skinnormal_vertex:Ap,specularmap_fragment:wp,specularmap_pars_fragment:Cp,tonemapping_fragment:Rp,tonemapping_pars_fragment:Pp,transmission_fragment:Lp,transmission_pars_fragment:Dp,uv_pars_fragment:Up,uv_pars_vertex:Ip,uv_vertex:Np,worldpos_vertex:Fp,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},we={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ei={basic:{uniforms:dn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:dn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new lt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:dn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:dn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:dn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new lt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:dn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:dn([we.points,we.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:dn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:dn([we.common,we.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:dn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:dn([we.sprite,we.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:dn([we.common,we.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:dn([we.lights,we.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ei.physical={uniforms:dn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const ea={r:0,b:0,g:0},Hi=new Qn,Bp=new Dt;function Op(i,e,t,n,r,s,a){const o=new lt(0);let l=s===!0?0:1,c,f,u=null,h=0,m=null;function _(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function v(y){let S=!1;const E=_(y);E===null?d(o,l):E&&E.isColor&&(d(E,1),S=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,S){const E=_(S);E&&(E.isCubeTexture||E.mapping===306)?(f===void 0&&(f=new Hn(new ss(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Sr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(F,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Hi.copy(S.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),f.material.uniforms.envMap.value=E,f.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Bp.makeRotationFromEuler(Hi)),f.material.toneMapped=_t.getTransfer(E.colorSpace)!==At,(u!==E||h!==E.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,u=E,h=E.version,m=i.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Hn(new Qs(2,2),new Ci({name:"BackgroundMaterial",uniforms:Sr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=_t.getTransfer(E.colorSpace)!==At,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||h!==E.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,h=E.version,m=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,S){y.getRGB(ea,Zl(i)),n.buffers.color.setClear(ea.r,ea.g,ea.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:v,addToRenderList:p}}function zp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(x,C,G,N,O){let W=!1;const z=u(N,G,C);s!==z&&(s=z,c(s.object)),W=m(x,N,G,O),W&&_(x,N,G,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,E(x,C,G,N),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function f(x){return i.deleteVertexArray(x)}function u(x,C,G){const N=G.wireframe===!0;let O=n[x.id];O===void 0&&(O={},n[x.id]=O);let W=O[C.id];W===void 0&&(W={},O[C.id]=W);let z=W[N];return z===void 0&&(z=h(l()),W[N]=z),z}function h(x){const C=[],G=[],N=[];for(let O=0;O<t;O++)C[O]=0,G[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:G,attributeDivisors:N,object:x,attributes:{},index:null}}function m(x,C,G,N){const O=s.attributes,W=C.attributes;let z=0;const Z=G.getAttributes();for(const K in Z)if(Z[K].location>=0){const ce=O[K];let pe=W[K];if(pe===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor)),ce===void 0||ce.attribute!==pe||pe&&ce.data!==pe.data)return!0;z++}return s.attributesNum!==z||s.index!==N}function _(x,C,G,N){const O={},W=C.attributes;let z=0;const Z=G.getAttributes();for(const K in Z)if(Z[K].location>=0){let ce=W[K];ce===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor));const pe={};pe.attribute=ce,ce&&ce.data&&(pe.data=ce.data),O[K]=pe,z++}s.attributes=O,s.attributesNum=z,s.index=N}function v(){const x=s.newAttributes;for(let C=0,G=x.length;C<G;C++)x[C]=0}function p(x){d(x,0)}function d(x,C){const G=s.newAttributes,N=s.enabledAttributes,O=s.attributeDivisors;G[x]=1,N[x]===0&&(i.enableVertexAttribArray(x),N[x]=1),O[x]!==C&&(i.vertexAttribDivisor(x,C),O[x]=C)}function y(){const x=s.newAttributes,C=s.enabledAttributes;for(let G=0,N=C.length;G<N;G++)C[G]!==x[G]&&(i.disableVertexAttribArray(G),C[G]=0)}function S(x,C,G,N,O,W,z){z===!0?i.vertexAttribIPointer(x,C,G,O,W):i.vertexAttribPointer(x,C,G,N,O,W)}function E(x,C,G,N){v();const O=N.attributes,W=G.getAttributes(),z=C.defaultAttributeValues;for(const Z in W){const K=W[Z];if(K.location>=0){let fe=O[Z];if(fe===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(fe=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(fe=x.instanceColor)),fe!==void 0){const ce=fe.normalized,pe=fe.itemSize,Te=e.get(fe);if(Te===void 0)continue;const he=Te.buffer,Q=Te.type,se=Te.bytesPerElement,me=Q===i.INT||Q===i.UNSIGNED_INT||fe.gpuType===1013;if(fe.isInterleavedBufferAttribute){const ae=fe.data,ee=ae.stride,ue=fe.offset;if(ae.isInstancedInterleavedBuffer){for(let xe=0;xe<K.locationSize;xe++)d(K.location+xe,ae.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let xe=0;xe<K.locationSize;xe++)p(K.location+xe);i.bindBuffer(i.ARRAY_BUFFER,he);for(let xe=0;xe<K.locationSize;xe++)S(K.location+xe,pe/K.locationSize,Q,ce,ee*se,(ue+pe/K.locationSize*xe)*se,me)}else{if(fe.isInstancedBufferAttribute){for(let ae=0;ae<K.locationSize;ae++)d(K.location+ae,fe.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ae=0;ae<K.locationSize;ae++)p(K.location+ae);i.bindBuffer(i.ARRAY_BUFFER,he);for(let ae=0;ae<K.locationSize;ae++)S(K.location+ae,pe/K.locationSize,Q,ce,pe*se,pe/K.locationSize*ae*se,me)}}else if(z!==void 0){const ce=z[Z];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(K.location,ce);break;case 3:i.vertexAttrib3fv(K.location,ce);break;case 4:i.vertexAttrib4fv(K.location,ce);break;default:i.vertexAttrib1fv(K.location,ce)}}}}y()}function F(){I();for(const x in n){const C=n[x];for(const G in C){const N=C[G];for(const O in N)f(N[O].object),delete N[O];delete C[G]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const G in C){const N=C[G];for(const O in N)f(N[O].object),delete N[O];delete C[G]}delete n[x.id]}function R(x){for(const C in n){const G=n[C];if(G[x.id]===void 0)continue;const N=G[x.id];for(const O in N)f(N[O].object),delete N[O];delete G[x.id]}}function I(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:b,dispose:F,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function Gp(i,e,t){let n;function r(c){n=c}function s(c,f){i.drawArrays(n,c,f),t.update(f,n,1)}function a(c,f,u){u!==0&&(i.drawArraysInstanced(n,c,f,u),t.update(f,n,u))}function o(c,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=f[_];t.update(m,n,1)}function l(c,f,u,h){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],f[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,f,0,h,0,u);let _=0;for(let v=0;v<u;v++)_+=f[v];for(let v=0;v<h.length;v++)t.update(_,n,h[v])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Vp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==1023&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==1009&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==1015&&!R)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:d,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:E,maxSamples:F}}function kp(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Vi,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const m=u.length!==0||h||n!==0||r;return r=h,n=u.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=f(u,h,0)},this.setState=function(u,h,m){const _=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!r||_===null||_.length===0||s&&!p)s?f(null):c();else{const y=s?0:n,S=y*4;let E=d.clippingState||null;l.value=E,E=f(_,h,S,m);for(let F=0;F!==S;++F)E[F]=t[F];d.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(u,h,m,_){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const d=m+v*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let S=0,E=m;S!==v;++S,E+=4)a.copy(u[S]).applyMatrix4(y,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Hp(i){let e=new WeakMap;function t(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ih(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ic extends Jl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Er=4,rc=[.125,.215,.35,.446,.526,.582],Wi=20,mo=new ic,sc=new lt;let go=null,_o=0,vo=0,xo=!1;const Xi=(1+Math.sqrt(5))/2,Tr=1/Xi,ac=[new Y(-Xi,Tr,0),new Y(Xi,Tr,0),new Y(-Tr,0,Xi),new Y(Tr,0,Xi),new Y(0,Xi,-Tr),new Y(0,Xi,Tr),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class oc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(go,_o,vo),this._renderer.xr.enabled=xo,e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Mi,depthBuffer:!1},r=lc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wp(s)),this._blurMaterial=Xp(s,e,t)}return r}_compileMaterial(e){const t=new Hn(this._lodPlanes[0],e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,n,r){const o=new In(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(sc),f.toneMapping=0,f.autoClear=!1;const m=new co({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),_=new Hn(new ss,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(sc),v=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const S=this._cubeSize;ta(r,y*S,d>2?S:0,S,S),f.setRenderTarget(r),v&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Hn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ta(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,mo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ac[(r-s-1)%ac.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new Hn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Wi-1),v=s/_,p=isFinite(s)?1+Math.floor(f*v):Wi;p>Wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wi}`);const d=[];let y=0;for(let R=0;R<Wi;++R){const I=R/v,b=Math.exp(-I*I/2);d.push(b),R===0?y+=b:R<p&&(y+=2*b)}for(let R=0;R<d.length;R++)d[R]=d[R]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=_,h.mipInt.value=S-n;const E=this._sizeLods[r],F=3*E*(r>S-Er?r-S+Er:0),w=4*(this._cubeSize-E);ta(t,F,w,3*E,2*E),l.setRenderTarget(t),l.render(u,mo)}}function Wp(i){const e=[],t=[],n=[];let r=i;const s=i-Er+1+rc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Er?l=rc[a-i+Er-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],m=6,_=6,v=3,p=2,d=1,y=new Float32Array(v*_*m),S=new Float32Array(p*_*m),E=new Float32Array(d*_*m);for(let w=0;w<m;w++){const R=w%3*2/3-1,I=w>2?0:-1,b=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];y.set(b,v*_*w),S.set(h,p*_*w);const x=[w,w,w,w,w,w];E.set(x,d*_*w)}const F=new Un;F.setAttribute("position",new Mn(y,v)),F.setAttribute("uv",new Mn(S,p)),F.setAttribute("faceIndex",new Mn(E,d)),e.push(F),r>Er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lc(i,e,t){const n=new Fi(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Xp(i,e,t){const n=new Float32Array(Wi),r=new Y(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function cc(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function uc(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function So(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===303||l===304,f=l===301||l===302;if(c||f){let u=e.get(o);const h=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new oc(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||f&&m&&r(m)?(t===null&&(t=new oc(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Yp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&$a("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function $p(i,e,t,n){const r={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const v=h.morphAttributes[_];for(let p=0,d=v.length;p<d;p++)e.remove(v[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const _ in h)e.update(h[_],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const v=m[_];for(let p=0,d=v.length;p<d;p++)e.update(v[p],i.ARRAY_BUFFER)}}function c(u){const h=[],m=u.index,_=u.attributes.position;let v=0;if(m!==null){const y=m.array;v=m.version;for(let S=0,E=y.length;S<E;S+=3){const F=y[S+0],w=y[S+1],R=y[S+2];h.push(F,w,w,R,R,F)}}else if(_!==void 0){const y=_.array;v=_.version;for(let S=0,E=y.length/3-1;S<E;S+=3){const F=S+0,w=S+1,R=S+2;h.push(F,w,w,R,R,F)}}else return;const p=new(Al(h)?Xl:Wl)(h,1);p.version=v;const d=s.get(u);d&&e.remove(d),s.set(u,p)}function f(u){const h=s.get(u);if(h){const m=u.index;m!==null&&h.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:f}}function jp(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){i.drawElements(n,m,s,h*a),t.update(m,n,1)}function c(h,m,_){_!==0&&(i.drawElementsInstanced(n,m,s,h*a,_),t.update(m,n,_))}function f(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,h,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];t.update(p,n,1)}function u(h,m,_,v){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/a,m[d],v[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,h,0,v,0,_);let d=0;for(let y=0;y<_;y++)d+=m[y];for(let y=0;y<v.length;y++)t.update(d,n,v[y])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function Kp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Zp(i,e,t){const n=new WeakMap,r=new Vt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let h=n.get(o);if(h===void 0||h.count!==u){let b=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),_===!0&&(S=2),v===!0&&(S=3);let E=o.attributes.position.count*S,F=1;E>e.maxTextureSize&&(F=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*F*4*u),R=new Ll(w,E,F,u);R.type=1015,R.needsUpdate=!0;const I=S*4;for(let x=0;x<u;x++){const C=p[x],G=d[x],N=y[x],O=E*F*4*x;for(let W=0;W<C.count;W++){const z=W*I;m===!0&&(r.fromBufferAttribute(C,W),w[O+z+0]=r.x,w[O+z+1]=r.y,w[O+z+2]=r.z,w[O+z+3]=0),_===!0&&(r.fromBufferAttribute(G,W),w[O+z+4]=r.x,w[O+z+5]=r.y,w[O+z+6]=r.z,w[O+z+7]=0),v===!0&&(r.fromBufferAttribute(N,W),w[O+z+8]=r.x,w[O+z+9]=r.y,w[O+z+10]=r.z,w[O+z+11]=N.itemSize===4?r.w:1)}}h={count:u,texture:R,size:new et(E,F)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Jp(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class fc extends hn{constructor(e,t,n,r,s,a,o,l,c,f=1026){if(f!==1026&&f!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===1026&&(n=1014),n===void 0&&f===1027&&(n=1020),super(null,r,s,a,o,l,f,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hc=new hn,dc=new fc(1,1),pc=new Ll,mc=new vh,gc=new tc,_c=[],vc=[],xc=new Float32Array(16),Sc=new Float32Array(9),Mc=new Float32Array(4);function br(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=_c[r];if(s===void 0&&(s=new Float32Array(r),_c[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function na(i,e){let t=vc[e];t===void 0&&(t=new Int32Array(e),vc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function im(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Ht(t,n))return;Mc.set(n),i.uniformMatrix2fv(this.addr,!1,Mc),Wt(t,n)}}function rm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Ht(t,n))return;Sc.set(n),i.uniformMatrix3fv(this.addr,!1,Sc),Wt(t,n)}}function sm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Ht(t,n))return;xc.set(n),i.uniformMatrix4fv(this.addr,!1,xc),Wt(t,n)}}function am(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function pm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(dc.compareFunction=515,s=dc):s=hc,t.setTexture2D(e||s,r)}function mm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||mc,r)}function gm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||gc,r)}function _m(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||pc,r)}function vm(i){switch(i){case 5126:return Qp;case 35664:return em;case 35665:return tm;case 35666:return nm;case 35674:return im;case 35675:return rm;case 35676:return sm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return um;case 36294:return fm;case 36295:return hm;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return _m}}function xm(i,e){i.uniform1fv(this.addr,e)}function Sm(i,e){const t=br(e,this.size,2);i.uniform2fv(this.addr,t)}function Mm(i,e){const t=br(e,this.size,3);i.uniform3fv(this.addr,t)}function ym(i,e){const t=br(e,this.size,4);i.uniform4fv(this.addr,t)}function Em(i,e){const t=br(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Tm(i,e){const t=br(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bm(i,e){const t=br(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Am(i,e){i.uniform1iv(this.addr,e)}function wm(i,e){i.uniform2iv(this.addr,e)}function Cm(i,e){i.uniform3iv(this.addr,e)}function Rm(i,e){i.uniform4iv(this.addr,e)}function Pm(i,e){i.uniform1uiv(this.addr,e)}function Lm(i,e){i.uniform2uiv(this.addr,e)}function Dm(i,e){i.uniform3uiv(this.addr,e)}function Um(i,e){i.uniform4uiv(this.addr,e)}function Im(i,e,t){const n=this.cache,r=e.length,s=na(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||hc,s[a])}function Nm(i,e,t){const n=this.cache,r=e.length,s=na(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||mc,s[a])}function Fm(i,e,t){const n=this.cache,r=e.length,s=na(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||gc,s[a])}function Bm(i,e,t){const n=this.cache,r=e.length,s=na(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||pc,s[a])}function Om(i){switch(i){case 5126:return xm;case 35664:return Sm;case 35665:return Mm;case 35666:return ym;case 35674:return Em;case 35675:return Tm;case 35676:return bm;case 5124:case 35670:return Am;case 35667:case 35671:return wm;case 35668:case 35672:return Cm;case 35669:case 35673:return Rm;case 5125:return Pm;case 36294:return Lm;case 36295:return Dm;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Bm}}class zm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vm(t.type)}}class Gm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Om(t.type)}}class Vm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function yc(i,e){i.seq.push(e),i.map[e.id]=e}function km(i,e,t){const n=i.name,r=n.length;for(Mo.lastIndex=0;;){const s=Mo.exec(n),a=Mo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){yc(t,c===void 0?new zm(o,i,e):new Gm(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Vm(o),yc(t,u)),t=u}}}class ia{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);km(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Ec(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Hm=37297;let Wm=0;function Xm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function qm(i){const e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(i);let n;switch(e===t?n="":e===Ls&&t===Ps?n="LinearDisplayP3ToLinearSRGB":e===Ps&&t===Ls&&(n="LinearSRGBToLinearDisplayP3"),i){case Mi:case Cs:return[n,"LinearTransferOETF"];case Zn:case Ha:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Tc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Xm(i.getShaderSource(e),a)}else return r}function Ym(i,e){const t=qm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $m(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function Km(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function as(i){return i!==""}function bc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ac(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function yo(i){return i.replace(Jm,eg)}const Qm=new Map;function eg(i,e){let t=nt[e];if(t===void 0){const n=Qm.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yo(t)}const tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(i){return i.replace(tg,ng)}function ng(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ig(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function rg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function ag(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function og(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lg(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ig(t),c=rg(t),f=sg(t),u=ag(t),h=og(t),m=jm(t),_=Km(s),v=r.createProgram();let p,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(as).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(as).join(`
`),d.length>0&&(d+=`
`)):(p=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),d=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?nt.tonemapping_pars_fragment:"",t.toneMapping!==0?$m("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Ym("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(as).join(`
`)),a=yo(a),a=bc(a,t),a=Ac(a,t),o=yo(o),o=bc(o,t),o=Ac(o,t),a=wc(a),o=wc(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=y+p+a,E=y+d+o,F=Ec(r,r.VERTEX_SHADER,S),w=Ec(r,r.FRAGMENT_SHADER,E);r.attachShader(v,F),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(C){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(v).trim(),N=r.getShaderInfoLog(F).trim(),O=r.getShaderInfoLog(w).trim();let W=!0,z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,F,w);else{const Z=Tc(r,F,"vertex"),K=Tc(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+Z+`
`+K)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(N===""||O==="")&&(z=!1);z&&(C.diagnostics={runnable:W,programLog:G,vertexShader:{log:N,prefix:p},fragmentShader:{log:O,prefix:d}})}r.deleteShader(F),r.deleteShader(w),I=new ia(r,v),b=Zm(r,v)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,Hm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=w,this}let cg=0;class ug{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fg(e),t.set(e,n)),n}}class fg{constructor(e){this.id=cg++,this.code=e,this.usedTimes=0}}function hg(i,e,t,n,r,s,a){const o=new Fl,l=new ug,c=new Set,f=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,x,C,G,N){const O=G.fog,W=N.geometry,z=b.isMeshStandardMaterial?G.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),K=Z&&Z.mapping===306?Z.image.height:null,fe=_[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=ce!==void 0?ce.length:0;let Te=0;W.morphAttributes.position!==void 0&&(Te=1),W.morphAttributes.normal!==void 0&&(Te=2),W.morphAttributes.color!==void 0&&(Te=3);let he,Q,se,me;if(fe){const ht=ei[fe];he=ht.vertexShader,Q=ht.fragmentShader}else he=b.vertexShader,Q=b.fragmentShader,l.update(b),se=l.getVertexShaderID(b),me=l.getFragmentShaderID(b);const ae=i.getRenderTarget(),ee=N.isInstancedMesh===!0,ue=N.isBatchedMesh===!0,xe=!!b.map,oe=!!b.matcap,D=!!Z,Oe=!!b.aoMap,Be=!!b.lightMap,Fe=!!b.bumpMap,ye=!!b.normalMap,it=!!b.displacementMap,He=!!b.emissiveMap,Ve=!!b.metalnessMap,U=!!b.roughnessMap,T=b.anisotropy>0,q=b.clearcoat>0,le=b.dispersion>0,te=b.iridescence>0,X=b.sheen>0,Ee=b.transmission>0,ve=T&&!!b.anisotropyMap,Re=q&&!!b.clearcoatMap,Ke=q&&!!b.clearcoatNormalMap,_e=q&&!!b.clearcoatRoughnessMap,Pe=te&&!!b.iridescenceMap,Ze=te&&!!b.iridescenceThicknessMap,Ge=X&&!!b.sheenColorMap,Ae=X&&!!b.sheenRoughnessMap,We=!!b.specularMap,Qe=!!b.specularColorMap,xt=!!b.specularIntensityMap,V=Ee&&!!b.transmissionMap,Se=Ee&&!!b.thicknessMap,re=!!b.gradientMap,ne=!!b.alphaMap,be=b.alphaTest>0,qe=!!b.alphaHash,ot=!!b.extensions;let It=0;b.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(It=i.toneMapping);const $t={shaderID:fe,shaderType:b.type,shaderName:b.name,vertexShader:he,fragmentShader:Q,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:ue,batchingColor:ue&&N._colorsTexture!==null,instancing:ee,instancingColor:ee&&N.instanceColor!==null,instancingMorph:ee&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Mi,alphaToCoverage:!!b.alphaToCoverage,map:xe,matcap:oe,envMap:D,envMapMode:D&&Z.mapping,envMapCubeUVHeight:K,aoMap:Oe,lightMap:Be,bumpMap:Fe,normalMap:ye,displacementMap:h&&it,emissiveMap:He,normalMapObjectSpace:ye&&b.normalMapType===1,normalMapTangentSpace:ye&&b.normalMapType===0,metalnessMap:Ve,roughnessMap:U,anisotropy:T,anisotropyMap:ve,clearcoat:q,clearcoatMap:Re,clearcoatNormalMap:Ke,clearcoatRoughnessMap:_e,dispersion:le,iridescence:te,iridescenceMap:Pe,iridescenceThicknessMap:Ze,sheen:X,sheenColorMap:Ge,sheenRoughnessMap:Ae,specularMap:We,specularColorMap:Qe,specularIntensityMap:xt,transmission:Ee,transmissionMap:V,thicknessMap:Se,gradientMap:re,opaque:b.transparent===!1&&b.blending===1&&b.alphaToCoverage===!1,alphaMap:ne,alphaTest:be,alphaHash:qe,combine:b.combine,mapUv:xe&&v(b.map.channel),aoMapUv:Oe&&v(b.aoMap.channel),lightMapUv:Be&&v(b.lightMap.channel),bumpMapUv:Fe&&v(b.bumpMap.channel),normalMapUv:ye&&v(b.normalMap.channel),displacementMapUv:it&&v(b.displacementMap.channel),emissiveMapUv:He&&v(b.emissiveMap.channel),metalnessMapUv:Ve&&v(b.metalnessMap.channel),roughnessMapUv:U&&v(b.roughnessMap.channel),anisotropyMapUv:ve&&v(b.anisotropyMap.channel),clearcoatMapUv:Re&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(b.sheenRoughnessMap.channel),specularMapUv:We&&v(b.specularMap.channel),specularColorMapUv:Qe&&v(b.specularColorMap.channel),specularIntensityMapUv:xt&&v(b.specularIntensityMap.channel),transmissionMapUv:V&&v(b.transmissionMap.channel),thicknessMapUv:Se&&v(b.thicknessMap.channel),alphaMapUv:ne&&v(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ye||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(xe||ne),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Te,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:xe&&b.map.isVideoTexture===!0&&_t.getTransfer(b.map.colorSpace)===At,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===2,flipSided:b.side===1,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ot&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&b.extensions.multiDraw===!0||ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function d(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)x.push(C),x.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(y(x,b),S(x,b),x.push(i.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function y(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function S(b,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.doubleSided&&o.enable(10),x.flipSided&&o.enable(11),x.useDepthPacking&&o.enable(12),x.dithering&&o.enable(13),x.transmission&&o.enable(14),x.sheen&&o.enable(15),x.opaque&&o.enable(16),x.pointsUvs&&o.enable(17),x.decodeVideoTexture&&o.enable(18),x.alphaToCoverage&&o.enable(19),b.push(o.mask)}function E(b){const x=_[b.type];let C;if(x){const G=ei[x];C=Ph.clone(G.uniforms)}else C=b.uniforms;return C}function F(b,x){let C;for(let G=0,N=f.length;G<N;G++){const O=f[G];if(O.cacheKey===x){C=O,++C.usedTimes;break}}return C===void 0&&(C=new lg(i,x,b,s),f.push(C)),C}function w(b){if(--b.usedTimes===0){const x=f.indexOf(b);f[x]=f[f.length-1],f.pop(),b.destroy()}}function R(b){l.remove(b)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:F,releaseProgram:w,releaseShaderCache:R,programs:f,dispose:I}}function dg(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function pg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Rc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u,h,m,_,v,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:h,material:m,groupOrder:_,renderOrder:u.renderOrder,z:v,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=h,d.material=m,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=v,d.group=p),e++,d}function o(u,h,m,_,v,p){const d=a(u,h,m,_,v,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(u,h,m,_,v,p){const d=a(u,h,m,_,v,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,h){t.length>1&&t.sort(u||pg),n.length>1&&n.sort(h||Rc),r.length>1&&r.sort(h||Rc)}function f(){for(let u=e,h=i.length;u<h;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function mg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Pc,i.set(n,[a])):r>=s.length?(a=new Pc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function gg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new lt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[e.id]=t,t}}}function _g(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let vg=0;function xg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Sg(i){const e=new gg,t=_g(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const r=new Y,s=new Dt,a=new Dt;function o(c){let f=0,u=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,_=0,v=0,p=0,d=0,y=0,S=0,E=0,F=0,w=0,R=0;c.sort(xg);for(let b=0,x=c.length;b<x;b++){const C=c[b],G=C.color,N=C.intensity,O=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=G.r*N,u+=G.g*N,h+=G.b*N;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],N);R++}else if(C.isDirectionalLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Z=C.shadow,K=t.get(C);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=C.shadow.matrix,y++}n.directional[m]=z,m++}else if(C.isSpotLight){const z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(G).multiplyScalar(N),z.distance=O,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[v]=z;const Z=C.shadow;if(C.map&&(n.spotLightMap[F]=C.map,F++,Z.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[v]=Z.matrix,C.castShadow){const K=t.get(C);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,n.spotShadow[v]=K,n.spotShadowMap[v]=W,E++}v++}else if(C.isRectAreaLight){const z=e.get(C);z.color.copy(G).multiplyScalar(N),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=z,p++}else if(C.isPointLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const Z=C.shadow,K=t.get(C);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,n.pointShadow[_]=K,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=C.shadow.matrix,S++}n.point[_]=z,_++}else if(C.isHemisphereLight){const z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(N),z.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[d]=z,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;const I=n.hash;(I.directionalLength!==m||I.pointLength!==_||I.spotLength!==v||I.rectAreaLength!==p||I.hemiLength!==d||I.numDirectionalShadows!==y||I.numPointShadows!==S||I.numSpotShadows!==E||I.numSpotMaps!==F||I.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=E+F-w,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,I.directionalLength=m,I.pointLength=_,I.spotLength=v,I.rectAreaLength=p,I.hemiLength=d,I.numDirectionalShadows=y,I.numPointShadows=S,I.numSpotShadows=E,I.numSpotMaps=F,I.numLightProbes=R,n.version=vg++)}function l(c,f){let u=0,h=0,m=0,_=0,v=0;const p=f.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const S=c[d];if(S.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),u++}else if(S.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function Lc(i){const e=new Sg(i),t=[],n=[];function r(f){c.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function o(){e.setup(t)}function l(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Mg(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Lc(i),e.set(r,[o])):s>=a.length?(o=new Lc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class yg extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Eg extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ag(i,e,t){let n=new po;const r=new et,s=new et,a=new Vt,o=new yg({depthPacking:3201}),l=new Eg,c={},f=t.maxTextureSize,u={0:1,1:0,2:2},h=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Tg,fragmentShader:bg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Un;_.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Hn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let d=this.type;this.render=function(w,R,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const b=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),G=i.state;G.setBlending(0),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const N=d!==3&&this.type===3,O=d===3&&this.type!==3;for(let W=0,z=w.length;W<z;W++){const Z=w[W],K=Z.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const fe=K.getFrameExtents();if(r.multiply(fe),s.copy(K.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/fe.x),r.x=s.x*fe.x,K.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/fe.y),r.y=s.y*fe.y,K.mapSize.y=s.y)),K.map===null||N===!0||O===!0){const pe=this.type!==3?{minFilter:1003,magFilter:1003}:{};K.map!==null&&K.map.dispose(),K.map=new Fi(r.x,r.y,pe),K.map.texture.name=Z.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const ce=K.getViewportCount();for(let pe=0;pe<ce;pe++){const Te=K.getViewport(pe);a.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),G.viewport(a),K.updateMatrices(Z,pe),n=K.getFrustum(),E(R,I,K.camera,Z,this.type)}K.isPointLightShadow!==!0&&this.type===3&&y(K,I),K.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(b,x,C)};function y(w,R){const I=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Fi(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,I,h,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,I,m,v,null)}function S(w,R,I,b){let x=null;const C=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)x=C;else if(x=I.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=x.uuid,N=R.uuid;let O=c[G];O===void 0&&(O={},c[G]=O);let W=O[N];W===void 0&&(W=x.clone(),O[N]=W,R.addEventListener("dispose",F)),x=W}if(x.visible=R.visible,x.wireframe=R.wireframe,b===3?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:u[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=i.properties.get(x);G.light=I}return x}function E(w,R,I,b,x){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===3)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const N=e.update(w),O=w.material;if(Array.isArray(O)){const W=N.groups;for(let z=0,Z=W.length;z<Z;z++){const K=W[z],fe=O[K.materialIndex];if(fe&&fe.visible){const ce=S(w,fe,b,x);w.onBeforeShadow(i,w,R,I,N,ce,K),i.renderBufferDirect(I,null,N,ce,w,K),w.onAfterShadow(i,w,R,I,N,ce,K)}}}else if(O.visible){const W=S(w,O,b,x);w.onBeforeShadow(i,w,R,I,N,W,null),i.renderBufferDirect(I,null,N,W,w,null),w.onAfterShadow(i,w,R,I,N,W,null)}}const G=w.children;for(let N=0,O=G.length;N<O;N++)E(G[N],R,I,b,x)}function F(w){w.target.removeEventListener("dispose",F);for(const I in c){const b=c[I],x=w.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}function wg(i){function e(){let V=!1;const Se=new Vt;let re=null;const ne=new Vt(0,0,0,0);return{setMask:function(be){re!==be&&!V&&(i.colorMask(be,be,be,be),re=be)},setLocked:function(be){V=be},setClear:function(be,qe,ot,It,$t){$t===!0&&(be*=It,qe*=It,ot*=It),Se.set(be,qe,ot,It),ne.equals(Se)===!1&&(i.clearColor(be,qe,ot,It),ne.copy(Se))},reset:function(){V=!1,re=null,ne.set(-1,0,0,0)}}}function t(){let V=!1,Se=null,re=null,ne=null;return{setTest:function(be){be?me(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(be){Se!==be&&!V&&(i.depthMask(be),Se=be)},setFunc:function(be){if(re!==be){switch(be){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=be}},setLocked:function(be){V=be},setClear:function(be){ne!==be&&(i.clearDepth(be),ne=be)},reset:function(){V=!1,Se=null,re=null,ne=null}}}function n(){let V=!1,Se=null,re=null,ne=null,be=null,qe=null,ot=null,It=null,$t=null;return{setTest:function(ht){V||(ht?me(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(ht){Se!==ht&&!V&&(i.stencilMask(ht),Se=ht)},setFunc:function(ht,Yn,Jt){(re!==ht||ne!==Yn||be!==Jt)&&(i.stencilFunc(ht,Yn,Jt),re=ht,ne=Yn,be=Jt)},setOp:function(ht,Yn,Jt){(qe!==ht||ot!==Yn||It!==Jt)&&(i.stencilOp(ht,Yn,Jt),qe=ht,ot=Yn,It=Jt)},setLocked:function(ht){V=ht},setClear:function(ht){$t!==ht&&(i.clearStencil(ht),$t=ht)},reset:function(){V=!1,Se=null,re=null,ne=null,be=null,qe=null,ot=null,It=null,$t=null}}}const r=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},f={},u=new WeakMap,h=[],m=null,_=!1,v=null,p=null,d=null,y=null,S=null,E=null,F=null,w=new lt(0,0,0),R=0,I=!1,b=null,x=null,C=null,G=null,N=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,z=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=z>=1):Z.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=z>=2);let K=null,fe={};const ce=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),Te=new Vt().fromArray(ce),he=new Vt().fromArray(pe);function Q(V,Se,re,ne){const be=new Uint8Array(4),qe=i.createTexture();i.bindTexture(V,qe),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<re;ot++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(Se+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return qe}const se={};se[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),se[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),se[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),me(i.DEPTH_TEST),s.setFunc(3),Fe(!1),ye(1),me(i.CULL_FACE),Oe(0);function me(V){c[V]!==!0&&(i.enable(V),c[V]=!0)}function ae(V){c[V]!==!1&&(i.disable(V),c[V]=!1)}function ee(V,Se){return f[V]!==Se?(i.bindFramebuffer(V,Se),f[V]=Se,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Se),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function ue(V,Se){let re=h,ne=!1;if(V){re=u.get(Se),re===void 0&&(re=[],u.set(Se,re));const be=V.textures;if(re.length!==be.length||re[0]!==i.COLOR_ATTACHMENT0){for(let qe=0,ot=be.length;qe<ot;qe++)re[qe]=i.COLOR_ATTACHMENT0+qe;re.length=be.length,ne=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,ne=!0);ne&&i.drawBuffers(re)}function xe(V){return m!==V?(i.useProgram(V),m=V,!0):!1}const oe={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};oe[103]=i.MIN,oe[104]=i.MAX;const D={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function Oe(V,Se,re,ne,be,qe,ot,It,$t,ht){if(V===0){_===!0&&(ae(i.BLEND),_=!1);return}if(_===!1&&(me(i.BLEND),_=!0),V!==5){if(V!==v||ht!==I){if((p!==100||S!==100)&&(i.blendEquation(i.FUNC_ADD),p=100,S=100),ht)switch(V){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}d=null,y=null,E=null,F=null,w.set(0,0,0),R=0,v=V,I=ht}return}be=be||Se,qe=qe||re,ot=ot||ne,(Se!==p||be!==S)&&(i.blendEquationSeparate(oe[Se],oe[be]),p=Se,S=be),(re!==d||ne!==y||qe!==E||ot!==F)&&(i.blendFuncSeparate(D[re],D[ne],D[qe],D[ot]),d=re,y=ne,E=qe,F=ot),(It.equals(w)===!1||$t!==R)&&(i.blendColor(It.r,It.g,It.b,$t),w.copy(It),R=$t),v=V,I=!1}function Be(V,Se){V.side===2?ae(i.CULL_FACE):me(i.CULL_FACE);let re=V.side===1;Se&&(re=!re),Fe(re),V.blending===1&&V.transparent===!1?Oe(0):Oe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),s.setFunc(V.depthFunc),s.setTest(V.depthTest),s.setMask(V.depthWrite),r.setMask(V.colorWrite);const ne=V.stencilWrite;a.setTest(ne),ne&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),He(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(V){b!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),b=V)}function ye(V){V!==0?(me(i.CULL_FACE),V!==x&&(V===1?i.cullFace(i.BACK):V===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),x=V}function it(V){V!==C&&(W&&i.lineWidth(V),C=V)}function He(V,Se,re){V?(me(i.POLYGON_OFFSET_FILL),(G!==Se||N!==re)&&(i.polygonOffset(Se,re),G=Se,N=re)):ae(i.POLYGON_OFFSET_FILL)}function Ve(V){V?me(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function U(V){V===void 0&&(V=i.TEXTURE0+O-1),K!==V&&(i.activeTexture(V),K=V)}function T(V,Se,re){re===void 0&&(K===null?re=i.TEXTURE0+O-1:re=K);let ne=fe[re];ne===void 0&&(ne={type:void 0,texture:void 0},fe[re]=ne),(ne.type!==V||ne.texture!==Se)&&(K!==re&&(i.activeTexture(re),K=re),i.bindTexture(V,Se||se[V]),ne.type=V,ne.texture=Se)}function q(){const V=fe[K];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function le(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ge(V){Te.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Te.copy(V))}function Ae(V){he.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),he.copy(V))}function We(V,Se){let re=l.get(Se);re===void 0&&(re=new WeakMap,l.set(Se,re));let ne=re.get(V);ne===void 0&&(ne=i.getUniformBlockIndex(Se,V.name),re.set(V,ne))}function Qe(V,Se){const ne=l.get(Se).get(V);o.get(Se)!==ne&&(i.uniformBlockBinding(Se,ne,V.__bindingPointIndex),o.set(Se,ne))}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},K=null,fe={},f={},u=new WeakMap,h=[],m=null,_=!1,v=null,p=null,d=null,y=null,S=null,E=null,F=null,w=new lt(0,0,0),R=0,I=!1,b=null,x=null,C=null,G=null,N=null,Te.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:me,disable:ae,bindFramebuffer:ee,drawBuffers:ue,useProgram:xe,setBlending:Oe,setMaterial:Be,setFlipSided:Fe,setCullFace:ye,setLineWidth:it,setPolygonOffset:He,setScissorTest:Ve,activeTexture:U,bindTexture:T,unbindTexture:q,compressedTexImage2D:le,compressedTexImage3D:te,texImage2D:Pe,texImage3D:Ze,updateUBOMapping:We,uniformBlockBinding:Qe,texStorage2D:Ke,texStorage3D:_e,texSubImage2D:X,texSubImage3D:Ee,compressedTexSubImage2D:ve,compressedTexSubImage3D:Re,scissor:Ge,viewport:Ae,reset:xt}}function Dc(i,e,t,n){const r=Cg(n);switch(t){case 1021:return i*e;case 1024:return i*e;case 1025:return i*e*2;case 1028:return i*e/r.components*r.byteLength;case 1029:return i*e/r.components*r.byteLength;case 1030:return i*e*2/r.components*r.byteLength;case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case 1023:return i*e*4/r.components*r.byteLength;case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cg(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Rg(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,f=new WeakMap;let u;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(U,T){return m?new OffscreenCanvas(U,T):Ds("canvas")}function v(U,T,q){let le=1;const te=Ve(U);if((te.width>q||te.height>q)&&(le=q/Math.max(te.width,te.height)),le<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const X=Math.floor(le*te.width),Ee=Math.floor(le*te.height);u===void 0&&(u=_(X,Ee));const ve=T?_(X,Ee):u;return ve.width=X,ve.height=Ee,ve.getContext("2d").drawImage(U,0,0,X,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+X+"x"+Ee+")."),ve}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),U;return U}function p(U){return U.generateMipmaps&&U.minFilter!==1003&&U.minFilter!==1006}function d(U){i.generateMipmap(U)}function y(U,T,q,le,te=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let X=T;if(T===i.RED&&(q===i.FLOAT&&(X=i.R32F),q===i.HALF_FLOAT&&(X=i.R16F),q===i.UNSIGNED_BYTE&&(X=i.R8)),T===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(X=i.R8UI),q===i.UNSIGNED_SHORT&&(X=i.R16UI),q===i.UNSIGNED_INT&&(X=i.R32UI),q===i.BYTE&&(X=i.R8I),q===i.SHORT&&(X=i.R16I),q===i.INT&&(X=i.R32I)),T===i.RG&&(q===i.FLOAT&&(X=i.RG32F),q===i.HALF_FLOAT&&(X=i.RG16F),q===i.UNSIGNED_BYTE&&(X=i.RG8)),T===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(X=i.RG8UI),q===i.UNSIGNED_SHORT&&(X=i.RG16UI),q===i.UNSIGNED_INT&&(X=i.RG32UI),q===i.BYTE&&(X=i.RG8I),q===i.SHORT&&(X=i.RG16I),q===i.INT&&(X=i.RG32I)),T===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),T===i.RGBA){const Ee=te?Rs:_t.getTransfer(le);q===i.FLOAT&&(X=i.RGBA32F),q===i.HALF_FLOAT&&(X=i.RGBA16F),q===i.UNSIGNED_BYTE&&(X=Ee===At?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(U,T){let q;return U?T===null||T===1014||T===1020?q=i.DEPTH24_STENCIL8:T===1015?q=i.DEPTH32F_STENCIL8:T===1012&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===1014||T===1020?q=i.DEPTH_COMPONENT24:T===1015?q=i.DEPTH_COMPONENT32F:T===1012&&(q=i.DEPTH_COMPONENT16),q}function E(U,T){return p(U)===!0||U.isFramebufferTexture&&U.minFilter!==1003&&U.minFilter!==1006?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function F(U){const T=U.target;T.removeEventListener("dispose",F),R(T),T.isVideoTexture&&f.delete(T)}function w(U){const T=U.target;T.removeEventListener("dispose",w),b(T)}function R(U){const T=n.get(U);if(T.__webglInit===void 0)return;const q=U.source,le=h.get(q);if(le){const te=le[T.__cacheKey];te.usedTimes--,te.usedTimes===0&&I(U),Object.keys(le).length===0&&h.delete(q)}n.remove(U)}function I(U){const T=n.get(U);i.deleteTexture(T.__webglTexture);const q=U.source,le=h.get(q);delete le[T.__cacheKey],a.memory.textures--}function b(U){const T=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(T.__webglFramebuffer[le]))for(let te=0;te<T.__webglFramebuffer[le].length;te++)i.deleteFramebuffer(T.__webglFramebuffer[le][te]);else i.deleteFramebuffer(T.__webglFramebuffer[le]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[le])}else{if(Array.isArray(T.__webglFramebuffer))for(let le=0;le<T.__webglFramebuffer.length;le++)i.deleteFramebuffer(T.__webglFramebuffer[le]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let le=0;le<T.__webglColorRenderbuffer.length;le++)T.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[le]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=U.textures;for(let le=0,te=q.length;le<te;le++){const X=n.get(q[le]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(q[le])}n.remove(U)}let x=0;function C(){x=0}function G(){const U=x;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),x+=1,U}function N(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function O(U,T){const q=n.get(U);if(U.isVideoTexture&&it(U),U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){const le=U.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(q,U,T);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+T)}function W(U,T){const q=n.get(U);if(U.version>0&&q.__version!==U.version){he(q,U,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+T)}function z(U,T){const q=n.get(U);if(U.version>0&&q.__version!==U.version){he(q,U,T);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+T)}function Z(U,T){const q=n.get(U);if(U.version>0&&q.__version!==U.version){Q(q,U,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+T)}const K={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},fe={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},ce={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function pe(U,T){if(T.type===1015&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===1006||T.magFilter===1007||T.magFilter===1005||T.magFilter===1008||T.minFilter===1006||T.minFilter===1007||T.minFilter===1005||T.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,K[T.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,K[T.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,K[T.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,fe[T.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,fe[T.minFilter]),T.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,ce[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===1003||T.minFilter!==1005&&T.minFilter!==1008||T.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Te(U,T){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",F));const le=T.source;let te=h.get(le);te===void 0&&(te={},h.set(le,te));const X=N(T);if(X!==U.__cacheKey){te[X]===void 0&&(te[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),te[X].usedTimes++;const Ee=te[U.__cacheKey];Ee!==void 0&&(te[U.__cacheKey].usedTimes--,Ee.usedTimes===0&&I(T)),U.__cacheKey=X,U.__webglTexture=te[X].texture}return q}function he(U,T,q){let le=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(le=i.TEXTURE_3D);const te=Te(U,T),X=T.source;t.bindTexture(le,U.__webglTexture,i.TEXTURE0+q);const Ee=n.get(X);if(X.version!==Ee.__version||te===!0){t.activeTexture(i.TEXTURE0+q);const ve=_t.getPrimaries(_t.workingColorSpace),Re=T.colorSpace===Si?null:_t.getPrimaries(T.colorSpace),Ke=T.colorSpace===Si||ve===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let _e=v(T.image,!1,r.maxTextureSize);_e=He(T,_e);const Pe=s.convert(T.format,T.colorSpace),Ze=s.convert(T.type);let Ge=y(T.internalFormat,Pe,Ze,T.colorSpace,T.isVideoTexture);pe(le,T);let Ae;const We=T.mipmaps,Qe=T.isVideoTexture!==!0,xt=Ee.__version===void 0||te===!0,V=X.dataReady,Se=E(T,_e);if(T.isDepthTexture)Ge=S(T.format===1027,T.type),xt&&(Qe?t.texStorage2D(i.TEXTURE_2D,1,Ge,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,Ge,_e.width,_e.height,0,Pe,Ze,null));else if(T.isDataTexture)if(We.length>0){Qe&&xt&&t.texStorage2D(i.TEXTURE_2D,Se,Ge,We[0].width,We[0].height);for(let re=0,ne=We.length;re<ne;re++)Ae=We[re],Qe?V&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ae.width,Ae.height,Pe,Ze,Ae.data):t.texImage2D(i.TEXTURE_2D,re,Ge,Ae.width,Ae.height,0,Pe,Ze,Ae.data);T.generateMipmaps=!1}else Qe?(xt&&t.texStorage2D(i.TEXTURE_2D,Se,Ge,_e.width,_e.height),V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,Pe,Ze,_e.data)):t.texImage2D(i.TEXTURE_2D,0,Ge,_e.width,_e.height,0,Pe,Ze,_e.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Qe&&xt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ge,We[0].width,We[0].height,_e.depth);for(let re=0,ne=We.length;re<ne;re++)if(Ae=We[re],T.format!==1023)if(Pe!==null)if(Qe){if(V)if(T.layerUpdates.size>0){const be=Dc(Ae.width,Ae.height,T.format,T.type);for(const qe of T.layerUpdates){const ot=Ae.data.subarray(qe*be/Ae.data.BYTES_PER_ELEMENT,(qe+1)*be/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,qe,Ae.width,Ae.height,1,Pe,ot,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Ae.width,Ae.height,_e.depth,Pe,Ae.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Ge,Ae.width,Ae.height,_e.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Ae.width,Ae.height,_e.depth,Pe,Ze,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Ge,Ae.width,Ae.height,_e.depth,0,Pe,Ze,Ae.data)}else{Qe&&xt&&t.texStorage2D(i.TEXTURE_2D,Se,Ge,We[0].width,We[0].height);for(let re=0,ne=We.length;re<ne;re++)Ae=We[re],T.format!==1023?Pe!==null?Qe?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,Ae.width,Ae.height,Pe,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Ge,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?V&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ae.width,Ae.height,Pe,Ze,Ae.data):t.texImage2D(i.TEXTURE_2D,re,Ge,Ae.width,Ae.height,0,Pe,Ze,Ae.data)}else if(T.isDataArrayTexture)if(Qe){if(xt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ge,_e.width,_e.height,_e.depth),V)if(T.layerUpdates.size>0){const re=Dc(_e.width,_e.height,T.format,T.type);for(const ne of T.layerUpdates){const be=_e.data.subarray(ne*re/_e.data.BYTES_PER_ELEMENT,(ne+1)*re/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,_e.width,_e.height,1,Pe,Ze,be)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Pe,Ze,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,_e.width,_e.height,_e.depth,0,Pe,Ze,_e.data);else if(T.isData3DTexture)Qe?(xt&&t.texStorage3D(i.TEXTURE_3D,Se,Ge,_e.width,_e.height,_e.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Pe,Ze,_e.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,_e.width,_e.height,_e.depth,0,Pe,Ze,_e.data);else if(T.isFramebufferTexture){if(xt)if(Qe)t.texStorage2D(i.TEXTURE_2D,Se,Ge,_e.width,_e.height);else{let re=_e.width,ne=_e.height;for(let be=0;be<Se;be++)t.texImage2D(i.TEXTURE_2D,be,Ge,re,ne,0,Pe,Ze,null),re>>=1,ne>>=1}}else if(We.length>0){if(Qe&&xt){const re=Ve(We[0]);t.texStorage2D(i.TEXTURE_2D,Se,Ge,re.width,re.height)}for(let re=0,ne=We.length;re<ne;re++)Ae=We[re],Qe?V&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Pe,Ze,Ae):t.texImage2D(i.TEXTURE_2D,re,Ge,Pe,Ze,Ae);T.generateMipmaps=!1}else if(Qe){if(xt){const re=Ve(_e);t.texStorage2D(i.TEXTURE_2D,Se,Ge,re.width,re.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,Ze,_e)}else t.texImage2D(i.TEXTURE_2D,0,Ge,Pe,Ze,_e);p(T)&&d(le),Ee.__version=X.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Q(U,T,q){if(T.image.length!==6)return;const le=Te(U,T),te=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+q);const X=n.get(te);if(te.version!==X.__version||le===!0){t.activeTexture(i.TEXTURE0+q);const Ee=_t.getPrimaries(_t.workingColorSpace),ve=T.colorSpace===Si?null:_t.getPrimaries(T.colorSpace),Re=T.colorSpace===Si||Ee===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ke=T.isCompressedTexture||T.image[0].isCompressedTexture,_e=T.image[0]&&T.image[0].isDataTexture,Pe=[];for(let ne=0;ne<6;ne++)!Ke&&!_e?Pe[ne]=v(T.image[ne],!0,r.maxCubemapSize):Pe[ne]=_e?T.image[ne].image:T.image[ne],Pe[ne]=He(T,Pe[ne]);const Ze=Pe[0],Ge=s.convert(T.format,T.colorSpace),Ae=s.convert(T.type),We=y(T.internalFormat,Ge,Ae,T.colorSpace),Qe=T.isVideoTexture!==!0,xt=X.__version===void 0||le===!0,V=te.dataReady;let Se=E(T,Ze);pe(i.TEXTURE_CUBE_MAP,T);let re;if(Ke){Qe&&xt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,We,Ze.width,Ze.height);for(let ne=0;ne<6;ne++){re=Pe[ne].mipmaps;for(let be=0;be<re.length;be++){const qe=re[be];T.format!==1023?Ge!==null?Qe?V&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,0,0,qe.width,qe.height,Ge,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,We,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,0,0,qe.width,qe.height,Ge,Ae,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,We,qe.width,qe.height,0,Ge,Ae,qe.data)}}}else{if(re=T.mipmaps,Qe&&xt){re.length>0&&Se++;const ne=Ve(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,We,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(_e){Qe?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Pe[ne].width,Pe[ne].height,Ge,Ae,Pe[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,We,Pe[ne].width,Pe[ne].height,0,Ge,Ae,Pe[ne].data);for(let be=0;be<re.length;be++){const ot=re[be].image[ne].image;Qe?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,0,0,ot.width,ot.height,Ge,Ae,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,We,ot.width,ot.height,0,Ge,Ae,ot.data)}}else{Qe?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ge,Ae,Pe[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,We,Ge,Ae,Pe[ne]);for(let be=0;be<re.length;be++){const qe=re[be];Qe?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,0,0,Ge,Ae,qe.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,We,Ge,Ae,qe.image[ne])}}}p(T)&&d(i.TEXTURE_CUBE_MAP),X.__version=te.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function se(U,T,q,le,te,X){const Ee=s.convert(q.format,q.colorSpace),ve=s.convert(q.type),Re=y(q.internalFormat,Ee,ve,q.colorSpace);if(!n.get(T).__hasExternalTextures){const _e=Math.max(1,T.width>>X),Pe=Math.max(1,T.height>>X);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,X,Re,_e,Pe,T.depth,0,Ee,ve,null):t.texImage2D(te,X,Re,_e,Pe,0,Ee,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),ye(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,te,n.get(q).__webglTexture,0,Fe(T)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,te,n.get(q).__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(U,T,q){if(i.bindRenderbuffer(i.RENDERBUFFER,U),T.depthBuffer){const le=T.depthTexture,te=le&&le.isDepthTexture?le.type:null,X=S(T.stencilBuffer,te),Ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=Fe(T);ye(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,X,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,X,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,X,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,U)}else{const le=T.textures;for(let te=0;te<le.length;te++){const X=le[te],Ee=s.convert(X.format,X.colorSpace),ve=s.convert(X.type),Re=y(X.internalFormat,Ee,ve,X.colorSpace),Ke=Fe(T);q&&ye(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,Re,T.width,T.height):ye(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke,Re,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Re,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const le=n.get(T.depthTexture).__webglTexture,te=Fe(T);if(T.depthTexture.format===1026)ye(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(T.depthTexture.format===1027)ye(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function ee(U){const T=n.get(U),q=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ae(T.__webglFramebuffer,U)}else if(q){T.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[le]),T.__webglDepthbuffer[le]=i.createRenderbuffer(),me(T.__webglDepthbuffer[le],U,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),me(T.__webglDepthbuffer,U,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(U,T,q){const le=n.get(U);T!==void 0&&se(le.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&ee(U)}function xe(U){const T=U.texture,q=n.get(U),le=n.get(T);U.addEventListener("dispose",w);const te=U.textures,X=U.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=T.version,a.memory.textures++),X){q.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[ve]=[];for(let Re=0;Re<T.mipmaps.length;Re++)q.__webglFramebuffer[ve][Re]=i.createFramebuffer()}else q.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let ve=0;ve<T.mipmaps.length;ve++)q.__webglFramebuffer[ve]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let ve=0,Re=te.length;ve<Re;ve++){const Ke=n.get(te[ve]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&ye(U)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ve=0;ve<te.length;ve++){const Re=te[ve];q.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ve]);const Ke=s.convert(Re.format,Re.colorSpace),_e=s.convert(Re.type),Pe=y(Re.internalFormat,Ke,_e,Re.colorSpace,U.isXRRenderTarget===!0),Ze=Fe(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,Pe,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,q.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),me(q.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),pe(i.TEXTURE_CUBE_MAP,T);for(let ve=0;ve<6;ve++)if(T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)se(q.__webglFramebuffer[ve][Re],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re);else se(q.__webglFramebuffer[ve],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);p(T)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ve=0,Re=te.length;ve<Re;ve++){const Ke=te[ve],_e=n.get(Ke);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),pe(i.TEXTURE_2D,Ke),se(q.__webglFramebuffer,U,Ke,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),p(Ke)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ve=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,le.__webglTexture),pe(ve,T),T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)se(q.__webglFramebuffer[Re],U,T,i.COLOR_ATTACHMENT0,ve,Re);else se(q.__webglFramebuffer,U,T,i.COLOR_ATTACHMENT0,ve,0);p(T)&&d(ve),t.unbindTexture()}U.depthBuffer&&ee(U)}function oe(U){const T=U.textures;for(let q=0,le=T.length;q<le;q++){const te=T[q];if(p(te)){const X=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ee=n.get(te).__webglTexture;t.bindTexture(X,Ee),d(X),t.unbindTexture()}}}const D=[],Oe=[];function Be(U){if(U.samples>0){if(ye(U)===!1){const T=U.textures,q=U.width,le=U.height;let te=i.COLOR_BUFFER_BIT;const X=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(U),ve=T.length>1;if(ve)for(let Re=0;Re<T.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Re=0;Re<T.length;Re++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Re]);const Ke=n.get(T[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ke,0)}i.blitFramebuffer(0,0,q,le,0,0,q,le,te,i.NEAREST),l===!0&&(D.length=0,Oe.length=0,D.push(i.COLOR_ATTACHMENT0+Re),U.depthBuffer&&U.resolveDepthBuffer===!1&&(D.push(X),Oe.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Re=0;Re<T.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Re]);const Ke=n.get(T[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const T=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Fe(U){return Math.min(r.maxSamples,U.samples)}function ye(U){const T=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function it(U){const T=a.render.frame;f.get(U)!==T&&(f.set(U,T),U.update())}function He(U,T){const q=U.colorSpace,le=U.format,te=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==Mi&&q!==Si&&(_t.getTransfer(q)===At?(le!==1023||te!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}function Ve(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=C,this.setTexture2D=O,this.setTexture2DArray=W,this.setTexture3D=z,this.setTextureCube=Z,this.rebindTextures=ue,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=se,this.useMultisampledRTT=ye}function Pg(i,e){function t(n,r=Si){let s;const a=_t.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===At)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===At?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===At?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===36492)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Lg extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class os extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dg={type:"move"};class Eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new os;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ig=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ng{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new hn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ci({vertexShader:Ug,fragmentShader:Ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Hn(new Qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fg extends sr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,u=null,h=null,m=null,_=null;const v=new Ng,p=t.getContextAttributes();let d=null,y=null;const S=[],E=[],F=new et;let w=null;const R=new In;R.layers.enable(1),R.viewport=new Vt;const I=new In;I.layers.enable(2),I.viewport=new Vt;const b=[R,I],x=new Lg;x.layers.enable(1),x.layers.enable(2);let C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let se=S[Q];return se===void 0&&(se=new Eo,S[Q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Q){let se=S[Q];return se===void 0&&(se=new Eo,S[Q]=se),se.getGripSpace()},this.getHand=function(Q){let se=S[Q];return se===void 0&&(se=new Eo,S[Q]=se),se.getHandSpace()};function N(Q){const se=E.indexOf(Q.inputSource);if(se===-1)return;const me=S[se];me!==void 0&&(me.update(Q.inputSource,Q.frame,c||a),me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function O(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",W);for(let Q=0;Q<S.length;Q++){const se=E[Q];se!==null&&(E[Q]=null,S[Q].disconnect(se))}C=null,G=null,v.reset(),e.setRenderTarget(d),m=null,h=null,u=null,r=null,y=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",O),r.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0){const se={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Fi(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let se=null,me=null,ae=null;p.depth&&(ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=p.stencil?1027:1026,me=p.stencil?1020:1014);const ee={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(ee),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Fi(h.textureWidth,h.textureHeight,{format:1023,type:1009,depthTexture:new fc(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(Q){for(let se=0;se<Q.removed.length;se++){const me=Q.removed[se],ae=E.indexOf(me);ae>=0&&(E[ae]=null,S[ae].disconnect(me))}for(let se=0;se<Q.added.length;se++){const me=Q.added[se];let ae=E.indexOf(me);if(ae===-1){for(let ue=0;ue<S.length;ue++)if(ue>=E.length){E.push(me),ae=ue;break}else if(E[ue]===null){E[ue]=me,ae=ue;break}if(ae===-1)break}const ee=S[ae];ee&&ee.connect(me)}}const z=new Y,Z=new Y;function K(Q,se,me){z.setFromMatrixPosition(se.matrixWorld),Z.setFromMatrixPosition(me.matrixWorld);const ae=z.distanceTo(Z),ee=se.projectionMatrix.elements,ue=me.projectionMatrix.elements,xe=ee[14]/(ee[10]-1),oe=ee[14]/(ee[10]+1),D=(ee[9]+1)/ee[5],Oe=(ee[9]-1)/ee[5],Be=(ee[8]-1)/ee[0],Fe=(ue[8]+1)/ue[0],ye=xe*Be,it=xe*Fe,He=ae/(-Be+Fe),Ve=He*-Be;se.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ve),Q.translateZ(He),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const U=xe+He,T=oe+He,q=ye-Ve,le=it+(ae-Ve),te=D*oe/T*U,X=Oe*oe/T*U;Q.projectionMatrix.makePerspective(q,le,te,X,U,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function fe(Q,se){se===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(se.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;v.texture!==null&&(Q.near=v.depthNear,Q.far=v.depthFar),x.near=I.near=R.near=Q.near,x.far=I.far=R.far=Q.far,(C!==x.near||G!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,G=x.far,R.near=C,R.far=G,I.near=C,I.far=G,R.updateProjectionMatrix(),I.updateProjectionMatrix(),Q.updateProjectionMatrix());const se=Q.parent,me=x.cameras;fe(x,se);for(let ae=0;ae<me.length;ae++)fe(me[ae],se);me.length===2?K(x,R,I):x.projectionMatrix.copy(R.projectionMatrix),ce(Q,x,se)};function ce(Q,se,me){me===null?Q.matrix.copy(se.matrixWorld):(Q.matrix.copy(me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(se.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Xa*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let pe=null;function Te(Q,se){if(f=se.getViewerPose(c||a),_=se,f!==null){const me=f.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let ae=!1;me.length!==x.cameras.length&&(x.cameras.length=0,ae=!0);for(let ue=0;ue<me.length;ue++){const xe=me[ue];let oe=null;if(m!==null)oe=m.getViewport(xe);else{const Oe=u.getViewSubImage(h,xe);oe=Oe.viewport,ue===0&&(e.setRenderTargetTextures(y,Oe.colorTexture,h.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(y))}let D=b[ue];D===void 0&&(D=new In,D.layers.enable(ue),D.viewport=new Vt,b[ue]=D),D.matrix.fromArray(xe.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(xe.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(oe.x,oe.y,oe.width,oe.height),ue===0&&(x.matrix.copy(D.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ae===!0&&x.cameras.push(D)}const ee=r.enabledFeatures;if(ee&&ee.includes("depth-sensing")){const ue=u.getDepthInformation(me[0]);ue&&ue.isValid&&ue.texture&&v.init(e,ue,r.renderState)}}for(let me=0;me<S.length;me++){const ae=E[me],ee=S[me];ae!==null&&ee!==void 0&&ee.update(ae,se,c||a)}pe&&pe(Q,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),_=null}const he=new nc;he.setAnimationLoop(Te),this.setAnimationLoop=function(Q){pe=Q},this.dispose=function(){}}}const qi=new Qn,Bg=new Dt;function Og(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Zl(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,y,S,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),f(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,y,S):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===1&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===1&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=e.get(d),S=y.envMap,E=y.envMapRotation;S&&(p.envMap.value=S,qi.copy(E),qi.x*=-1,qi.y*=-1,qi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),p.envMapRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(qi)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,y,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=S*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function f(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===1&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const y=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function zg(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const E=S.program;n.uniformBlockBinding(y,E)}function c(y,S){let E=r[y.id];E===void 0&&(_(y),E=f(y),r[y.id]=E,y.addEventListener("dispose",p));const F=S.program;n.updateUBOMapping(y,F);const w=e.render.frame;s[y.id]!==w&&(h(y),s[y.id]=w)}function f(y){const S=u();y.__bindingPointIndex=S;const E=i.createBuffer(),F=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,F,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,E),E}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const S=r[y.id],E=y.uniforms,F=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,R=E.length;w<R;w++){const I=Array.isArray(E[w])?E[w]:[E[w]];for(let b=0,x=I.length;b<x;b++){const C=I[b];if(m(C,w,b,F)===!0){const G=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let W=0;W<N.length;W++){const z=N[W],Z=v(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,G+O,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,O),O+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,S,E,F){const w=y.value,R=S+"_"+E;if(F[R]===void 0)return typeof w=="number"||typeof w=="boolean"?F[R]=w:F[R]=w.clone(),!0;{const I=F[R];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return F[R]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function _(y){const S=y.uniforms;let E=0;const F=16;for(let R=0,I=S.length;R<I;R++){const b=Array.isArray(S[R])?S[R]:[S[R]];for(let x=0,C=b.length;x<C;x++){const G=b[x],N=Array.isArray(G.value)?G.value:[G.value];for(let O=0,W=N.length;O<W;O++){const z=N[O],Z=v(z),K=E%F;K!==0&&F-K<Z.boundary&&(E+=F-K),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=Z.storage}}}const w=E%F;return w>0&&(E+=F-w),y.__size=E,y.__cache={},this}function v(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function p(y){const S=y.target;S.removeEventListener("dispose",p);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Gg{constructor(e={}){const{canvas:t=fh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=0,this.toneMappingExposure=1;const S=this;let E=!1,F=0,w=0,R=null,I=-1,b=null;const x=new Vt,C=new Vt;let G=null;const N=new lt(0);let O=0,W=t.width,z=t.height,Z=1,K=null,fe=null;const ce=new Vt(0,0,W,z),pe=new Vt(0,0,W,z);let Te=!1;const he=new po;let Q=!1,se=!1;const me=new Dt,ae=new Y,ee=new Vt,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function oe(){return R===null?Z:1}let D=n;function Oe(A,H){return t.getContext(A,H)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ka}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",be,!1),D===null){const H="webgl2";if(D=Oe(H,A),D===null)throw Oe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Be,Fe,ye,it,He,Ve,U,T,q,le,te,X,Ee,ve,Re,Ke,_e,Pe,Ze,Ge,Ae,We,Qe,xt;function V(){Be=new Yp(D),Be.init(),We=new Pg(D,Be),Fe=new Vp(D,Be,e,We),ye=new wg(D),it=new Kp(D),He=new dg,Ve=new Rg(D,Be,ye,He,Fe,We,it),U=new Hp(S),T=new qp(S),q=new Bh(D),Qe=new zp(D,q),le=new $p(D,q,it,Qe),te=new Jp(D,le,q,it),Ze=new Zp(D,Fe,Ve),Ke=new kp(He),X=new hg(S,U,T,Be,Fe,Qe,Ke),Ee=new Og(S,He),ve=new mg,Re=new Mg(Be),Pe=new Op(S,U,T,ye,te,h,l),_e=new Ag(S,te,Fe),xt=new zg(D,it,Fe,ye),Ge=new Gp(D,Be,it),Ae=new jp(D,Be,it),it.programs=X.programs,S.capabilities=Fe,S.extensions=Be,S.properties=He,S.renderLists=ve,S.shadowMap=_e,S.state=ye,S.info=it}V();const Se=new Fg(S,D);this.xr=Se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=Be.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Be.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(W,z,!1))},this.getSize=function(A){return A.set(W,z)},this.setSize=function(A,H,J=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,z=H,t.width=Math.floor(A*Z),t.height=Math.floor(H*Z),J===!0&&(t.style.width=A+"px",t.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(W*Z,z*Z).floor()},this.setDrawingBufferSize=function(A,H,J){W=A,z=H,Z=J,t.width=Math.floor(A*J),t.height=Math.floor(H*J),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(ce)},this.setViewport=function(A,H,J,$){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,H,J,$),ye.viewport(x.copy(ce).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(pe)},this.setScissor=function(A,H,J,$){A.isVector4?pe.set(A.x,A.y,A.z,A.w):pe.set(A,H,J,$),ye.scissor(C.copy(pe).multiplyScalar(Z).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(A){ye.setScissorTest(Te=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){fe=A},this.getClearColor=function(A){return A.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(A=!0,H=!0,J=!0){let $=0;if(A){let k=!1;if(R!==null){const de=R.texture.format;k=de===1033||de===1031||de===1029}if(k){const de=R.texture.type,Ce=de===1009||de===1014||de===1012||de===1020||de===1017||de===1018,Le=Pe.getClearColor(),Ie=Pe.getClearAlpha(),Ye=Le.r,$e=Le.g,Xe=Le.b;Ce?(m[0]=Ye,m[1]=$e,m[2]=Xe,m[3]=Ie,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Ye,_[1]=$e,_[2]=Xe,_[3]=Ie,D.clearBufferiv(D.COLOR,0,_))}else $|=D.COLOR_BUFFER_BIT}H&&($|=D.DEPTH_BUFFER_BIT),J&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",be,!1),ve.dispose(),Re.dispose(),He.dispose(),U.dispose(),T.dispose(),te.dispose(),Qe.dispose(),xt.dispose(),X.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Jt),Se.removeEventListener("sessionend",jt),Qt.stop()};function re(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=it.autoReset,H=_e.enabled,J=_e.autoUpdate,$=_e.needsUpdate,k=_e.type;V(),it.autoReset=A,_e.enabled=H,_e.autoUpdate=J,_e.needsUpdate=$,_e.type=k}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function qe(A){const H=A.target;H.removeEventListener("dispose",qe),ot(H)}function ot(A){It(A),He.remove(A)}function It(A){const H=He.get(A).programs;H!==void 0&&(H.forEach(function(J){X.releaseProgram(J)}),A.isShaderMaterial&&X.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,J,$,k,de){H===null&&(H=ue);const Ce=k.isMesh&&k.matrixWorld.determinant()<0,Le=ul(A,H,J,$,k);ye.setMaterial($,Ce);let Ie=J.index,Ye=1;if($.wireframe===!0){if(Ie=le.getWireframeAttribute(J),Ie===void 0)return;Ye=2}const $e=J.drawRange,Xe=J.attributes.position;let rt=$e.start*Ye,Et=($e.start+$e.count)*Ye;de!==null&&(rt=Math.max(rt,de.start*Ye),Et=Math.min(Et,(de.start+de.count)*Ye)),Ie!==null?(rt=Math.max(rt,0),Et=Math.min(Et,Ie.count)):Xe!=null&&(rt=Math.max(rt,0),Et=Math.min(Et,Xe.count));const Tt=Et-rt;if(Tt<0||Tt===1/0)return;Qe.setup(k,$,Le,J,Ie);let sn,ct=Ge;if(Ie!==null&&(sn=q.get(Ie),ct=Ae,ct.setIndex(sn)),k.isMesh)$.wireframe===!0?(ye.setLineWidth($.wireframeLinewidth*oe()),ct.setMode(D.LINES)):ct.setMode(D.TRIANGLES);else if(k.isLine){let ze=$.linewidth;ze===void 0&&(ze=1),ye.setLineWidth(ze*oe()),k.isLineSegments?ct.setMode(D.LINES):k.isLineLoop?ct.setMode(D.LINE_LOOP):ct.setMode(D.LINE_STRIP)}else k.isPoints?ct.setMode(D.POINTS):k.isSprite&&ct.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ct.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))ct.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ze=k._multiDrawStarts,Bt=k._multiDrawCounts,ut=k._multiDrawCount,bt=Ie?q.get(Ie).bytesPerElement:1,vi=He.get($).currentProgram.getUniforms();for(let un=0;un<ut;un++)vi.setValue(D,"_gl_DrawID",un),ct.render(ze[un]/bt,Bt[un])}else if(k.isInstancedMesh)ct.renderInstances(rt,Tt,k.count);else if(J.isInstancedBufferGeometry){const ze=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Bt=Math.min(J.instanceCount,ze);ct.renderInstances(rt,Tt,Bt)}else ct.render(rt,Tt)};function $t(A,H,J){A.transparent===!0&&A.side===2&&A.forceSinglePass===!1?(A.side=1,A.needsUpdate=!0,Qi(A,H,J),A.side=0,A.needsUpdate=!0,Qi(A,H,J),A.side=2):Qi(A,H,J)}this.compile=function(A,H,J=null){J===null&&(J=A),p=Re.get(J),p.init(H),y.push(p),J.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),A!==J&&A.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const $=new Set;return A.traverse(function(k){const de=k.material;if(de)if(Array.isArray(de))for(let Ce=0;Ce<de.length;Ce++){const Le=de[Ce];$t(Le,J,k),$.add(Le)}else $t(de,J,k),$.add(de)}),y.pop(),p=null,$},this.compileAsync=function(A,H,J=null){const $=this.compile(A,H,J);return new Promise(k=>{function de(){if($.forEach(function(Ce){He.get(Ce).currentProgram.isReady()&&$.delete(Ce)}),$.size===0){k(A);return}setTimeout(de,10)}Be.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let ht=null;function Yn(A){ht&&ht(A)}function Jt(){Qt.stop()}function jt(){Qt.start()}const Qt=new nc;Qt.setAnimationLoop(Yn),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(A){ht=A,Se.setAnimationLoop(A),A===null?Qt.stop():Qt.start()},Se.addEventListener("sessionstart",Jt),Se.addEventListener("sessionend",jt),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(H),H=Se.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,H,R),p=Re.get(A,y.length),p.init(H),y.push(p),me.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),he.setFromProjectionMatrix(me),se=this.localClippingEnabled,Q=Ke.init(this.clippingPlanes,se),v=ve.get(A,d.length),v.init(),d.push(v),Se.enabled===!0&&Se.isPresenting===!0){const de=S.xr.getDepthSensingMesh();de!==null&&ni(de,H,-1/0,S.sortObjects)}ni(A,H,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(K,fe),xe=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,xe&&Pe.addToRenderList(v,A),this.info.render.frame++,Q===!0&&Ke.beginShadows();const J=p.state.shadowsArray;_e.render(J,A,H),Q===!0&&Ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=v.opaque,k=v.transmissive;if(p.setupLights(),H.isArrayCamera){const de=H.cameras;if(k.length>0)for(let Ce=0,Le=de.length;Ce<Le;Ce++){const Ie=de[Ce];gn($,k,A,Ie)}xe&&Pe.render(A);for(let Ce=0,Le=de.length;Ce<Le;Ce++){const Ie=de[Ce];mi(v,A,Ie,Ie.viewport)}}else k.length>0&&gn($,k,A,H),xe&&Pe.render(A),mi(v,A,H);R!==null&&(Ve.updateMultisampleRenderTarget(R),Ve.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(S,A,H),Qe.resetDefaultState(),I=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],Q===!0&&Ke.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function ni(A,H,J,$){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||he.intersectsSprite(A)){$&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);const Ce=te.update(A),Le=A.material;Le.visible&&v.push(A,Ce,Le,J,ee.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||he.intersectsObject(A))){const Ce=te.update(A),Le=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ee.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ee.copy(Ce.boundingSphere.center)),ee.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(Le)){const Ie=Ce.groups;for(let Ye=0,$e=Ie.length;Ye<$e;Ye++){const Xe=Ie[Ye],rt=Le[Xe.materialIndex];rt&&rt.visible&&v.push(A,Ce,rt,J,ee.z,Xe)}}else Le.visible&&v.push(A,Ce,Le,J,ee.z,null)}}const de=A.children;for(let Ce=0,Le=de.length;Ce<Le;Ce++)ni(de[Ce],H,J,$)}function mi(A,H,J,$){const k=A.opaque,de=A.transmissive,Ce=A.transparent;p.setupLightsView(J),Q===!0&&Ke.setGlobalState(S.clippingPlanes,J),$&&ye.viewport(x.copy($)),k.length>0&&$n(k,H,J),de.length>0&&$n(de,H,J),Ce.length>0&&$n(Ce,H,J),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function gn(A,H,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Fi(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const de=p.state.transmissionRenderTarget[$.id],Ce=$.viewport||x;de.setSize(Ce.z,Ce.w);const Le=S.getRenderTarget();S.setRenderTarget(de),S.getClearColor(N),O=S.getClearAlpha(),O<1&&S.setClearColor(16777215,.5),xe?Pe.render(J):S.clear();const Ie=S.toneMapping;S.toneMapping=0;const Ye=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),Q===!0&&Ke.setGlobalState(S.clippingPlanes,$),$n(A,J,$),Ve.updateMultisampleRenderTarget(de),Ve.updateRenderTargetMipmap(de),Be.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Xe=0,rt=H.length;Xe<rt;Xe++){const Et=H[Xe],Tt=Et.object,sn=Et.geometry,ct=Et.material,ze=Et.group;if(ct.side===2&&Tt.layers.test($.layers)){const Bt=ct.side;ct.side=1,ct.needsUpdate=!0,gi(Tt,J,$,sn,ct,ze),ct.side=Bt,ct.needsUpdate=!0,$e=!0}}$e===!0&&(Ve.updateMultisampleRenderTarget(de),Ve.updateRenderTargetMipmap(de))}S.setRenderTarget(Le),S.setClearColor(N,O),Ye!==void 0&&($.viewport=Ye),S.toneMapping=Ie}function $n(A,H,J){const $=H.isScene===!0?H.overrideMaterial:null;for(let k=0,de=A.length;k<de;k++){const Ce=A[k],Le=Ce.object,Ie=Ce.geometry,Ye=$===null?Ce.material:$,$e=Ce.group;Le.layers.test(J.layers)&&gi(Le,H,J,Ie,Ye,$e)}}function gi(A,H,J,$,k,de){A.onBeforeRender(S,H,J,$,k,de),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.transparent===!0&&k.side===2&&k.forceSinglePass===!1?(k.side=1,k.needsUpdate=!0,S.renderBufferDirect(J,H,$,k,A,de),k.side=0,k.needsUpdate=!0,S.renderBufferDirect(J,H,$,k,A,de),k.side=2):S.renderBufferDirect(J,H,$,k,A,de),A.onAfterRender(S,H,J,$,k,de)}function Qi(A,H,J){H.isScene!==!0&&(H=ue);const $=He.get(A),k=p.state.lights,de=p.state.shadowsArray,Ce=k.state.version,Le=X.getParameters(A,k.state,de,H,J),Ie=X.getProgramCacheKey(Le);let Ye=$.programs;$.environment=A.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(A.isMeshStandardMaterial?T:U).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Ye===void 0&&(A.addEventListener("dispose",qe),Ye=new Map,$.programs=Ye);let $e=Ye.get(Ie);if($e!==void 0){if($.currentProgram===$e&&$.lightsStateVersion===Ce)return Ia(A,Le),$e}else Le.uniforms=X.getUniforms(A),A.onBeforeCompile(Le,S),$e=X.acquireProgram(Le,Ie),Ye.set(Ie,$e),$.uniforms=Le.uniforms;const Xe=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=Ke.uniform),Ia(A,Le),$.needsLights=fl(A),$.lightsStateVersion=Ce,$.needsLights&&(Xe.ambientLightColor.value=k.state.ambient,Xe.lightProbe.value=k.state.probe,Xe.directionalLights.value=k.state.directional,Xe.directionalLightShadows.value=k.state.directionalShadow,Xe.spotLights.value=k.state.spot,Xe.spotLightShadows.value=k.state.spotShadow,Xe.rectAreaLights.value=k.state.rectArea,Xe.ltc_1.value=k.state.rectAreaLTC1,Xe.ltc_2.value=k.state.rectAreaLTC2,Xe.pointLights.value=k.state.point,Xe.pointLightShadows.value=k.state.pointShadow,Xe.hemisphereLights.value=k.state.hemi,Xe.directionalShadowMap.value=k.state.directionalShadowMap,Xe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Xe.spotShadowMap.value=k.state.spotShadowMap,Xe.spotLightMatrix.value=k.state.spotLightMatrix,Xe.spotLightMap.value=k.state.spotLightMap,Xe.pointShadowMap.value=k.state.pointShadowMap,Xe.pointShadowMatrix.value=k.state.pointShadowMatrix),$.currentProgram=$e,$.uniformsList=null,$e}function Ms(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=ia.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Ia(A,H){const J=He.get(A);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function ul(A,H,J,$,k){H.isScene!==!0&&(H=ue),Ve.resetTextureUnits();const de=H.fog,Ce=$.isMeshStandardMaterial?H.environment:null,Le=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Mi,Ie=($.isMeshStandardMaterial?T:U).get($.envMap||Ce),Ye=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,$e=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Xe=!!J.morphAttributes.position,rt=!!J.morphAttributes.normal,Et=!!J.morphAttributes.color;let Tt=0;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Tt=S.toneMapping);const sn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ct=sn!==void 0?sn.length:0,ze=He.get($),Bt=p.state.lights;if(Q===!0&&(se===!0||A!==b)){const yn=A===b&&$.id===I;Ke.setState($,A,yn)}let ut=!1;$.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Bt.state.version||ze.outputColorSpace!==Le||k.isBatchedMesh&&ze.batching===!1||!k.isBatchedMesh&&ze.batching===!0||k.isBatchedMesh&&ze.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ze.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ze.instancing===!1||!k.isInstancedMesh&&ze.instancing===!0||k.isSkinnedMesh&&ze.skinning===!1||!k.isSkinnedMesh&&ze.skinning===!0||k.isInstancedMesh&&ze.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ze.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ze.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ze.instancingMorph===!1&&k.morphTexture!==null||ze.envMap!==Ie||$.fog===!0&&ze.fog!==de||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ke.numPlanes||ze.numIntersection!==Ke.numIntersection)||ze.vertexAlphas!==Ye||ze.vertexTangents!==$e||ze.morphTargets!==Xe||ze.morphNormals!==rt||ze.morphColors!==Et||ze.toneMapping!==Tt||ze.morphTargetsCount!==ct)&&(ut=!0):(ut=!0,ze.__version=$.version);let bt=ze.currentProgram;ut===!0&&(bt=Qi($,H,k));let vi=!1,un=!1,er=!1;const Ut=bt.getUniforms(),ii=ze.uniforms;if(ye.useProgram(bt.program)&&(vi=!0,un=!0,er=!0),$.id!==I&&(I=$.id,un=!0),vi||b!==A){Ut.setValue(D,"projectionMatrix",A.projectionMatrix),Ut.setValue(D,"viewMatrix",A.matrixWorldInverse);const yn=Ut.map.cameraPosition;yn!==void 0&&yn.setValue(D,ae.setFromMatrixPosition(A.matrixWorld)),Fe.logarithmicDepthBuffer&&Ut.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ut.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,un=!0,er=!0)}if(k.isSkinnedMesh){Ut.setOptional(D,k,"bindMatrix"),Ut.setOptional(D,k,"bindMatrixInverse");const yn=k.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ut.setValue(D,"boneTexture",yn.boneTexture,Ve))}k.isBatchedMesh&&(Ut.setOptional(D,k,"batchingTexture"),Ut.setValue(D,"batchingTexture",k._matricesTexture,Ve),Ut.setOptional(D,k,"batchingIdTexture"),Ut.setValue(D,"batchingIdTexture",k._indirectTexture,Ve),Ut.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Ut.setValue(D,"batchingColorTexture",k._colorsTexture,Ve));const ys=J.morphAttributes;if((ys.position!==void 0||ys.normal!==void 0||ys.color!==void 0)&&Ze.update(k,J,bt),(un||ze.receiveShadow!==k.receiveShadow)&&(ze.receiveShadow=k.receiveShadow,Ut.setValue(D,"receiveShadow",k.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ii.envMap.value=Ie,ii.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&H.environment!==null&&(ii.envMapIntensity.value=H.environmentIntensity),un&&(Ut.setValue(D,"toneMappingExposure",S.toneMappingExposure),ze.needsLights&&_i(ii,er),de&&$.fog===!0&&Ee.refreshFogUniforms(ii,de),Ee.refreshMaterialUniforms(ii,$,Z,z,p.state.transmissionRenderTarget[A.id]),ia.upload(D,Ms(ze),ii,Ve)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ia.upload(D,Ms(ze),ii,Ve),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ut.setValue(D,"center",k.center),Ut.setValue(D,"modelViewMatrix",k.modelViewMatrix),Ut.setValue(D,"normalMatrix",k.normalMatrix),Ut.setValue(D,"modelMatrix",k.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const yn=$.uniformsGroups;for(let Hr=0,Na=yn.length;Hr<Na;Hr++){const Fa=yn[Hr];xt.update(Fa,bt),xt.bind(Fa,bt)}}return bt}function _i(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function fl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,H,J){He.get(A.texture).__webglTexture=H,He.get(A.depthTexture).__webglTexture=J;const $=He.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=J===void 0,$.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const J=He.get(A);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,J=0){R=A,F=H,w=J;let $=!0,k=null,de=!1,Ce=!1;if(A){const Ie=He.get(A);Ie.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(D.FRAMEBUFFER,null),$=!1):Ie.__webglFramebuffer===void 0?Ve.setupRenderTarget(A):Ie.__hasExternalTextures&&Ve.rebindTextures(A,He.get(A.texture).__webglTexture,He.get(A.depthTexture).__webglTexture);const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ce=!0);const $e=He.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($e[H])?k=$e[H][J]:k=$e[H],de=!0):A.samples>0&&Ve.useMultisampledRTT(A)===!1?k=He.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?k=$e[J]:k=$e,x.copy(A.viewport),C.copy(A.scissor),G=A.scissorTest}else x.copy(ce).multiplyScalar(Z).floor(),C.copy(pe).multiplyScalar(Z).floor(),G=Te;if(ye.bindFramebuffer(D.FRAMEBUFFER,k)&&$&&ye.drawBuffers(A,k),ye.viewport(x),ye.scissor(C),ye.setScissorTest(G),de){const Ie=He.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ie.__webglTexture,J)}else if(Ce){const Ie=He.get(A.texture),Ye=H||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ie.__webglTexture,J||0,Ye)}I=-1},this.readRenderTargetPixels=function(A,H,J,$,k,de,Ce){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=He.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){ye.bindFramebuffer(D.FRAMEBUFFER,Le);try{const Ie=A.texture,Ye=Ie.format,$e=Ie.type;if(!Fe.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-$&&J>=0&&J<=A.height-k&&D.readPixels(H,J,$,k,We.convert(Ye),We.convert($e),de)}finally{const Ie=R!==null?He.get(R).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(A,H,J,$,k,de,Ce){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=He.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){ye.bindFramebuffer(D.FRAMEBUFFER,Le);try{const Ie=A.texture,Ye=Ie.format,$e=Ie.type;if(!Fe.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=A.width-$&&J>=0&&J<=A.height-k){const Xe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(H,J,$,k,We.convert(Ye),We.convert($e),0),D.flush();const rt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await hh(D,rt,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de)}finally{D.deleteBuffer(Xe),D.deleteSync(rt)}return de}}finally{const Ie=R!==null?He.get(R).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(A,H=null,J=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1]);const $=Math.pow(2,-J),k=Math.floor(A.image.width*$),de=Math.floor(A.image.height*$),Ce=H!==null?H.x:0,Le=H!==null?H.y:0;Ve.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,J,0,0,Ce,Le,k,de),ye.unbindTexture()},this.copyTextureToTexture=function(A,H,J=null,$=null,k=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],H=arguments[2],k=arguments[3]||0,J=null);let de,Ce,Le,Ie,Ye,$e;J!==null?(de=J.max.x-J.min.x,Ce=J.max.y-J.min.y,Le=J.min.x,Ie=J.min.y):(de=A.image.width,Ce=A.image.height,Le=0,Ie=0),$!==null?(Ye=$.x,$e=$.y):(Ye=0,$e=0);const Xe=We.convert(H.format),rt=We.convert(H.type);Ve.setTexture2D(H,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);const Et=D.getParameter(D.UNPACK_ROW_LENGTH),Tt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),sn=D.getParameter(D.UNPACK_SKIP_PIXELS),ct=D.getParameter(D.UNPACK_SKIP_ROWS),ze=D.getParameter(D.UNPACK_SKIP_IMAGES),Bt=A.isCompressedTexture?A.mipmaps[k]:A.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Bt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Bt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ie),A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,Ye,$e,de,Ce,Xe,rt,Bt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,Ye,$e,Bt.width,Bt.height,Xe,Bt.data):D.texSubImage2D(D.TEXTURE_2D,k,Ye,$e,de,Ce,Xe,rt,Bt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Et),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,sn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ct),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ze),k===0&&H.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(A,H,J=null,$=null,k=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,$=arguments[1]||null,A=arguments[2],H=arguments[3],k=arguments[4]||0);let de,Ce,Le,Ie,Ye,$e,Xe,rt,Et;const Tt=A.isCompressedTexture?A.mipmaps[k]:A.image;J!==null?(de=J.max.x-J.min.x,Ce=J.max.y-J.min.y,Le=J.max.z-J.min.z,Ie=J.min.x,Ye=J.min.y,$e=J.min.z):(de=Tt.width,Ce=Tt.height,Le=Tt.depth,Ie=0,Ye=0,$e=0),$!==null?(Xe=$.x,rt=$.y,Et=$.z):(Xe=0,rt=0,Et=0);const sn=We.convert(H.format),ct=We.convert(H.type);let ze;if(H.isData3DTexture)Ve.setTexture3D(H,0),ze=D.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)Ve.setTexture2DArray(H,0),ze=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);const Bt=D.getParameter(D.UNPACK_ROW_LENGTH),ut=D.getParameter(D.UNPACK_IMAGE_HEIGHT),bt=D.getParameter(D.UNPACK_SKIP_PIXELS),vi=D.getParameter(D.UNPACK_SKIP_ROWS),un=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Tt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ie),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ye),D.pixelStorei(D.UNPACK_SKIP_IMAGES,$e),A.isDataTexture||A.isData3DTexture?D.texSubImage3D(ze,k,Xe,rt,Et,de,Ce,Le,sn,ct,Tt.data):H.isCompressedArrayTexture?D.compressedTexSubImage3D(ze,k,Xe,rt,Et,de,Ce,Le,sn,Tt.data):D.texSubImage3D(ze,k,Xe,rt,Et,de,Ce,Le,sn,ct,Tt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Bt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,vi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,un),k===0&&H.generateMipmaps&&D.generateMipmap(ze),ye.unbindTexture()},this.initRenderTarget=function(A){He.get(A).__webglFramebuffer===void 0&&Ve.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ve.setTextureCube(A,0):A.isData3DTexture?Ve.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ve.setTexture2DArray(A,0):Ve.setTexture2D(A,0),ye.unbindTexture()},this.resetState=function(){F=0,w=0,R=null,ye.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ha?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===Cs?"display-p3":"srgb"}}class Vg extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return $a("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new Y;class ra{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ra(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Uc extends zi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ar;const ls=new Y,wr=new Y,Cr=new Y,Rr=new et,cs=new et,Ic=new Dt,sa=new Y,us=new Y,aa=new Y,Nc=new et,To=new et,Fc=new et;class Hg extends kt{constructor(e=new Uc){if(super(),this.isSprite=!0,this.type="Sprite",Ar===void 0){Ar=new Un;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kg(t,5);Ar.setIndex([0,1,2,0,2,3]),Ar.setAttribute("position",new ra(n,3,0,!1)),Ar.setAttribute("uv",new ra(n,2,3,!1))}this.geometry=Ar,this.material=e,this.center=new et(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wr.setFromMatrixScale(this.matrixWorld),Ic.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wr.multiplyScalar(-Cr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;oa(sa.set(-.5,-.5,0),Cr,a,wr,r,s),oa(us.set(.5,-.5,0),Cr,a,wr,r,s),oa(aa.set(.5,.5,0),Cr,a,wr,r,s),Nc.set(0,0),To.set(1,0),Fc.set(1,1);let o=e.ray.intersectTriangle(sa,us,aa,!1,ls);if(o===null&&(oa(us.set(-.5,.5,0),Cr,a,wr,r,s),To.set(0,1),o=e.ray.intersectTriangle(sa,aa,us,!1,ls),o===null))return;const l=e.ray.origin.distanceTo(ls);l<e.near||l>e.far||t.push({distance:l,point:ls.clone(),uv:kn.getInterpolation(ls,sa,us,aa,Nc,To,Fc,new et),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function oa(i,e,t,n,r,s){Rr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(cs.x=s*Rr.x-r*Rr.y,cs.y=r*Rr.x+s*Rr.y):cs.copy(Rr),i.copy(e),i.x+=cs.x,i.y+=cs.y,i.applyMatrix4(Ic)}class Bc extends zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const la=new Y,ca=new Y,Oc=new Dt,fs=new Ul,ua=new Bs,bo=new Y,zc=new Y;class Wg extends kt{constructor(e=new Un,t=new Bc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)la.fromBufferAttribute(t,r-1),ca.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=la.distanceTo(ca);e.setAttribute("lineDistance",new Ln(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),ua.radius+=s,e.ray.intersectsSphere(ua)===!1)return;Oc.copy(r).invert(),fs.copy(e.ray).applyMatrix4(Oc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let v=m,p=_-1;v<p;v+=c){const d=f.getX(v),y=f.getX(v+1),S=fa(this,e,fs,l,d,y);S&&t.push(S)}if(this.isLineLoop){const v=f.getX(_-1),p=f.getX(m),d=fa(this,e,fs,l,v,p);d&&t.push(d)}}else{const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let v=m,p=_-1;v<p;v+=c){const d=fa(this,e,fs,l,v,v+1);d&&t.push(d)}if(this.isLineLoop){const v=fa(this,e,fs,l,_-1,m);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function fa(i,e,t,n,r,s){const a=i.geometry.attributes.position;if(la.fromBufferAttribute(a,r),ca.fromBufferAttribute(a,s),t.distanceSqToSegment(la,ca,bo,zc)>n)return;bo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(bo);if(!(l<e.near||l>e.far))return{distance:l,point:zc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}class Xg extends hn{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ao extends Un{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],u=[],h=[],m=[];let _=0;const v=[],p=n/2;let d=0;y(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(f),this.setAttribute("position",new Ln(u,3)),this.setAttribute("normal",new Ln(h,3)),this.setAttribute("uv",new Ln(m,2));function y(){const E=new Y,F=new Y;let w=0;const R=(t-e)/n;for(let I=0;I<=s;I++){const b=[],x=I/s,C=x*(t-e)+e;for(let G=0;G<=r;G++){const N=G/r,O=N*l+o,W=Math.sin(O),z=Math.cos(O);F.x=C*W,F.y=-x*n+p,F.z=C*z,u.push(F.x,F.y,F.z),E.set(W,R,z).normalize(),h.push(E.x,E.y,E.z),m.push(N,1-x),b.push(_++)}v.push(b)}for(let I=0;I<r;I++)for(let b=0;b<s;b++){const x=v[b][I],C=v[b+1][I],G=v[b+1][I+1],N=v[b][I+1];f.push(x,C,N),f.push(C,G,N),w+=6}c.addGroup(d,w,0),d+=w}function S(E){const F=_,w=new et,R=new Y;let I=0;const b=E===!0?e:t,x=E===!0?1:-1;for(let G=1;G<=r;G++)u.push(0,p*x,0),h.push(0,x,0),m.push(.5,.5),_++;const C=_;for(let G=0;G<=r;G++){const O=G/r*l+o,W=Math.cos(O),z=Math.sin(O);R.x=b*z,R.y=p*x,R.z=b*W,u.push(R.x,R.y,R.z),h.push(0,x,0),w.x=W*.5+.5,w.y=z*.5*x+.5,m.push(w.x,w.y),_++}for(let G=0;G<r;G++){const N=F+G,O=C+G;E===!0?f.push(O,O+1,N):f.push(O+1,O,N),I+=3}c.addGroup(d,I,E===!0?1:2),d+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qg extends zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gc extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const wo=new Dt,Vc=new Y,kc=new Y;class Yg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vc),kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kc),t.updateMatrixWorld(),wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $g extends Yg{constructor(){super(new ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jg extends Gc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new $g}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kg extends Gc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Hc=new Y;let ha,Co;class Zg extends kt{constructor(e=new Y(0,0,1),t=new Y(0,0,0),n=1,r=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",ha===void 0&&(ha=new Un,ha.setAttribute("position",new Ln([0,0,0,0,1,0],3)),Co=new Ao(0,.5,1,5,1),Co.translate(0,-.5,0)),this.position.copy(t),this.line=new Wg(ha,new Bc({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Hn(Co,new co({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Hc.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Hc,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ka);const Jg=Math.PI/180,Qg=1/24;function da(i){return i*Jg}function e_(i,e){const t=i.periodHours*Qg;return 2*Math.PI*(e-i.jd0)/t}function Wc(i,e=new Float64Array(9)){const t=Math.cos(i),n=Math.sin(i);return e[0]=t,e[1]=-n,e[2]=0,e[3]=n,e[4]=t,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function t_(i,e=new Float64Array(9)){const t=Math.cos(i),n=Math.sin(i);return e[0]=t,e[1]=0,e[2]=n,e[3]=0,e[4]=1,e[5]=0,e[6]=-n,e[7]=0,e[8]=t,e}function Xc(i,e,t=new Float64Array(9)){const n=i[0],r=i[1],s=i[2],a=i[3],o=i[4],l=i[5],c=i[6],f=i[7],u=i[8],h=e[0],m=e[1],_=e[2],v=e[3],p=e[4],d=e[5],y=e[6],S=e[7],E=e[8];return t[0]=n*h+r*v+s*y,t[1]=n*m+r*p+s*S,t[2]=n*_+r*d+s*E,t[3]=a*h+o*v+l*y,t[4]=a*m+o*p+l*S,t[5]=a*_+o*d+l*E,t[6]=c*h+f*v+u*y,t[7]=c*m+f*p+u*S,t[8]=c*_+f*d+u*E,t}function qc(i,e){return{x:i[0]*e.x+i[1]*e.y+i[2]*e.z,y:i[3]*e.x+i[4]*e.y+i[5]*e.z,z:i[6]*e.x+i[7]*e.y+i[8]*e.z}}function n_(i,e=new Float64Array(9)){return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],e}function Yc(i,e){const t=e_(i,e),n=da(i.poleLambdaDeg),r=da(i.poleBetaDeg),s=Wc(t),a=t_(Math.PI/2-r),o=Wc(n),l=Xc(a,s);return Xc(o,l)}function hs(i){const e=da(i.poleLambdaDeg),t=da(i.poleBetaDeg),n=Math.cos(t);return{x:n*Math.cos(e),y:n*Math.sin(e),z:Math.sin(t)}}function i_(i){return Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z)}function pa(i){const e=i_(i)||1;return{x:i.x/e,y:i.y/e,z:i.z/e}}function Ro(i,e,t,n,r){const s=e*3;i[s]=(i[s]??0)+t,i[s+1]=(i[s+1]??0)+n,i[s+2]=(i[s+2]??0)+r}function r_(i,e,t,n,r,s){return[e*s-t*r,t*n-i*s,i*r-e*n]}function ma(i){const{vertices:e,faces:t}=i,n=t.length/3,r=e.length/3,s=new Float32Array(n*3),a=new Float32Array(n),o=new Float32Array(r*3);for(let l=0;l<n;l++){const c=t[l*3],f=t[l*3+1],u=t[l*3+2],h=e[c*3],m=e[c*3+1],_=e[c*3+2],v=e[f*3],p=e[f*3+1],d=e[f*3+2],y=e[u*3],S=e[u*3+1],E=e[u*3+2],[F,w,R]=r_(v-h,p-m,d-_,y-h,S-m,E-_),I=Math.sqrt(F*F+w*w+R*R),b=I*.5;a[l]=b;const x=I>0?1/I:0,C=F*x,G=w*x,N=R*x;s[l*3]=C,s[l*3+1]=G,s[l*3+2]=N;const O=C*b,W=G*b,z=N*b;Ro(o,c,O,W,z),Ro(o,f,O,W,z),Ro(o,u,O,W,z)}for(let l=0;l<r;l++){const c=l*3,f=o[c],u=o[c+1],h=o[c+2],m=Math.sqrt(f*f+u*u+h*h);if(m>0){const _=1/m;o[c]=f*_,o[c+1]=u*_,o[c+2]=h*_}}return{normals:s,areas:a,vertexNormals:o}}function s_(i){const e=i.vertices;let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let _=0;_<e.length;_+=3){const v=e[_],p=e[_+1],d=e[_+2];v<t&&(t=v),v>s&&(s=v),p<n&&(n=p),p>a&&(a=p),d<r&&(r=d),d>o&&(o=d)}const l=(t+s)/2,c=(n+a)/2,f=(r+o)/2,u=s-t,h=a-n,m=o-r;return{min:[t,n,r],max:[s,a,o],centre:[l,c,f],radius:.5*Math.sqrt(u*u+h*h+m*m)}}function a_(i,e,t={}){const n=i.clientWidth||480,r=i.clientHeight||360,s=new Gg({antialias:!0,alpha:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.setSize(n,r),s.setClearColor(new lt(724242),1),i.appendChild(s.domElement),s.domElement.style.display="block",s.domElement.style.width="100%",s.domElement.style.height="100%";const a=new Vg,o=ma(e.shape),l=s_(e.shape),c=l.radius>0?1/l.radius:1,f=new Float32Array(e.shape.vertices.length);for(let ee=0;ee<f.length;ee+=3)f[ee]=(e.shape.vertices[ee]-l.centre[0])*c,f[ee+1]=(e.shape.vertices[ee+1]-l.centre[1])*c,f[ee+2]=(e.shape.vertices[ee+2]-l.centre[2])*c;const u=new Un;u.setAttribute("position",new Mn(f,3)),u.setAttribute("normal",new Mn(o.vertexNormals.slice(),3)),u.setIndex(new Mn(e.shape.faces.slice(),1));const h=new qg({color:10128248,roughness:1,metalness:0,flatShading:!1,side:2}),m=new Hn(u,h),_=new os;_.add(m),_.matrixAutoUpdate=!1,a.add(_);const v=new jg(16773853,2.4);v.position.set(10,0,0),a.add(v);const p=new Kg(4871012,1.05);a.add(p);let d=e.spin;const y=hs(d),S=new Zg(new Y(y.x,y.y,y.z),new Y(0,0,0),1.5,16761167,.25,.12);S.traverse(ee=>{const ue=ee.material;ue&&(ue.depthTest=!1,ue.depthWrite=!1,ue.transparent=!0)}),S.renderOrder=999,a.add(S);const E=o_("pole","#ffc14f");E.position.set(y.x*1.75,y.y*1.75,y.z*1.75),E.renderOrder=1e3,a.add(E);const F=6.5,w=new In(35,n/Math.max(r,1),.01,100);a.add(w);const R={distance:F,tilt:Math.PI/3,azim:0},I=()=>{const ee=hs(d),ue=Math.abs(ee.z)>.95?{x:1,y:0,z:0}:{x:0,y:0,z:1},xe=b(ee,ue),oe=b(ee,xe),D=Math.sin(R.tilt),Oe=Math.cos(R.tilt),Be=Math.sin(R.azim),Fe=Math.cos(R.azim),ye=R.distance;w.position.set(ye*(D*(Fe*xe.x+Be*oe.x)+Oe*ee.x),ye*(D*(Fe*xe.y+Be*oe.y)+Oe*ee.y),ye*(D*(Fe*xe.z+Be*oe.z)+Oe*ee.z)),w.up.set(ee.x,ee.y,ee.z),w.lookAt(0,0,0)};function b(ee,ue){const xe=ee.y*ue.z-ee.z*ue.y,oe=ee.z*ue.x-ee.x*ue.z,D=ee.x*ue.y-ee.y*ue.x,Oe=Math.sqrt(xe*xe+oe*oe+D*D)||1;return{x:xe/Oe,y:oe/Oe,z:D/Oe}}function x(){const ee=w.position.x,ue=w.position.y,xe=w.position.z,oe=Math.sqrt(ee*ee+ue*ue+xe*xe)||1;R.distance=oe;const D=ee/oe,Oe=ue/oe,Be=xe/oe,Fe=hs(d),ye=D*Fe.x+Oe*Fe.y+Be*Fe.z;R.tilt=Math.acos(Math.max(-1,Math.min(1,ye)));const it=D-ye*Fe.x,He=Oe-ye*Fe.y,Ve=Be-ye*Fe.z,U=Math.sqrt(it*it+He*He+Ve*Ve);if(U<1e-9){R.azim=0;return}const T=it/U,q=He/U,le=Ve/U,te=Math.abs(Fe.z)>.95?{x:1,y:0,z:0}:{x:0,y:0,z:1},X=b(Fe,te),Ee=b(Fe,X),ve=T*X.x+q*X.y+le*X.z,Re=T*Ee.x+q*Ee.y+le*Ee.z;R.azim=Math.atan2(Re,ve)}I();let C="free",G={x:-1,y:0,z:0},N={x:-1.01,y:0,z:0};const O=()=>{const ee=pa(N),ue=R.distance;w.position.set(ee.x*ue,ee.y*ue,ee.z*ue);const xe=hs(e.spin),oe=Math.abs(ee.x*xe.x+ee.y*xe.y+ee.z*xe.z)>.99?{x:0,y:0,z:1}:xe;w.up.set(oe.x,oe.y,oe.z),w.lookAt(0,0,0)};let W=!0;const z=()=>{W=!0},Z=ee=>{_.matrix.set(ee[0],ee[1],ee[2],0,ee[3],ee[4],ee[5],0,ee[6],ee[7],ee[8],0,0,0,0,1),_.matrixWorldNeedsUpdate=!0},K=s.domElement;K.setAttribute("role","img"),K.setAttribute("aria-label","Asteroid 3D shape. Drag to rotate. Hold Shift and scroll to zoom."),K.tabIndex=0,K.style.touchAction="none",K.style.cursor="grab";const fe=[],ce=(ee,ue,xe)=>{K.addEventListener(ee,ue,xe),fe.push([ee,ue,xe])};let pe=!1,Te=0,he=0;ce("pointerdown",ee=>{C==="earth"&&(x(),C="free",t.onViewModeChange?.("free")),pe=!0,Te=ee.clientX,he=ee.clientY,K.style.cursor="grabbing",K.setPointerCapture(ee.pointerId)}),ce("pointermove",ee=>{if(!pe)return;const ue=ee.clientX-Te,xe=ee.clientY-he;Te=ee.clientX,he=ee.clientY,R.azim-=ue*.008,R.tilt+=xe*.008,R.tilt=Math.max(.1,Math.min(Math.PI-.1,R.tilt)),I(),z()});const Q=ee=>{pe=!1,K.style.cursor="grab",K.hasPointerCapture(ee.pointerId)&&K.releasePointerCapture(ee.pointerId)};ce("pointerup",Q),ce("pointercancel",Q),ce("wheel",ee=>{if(!ee.shiftKey)return;ee.preventDefault();const ue=Math.exp(ee.deltaY*.001);R.distance=Math.max(1.4,Math.min(20,R.distance*ue)),C==="free"?I():O(),z()},{passive:!1});let se=0,me=e.spin.jd0;const ae=()=>{if(W){W=!1;const ee=Yc(d,me);Z(ee);const ue=pa(G);v.position.set(ue.x*10,ue.y*10,ue.z*10),s.render(a,w)}se=requestAnimationFrame(ae)};return ae(),{setJd(ee){me=ee,z()},setSunEarth(ee,ue){G=ee,N=ue,C==="earth"&&O(),z()},setViewMode(ee){C=ee,ee==="earth"?O():I(),z()},setSpin(ee){d=ee;const ue=hs(ee);S.setDirection(new Y(ue.x,ue.y,ue.z)),E.position.set(ue.x*1.75,ue.y*1.75,ue.z*1.75),z()},resize(ee,ue){s.setSize(ee,ue),w.aspect=ee/Math.max(ue,1),w.updateProjectionMatrix(),z()},dispose(){cancelAnimationFrame(se);for(const[ee,ue,xe]of fe)K.removeEventListener(ee,ue,xe);fe.length=0,u.dispose(),h.dispose(),S.traverse(ee=>{const ue=ee.geometry;ue&&typeof ue.dispose=="function"&&ue.dispose();const xe=ee.material;xe&&typeof xe.dispose=="function"&&xe.dispose()}),E.material.map?.dispose(),E.material.dispose(),s.dispose(),s.forceContextLoss(),s.domElement.parentNode===i&&i.removeChild(s.domElement)},requestRender:z}}function o_(i,e){const t=typeof window<"u"?Math.min(window.devicePixelRatio||1,2):1,n=64,r=document.createElement("canvas");r.width=256*t,r.height=96*t;const s=r.getContext("2d");s.scale(t,t),s.font=`600 ${n/t}px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.shadowColor="rgba(0,0,0,0.9)",s.shadowBlur=8,s.fillStyle=e,s.fillText(i,128,48);const a=new Xg(r);a.minFilter=a.magFilter=1006,a.needsUpdate=!0;const o=new Uc({map:a,depthTest:!1,depthWrite:!1,transparent:!0}),l=new Hg(o);return l.scale.set(.55,.21,1),l}const l_=!0,Xt="u-",c_="uplot",u_=Xt+"hz",f_=Xt+"vt",h_=Xt+"title",d_=Xt+"wrap",p_=Xt+"under",m_=Xt+"over",g_=Xt+"axis",Yi=Xt+"off",__=Xt+"select",v_=Xt+"cursor-x",x_=Xt+"cursor-y",S_=Xt+"cursor-pt",M_=Xt+"legend",y_=Xt+"live",E_=Xt+"inline",T_=Xt+"series",b_=Xt+"marker",$c=Xt+"label",A_=Xt+"value",ds="width",ps="height",ms="top",jc="bottom",Pr="left",Po="right",Lo="#000",Kc=Lo+"0",Do="mousemove",Zc="mousedown",Uo="mouseup",Jc="mouseenter",Qc="mouseleave",eu="dblclick",w_="resize",C_="scroll",tu="change",ga="dppxchange",Io="--",Lr=typeof window<"u",No=Lr?document:null,Dr=Lr?window:null,R_=Lr?navigator:null;let pt,_a;function Fo(){let i=devicePixelRatio;pt!=i&&(pt=i,_a&&zo(tu,_a,Fo),_a=matchMedia(`(min-resolution: ${pt-.001}dppx) and (max-resolution: ${pt+.001}dppx)`),$i(tu,_a,Fo),Dr.dispatchEvent(new CustomEvent(ga)))}function bn(i,e){if(e!=null){let t=i.classList;!t.contains(e)&&t.add(e)}}function Bo(i,e){let t=i.classList;t.contains(e)&&t.remove(e)}function wt(i,e,t){i.style[e]=t+"px"}function Wn(i,e,t,n){let r=No.createElement(i);return e!=null&&bn(r,e),t?.insertBefore(r,n),r}function Nn(i,e){return Wn("div",i,e)}const nu=new WeakMap;function ti(i,e,t,n,r){let s="translate("+e+"px,"+t+"px)",a=nu.get(i);s!=a&&(i.style.transform=s,nu.set(i,s),e<0||t<0||e>n||t>r?bn(i,Yi):Bo(i,Yi))}const iu=new WeakMap;function ru(i,e,t){let n=e+t,r=iu.get(i);n!=r&&(iu.set(i,n),i.style.background=e,i.style.borderColor=t)}const su=new WeakMap;function au(i,e,t,n){let r=e+""+t,s=su.get(i);r!=s&&(su.set(i,r),i.style.height=t+"px",i.style.width=e+"px",i.style.marginLeft=n?-e/2+"px":0,i.style.marginTop=n?-t/2+"px":0)}const Oo={passive:!0},P_={...Oo,capture:!0};function $i(i,e,t,n){e.addEventListener(i,t,n?P_:Oo)}function zo(i,e,t,n){e.removeEventListener(i,t,Oo)}Lr&&Fo();function Xn(i,e,t,n){let r;t=t||0,n=n||e.length-1;let s=n<=2147483647;for(;n-t>1;)r=s?t+n>>1:wn((t+n)/2),e[r]<i?t=r:n=r;return i-e[t]<=e[n]-i?t:n}function ou(i){return(t,n,r)=>{let s=-1,a=-1;for(let o=n;o<=r;o++)if(i(t[o])){s=o;break}for(let o=r;o>=n;o--)if(i(t[o])){a=o;break}return[s,a]}}const lu=i=>i!=null,cu=i=>i!=null&&i>0,va=ou(lu),L_=ou(cu);function D_(i,e,t,n=0,r=!1){let s=r?L_:va,a=r?cu:lu;[e,t]=s(i,e,t);let o=i[e],l=i[e];if(e>-1)if(n==1)o=i[e],l=i[t];else if(n==-1)o=i[t],l=i[e];else for(let c=e;c<=t;c++){let f=i[c];a(f)&&(f<o?o=f:f>l&&(l=f))}return[o??Mt,l??-Mt]}function xa(i,e,t,n){let r=hu(i),s=hu(e);i==e&&(r==-1?(i*=t,e/=t):(i/=t,e*=t));let a=t==10?di:du,o=r==1?wn:Fn,l=s==1?Fn:wn,c=o(a(qt(i))),f=l(a(qt(e))),u=Ur(t,c),h=Ur(t,f);return t==10&&(c<0&&(u=yt(u,-c)),f<0&&(h=yt(h,-f))),n||t==2?(i=u*r,e=h*s):(i=Su(i,u),e=ya(e,h)),[i,e]}function Go(i,e,t,n){let r=xa(i,e,t,n);return i==0&&(r[0]=0),e==0&&(r[1]=0),r}const Vo=.1,uu={mode:3,pad:Vo},gs={pad:0,soft:null,mode:0},U_={min:gs,max:gs};function Sa(i,e,t,n){return Ea(t)?fu(i,e,t):(gs.pad=t,gs.soft=n?0:null,gs.mode=n?3:0,fu(i,e,U_))}function ft(i,e){return i??e}function I_(i,e,t){for(e=ft(e,0),t=ft(t,i.length-1);e<=t;){if(i[e]!=null)return!0;e++}return!1}function fu(i,e,t){let n=t.min,r=t.max,s=ft(n.pad,0),a=ft(r.pad,0),o=ft(n.hard,-Mt),l=ft(r.hard,Mt),c=ft(n.soft,Mt),f=ft(r.soft,-Mt),u=ft(n.mode,0),h=ft(r.mode,0),m=e-i,_=di(m),v=mn(qt(i),qt(e)),p=di(v),d=qt(p-_);(m<1e-24||d>10)&&(m=0,(i==0||e==0)&&(m=1e-24,u==2&&c!=Mt&&(s=0),h==2&&f!=-Mt&&(a=0)));let y=m||v||1e3,S=di(y),E=Ur(10,wn(S)),F=y*(m==0?i==0?.1:1:s),w=yt(Su(i-F,E/10),24),R=i>=c&&(u==1||u==3&&w<=c||u==2&&w>=c)?c:Mt,I=mn(o,w<R&&i>=R?R:qn(R,w)),b=y*(m==0?e==0?.1:1:a),x=yt(ya(e+b,E/10),24),C=e<=f&&(h==1||h==3&&x>=f||h==2&&x<=f)?f:-Mt,G=qn(l,x>C&&e<=C?C:mn(C,x));return I==G&&I==0&&(G=100),[I,G]}const N_=new Intl.NumberFormat(Lr?R_.language:"en-US"),ko=i=>N_.format(i),An=Math,Ma=An.PI,qt=An.abs,wn=An.floor,Yt=An.round,Fn=An.ceil,qn=An.min,mn=An.max,Ur=An.pow,hu=An.sign,di=An.log10,du=An.log2,F_=(i,e=1)=>An.sinh(i)*e,Ho=(i,e=1)=>An.asinh(i/e),Mt=1/0;function pu(i){return(di((i^i>>31)-(i>>31))|0)+1}function Wo(i,e,t){return qn(mn(i,e),t)}function mu(i){return typeof i=="function"}function at(i){return mu(i)?i:()=>i}const B_=()=>{},gu=i=>i,_u=(i,e)=>e,O_=i=>null,vu=i=>!0,xu=(i,e)=>i==e,z_=/\.\d*?(?=9{6,}|0{6,})/gm,ji=i=>{if(yu(i)||Pi.has(i))return i;const e=`${i}`,t=e.match(z_);if(t==null)return i;let n=t[0].length-1;if(e.indexOf("e-")!=-1){let[r,s]=e.split("e");return+`${ji(r)}e${s}`}return yt(i,n)};function Ki(i,e){return ji(yt(ji(i/e))*e)}function ya(i,e){return ji(Fn(ji(i/e))*e)}function Su(i,e){return ji(wn(ji(i/e))*e)}function yt(i,e=0){if(yu(i))return i;let t=10**e,n=i*t*(1+Number.EPSILON);return Yt(n)/t}const Pi=new Map;function Mu(i){return((""+i).split(".")[1]||"").length}function _s(i,e,t,n){let r=[],s=n.map(Mu);for(let a=e;a<t;a++){let o=qt(a),l=yt(Ur(i,a),o);for(let c=0;c<n.length;c++){let f=i==10?+`${n[c]}e${a}`:n[c]*l,u=(a>=0?0:o)+(a>=s[c]?0:s[c]),h=i==10?f:yt(f,u);r.push(h),Pi.set(h,u)}}return r}const vs={},Xo=[],Ir=[null,null],Li=Array.isArray,yu=Number.isInteger,G_=i=>i===void 0;function Eu(i){return typeof i=="string"}function Ea(i){let e=!1;if(i!=null){let t=i.constructor;e=t==null||t==Object}return e}function V_(i){return i!=null&&typeof i=="object"}const k_=Object.getPrototypeOf(Uint8Array),Tu="__proto__";function Nr(i,e=Ea){let t;if(Li(i)){let n=i.find(r=>r!=null);if(Li(n)||e(n)){t=Array(i.length);for(let r=0;r<i.length;r++)t[r]=Nr(i[r],e)}else t=i.slice()}else if(i instanceof k_)t=i.slice();else if(e(i)){t={};for(let n in i)n!=Tu&&(t[n]=Nr(i[n],e))}else t=i;return t}function zt(i){let e=arguments;for(let t=1;t<e.length;t++){let n=e[t];for(let r in n)r!=Tu&&(Ea(i[r])?zt(i[r],Nr(n[r])):i[r]=Nr(n[r]))}return i}const H_=0,W_=1,X_=2;function q_(i,e,t){for(let n=0,r,s=-1;n<e.length;n++){let a=e[n];if(a>s){for(r=a-1;r>=0&&i[r]==null;)i[r--]=null;for(r=a+1;r<t&&i[r]==null;)i[s=r++]=null}}}function Y_(i,e){if(K_(i)){let a=i[0].slice();for(let o=1;o<i.length;o++)a.push(...i[o].slice(1));return Z_(a[0])||(a=j_(a)),a}let t=new Set;for(let a=0;a<i.length;a++){let l=i[a][0],c=l.length;for(let f=0;f<c;f++)t.add(l[f])}let n=[Array.from(t).sort((a,o)=>a-o)],r=n[0].length,s=new Map;for(let a=0;a<r;a++)s.set(n[0][a],a);for(let a=0;a<i.length;a++){let o=i[a],l=o[0];for(let c=1;c<o.length;c++){let f=o[c],u=Array(r).fill(void 0),h=e?e[a][c]:W_,m=[];for(let _=0;_<f.length;_++){let v=f[_],p=s.get(l[_]);v===null?h!=H_&&(u[p]=v,h==X_&&m.push(p)):u[p]=v}q_(u,m,r),n.push(u)}}return n}const $_=typeof queueMicrotask>"u"?i=>Promise.resolve().then(i):queueMicrotask;function j_(i){let e=i[0],t=e.length,n=Array(t);for(let s=0;s<n.length;s++)n[s]=s;n.sort((s,a)=>e[s]-e[a]);let r=[];for(let s=0;s<i.length;s++){let a=i[s],o=Array(t);for(let l=0;l<t;l++)o[l]=a[n[l]];r.push(o)}return r}function K_(i){let e=i[0][0],t=e.length;for(let n=1;n<i.length;n++){let r=i[n][0];if(r.length!=t)return!1;if(r!=e){for(let s=0;s<t;s++)if(r[s]!=e[s])return!1}}return!0}function Z_(i,e=100){const t=i.length;if(t<=1)return!0;let n=0,r=t-1;for(;n<=r&&i[n]==null;)n++;for(;r>=n&&i[r]==null;)r--;if(r<=n)return!0;const s=mn(1,wn((r-n+1)/e));for(let a=i[n],o=n+s;o<=r;o+=s){const l=i[o];if(l!=null){if(l<=a)return!1;a=l}}return!0}const bu=["January","February","March","April","May","June","July","August","September","October","November","December"],Au=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function wu(i){return i.slice(0,3)}const J_=Au.map(wu),Q_=bu.map(wu),e0={MMMM:bu,MMM:Q_,WWWW:Au,WWW:J_};function xs(i){return(i<10?"0":"")+i}function t0(i){return(i<10?"00":i<100?"0":"")+i}const n0={YYYY:i=>i.getFullYear(),YY:i=>(i.getFullYear()+"").slice(2),MMMM:(i,e)=>e.MMMM[i.getMonth()],MMM:(i,e)=>e.MMM[i.getMonth()],MM:i=>xs(i.getMonth()+1),M:i=>i.getMonth()+1,DD:i=>xs(i.getDate()),D:i=>i.getDate(),WWWW:(i,e)=>e.WWWW[i.getDay()],WWW:(i,e)=>e.WWW[i.getDay()],HH:i=>xs(i.getHours()),H:i=>i.getHours(),h:i=>{let e=i.getHours();return e==0?12:e>12?e-12:e},AA:i=>i.getHours()>=12?"PM":"AM",aa:i=>i.getHours()>=12?"pm":"am",a:i=>i.getHours()>=12?"p":"a",mm:i=>xs(i.getMinutes()),m:i=>i.getMinutes(),ss:i=>xs(i.getSeconds()),s:i=>i.getSeconds(),fff:i=>t0(i.getMilliseconds())};function qo(i,e){e=e||e0;let t=[],n=/\{([a-z]+)\}|[^{]+/gi,r;for(;r=n.exec(i);)t.push(r[0][0]=="{"?n0[r[1]]:r[0]);return s=>{let a="";for(let o=0;o<t.length;o++)a+=typeof t[o]=="string"?t[o]:t[o](s,e);return a}}const i0=new Intl.DateTimeFormat().resolvedOptions().timeZone;function r0(i,e){let t;return e=="UTC"||e=="Etc/UTC"?t=new Date(+i+i.getTimezoneOffset()*6e4):e==i0?t=i:(t=new Date(i.toLocaleString("en-US",{timeZone:e})),t.setMilliseconds(i.getMilliseconds())),t}const Cu=i=>i%1==0,Ta=[1,2,2.5,5],s0=_s(10,-32,0,Ta),Ru=_s(10,0,32,Ta),a0=Ru.filter(Cu),Zi=s0.concat(Ru),Yo=`
`,Pu="{YYYY}",Lu=Yo+Pu,Du="{M}/{D}",Ss=Yo+Du,ba=Ss+"/{YY}",Uu="{aa}",Fr="{h}:{mm}"+Uu,Iu=Yo+Fr,Nu=":{ss}",gt=null;function Fu(i){let e=i*1e3,t=e*60,n=t*60,r=n*24,s=r*30,a=r*365,l=(i==1?_s(10,0,3,Ta).filter(Cu):_s(10,-3,0,Ta)).concat([e,e*5,e*10,e*15,e*30,t,t*5,t*10,t*15,t*30,n,n*2,n*3,n*4,n*6,n*8,n*12,r,r*2,r*3,r*4,r*5,r*6,r*7,r*8,r*9,r*10,r*15,s,s*2,s*3,s*4,s*6,a,a*2,a*5,a*10,a*25,a*50,a*100]);const c=[[a,Pu,gt,gt,gt,gt,gt,gt,1],[r*28,"{MMM}",Lu,gt,gt,gt,gt,gt,1],[r,Du,Lu,gt,gt,gt,gt,gt,1],[n,"{h}"+Uu,ba,gt,Ss,gt,gt,gt,1],[t,Fr,ba,gt,Ss,gt,gt,gt,1],[e,Nu,ba+" "+Fr,gt,Ss+" "+Fr,gt,Iu,gt,1],[i,Nu+".{fff}",ba+" "+Fr,gt,Ss+" "+Fr,gt,Iu,gt,1]];function f(u){return(h,m,_,v,p,d)=>{let y=[],S=p>=a,E=p>=s&&p<a,F=u(_),w=yt(F*i,3),R=$o(F.getFullYear(),S?0:F.getMonth(),E||S?1:F.getDate()),I=yt(R*i,3);if(E||S){let b=E?p/s:0,x=S?p/a:0,C=w==I?w:yt($o(R.getFullYear()+x,R.getMonth()+b,1)*i,3),G=new Date(Yt(C/i)),N=G.getFullYear(),O=G.getMonth();for(let W=0;C<=v;W++){let z=$o(N+x*W,O+b*W,1),Z=z-u(yt(z*i,3));C=yt((+z+Z)*i,3),C<=v&&y.push(C)}}else{let b=p>=r?r:p,x=wn(_)-wn(w),C=I+x+ya(w-I,b);y.push(C);let G=u(C),N=G.getHours()+G.getMinutes()/t+G.getSeconds()/n,O=p/n,W=h.axes[m]._space,z=d/W;for(;C=yt(C+p,i==1?0:3),!(C>v);)if(O>1){let Z=wn(yt(N+O,6))%24,ce=u(C).getHours()-Z;ce>1&&(ce=-1),C-=ce*n,N=(N+O)%24;let pe=y[y.length-1];yt((C-pe)/p,3)*z>=.7&&y.push(C)}else y.push(C)}return y}}return[l,c,f]}const[o0,l0,c0]=Fu(1),[u0,f0,h0]=Fu(.001);_s(2,-53,53,[1]);function Bu(i,e){return i.map(t=>t.map((n,r)=>r==0||r==8||n==null?n:e(r==1||t[8]==0?n:t[1]+n)))}function Ou(i,e){return(t,n,r,s,a)=>{let o=e.find(_=>a>=_[0])||e[e.length-1],l,c,f,u,h,m;return n.map(_=>{let v=i(_),p=v.getFullYear(),d=v.getMonth(),y=v.getDate(),S=v.getHours(),E=v.getMinutes(),F=v.getSeconds(),w=p!=l&&o[2]||d!=c&&o[3]||y!=f&&o[4]||S!=u&&o[5]||E!=h&&o[6]||F!=m&&o[7]||o[1];return l=p,c=d,f=y,u=S,h=E,m=F,w(v)})}}function d0(i,e){let t=qo(e);return(n,r,s,a,o)=>r.map(l=>t(i(l)))}function $o(i,e,t){return new Date(i,e,t)}function zu(i,e){return e(i)}const p0="{YYYY}-{MM}-{DD} {h}:{mm}{aa}";function Gu(i,e){return(t,n,r,s)=>s==null?Io:e(i(n))}function m0(i,e){let t=i.series[e];return t.width?t.stroke(i,e):t.points.width?t.points.stroke(i,e):null}function g0(i,e){return i.series[e].fill(i,e)}const _0={show:!0,live:!0,isolate:!1,mount:B_,markers:{show:!0,width:2,stroke:m0,fill:g0,dash:"solid"},idx:null,idxs:null,values:[]};function v0(i,e){let t=i.cursor.points,n=Nn(),r=t.size(i,e);wt(n,ds,r),wt(n,ps,r);let s=r/-2;wt(n,"marginLeft",s),wt(n,"marginTop",s);let a=t.width(i,e,r);return a&&wt(n,"borderWidth",a),n}function x0(i,e){let t=i.series[e].points;return t._fill||t._stroke}function S0(i,e){let t=i.series[e].points;return t._stroke||t._fill}function M0(i,e){return i.series[e].points.size}const jo=[0,0];function y0(i,e,t){return jo[0]=e,jo[1]=t,jo}function Aa(i,e,t,n=!0){return r=>{r.button==0&&(!n||r.target==e)&&t(r)}}function Ko(i,e,t,n=!0){return r=>{(!n||r.target==e)&&t(r)}}const E0={show:!0,x:!0,y:!0,lock:!1,move:y0,points:{one:!1,show:v0,size:M0,width:0,stroke:S0,fill:x0},bind:{mousedown:Aa,mouseup:Aa,click:Aa,dblclick:Aa,mousemove:Ko,mouseleave:Ko,mouseenter:Ko},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(i,e)=>{e.stopPropagation(),e.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(i,e,t,n,r)=>n-r,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},Vu={show:!0,stroke:"rgba(0,0,0,0.07)",width:2},Zo=zt({},Vu,{filter:_u}),ku=zt({},Zo,{size:10}),Hu=zt({},Vu,{show:!1}),Jo='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',Wu="bold "+Jo,Xu=1.5,qu={show:!0,scale:"x",stroke:Lo,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:Wu,side:2,grid:Zo,ticks:ku,border:Hu,font:Jo,lineGap:Xu,rotate:0},T0="Value",b0="Time",Yu={show:!0,scale:"x",auto:!1,sorted:1,min:Mt,max:-Mt,idxs:[]};function A0(i,e,t,n,r){return e.map(s=>s==null?"":ko(s))}function w0(i,e,t,n,r,s,a){let o=[],l=Pi.get(r)||0;t=a?t:yt(ya(t,r),l);for(let c=t;c<=n;c=yt(c+r,l))o.push(Object.is(c,-0)?0:c);return o}function Qo(i,e,t,n,r,s,a){const o=[],l=i.scales[i.axes[e].scale].log,c=l==10?di:du,f=wn(c(t));r=Ur(l,f),l==10&&(r=Zi[Xn(r,Zi)]);let u=t,h=r*l;l==10&&(h=Zi[Xn(h,Zi)]);do o.push(u),u=u+r,l==10&&!Pi.has(u)&&(u=yt(u,Pi.get(r))),u>=h&&(r=u,h=r*l,l==10&&(h=Zi[Xn(h,Zi)]));while(u<=n);return o}function C0(i,e,t,n,r,s,a){let l=i.scales[i.axes[e].scale].asinh,c=n>l?Qo(i,e,mn(l,t),n,r):[l],f=n>=0&&t<=0?[0]:[];return(t<-l?Qo(i,e,mn(l,-n),-t,r):[l]).reverse().map(h=>-h).concat(f,c)}const $u=/./,R0=/[12357]/,P0=/[125]/,ju=/1/,el=(i,e,t,n)=>i.map((r,s)=>e==4&&r==0||s%n==0&&t.test(r.toExponential()[r<0?1:0])?r:null);function L0(i,e,t,n,r){let s=i.axes[t],a=s.scale,o=i.scales[a],l=i.valToPos,c=s._space,f=l(10,a),u=l(9,a)-f>=c?$u:l(7,a)-f>=c?R0:l(5,a)-f>=c?P0:ju;if(u==ju){let h=qt(l(1,a)-f);if(h<c)return el(e.slice().reverse(),o.distr,u,Fn(c/h)).reverse()}return el(e,o.distr,u,1)}function D0(i,e,t,n,r){let s=i.axes[t],a=s.scale,o=s._space,l=i.valToPos,c=qt(l(1,a)-l(2,a));return c<o?el(e.slice().reverse(),3,$u,Fn(o/c)).reverse():e}function U0(i,e,t,n){return n==null?Io:e==null?"":ko(e)}const Ku={show:!0,scale:"y",stroke:Lo,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:Wu,side:3,grid:Zo,ticks:ku,border:Hu,font:Jo,lineGap:Xu,rotate:0};function I0(i,e){let t=3+(i||1)*2;return yt(t*e,3)}function N0(i,e){let{scale:t,idxs:n}=i.series[0],r=i._data[0],s=i.valToPos(r[n[0]],t,!0),a=i.valToPos(r[n[1]],t,!0),o=qt(a-s),l=i.series[e],c=o/(l.points.space*pt);return n[1]-n[0]<=c}const Zu={scale:null,auto:!0,sorted:0,min:Mt,max:-Mt},Ju=(i,e,t,n,r)=>r,Qu={show:!0,auto:!0,sorted:0,gaps:Ju,alpha:1,facets:[zt({},Zu,{scale:"x"}),zt({},Zu,{scale:"y"})]},ef={scale:"y",auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:Ju,alpha:1,points:{show:N0,filter:null},values:null,min:Mt,max:-Mt,idxs:[],path:null,clip:null};function F0(i,e,t,n,r){return t/10}const tf={time:l_,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},B0=zt({},tf,{time:!1,ori:1}),nf={};function rf(i,e){let t=nf[i];return t||(t={key:i,plots:[],sub(n){t.plots.push(n)},unsub(n){t.plots=t.plots.filter(r=>r!=n)},pub(n,r,s,a,o,l,c){for(let f=0;f<t.plots.length;f++)t.plots[f]!=r&&t.plots[f].pub(n,r,s,a,o,l,c)}},i!=null&&(nf[i]=t)),t}const Br=1,tl=2;function Ji(i,e,t){const n=i.mode,r=i.series[e],s=n==2?i._data[e]:i._data,a=i.scales,o=i.bbox;let l=s[0],c=n==2?s[1]:s[e],f=n==2?a[r.facets[0].scale]:a[i.series[0].scale],u=n==2?a[r.facets[1].scale]:a[r.scale],h=o.left,m=o.top,_=o.width,v=o.height,p=i.valToPosH,d=i.valToPosV;return f.ori==0?t(r,l,c,f,u,p,d,h,m,_,v,Ca,Or,Pa,of,cf):t(r,l,c,f,u,d,p,m,h,v,_,Ra,zr,rl,lf,uf)}function nl(i,e){let t=0,n=0,r=ft(i.bands,Xo);for(let s=0;s<r.length;s++){let a=r[s];a.series[0]==e?t=a.dir:a.series[1]==e&&(a.dir==1?n|=1:n|=2)}return[t,n==1?-1:n==2?1:n==3?2:0]}function O0(i,e,t,n,r){let s=i.mode,a=i.series[e],o=s==2?a.facets[1].scale:a.scale,l=i.scales[o];return r==-1?l.min:r==1?l.max:l.distr==3?l.dir==1?l.min:l.max:0}function pi(i,e,t,n,r,s){return Ji(i,e,(a,o,l,c,f,u,h,m,_,v,p)=>{let d=a.pxRound;const y=c.dir*(c.ori==0?1:-1),S=c.ori==0?Or:zr;let E,F;y==1?(E=t,F=n):(E=n,F=t);let w=d(u(o[E],c,v,m)),R=d(h(l[E],f,p,_)),I=d(u(o[F],c,v,m)),b=d(h(s==1?f.max:f.min,f,p,_)),x=new Path2D(r);return S(x,I,b),S(x,w,b),S(x,w,R),x})}function wa(i,e,t,n,r,s){let a=null;if(i.length>0){a=new Path2D;const o=e==0?Pa:rl;let l=t;for(let u=0;u<i.length;u++){let h=i[u];if(h[1]>h[0]){let m=h[0]-l;m>0&&o(a,l,n,m,n+s),l=h[1]}}let c=t+r-l,f=10;c>0&&o(a,l,n-f/2,c,n+s+f)}return a}function z0(i,e,t){let n=i[i.length-1];n&&n[0]==e?n[1]=t:i.push([e,t])}function il(i,e,t,n,r,s,a){let o=[],l=i.length;for(let c=r==1?t:n;c>=t&&c<=n;c+=r)if(e[c]===null){let u=c,h=c;if(r==1)for(;++c<=n&&e[c]===null;)h=c;else for(;--c>=t&&e[c]===null;)h=c;let m=s(i[u]),_=h==u?m:s(i[h]),v=u-r;m=a<=0&&v>=0&&v<l?s(i[v]):m;let d=h+r;_=a>=0&&d>=0&&d<l?s(i[d]):_,_>=m&&o.push([m,_])}return o}function sf(i){return i==0?gu:i==1?Yt:e=>Ki(e,i)}function af(i){let e=i==0?Ca:Ra,t=i==0?(r,s,a,o,l,c)=>{r.arcTo(s,a,o,l,c)}:(r,s,a,o,l,c)=>{r.arcTo(a,s,l,o,c)},n=i==0?(r,s,a,o,l)=>{r.rect(s,a,o,l)}:(r,s,a,o,l)=>{r.rect(a,s,l,o)};return(r,s,a,o,l,c=0,f=0)=>{c==0&&f==0?n(r,s,a,o,l):(c=qn(c,o/2,l/2),f=qn(f,o/2,l/2),e(r,s+c,a),t(r,s+o,a,s+o,a+l,c),t(r,s+o,a+l,s,a+l,f),t(r,s,a+l,s,a,f),t(r,s,a,s+o,a,c),r.closePath())}}const Ca=(i,e,t)=>{i.moveTo(e,t)},Ra=(i,e,t)=>{i.moveTo(t,e)},Or=(i,e,t)=>{i.lineTo(e,t)},zr=(i,e,t)=>{i.lineTo(t,e)},Pa=af(0),rl=af(1),of=(i,e,t,n,r,s)=>{i.arc(e,t,n,r,s)},lf=(i,e,t,n,r,s)=>{i.arc(t,e,n,r,s)},cf=(i,e,t,n,r,s,a)=>{i.bezierCurveTo(e,t,n,r,s,a)},uf=(i,e,t,n,r,s,a)=>{i.bezierCurveTo(t,e,r,n,a,s)};function ff(i){return(e,t,n,r,s)=>Ji(e,t,(a,o,l,c,f,u,h,m,_,v,p)=>{let{pxRound:d,points:y}=a,S,E;c.ori==0?(S=Ca,E=of):(S=Ra,E=lf);const F=yt(y.width*pt,3);let w=(y.size-y.width)/2*pt,R=yt(w*2,3),I=new Path2D,b=new Path2D,{left:x,top:C,width:G,height:N}=e.bbox;Pa(b,x-R,C-R,G+R*2,N+R*2);const O=W=>{if(l[W]!=null){let z=d(u(o[W],c,v,m)),Z=d(h(l[W],f,p,_));S(I,z+w,Z),E(I,z,Z,w,0,Ma*2)}};if(s)s.forEach(O);else for(let W=n;W<=r;W++)O(W);return{stroke:F>0?I:null,fill:I,clip:b,flags:Br|tl}})}function hf(i){return(e,t,n,r,s,a)=>{n!=r&&(s!=n&&a!=n&&i(e,t,n),s!=r&&a!=r&&i(e,t,r),i(e,t,a))}}const G0=hf(Or),V0=hf(zr);function df(i){const e=ft(i?.alignGaps,0);return(t,n,r,s)=>Ji(t,n,(a,o,l,c,f,u,h,m,_,v,p)=>{[r,s]=va(l,r,s);let d=a.pxRound,y=N=>d(u(N,c,v,m)),S=N=>d(h(N,f,p,_)),E,F;c.ori==0?(E=Or,F=G0):(E=zr,F=V0);const w=c.dir*(c.ori==0?1:-1),R={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:Br},I=R.stroke;let b=!1;if(s-r>=v*4){let N=he=>t.posToVal(he,c.key,!0),O=null,W=null,z,Z,K,fe=y(o[w==1?r:s]),ce=y(o[r]),pe=y(o[s]),Te=N(w==1?ce+1:pe-1);for(let he=w==1?r:s;he>=r&&he<=s;he+=w){let Q=o[he],me=(w==1?Q<Te:Q>Te)?fe:y(Q),ae=l[he];me==fe?ae!=null?(Z=ae,O==null?(E(I,me,S(Z)),z=O=W=Z):Z<O?O=Z:Z>W&&(W=Z)):ae===null&&(b=!0):(O!=null&&F(I,fe,S(O),S(W),S(z),S(Z)),ae!=null?(Z=ae,E(I,me,S(Z)),O=W=z=Z):(O=W=null,ae===null&&(b=!0)),fe=me,Te=N(fe+w))}O!=null&&O!=W&&K!=fe&&F(I,fe,S(O),S(W),S(z),S(Z))}else for(let N=w==1?r:s;N>=r&&N<=s;N+=w){let O=l[N];O===null?b=!0:O!=null&&E(I,y(o[N]),S(O))}let[C,G]=nl(t,n);if(a.fill!=null||C!=0){let N=R.fill=new Path2D(I),O=a.fillTo(t,n,a.min,a.max,C),W=S(O),z=y(o[r]),Z=y(o[s]);w==-1&&([Z,z]=[z,Z]),E(N,Z,W),E(N,z,W)}if(!a.spanGaps){let N=[];b&&N.push(...il(o,l,r,s,w,y,e)),R.gaps=N=a.gaps(t,n,r,s,N),R.clip=wa(N,c.ori,m,_,v,p)}return G!=0&&(R.band=G==2?[pi(t,n,r,s,I,-1),pi(t,n,r,s,I,1)]:pi(t,n,r,s,I,G)),R})}function k0(i){const e=ft(i.align,1),t=ft(i.ascDesc,!1),n=ft(i.alignGaps,0),r=ft(i.extend,!1);return(s,a,o,l)=>Ji(s,a,(c,f,u,h,m,_,v,p,d,y,S)=>{[o,l]=va(u,o,l);let E=c.pxRound,{left:F,width:w}=s.bbox,R=ce=>E(_(ce,h,y,p)),I=ce=>E(v(ce,m,S,d)),b=h.ori==0?Or:zr;const x={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:Br},C=x.stroke,G=h.dir*(h.ori==0?1:-1);let N=I(u[G==1?o:l]),O=R(f[G==1?o:l]),W=O,z=O;r&&e==-1&&(z=F,b(C,z,N)),b(C,O,N);for(let ce=G==1?o:l;ce>=o&&ce<=l;ce+=G){let pe=u[ce];if(pe==null)continue;let Te=R(f[ce]),he=I(pe);e==1?b(C,Te,N):b(C,W,he),b(C,Te,he),N=he,W=Te}let Z=W;r&&e==1&&(Z=F+w,b(C,Z,N));let[K,fe]=nl(s,a);if(c.fill!=null||K!=0){let ce=x.fill=new Path2D(C),pe=c.fillTo(s,a,c.min,c.max,K),Te=I(pe);b(ce,Z,Te),b(ce,z,Te)}if(!c.spanGaps){let ce=[];ce.push(...il(f,u,o,l,G,R,n));let pe=c.width*pt/2,Te=t||e==1?pe:-pe,he=t||e==-1?-pe:pe;ce.forEach(Q=>{Q[0]+=Te,Q[1]+=he}),x.gaps=ce=c.gaps(s,a,o,l,ce),x.clip=wa(ce,h.ori,p,d,y,S)}return fe!=0&&(x.band=fe==2?[pi(s,a,o,l,C,-1),pi(s,a,o,l,C,1)]:pi(s,a,o,l,C,fe)),x})}function pf(i,e,t,n,r,s,a=Mt){if(i.length>1){let o=null;for(let l=0,c=1/0;l<i.length;l++)if(e[l]!==void 0){if(o!=null){let f=qt(i[l]-i[o]);f<c&&(c=f,a=qt(t(i[l],n,r,s)-t(i[o],n,r,s)))}o=l}}return a}function H0(i){i=i||vs;const e=ft(i.size,[.6,Mt,1]),t=i.align||0,n=i.gap||0;let r=i.radius;r=r==null?[0,0]:typeof r=="number"?[r,0]:r;const s=at(r),a=1-e[0],o=ft(e[1],Mt),l=ft(e[2],1),c=ft(i.disp,vs),f=ft(i.each,m=>{}),{fill:u,stroke:h}=c;return(m,_,v,p)=>Ji(m,_,(d,y,S,E,F,w,R,I,b,x,C)=>{let G=d.pxRound,N=t,O=n*pt,W=o*pt,z=l*pt,Z,K;E.ori==0?[Z,K]=s(m,_):[K,Z]=s(m,_);const fe=E.dir*(E.ori==0?1:-1);let ce=E.ori==0?Pa:rl,pe=E.ori==0?f:(X,Ee,ve,Re,Ke,_e,Pe)=>{f(X,Ee,ve,Ke,Re,Pe,_e)},Te=ft(m.bands,Xo).find(X=>X.series[0]==_),he=Te!=null?Te.dir:0,Q=d.fillTo(m,_,d.min,d.max,he),se=G(R(Q,F,C,b)),me,ae,ee,ue=x,xe=G(d.width*pt),oe=!1,D=null,Oe=null,Be=null,Fe=null;u!=null&&(xe==0||h!=null)&&(oe=!0,D=u.values(m,_,v,p),Oe=new Map,new Set(D).forEach(X=>{X!=null&&Oe.set(X,new Path2D)}),xe>0&&(Be=h.values(m,_,v,p),Fe=new Map,new Set(Be).forEach(X=>{X!=null&&Fe.set(X,new Path2D)})));let{x0:ye,size:it}=c;if(ye!=null&&it!=null){N=1,y=ye.values(m,_,v,p),ye.unit==2&&(y=y.map(ve=>m.posToVal(I+ve*x,E.key,!0)));let X=it.values(m,_,v,p);it.unit==2?ae=X[0]*x:ae=w(X[0],E,x,I)-w(0,E,x,I),ue=pf(y,S,w,E,x,I,ue),ee=ue-ae+O}else ue=pf(y,S,w,E,x,I,ue),ee=ue*a+O,ae=ue-ee;ee<1&&(ee=0),xe>=ae/2&&(xe=0),ee<5&&(G=gu);let He=ee>0,Ve=ue-ee-(He?xe:0);ae=G(Wo(Ve,z,W)),me=(N==0?ae/2:N==fe?0:ae)-N*fe*((N==0?O/2:0)+(He?xe/2:0));const U={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},T=oe?null:new Path2D;let q=null;if(Te!=null)q=m.data[Te.series[1]];else{let{y0:X,y1:Ee}=c;X!=null&&Ee!=null&&(S=Ee.values(m,_,v,p),q=X.values(m,_,v,p))}let le=Z*ae,te=K*ae;for(let X=fe==1?v:p;X>=v&&X<=p;X+=fe){let Ee=S[X];if(Ee==null)continue;if(q!=null){let Ae=q[X]??0;if(Ee-Ae==0)continue;se=R(Ae,F,C,b)}let ve=E.distr!=2||c!=null?y[X]:X,Re=w(ve,E,x,I),Ke=R(ft(Ee,Q),F,C,b),_e=G(Re-me),Pe=G(mn(Ke,se)),Ze=G(qn(Ke,se)),Ge=Pe-Ze;if(Ee!=null){let Ae=Ee<0?te:le,We=Ee<0?le:te;oe?(xe>0&&Be[X]!=null&&ce(Fe.get(Be[X]),_e,Ze+wn(xe/2),ae,mn(0,Ge-xe),Ae,We),D[X]!=null&&ce(Oe.get(D[X]),_e,Ze+wn(xe/2),ae,mn(0,Ge-xe),Ae,We)):ce(T,_e,Ze+wn(xe/2),ae,mn(0,Ge-xe),Ae,We),pe(m,_,X,_e-xe/2,Ze,ae+xe,Ge)}}return xe>0?U.stroke=oe?Fe:T:oe||(U._fill=d.width==0?d._fill:d._stroke??d._fill,U.width=0),U.fill=oe?Oe:T,U})}function W0(i,e){const t=ft(e?.alignGaps,0);return(n,r,s,a)=>Ji(n,r,(o,l,c,f,u,h,m,_,v,p,d)=>{[s,a]=va(c,s,a);let y=o.pxRound,S=Z=>y(h(Z,f,p,_)),E=Z=>y(m(Z,u,d,v)),F,w,R;f.ori==0?(F=Ca,R=Or,w=cf):(F=Ra,R=zr,w=uf);const I=f.dir*(f.ori==0?1:-1);let b=S(l[I==1?s:a]),x=b,C=[],G=[];for(let Z=I==1?s:a;Z>=s&&Z<=a;Z+=I)if(c[Z]!=null){let fe=l[Z],ce=S(fe);C.push(x=ce),G.push(E(c[Z]))}const N={stroke:i(C,G,F,R,w,y),fill:null,clip:null,band:null,gaps:null,flags:Br},O=N.stroke;let[W,z]=nl(n,r);if(o.fill!=null||W!=0){let Z=N.fill=new Path2D(O),K=o.fillTo(n,r,o.min,o.max,W),fe=E(K);R(Z,x,fe),R(Z,b,fe)}if(!o.spanGaps){let Z=[];Z.push(...il(l,c,s,a,I,S,t)),N.gaps=Z=o.gaps(n,r,s,a,Z),N.clip=wa(Z,f.ori,_,v,p,d)}return z!=0&&(N.band=z==2?[pi(n,r,s,a,O,-1),pi(n,r,s,a,O,1)]:pi(n,r,s,a,O,z)),N})}function X0(i){return W0(q0,i)}function q0(i,e,t,n,r,s){const a=i.length;if(a<2)return null;const o=new Path2D;if(t(o,i[0],e[0]),a==2)n(o,i[1],e[1]);else{let l=Array(a),c=Array(a-1),f=Array(a-1),u=Array(a-1);for(let h=0;h<a-1;h++)f[h]=e[h+1]-e[h],u[h]=i[h+1]-i[h],c[h]=f[h]/u[h];l[0]=c[0];for(let h=1;h<a-1;h++)c[h]===0||c[h-1]===0||c[h-1]>0!=c[h]>0?l[h]=0:(l[h]=3*(u[h-1]+u[h])/((2*u[h]+u[h-1])/c[h-1]+(u[h]+2*u[h-1])/c[h]),isFinite(l[h])||(l[h]=0));l[a-1]=c[a-2];for(let h=0;h<a-1;h++)r(o,i[h]+u[h]/3,e[h]+l[h]*u[h]/3,i[h+1]-u[h]/3,e[h+1]-l[h+1]*u[h]/3,i[h+1],e[h+1])}return o}const sl=new Set;function mf(){for(let i of sl)i.syncRect(!0)}Lr&&($i(w_,Dr,mf),$i(C_,Dr,mf,!0),$i(ga,Dr,()=>{cn.pxRatio=pt}));const Y0=df(),$0=ff();function gf(i,e,t,n){return(n?[i[0],i[1]].concat(i.slice(2)):[i[0]].concat(i.slice(1))).map((s,a)=>al(s,a,e,t))}function j0(i,e){return i.map((t,n)=>n==0?{}:zt({},e,t))}function al(i,e,t,n){return zt({},e==0?t:n,i)}function _f(i,e,t){return e==null?Ir:[e,t]}const K0=_f;function Z0(i,e,t){return e==null?Ir:Sa(e,t,Vo,!0)}function vf(i,e,t,n){return e==null?Ir:xa(e,t,i.scales[n].log,!1)}const J0=vf;function xf(i,e,t,n){return e==null?Ir:Go(e,t,i.scales[n].log,!1)}const Q0=xf;function ev(i,e,t,n,r){let s=mn(pu(i),pu(e)),a=e-i,o=Xn(r/n*a,t);do{let l=t[o],c=n*l/a;if(c>=r&&s+(l<5?Pi.get(l):0)<=17)return[l,c]}while(++o<t.length);return[0,0]}function Sf(i){let e,t;return i=i.replace(/(\d+)px/,(n,r)=>(e=Yt((t=+r)*pt))+"px"),[i,e,t]}function tv(i){i.show&&[i.font,i.labelFont].forEach(e=>{let t=yt(e[2]*pt,1);e[0]=e[0].replace(/[0-9.]+px/,t+"px"),e[1]=t})}function cn(i,e,t){const n={mode:ft(i.mode,1)},r=n.mode;function s(g,M,P,L){let B=M.valToPct(g);return L+P*(M.dir==-1?1-B:B)}function a(g,M,P,L){let B=M.valToPct(g);return L+P*(M.dir==-1?B:1-B)}function o(g,M,P,L){return M.ori==0?s(g,M,P,L):a(g,M,P,L)}n.valToPosH=s,n.valToPosV=a;let l=!1;n.status=0;const c=n.root=Nn(c_);if(i.id!=null&&(c.id=i.id),bn(c,i.class),i.title){let g=Nn(h_,c);g.textContent=i.title}const f=Wn("canvas"),u=n.ctx=f.getContext("2d"),h=Nn(d_,c);$i("click",h,g=>{g.target===_&&(Ct!=$r||Lt!=jr)&&an.click(n,g)},!0);const m=n.under=Nn(p_,h);h.appendChild(f);const _=n.over=Nn(m_,h);i=Nr(i);const v=+ft(i.pxAlign,1),p=sf(v);(i.plugins||[]).forEach(g=>{g.opts&&(i=g.opts(n,i)||i)});const d=i.ms||.001,y=n.series=r==1?gf(i.series||[],Yu,ef,!1):j0(i.series||[null],Qu),S=n.axes=gf(i.axes||[],qu,Ku,!0),E=n.scales={},F=n.bands=i.bands||[];F.forEach(g=>{g.fill=at(g.fill||null),g.dir=ft(g.dir,-1)});const w=r==2?y[1].facets[0].scale:y[0].scale,R={axes:gv,series:yn},I=(i.drawOrder||["axes","series"]).map(g=>R[g]);function b(g){const M=g.distr==3?P=>di(P>0?P:g.clamp(n,P,g.min,g.max,g.key)):g.distr==4?P=>Ho(P,g.asinh):g.distr==100?P=>g.fwd(P):P=>P;return P=>{let L=M(P),{_min:B,_max:j}=g,ie=j-B;return(L-B)/ie}}function x(g){let M=E[g];if(M==null){let P=(i.scales||vs)[g]||vs;if(P.from!=null){x(P.from);let L=zt({},E[P.from],P,{key:g});L.valToPct=b(L),E[g]=L}else{M=E[g]=zt({},g==w?tf:B0,P),M.key=g;let L=M.time,B=M.range,j=Li(B);if((g!=w||r==2&&!L)&&(j&&(B[0]==null||B[1]==null)&&(B={min:B[0]==null?uu:{mode:1,hard:B[0],soft:B[0]},max:B[1]==null?uu:{mode:1,hard:B[1],soft:B[1]}},j=!1),!j&&Ea(B))){let ie=B;B=(ge,Me,De)=>Me==null?Ir:Sa(Me,De,ie)}M.range=at(B||(L?K0:g==w?M.distr==3?J0:M.distr==4?Q0:_f:M.distr==3?vf:M.distr==4?xf:Z0)),M.auto=at(j?!1:M.auto),M.clamp=at(M.clamp||F0),M._min=M._max=null,M.valToPct=b(M)}}}x("x"),x("y"),r==1&&y.forEach(g=>{x(g.scale)}),S.forEach(g=>{x(g.scale)});for(let g in i.scales)x(g);const C=E[w],G=C.distr;let N,O;C.ori==0?(bn(c,u_),N=s,O=a):(bn(c,f_),N=a,O=s);const W={};for(let g in E){let M=E[g];(M.min!=null||M.max!=null)&&(W[g]={min:M.min,max:M.max},M.min=M.max=null)}const z=i.tzDate||(g=>new Date(Yt(g/d))),Z=i.fmtDate||qo,K=d==1?c0(z):h0(z),fe=Ou(z,Bu(d==1?l0:f0,Z)),ce=Gu(z,zu(p0,Z)),pe=[],Te=n.legend=zt({},_0,i.legend),he=n.cursor=zt({},E0,{drag:{y:r==2}},i.cursor),Q=Te.show,se=he.show,me=Te.markers;Te.idxs=pe,me.width=at(me.width),me.dash=at(me.dash),me.stroke=at(me.stroke),me.fill=at(me.fill);let ae,ee,ue,xe=[],oe=[],D,Oe=!1,Be={};if(Te.live){const g=y[1]?y[1].values:null;Oe=g!=null,D=Oe?g(n,1,0):{_:0};for(let M in D)Be[M]=Io}if(Q)if(ae=Wn("table",M_,c),ue=Wn("tbody",null,ae),Te.mount(n,ae),Oe){ee=Wn("thead",null,ae,ue);let g=Wn("tr",null,ee);Wn("th",null,g);for(var Fe in D)Wn("th",$c,g).textContent=Fe}else bn(ae,E_),Te.live&&bn(ae,y_);const ye={show:!0},it={show:!1};function He(g,M){if(M==0&&(Oe||!Te.live||r==2))return Ir;let P=[],L=Wn("tr",T_,ue,ue.childNodes[M]);bn(L,g.class),g.show||bn(L,Yi);let B=Wn("th",null,L);if(me.show){let ge=Nn(b_,B);if(M>0){let Me=me.width(n,M);Me&&(ge.style.border=Me+"px "+me.dash(n,M)+" "+me.stroke(n,M)),ge.style.background=me.fill(n,M)}}let j=Nn($c,B);g.label instanceof HTMLElement?j.appendChild(g.label):j.textContent=g.label,M>0&&(me.show||(j.style.color=g.width>0?me.stroke(n,M):me.fill(n,M)),U("click",B,ge=>{if(he._lock)return;Jt(ge);let Me=y.indexOf(g);if((ge.ctrlKey||ge.metaKey)!=Te.isolate){let De=y.some((Ue,Ne)=>Ne>0&&Ne!=Me&&Ue.show);y.forEach((Ue,Ne)=>{Ne>0&&ri(Ne,De?Ne==Me?ye:it:ye,!0,Gt.setSeries)})}else ri(Me,{show:!g.show},!0,Gt.setSeries)},!1),ni&&U(Jc,B,ge=>{he._lock||(Jt(ge),ri(y.indexOf(g),Zr,!0,Gt.setSeries))},!1));for(var ie in D){let ge=Wn("td",A_,L);ge.textContent="--",P.push(ge)}return[L,P]}const Ve=new Map;function U(g,M,P,L=!0){const B=Ve.get(M)||{},j=he.bind[g](n,M,P,L);j&&($i(g,M,B[g]=j),Ve.set(M,B))}function T(g,M,P){const L=Ve.get(M)||{};for(let B in L)(g==null||B==g)&&(zo(B,M,L[B]),delete L[B]);g==null&&Ve.delete(M)}let q=0,le=0,te=0,X=0,Ee=0,ve=0,Re=Ee,Ke=ve,_e=te,Pe=X,Ze=0,Ge=0,Ae=0,We=0;n.bbox={};let Qe=!1,xt=!1,V=!1,Se=!1,re=!1,ne=!1;function be(g,M,P){(P||g!=n.width||M!=n.height)&&qe(g,M),Wr(!1),V=!0,xt=!0,Xr()}function qe(g,M){n.width=q=te=g,n.height=le=X=M,Ee=ve=0,ht(),Yn();let P=n.bbox;Ze=P.left=Ki(Ee*pt,.5),Ge=P.top=Ki(ve*pt,.5),Ae=P.width=Ki(te*pt,.5),We=P.height=Ki(X*pt,.5)}const ot=3;function It(){let g=!1,M=0;for(;!g;){M++;let P=pv(M),L=mv(M);g=M==ot||P&&L,g||(qe(n.width,n.height),xt=!0)}}function $t({width:g,height:M}){be(g,M)}n.setSize=$t;function ht(){let g=!1,M=!1,P=!1,L=!1;S.forEach((B,j)=>{if(B.show&&B._show){let{side:ie,_size:ge}=B,Me=ie%2,De=B.label!=null?B.labelSize:0,Ue=ge+De;Ue>0&&(Me?(te-=Ue,ie==3?(Ee+=Ue,L=!0):P=!0):(X-=Ue,ie==0?(ve+=Ue,g=!0):M=!0))}}),_i[0]=g,_i[1]=P,_i[2]=M,_i[3]=L,te-=J[1]+J[3],Ee+=J[3],X-=J[2]+J[0],ve+=J[0]}function Yn(){let g=Ee+te,M=ve+X,P=Ee,L=ve;function B(j,ie){switch(j){case 1:return g+=ie,g-ie;case 2:return M+=ie,M-ie;case 3:return P-=ie,P+ie;case 0:return L-=ie,L+ie}}S.forEach((j,ie)=>{if(j.show&&j._show){let ge=j.side;j._pos=B(ge,j._size),j.label!=null&&(j._lpos=B(ge,j.labelSize))}})}if(he.dataIdx==null){let g=he.hover,M=g.skip=new Set(g.skip??[]);M.add(void 0);let P=g.prox=at(g.prox),L=g.bias??=0;he.dataIdx=(B,j,ie,ge)=>{if(j==0)return ie;let Me=ie,De=P(B,j,ie,ge)??Mt,Ue=De>=0&&De<Mt,Ne=C.ori==0?te:X,Je=he.left,mt=e[0],dt=e[j];if(M.has(dt[ie])){Me=null;let st=null,je=null,ke;if(L==0||L==-1)for(ke=ie;st==null&&ke-- >0;)M.has(dt[ke])||(st=ke);if(L==0||L==1)for(ke=ie;je==null&&ke++<dt.length;)M.has(dt[ke])||(je=ke);if(st!=null||je!=null)if(Ue){let Pt=st==null?-1/0:N(mt[st],C,Ne,0),Nt=je==null?1/0:N(mt[je],C,Ne,0),rn=Je-Pt,St=Nt-Je;rn<=St?rn<=De&&(Me=st):St<=De&&(Me=je)}else Me=je==null?st:st==null?je:ie-st<=je-ie?st:je}else Ue&&qt(Je-N(mt[ie],C,Ne,0))>De&&(Me=null);return Me}}const Jt=g=>{he.event=g};he.idxs=pe,he._lock=!1;let jt=he.points;jt.show=at(jt.show),jt.size=at(jt.size),jt.stroke=at(jt.stroke),jt.width=at(jt.width),jt.fill=at(jt.fill);const Qt=n.focus=zt({},i.focus||{alpha:.3},he.focus),ni=Qt.prox>=0,mi=ni&&jt.one;let gn=[],$n=[],gi=[];function Qi(g,M){let P=jt.show(n,M);if(P instanceof HTMLElement)return bn(P,S_),bn(P,g.class),ti(P,-10,-10,te,X),_.insertBefore(P,gn[M]),P}function Ms(g,M){if(r==1||M>0){let P=r==1&&E[g.scale].time,L=g.value;g.value=P?Eu(L)?Gu(z,zu(L,Z)):L||ce:L||U0,g.label=g.label||(P?b0:T0)}if(mi||M>0){g.width=g.width==null?1:g.width,g.paths=g.paths||Y0||O_,g.fillTo=at(g.fillTo||O0),g.pxAlign=+ft(g.pxAlign,v),g.pxRound=sf(g.pxAlign),g.stroke=at(g.stroke||null),g.fill=at(g.fill||null),g._stroke=g._fill=g._paths=g._focus=null;let P=I0(mn(1,g.width),1),L=g.points=zt({},{size:P,width:mn(1,P*.2),stroke:g.stroke,space:P*2,paths:$0,_stroke:null,_fill:null},g.points);L.show=at(L.show),L.filter=at(L.filter),L.fill=at(L.fill),L.stroke=at(L.stroke),L.paths=at(L.paths),L.pxAlign=g.pxAlign}if(Q){let P=He(g,M);xe.splice(M,0,P[0]),oe.splice(M,0,P[1]),Te.values.push(null)}if(se){pe.splice(M,0,null);let P=null;mi?M==0&&(P=Qi(g,M)):M>0&&(P=Qi(g,M)),gn.splice(M,0,P),$n.splice(M,0,0),gi.splice(M,0,0)}nn("addSeries",M)}function Ia(g,M){M=M??y.length,g=r==1?al(g,M,Yu,ef):al(g,M,{},Qu),y.splice(M,0,g),Ms(y[M],M)}n.addSeries=Ia;function ul(g){if(y.splice(g,1),Q){Te.values.splice(g,1),oe.splice(g,1);let M=xe.splice(g,1)[0];T(null,M.firstChild),M.remove()}se&&(pe.splice(g,1),gn.splice(g,1)[0].remove(),$n.splice(g,1),gi.splice(g,1)),nn("delSeries",g)}n.delSeries=ul;const _i=[!1,!1,!1,!1];function fl(g,M){if(g._show=g.show,g.show){let P=g.side%2,L=E[g.scale];L==null&&(g.scale=P?y[1].scale:w,L=E[g.scale]);let B=L.time;g.size=at(g.size),g.space=at(g.space),g.rotate=at(g.rotate),Li(g.incrs)&&g.incrs.forEach(ie=>{!Pi.has(ie)&&Pi.set(ie,Mu(ie))}),g.incrs=at(g.incrs||(L.distr==2?a0:B?d==1?o0:u0:Zi)),g.splits=at(g.splits||(B&&L.distr==1?K:L.distr==3?Qo:L.distr==4?C0:w0)),g.stroke=at(g.stroke),g.grid.stroke=at(g.grid.stroke),g.ticks.stroke=at(g.ticks.stroke),g.border.stroke=at(g.border.stroke);let j=g.values;g.values=Li(j)&&!Li(j[0])?at(j):B?Li(j)?Ou(z,Bu(j,Z)):Eu(j)?d0(z,j):j||fe:j||A0,g.filter=at(g.filter||(L.distr>=3&&L.log==10?L0:L.distr==3&&L.log==2?D0:_u)),g.font=Sf(g.font),g.labelFont=Sf(g.labelFont),g._size=g.size(n,null,M,0),g._space=g._rotate=g._incrs=g._found=g._splits=g._values=null,g._size>0&&(_i[M]=!0,g._el=Nn(g_,h))}}function A(g,M,P,L){let[B,j,ie,ge]=P,Me=M%2,De=0;return Me==0&&(ge||j)&&(De=M==0&&!B||M==2&&!ie?Yt(qu.size/3):0),Me==1&&(B||ie)&&(De=M==1&&!j||M==3&&!ge?Yt(Ku.size/2):0),De}const H=n.padding=(i.padding||[A,A,A,A]).map(g=>at(ft(g,A))),J=n._padding=H.map((g,M)=>g(n,M,_i,0));let $,k=null,de=null;const Ce=r==1?y[0].idxs:null;let Le=null,Ie=!1;function Ye(g,M){if(e=g??[],n.data=n._data=e,r==2){$=0;for(let P=1;P<y.length;P++)$+=e[P][0].length}else{e.length==0&&(n.data=n._data=e=[[]]),Le=e[0],$=Le.length;let P=e;if(G==2){P=e.slice();let L=P[0]=Array($);for(let B=0;B<$;B++)L[B]=B}n._data=e=P}if(Wr(!0),nn("setData"),G==2&&(V=!0),M!==!1){let P=C;P.auto(n,Ie)?$e():Ui(w,P.min,P.max),Se=Se||he.left>=0,ne=!0,Xr()}}n.setData=Ye;function $e(){Ie=!0;let g,M;r==1&&($>0?(k=Ce[0]=0,de=Ce[1]=$-1,g=e[0][k],M=e[0][de],G==2?(g=k,M=de):g==M&&(G==3?[g,M]=xa(g,g,C.log,!1):G==4?[g,M]=Go(g,g,C.log,!1):C.time?M=g+Yt(86400/d):[g,M]=Sa(g,M,Vo,!0))):(k=Ce[0]=g=null,de=Ce[1]=M=null)),Ui(w,g,M)}let Xe,rt,Et,Tt,sn,ct,ze,Bt,ut,bt;function vi(g,M,P,L,B,j){g??=Kc,P??=Xo,L??="butt",B??=Kc,j??="round",g!=Xe&&(u.strokeStyle=Xe=g),B!=rt&&(u.fillStyle=rt=B),M!=Et&&(u.lineWidth=Et=M),j!=sn&&(u.lineJoin=sn=j),L!=ct&&(u.lineCap=ct=L),P!=Tt&&u.setLineDash(Tt=P)}function un(g,M,P,L){M!=rt&&(u.fillStyle=rt=M),g!=ze&&(u.font=ze=g),P!=Bt&&(u.textAlign=Bt=P),L!=ut&&(u.textBaseline=ut=L)}function er(g,M,P,L,B=0){if(L.length>0&&g.auto(n,Ie)&&(M==null||M.min==null)){let j=ft(k,0),ie=ft(de,L.length-1),ge=P.min==null?D_(L,j,ie,B,g.distr==3):[P.min,P.max];g.min=qn(g.min,P.min=ge[0]),g.max=mn(g.max,P.max=ge[1])}}const Ut={min:null,max:null};function ii(){for(let L in E){let B=E[L];W[L]==null&&(B.min==null||W[w]!=null&&B.auto(n,Ie))&&(W[L]=Ut)}for(let L in E){let B=E[L];W[L]==null&&B.from!=null&&W[B.from]!=null&&(W[L]=Ut)}W[w]!=null&&Wr(!0);let g={};for(let L in W){let B=W[L];if(B!=null){let j=g[L]=Nr(E[L],V_);if(B.min!=null)zt(j,B);else if(L!=w||r==2)if($==0&&j.from==null){let ie=j.range(n,null,null,L);j.min=ie[0],j.max=ie[1]}else j.min=Mt,j.max=-Mt}}if($>0){y.forEach((L,B)=>{if(r==1){let j=L.scale,ie=W[j];if(ie==null)return;let ge=g[j];if(B==0){let Me=ge.range(n,ge.min,ge.max,j);ge.min=Me[0],ge.max=Me[1],k=Xn(ge.min,e[0]),de=Xn(ge.max,e[0]),de-k>1&&(e[0][k]<ge.min&&k++,e[0][de]>ge.max&&de--),L.min=Le[k],L.max=Le[de]}else L.show&&L.auto&&er(ge,ie,L,e[B],L.sorted);L.idxs[0]=k,L.idxs[1]=de}else if(B>0&&L.show&&L.auto){let[j,ie]=L.facets,ge=j.scale,Me=ie.scale,[De,Ue]=e[B],Ne=g[ge],Je=g[Me];Ne!=null&&er(Ne,W[ge],j,De,j.sorted),Je!=null&&er(Je,W[Me],ie,Ue,ie.sorted),L.min=ie.min,L.max=ie.max}});for(let L in g){let B=g[L],j=W[L];if(B.from==null&&(j==null||j.min==null)){let ie=B.range(n,B.min==Mt?null:B.min,B.max==-Mt?null:B.max,L);B.min=ie[0],B.max=ie[1]}}}for(let L in g){let B=g[L];if(B.from!=null){let j=g[B.from];if(j.min==null)B.min=B.max=null;else{let ie=B.range(n,j.min,j.max,L);B.min=ie[0],B.max=ie[1]}}}let M={},P=!1;for(let L in g){let B=g[L],j=E[L];if(j.min!=B.min||j.max!=B.max){j.min=B.min,j.max=B.max;let ie=j.distr;j._min=ie==3?di(j.min):ie==4?Ho(j.min,j.asinh):ie==100?j.fwd(j.min):j.min,j._max=ie==3?di(j.max):ie==4?Ho(j.max,j.asinh):ie==100?j.fwd(j.max):j.max,M[L]=P=!0}}if(P){y.forEach((L,B)=>{r==2?B>0&&M.y&&(L._paths=null):M[L.scale]&&(L._paths=null)});for(let L in M)V=!0,nn("setScale",L);se&&he.left>=0&&(Se=ne=!0)}for(let L in W)W[L]=null}function ys(g){let M=Wo(k-1,0,$-1),P=Wo(de+1,0,$-1);for(;g[M]==null&&M>0;)M--;for(;g[P]==null&&P<$-1;)P++;return[M,P]}function yn(){if($>0){let g=y.some(M=>M._focus)&&bt!=Qt.alpha;g&&(u.globalAlpha=bt=Qt.alpha),y.forEach((M,P)=>{if(P>0&&M.show&&(Hr(P,!1),Hr(P,!0),M._paths==null)){let L=bt;bt!=M.alpha&&(u.globalAlpha=bt=M.alpha);let B=r==2?[0,e[P][0].length-1]:ys(e[P]);M._paths=M.paths(n,P,B[0],B[1]),bt!=L&&(u.globalAlpha=bt=L)}}),y.forEach((M,P)=>{if(P>0&&M.show){let L=bt;bt!=M.alpha&&(u.globalAlpha=bt=M.alpha),M._paths!=null&&Na(P,!1);{let B=M._paths!=null?M._paths.gaps:null,j=M.points.show(n,P,k,de,B),ie=M.points.filter(n,P,j,B);(j||ie)&&(M.points._paths=M.points.paths(n,P,k,de,ie),Na(P,!0))}bt!=L&&(u.globalAlpha=bt=L),nn("drawSeries",P)}}),g&&(u.globalAlpha=bt=1)}}function Hr(g,M){let P=M?y[g].points:y[g];P._stroke=P.stroke(n,g),P._fill=P.fill(n,g)}function Na(g,M){let P=M?y[g].points:y[g],{stroke:L,fill:B,clip:j,flags:ie,_stroke:ge=P._stroke,_fill:Me=P._fill,_width:De=P.width}=P._paths;De=yt(De*pt,3);let Ue=null,Ne=De%2/2;M&&Me==null&&(Me=De>0?"#fff":ge);let Je=P.pxAlign==1&&Ne>0;if(Je&&u.translate(Ne,Ne),!M){let mt=Ze-De/2,dt=Ge-De/2,st=Ae+De,je=We+De;Ue=new Path2D,Ue.rect(mt,dt,st,je)}M?hl(ge,De,P.dash,P.cap,Me,L,B,ie,j):Fa(g,ge,De,P.dash,P.cap,Me,L,B,ie,Ue,j),Je&&u.translate(-Ne,-Ne)}function Fa(g,M,P,L,B,j,ie,ge,Me,De,Ue){let Ne=!1;Me!=0&&F.forEach((Je,mt)=>{if(Je.series[0]==g){let dt=y[Je.series[1]],st=e[Je.series[1]],je=(dt._paths||vs).band;Li(je)&&(je=Je.dir==1?je[0]:je[1]);let ke,Pt=null;dt.show&&je&&I_(st,k,de)?(Pt=Je.fill(n,mt)||j,ke=dt._paths.clip):je=null,hl(M,P,L,B,Pt,ie,ge,Me,De,Ue,ke,je),Ne=!0}}),Ne||hl(M,P,L,B,j,ie,ge,Me,De,Ue)}const Wf=Br|tl;function hl(g,M,P,L,B,j,ie,ge,Me,De,Ue,Ne){vi(g,M,P,L,B),(Me||De||Ne)&&(u.save(),Me&&u.clip(Me),De&&u.clip(De)),Ne?(ge&Wf)==Wf?(u.clip(Ne),Ue&&u.clip(Ue),Oa(B,ie),Ba(g,j,M)):ge&tl?(Oa(B,ie),u.clip(Ne),Ba(g,j,M)):ge&Br&&(u.save(),u.clip(Ne),Ue&&u.clip(Ue),Oa(B,ie),u.restore(),Ba(g,j,M)):(Oa(B,ie),Ba(g,j,M)),(Me||De||Ne)&&u.restore()}function Ba(g,M,P){P>0&&(M instanceof Map?M.forEach((L,B)=>{u.strokeStyle=Xe=B,u.stroke(L)}):M!=null&&g&&u.stroke(M))}function Oa(g,M){M instanceof Map?M.forEach((P,L)=>{u.fillStyle=rt=L,u.fill(P)}):M!=null&&g&&u.fill(M)}function dv(g,M,P,L){let B=S[g],j;if(L<=0)j=[0,0];else{let ie=B._space=B.space(n,g,M,P,L),ge=B._incrs=B.incrs(n,g,M,P,L,ie);j=ev(M,P,ge,L,ie)}return B._found=j}function dl(g,M,P,L,B,j,ie,ge,Me,De){let Ue=ie%2/2;v==1&&u.translate(Ue,Ue),vi(ge,ie,Me,De,ge),u.beginPath();let Ne,Je,mt,dt,st=B+(L==0||L==3?-j:j);P==0?(Je=B,dt=st):(Ne=B,mt=st);for(let je=0;je<g.length;je++)M[je]!=null&&(P==0?Ne=mt=g[je]:Je=dt=g[je],u.moveTo(Ne,Je),u.lineTo(mt,dt));u.stroke(),v==1&&u.translate(-Ue,-Ue)}function pv(g){let M=!0;return S.forEach((P,L)=>{if(!P.show)return;let B=E[P.scale];if(B.min==null){P._show&&(M=!1,P._show=!1,Wr(!1));return}else P._show||(M=!1,P._show=!0,Wr(!1));let j=P.side,ie=j%2,{min:ge,max:Me}=B,[De,Ue]=dv(L,ge,Me,ie==0?te:X);if(Ue==0)return;let Ne=B.distr==2,Je=P._splits=P.splits(n,L,ge,Me,De,Ue,Ne),mt=B.distr==2?Je.map(ke=>Le[ke]):Je,dt=B.distr==2?Le[Je[1]]-Le[Je[0]]:De,st=P._values=P.values(n,P.filter(n,mt,L,Ue,dt),L,Ue,dt);P._rotate=j==2?P.rotate(n,st,L,Ue):0;let je=P._size;P._size=Fn(P.size(n,st,L,g)),je!=null&&P._size!=je&&(M=!1)}),M}function mv(g){let M=!0;return H.forEach((P,L)=>{let B=P(n,L,_i,g);B!=J[L]&&(M=!1),J[L]=B}),M}function gv(){for(let g=0;g<S.length;g++){let M=S[g];if(!M.show||!M._show)continue;let P=M.side,L=P%2,B,j,ie=M.stroke(n,g),ge=P==0||P==3?-1:1,[Me,De]=M._found;if(M.label!=null){let vn=M.labelGap*ge,Pn=Yt((M._lpos+vn)*pt);un(M.labelFont[0],ie,"center",P==2?ms:jc),u.save(),L==1?(B=j=0,u.translate(Pn,Yt(Ge+We/2)),u.rotate((P==3?-Ma:Ma)/2)):(B=Yt(Ze+Ae/2),j=Pn);let ir=mu(M.label)?M.label(n,g,Me,De):M.label;u.fillText(ir,B,j),u.restore()}if(De==0)continue;let Ue=E[M.scale],Ne=L==0?Ae:We,Je=L==0?Ze:Ge,mt=M._splits,dt=Ue.distr==2?mt.map(vn=>Le[vn]):mt,st=Ue.distr==2?Le[mt[1]]-Le[mt[0]]:Me,je=M.ticks,ke=M.border,Pt=je.show?je.size:0,Nt=Yt(Pt*pt),rn=Yt((M.alignTo==2?M._size-Pt-M.gap:M.gap)*pt),St=M._rotate*-Ma/180,Ft=p(M._pos*pt),Cn=(Nt+rn)*ge,_n=Ft+Cn;j=L==0?_n:0,B=L==1?_n:0;let Bn=M.font[0],jn=M.align==1?Pr:M.align==2?Po:St>0?Pr:St<0?Po:L==0?"center":P==3?Po:Pr,ai=St||L==1?"middle":P==2?ms:jc;un(Bn,ie,jn,ai);let Rn=M.font[1]*M.lineGap,On=mt.map(vn=>p(o(vn,Ue,Ne,Je))),Kn=M._values;for(let vn=0;vn<Kn.length;vn++){let Pn=Kn[vn];if(Pn!=null){L==0?B=On[vn]:j=On[vn],Pn=""+Pn;let ir=Pn.indexOf(`
`)==-1?[Pn]:Pn.split(/\n/gm);for(let xn=0;xn<ir.length;xn++){let ch=ir[xn];St?(u.save(),u.translate(B,j+xn*Rn),u.rotate(St),u.fillText(ch,0,0),u.restore()):u.fillText(ch,B,j+xn*Rn)}}}je.show&&dl(On,je.filter(n,dt,g,De,st),L,P,Ft,Nt,yt(je.width*pt,3),je.stroke(n,g),je.dash,je.cap);let oi=M.grid;oi.show&&dl(On,oi.filter(n,dt,g,De,st),L,L==0?2:1,L==0?Ge:Ze,L==0?We:Ae,yt(oi.width*pt,3),oi.stroke(n,g),oi.dash,oi.cap),ke.show&&dl([Ft],[1],L==0?1:0,L==0?1:2,L==1?Ge:Ze,L==1?We:Ae,yt(ke.width*pt,3),ke.stroke(n,g),ke.dash,ke.cap)}nn("drawAxes")}function Wr(g){y.forEach((M,P)=>{P>0&&(M._paths=null,g&&(r==1?(M.min=null,M.max=null):M.facets.forEach(L=>{L.min=null,L.max=null})))})}let za=!1,pl=!1,Es=[];function _v(){pl=!1;for(let g=0;g<Es.length;g++)nn(...Es[g]);Es.length=0}function Xr(){za||($_(Xf),za=!0)}function vv(g,M=!1){za=!0,pl=M,g(n),Xf(),M&&Es.length>0&&queueMicrotask(_v)}n.batch=vv;function Xf(){if(Qe&&(ii(),Qe=!1),V&&(It(),V=!1),xt){if(wt(m,Pr,Ee),wt(m,ms,ve),wt(m,ds,te),wt(m,ps,X),wt(_,Pr,Ee),wt(_,ms,ve),wt(_,ds,te),wt(_,ps,X),wt(h,ds,q),wt(h,ps,le),f.width=Yt(q*pt),f.height=Yt(le*pt),S.forEach(({_el:g,_show:M,_size:P,_pos:L,side:B})=>{if(g!=null)if(M){let j=B===3||B===0?P:0,ie=B%2==1;wt(g,ie?"left":"top",L-j),wt(g,ie?"width":"height",P),wt(g,ie?"top":"left",ie?ve:Ee),wt(g,ie?"height":"width",ie?X:te),Bo(g,Yi)}else bn(g,Yi)}),Xe=rt=Et=sn=ct=ze=Bt=ut=Tt=null,bt=1,As(!0),Ee!=Re||ve!=Ke||te!=_e||X!=Pe){Wr(!1);let g=te/_e,M=X/Pe;if(se&&!Se&&he.left>=0){he.left*=g,he.top*=M,qr&&ti(qr,Yt(he.left),0,te,X),Yr&&ti(Yr,0,Yt(he.top),te,X);for(let P=0;P<gn.length;P++){let L=gn[P];L!=null&&($n[P]*=g,gi[P]*=M,ti(L,Fn($n[P]),Fn(gi[P]),te,X))}}if(Rt.show&&!re&&Rt.left>=0&&Rt.width>0){Rt.left*=g,Rt.width*=g,Rt.top*=M,Rt.height*=M;for(let P in Sl)wt(Kr,P,Rt[P])}Re=Ee,Ke=ve,_e=te,Pe=X}nn("setSize"),xt=!1}q>0&&le>0&&(u.clearRect(0,0,f.width,f.height),nn("drawClear"),I.forEach(g=>g()),nn("draw")),Rt.show&&re&&(Ga(Rt),re=!1),se&&Se&&(nr(null,!0,!1),Se=!1),Te.show&&Te.live&&ne&&(vl(),ne=!1),l||(l=!0,n.status=1,nn("ready")),Ie=!1,za=!1}n.redraw=(g,M)=>{V=M||!1,g!==!1?Ui(w,C.min,C.max):Xr()};function ml(g,M){let P=E[g];if(P.from==null){if($==0){let L=P.range(n,M.min,M.max,g);M.min=L[0],M.max=L[1]}if(M.min>M.max){let L=M.min;M.min=M.max,M.max=L}if($>1&&M.min!=null&&M.max!=null&&M.max-M.min<1e-16)return;g==w&&P.distr==2&&$>0&&(M.min=Xn(M.min,e[0]),M.max=Xn(M.max,e[0]),M.min==M.max&&M.max++),W[g]=M,Qe=!0,Xr()}}n.setScale=ml;let gl,_l,qr,Yr,qf,Yf,$r,jr,$f,jf,Ct,Lt,Di=!1;const an=he.drag;let en=an.x,tn=an.y;se&&(he.x&&(gl=Nn(v_,_)),he.y&&(_l=Nn(x_,_)),C.ori==0?(qr=gl,Yr=_l):(qr=_l,Yr=gl),Ct=he.left,Lt=he.top);const Rt=n.select=zt({show:!0,over:!0,left:0,width:0,top:0,height:0},i.select),Kr=Rt.show?Nn(__,Rt.over?_:m):null;function Ga(g,M){if(Rt.show){for(let P in g)Rt[P]=g[P],P in Sl&&wt(Kr,P,g[P]);M!==!1&&nn("setSelect")}}n.setSelect=Ga;function xv(g){if(y[g].show)Q&&Bo(xe[g],Yi);else if(Q&&bn(xe[g],Yi),se){let P=mi?gn[0]:gn[g];P!=null&&ti(P,-10,-10,te,X)}}function Ui(g,M,P){ml(g,{min:M,max:P})}function ri(g,M,P,L){M.focus!=null&&Tv(g),M.show!=null&&y.forEach((B,j)=>{j>0&&(g==j||g==null)&&(B.show=M.show,xv(j),r==2?(Ui(B.facets[0].scale,null,null),Ui(B.facets[1].scale,null,null)):Ui(B.scale,null,null),Xr())}),P!==!1&&nn("setSeries",g,M),L&&ws("setSeries",n,g,M)}n.setSeries=ri;function Sv(g,M){zt(F[g],M)}function Mv(g,M){g.fill=at(g.fill||null),g.dir=ft(g.dir,-1),M=M??F.length,F.splice(M,0,g)}function yv(g){g==null?F.length=0:F.splice(g,1)}n.addBand=Mv,n.setBand=Sv,n.delBand=yv;function Ev(g,M){y[g].alpha=M,se&&gn[g]!=null&&(gn[g].style.opacity=M),Q&&xe[g]&&(xe[g].style.opacity=M)}let xi,Ii,tr;const Zr={focus:!0};function Tv(g){if(g!=tr){let M=g==null,P=Qt.alpha!=1;y.forEach((L,B)=>{if(r==1||B>0){let j=M||B==0||B==g;L._focus=M?null:j,P&&Ev(B,j?1:Qt.alpha)}}),tr=g,P&&Xr()}}Q&&ni&&U(Qc,ae,g=>{he._lock||(Jt(g),tr!=null&&ri(null,Zr,!0,Gt.setSeries))});function si(g,M,P){let L=E[M];P&&(g=g/pt-(L.ori==1?ve:Ee));let B=te;L.ori==1&&(B=X,g=B-g),L.dir==-1&&(g=B-g);let j=L._min,ie=L._max,ge=g/B,Me=j+(ie-j)*ge,De=L.distr;return De==3?Ur(10,Me):De==4?F_(Me,L.asinh):De==100?L.bwd(Me):Me}function bv(g,M){let P=si(g,w,M);return Xn(P,e[0],k,de)}n.valToIdx=g=>Xn(g,e[0]),n.posToIdx=bv,n.posToVal=si,n.valToPos=(g,M,P)=>E[M].ori==0?s(g,E[M],P?Ae:te,P?Ze:0):a(g,E[M],P?We:X,P?Ge:0),n.setCursor=(g,M,P)=>{Ct=g.left,Lt=g.top,nr(null,M,P)};function Kf(g,M){wt(Kr,Pr,Rt.left=g),wt(Kr,ds,Rt.width=M)}function Zf(g,M){wt(Kr,ms,Rt.top=g),wt(Kr,ps,Rt.height=M)}let Ts=C.ori==0?Kf:Zf,bs=C.ori==1?Kf:Zf;function Av(){if(Q&&Te.live)for(let g=r==2?1:0;g<y.length;g++){if(g==0&&Oe)continue;let M=Te.values[g],P=0;for(let L in M)oe[g][P++].firstChild.nodeValue=M[L]}}function vl(g,M){if(g!=null&&(g.idxs?g.idxs.forEach((P,L)=>{pe[L]=P}):G_(g.idx)||pe.fill(g.idx),Te.idx=pe[0]),Q&&Te.live){for(let P=0;P<y.length;P++)(P>0||r==1&&!Oe)&&wv(P,pe[P]);Av()}ne=!1,M!==!1&&nn("setLegend")}n.setLegend=vl;function wv(g,M){let P=y[g],L=g==0&&G==2?Le:e[g],B;Oe?B=P.values(n,g,M)??Be:(B=P.value(n,M==null?null:L[M],g,M),B=B==null?Be:{_:B}),Te.values[g]=B}function nr(g,M,P){$f=Ct,jf=Lt,[Ct,Lt]=he.move(n,Ct,Lt),he.left=Ct,he.top=Lt,se&&(qr&&ti(qr,Yt(Ct),0,te,X),Yr&&ti(Yr,0,Yt(Lt),te,X));let L,B=k>de;xi=Mt,Ii=null;let j=C.ori==0?te:X,ie=C.ori==1?te:X;if(Ct<0||$==0||B){L=he.idx=null;for(let ge=0;ge<y.length;ge++){let Me=gn[ge];Me!=null&&ti(Me,-10,-10,te,X)}ni&&ri(null,Zr,!0,g==null&&Gt.setSeries),Te.live&&(pe.fill(L),ne=!0)}else{let ge,Me,De;r==1&&(ge=C.ori==0?Ct:Lt,Me=si(ge,w),L=he.idx=Xn(Me,e[0],k,de),De=N(e[0][L],C,j,0));let Ue=-10,Ne=-10,Je=0,mt=0,dt=!0,st="",je="";for(let ke=r==2?1:0;ke<y.length;ke++){let Pt=y[ke],Nt=pe[ke],rn=Nt==null?null:r==1?e[ke][Nt]:e[ke][1][Nt],St=he.dataIdx(n,ke,L,Me),Ft=St==null?null:r==1?e[ke][St]:e[ke][1][St];if(ne=ne||Ft!=rn||St!=Nt,pe[ke]=St,ke>0&&Pt.show){let Cn=St==null?-10:St==L?De:N(r==1?e[0][St]:e[ke][0][St],C,j,0),_n=Ft==null?-10:O(Ft,r==1?E[Pt.scale]:E[Pt.facets[1].scale],ie,0);if(ni&&Ft!=null){let Bn=C.ori==1?Ct:Lt,jn=qt(Qt.dist(n,ke,St,_n,Bn));if(jn<xi){let ai=Qt.bias;if(ai!=0){let Rn=si(Bn,Pt.scale),On=Ft>=0?1:-1,Kn=Rn>=0?1:-1;Kn==On&&(Kn==1?ai==1?Ft>=Rn:Ft<=Rn:ai==1?Ft<=Rn:Ft>=Rn)&&(xi=jn,Ii=ke)}else xi=jn,Ii=ke}}if(ne||mi){let Bn,jn;C.ori==0?(Bn=Cn,jn=_n):(Bn=_n,jn=Cn);let ai,Rn,On,Kn,oi,vn,Pn=!0,ir=jt.bbox;if(ir!=null){Pn=!1;let xn=ir(n,ke);On=xn.left,Kn=xn.top,ai=xn.width,Rn=xn.height}else On=Bn,Kn=jn,ai=Rn=jt.size(n,ke);if(vn=jt.fill(n,ke),oi=jt.stroke(n,ke),mi)ke==Ii&&xi<=Qt.prox&&(Ue=On,Ne=Kn,Je=ai,mt=Rn,dt=Pn,st=vn,je=oi);else{let xn=gn[ke];xn!=null&&($n[ke]=On,gi[ke]=Kn,au(xn,ai,Rn,Pn),ru(xn,vn,oi),ti(xn,Fn(On),Fn(Kn),te,X))}}}}if(mi){let ke=Qt.prox,Pt=tr==null?xi<=ke:xi>ke||Ii!=tr;if(ne||Pt){let Nt=gn[0];Nt!=null&&($n[0]=Ue,gi[0]=Ne,au(Nt,Je,mt,dt),ru(Nt,st,je),ti(Nt,Fn(Ue),Fn(Ne),te,X))}}}if(Rt.show&&Di)if(g!=null){let[ge,Me]=Gt.scales,[De,Ue]=Gt.match,[Ne,Je]=g.cursor.sync.scales,mt=g.cursor.drag;if(en=mt._x,tn=mt._y,en||tn){let{left:dt,top:st,width:je,height:ke}=g.select,Pt=g.scales[Ne].ori,Nt=g.posToVal,rn,St,Ft,Cn,_n,Bn=ge!=null&&De(ge,Ne),jn=Me!=null&&Ue(Me,Je);Bn&&en?(Pt==0?(rn=dt,St=je):(rn=st,St=ke),Ft=E[ge],Cn=N(Nt(rn,Ne),Ft,j,0),_n=N(Nt(rn+St,Ne),Ft,j,0),Ts(qn(Cn,_n),qt(_n-Cn))):Ts(0,j),jn&&tn?(Pt==1?(rn=dt,St=je):(rn=st,St=ke),Ft=E[Me],Cn=O(Nt(rn,Je),Ft,ie,0),_n=O(Nt(rn+St,Je),Ft,ie,0),bs(qn(Cn,_n),qt(_n-Cn))):bs(0,ie)}else Ml()}else{let ge=qt($f-qf),Me=qt(jf-Yf);if(C.ori==1){let Je=ge;ge=Me,Me=Je}en=an.x&&ge>=an.dist,tn=an.y&&Me>=an.dist;let De=an.uni;De!=null?en&&tn&&(en=ge>=De,tn=Me>=De,!en&&!tn&&(Me>ge?tn=!0:en=!0)):an.x&&an.y&&(en||tn)&&(en=tn=!0);let Ue,Ne;en&&(C.ori==0?(Ue=$r,Ne=Ct):(Ue=jr,Ne=Lt),Ts(qn(Ue,Ne),qt(Ne-Ue)),tn||bs(0,ie)),tn&&(C.ori==1?(Ue=$r,Ne=Ct):(Ue=jr,Ne=Lt),bs(qn(Ue,Ne),qt(Ne-Ue)),en||Ts(0,j)),!en&&!tn&&(Ts(0,0),bs(0,0))}if(an._x=en,an._y=tn,g==null){if(P){if(lh!=null){let[ge,Me]=Gt.scales;Gt.values[0]=ge!=null?si(C.ori==0?Ct:Lt,ge):null,Gt.values[1]=Me!=null?si(C.ori==1?Ct:Lt,Me):null}ws(Do,n,Ct,Lt,te,X,L)}if(ni){let ge=P&&Gt.setSeries,Me=Qt.prox;tr==null?xi<=Me&&ri(Ii,Zr,!0,ge):xi>Me?ri(null,Zr,!0,ge):Ii!=tr&&ri(Ii,Zr,!0,ge)}}ne&&(Te.idx=L,vl()),M!==!1&&nn("setCursor")}let Ni=null;Object.defineProperty(n,"rect",{get(){return Ni==null&&As(!1),Ni}});function As(g=!1){g?Ni=null:(Ni=_.getBoundingClientRect(),nn("syncRect",Ni))}function Jf(g,M,P,L,B,j,ie){he._lock||Di&&g!=null&&g.movementX==0&&g.movementY==0||(xl(g,M,P,L,B,j,ie,!1,g!=null),g!=null?nr(null,!0,!0):nr(M,!0,!1))}function xl(g,M,P,L,B,j,ie,ge,Me){if(Ni==null&&As(!1),Jt(g),g!=null)P=g.clientX-Ni.left,L=g.clientY-Ni.top;else{if(P<0||L<0){Ct=-10,Lt=-10;return}let[De,Ue]=Gt.scales,Ne=M.cursor.sync,[Je,mt]=Ne.values,[dt,st]=Ne.scales,[je,ke]=Gt.match,Pt=M.axes[0].side%2==1,Nt=C.ori==0?te:X,rn=C.ori==1?te:X,St=Pt?j:B,Ft=Pt?B:j,Cn=Pt?L:P,_n=Pt?P:L;if(dt!=null?P=je(De,dt)?o(Je,E[De],Nt,0):-10:P=Nt*(Cn/St),st!=null?L=ke(Ue,st)?o(mt,E[Ue],rn,0):-10:L=rn*(_n/Ft),C.ori==1){let Bn=P;P=L,L=Bn}}Me&&(M==null||M.cursor.event.type==Do)&&((P<=1||P>=te-1)&&(P=Ki(P,te)),(L<=1||L>=X-1)&&(L=Ki(L,X))),ge?(qf=P,Yf=L,[$r,jr]=he.move(n,P,L)):(Ct=P,Lt=L)}const Sl={width:0,height:0,left:0,top:0};function Ml(){Ga(Sl,!1)}let Qf,eh,th,nh;function ih(g,M,P,L,B,j,ie){Di=!0,en=tn=an._x=an._y=!1,xl(g,M,P,L,B,j,ie,!0,!1),g!=null&&(U(Uo,No,rh,!1),ws(Zc,n,$r,jr,te,X,null));let{left:ge,top:Me,width:De,height:Ue}=Rt;Qf=ge,eh=Me,th=De,nh=Ue}function rh(g,M,P,L,B,j,ie){Di=an._x=an._y=!1,xl(g,M,P,L,B,j,ie,!1,!0);let{left:ge,top:Me,width:De,height:Ue}=Rt,Ne=De>0||Ue>0,Je=Qf!=ge||eh!=Me||th!=De||nh!=Ue;if(Ne&&Je&&Ga(Rt),an.setScale&&Ne&&Je){let mt=ge,dt=De,st=Me,je=Ue;if(C.ori==1&&(mt=Me,dt=Ue,st=ge,je=De),en&&Ui(w,si(mt,w),si(mt+dt,w)),tn)for(let ke in E){let Pt=E[ke];ke!=w&&Pt.from==null&&Pt.min!=Mt&&Ui(ke,si(st+je,ke),si(st,ke))}Ml()}else he.lock&&(he._lock=!he._lock,nr(M,!0,g!=null));g!=null&&(T(Uo,No),ws(Uo,n,Ct,Lt,te,X,null))}function Cv(g,M,P,L,B,j,ie){if(he._lock)return;Jt(g);let ge=Di;if(Di){let Me=!0,De=!0,Ue=10,Ne,Je;C.ori==0?(Ne=en,Je=tn):(Ne=tn,Je=en),Ne&&Je&&(Me=Ct<=Ue||Ct>=te-Ue,De=Lt<=Ue||Lt>=X-Ue),Ne&&Me&&(Ct=Ct<$r?0:te),Je&&De&&(Lt=Lt<jr?0:X),nr(null,!0,!0),Di=!1}Ct=-10,Lt=-10,pe.fill(null),nr(null,!0,!0),ge&&(Di=ge)}function sh(g,M,P,L,B,j,ie){he._lock||(Jt(g),$e(),Ml(),g!=null&&ws(eu,n,Ct,Lt,te,X,null))}function ah(){S.forEach(tv),be(n.width,n.height,!0)}$i(ga,Dr,ah);const Jr={};Jr.mousedown=ih,Jr.mousemove=Jf,Jr.mouseup=rh,Jr.dblclick=sh,Jr.setSeries=(g,M,P,L)=>{let B=Gt.match[2];P=B(n,M,P),P!=-1&&ri(P,L,!0,!1)},se&&(U(Zc,_,ih),U(Do,_,Jf),U(Jc,_,g=>{Jt(g),As(!1)}),U(Qc,_,Cv),U(eu,_,sh),sl.add(n),n.syncRect=As);const Va=n.hooks=i.hooks||{};function nn(g,M,P){pl?Es.push([g,M,P]):g in Va&&Va[g].forEach(L=>{L.call(null,n,M,P)})}(i.plugins||[]).forEach(g=>{for(let M in g.hooks)Va[M]=(Va[M]||[]).concat(g.hooks[M])});const oh=(g,M,P)=>P,Gt=zt({key:null,setSeries:!1,filters:{pub:vu,sub:vu},scales:[w,y[1]?y[1].scale:null],match:[xu,xu,oh],values:[null,null]},he.sync);Gt.match.length==2&&Gt.match.push(oh),he.sync=Gt;const lh=Gt.key,yl=rf(lh);function ws(g,M,P,L,B,j,ie){Gt.filters.pub(g,M,P,L,B,j,ie)&&yl.pub(g,M,P,L,B,j,ie)}yl.sub(n);function Rv(g,M,P,L,B,j,ie){Gt.filters.sub(g,M,P,L,B,j,ie)&&Jr[g](null,M,P,L,B,j,ie)}n.pub=Rv;function Pv(){yl.unsub(n),sl.delete(n),Ve.clear(),zo(ga,Dr,ah),c.remove(),ae?.remove(),nn("destroy")}n.destroy=Pv;function El(){nn("init",i,e),Ye(e||i.data,!1),W[w]?ml(w,W[w]):$e(),re=Rt.show&&(Rt.width>0||Rt.height>0),Se=ne=!0,be(i.width,i.height)}return y.forEach(Ms),S.forEach(fl),t?t instanceof HTMLElement?(t.appendChild(c),El()):t(n,El):El(),n}cn.assign=zt,cn.fmtNum=ko,cn.rangeNum=Sa,cn.rangeLog=xa,cn.rangeAsinh=Go,cn.orient=Ji,cn.pxRatio=pt,cn.join=Y_,cn.fmtDate=qo,cn.tzDate=r0,cn.sync=rf;{cn.addGap=z0,cn.clipGaps=wa;let i=cn.paths={points:ff};i.linear=df,i.stepped=k0,i.bars=H0,i.spline=X0}function nv(i,e,t,n,r){let s=e,a=t,o=n,l=s.points[0]?.jd??0,c=l;const f=Mf(s,a,o),u={width:i.clientWidth||480,height:i.clientHeight||240,title:"",cursor:{drag:{x:!1,y:!1},sync:{key:"lc-cursor"}},legend:{show:!0,live:!0},axes:[{label:"time (hours from start of observing run)",labelSize:18,stroke:"#c9d0db",grid:{stroke:"#22272e",width:1},ticks:{stroke:"#22272e"}},{label:"reduced intensity (arb. units)",labelSize:22,size:50,stroke:"#c9d0db",grid:{stroke:"#22272e",width:1},ticks:{stroke:"#22272e"}}],series:[{label:"t (h)"},{label:"observed",stroke:"#7cc7ff",fill:"#7cc7ff",points:{show:!0,size:6},paths:()=>null},{label:"predicted × k",stroke:"#ffc14f",width:2,points:{show:!1}}],scales:{x:{time:!1},y:{auto:!0}},hooks:{ready:[m=>{const _=m.root.querySelector(".u-over");if(!_)return;const v=document.createElement("div");v.className="lc-jd-marker",v.style.position="absolute",v.style.top="0",v.style.bottom="0",v.style.width="2px",v.style.background="#ff6b6b",v.style.pointerEvents="none",v.style.zIndex="5",v.setAttribute("aria-hidden","true"),_.appendChild(v),m._jdMarker=v,La(m,l,c)}],setSize:[m=>La(m,l,c)]}},h=new cn(u,f,i);return h.root.querySelector(".u-over").addEventListener("click",m=>{const _=m.currentTarget.getBoundingClientRect(),v=m.clientX-_.left,p=h.posToVal(v,"x"),d=c+p/24;r.onScrub(d)}),{update(m,_,v){s=m,a=_,o=v,c=s.points[0]?.jd??0,l=c,h.setData(Mf(s,a,o)),La(h,l,c)},setJd(m){l=m,La(h,l,c)},resize(m,_){h.setSize({width:m,height:_})},dispose(){h.destroy()}}}function Mf(i,e,t){const n=i.points[0]?.jd??0,r=new Array(i.points.length),s=new Array(i.points.length),a=new Array(i.points.length);for(let o=0;o<i.points.length;o++){const l=i.points[o];r[o]=(l.jd-n)*24,s[o]=l.intensity,a[o]=e[o]*t}return[r,s,a]}function La(i,e,t){const n=i._jdMarker;if(!n)return;const r=(e-t)*24,s=i.valToPos(r,"x");Number.isFinite(s)?(n.style.left=`${s-1}px`,n.style.display="block"):n.style.display="none"}function yf(i,e,t,n){const r=Yc(e,n.jd),s=n_(r),a=pa(qc(s,n.sun)),o=pa(qc(s,n.earth)),{normals:l,areas:c}=i,f=t.lambertWeight,u=c.length;let h=0;for(let m=0;m<u;m++){const _=l[m*3],v=l[m*3+1],p=l[m*3+2],d=_*a.x+v*a.y+p*a.z;if(d<=0)continue;const y=_*o.x+v*o.y+p*o.z;if(y<=0)continue;const S=y+d;if(S<=0)continue;const E=y*d*(1/S+f);h+=c[m]*E}return h}function Gr(i,e,t,n){const r=new Float64Array(n.points.length);for(let s=0;s<n.points.length;s++)r[s]=yf(i,e,t,n.points[s]);return r}function Vr(i,e){let t=0,n=0;const r=Math.min(i.length,e.length);for(let s=0;s<r;s++){const a=i[s],o=e[s].intensity;t+=a*o,n+=a*a}return n>0?t/n:1}function ol(i,e){const t=Math.min(i.length,e.length);if(t===0)return 0;let n=0;for(let r=0;r<t;r++){const s=i[r]-e[r].intensity;n+=s*s}return Math.sqrt(n/t)}function Ef(i,e,t,n,r={}){const s=r.coarseLambdaStep??15,a=r.coarseBetaStep??15,o=r.refineStep??3,l=r.refineRadius??15,c=r.maxObsPerCurve??80,f=n.filter(S=>S.points.length>0).map(S=>iv(S,c));if(f.length===0)return{poleLambdaDeg:e.poleLambdaDeg,poleBetaDeg:e.poleBetaDeg,jd0:e.jd0,rms:1/0};const u=e.periodHours/24,h=f[0].points[0].jd,m=f.map(S=>({tCenter:S.points[Math.floor(S.points.length/2)].jd,mean:rv(S)})),_=64,v=f.map(()=>new Float64Array(_)),p=(S,E)=>{const F={...e,poleLambdaDeg:S,poleBetaDeg:E};for(let I=0;I<f.length;I++){const b=f[I],x=m[I],C=b.points[Math.floor(b.points.length/2)],G=v[I];for(let N=0;N<_;N++){const O=x.tCenter+N/_*u;G[N]=yf(i,{...F,jd0:x.tCenter},t,{jd:O,sun:C.sun,earth:C.earth})}}let w=1/0,R=0;for(let I=0;I<_;I++){const b=I/_;let x=0,C=0,G=!1;for(let O=0;O<f.length;O++){const W=f[O],z=m[O];if(z.mean<=0)continue;const Z=v[O];let K=0,fe=0;for(let he=0;he<W.points.length;he++){const Q=W.points[he];let se=((Q.jd-h)/u-b)%1;se<0&&(se+=1);const me=Tf(Z,se);K+=me*Q.intensity,fe+=me*me}if(fe<=0)continue;const ce=K/fe;let pe=0;for(let he=0;he<W.points.length;he++){const Q=W.points[he];let se=((Q.jd-h)/u-b)%1;se<0&&(se+=1);const ae=Tf(Z,se)*ce-Q.intensity;pe+=ae*ae}const Te=W.points.length*z.mean;x+=Te,C+=Te*(pe/W.points.length)/(z.mean*z.mean),G=!0}if(!G||x<=0)continue;const N=Math.sqrt(C/x);N<w&&(w=N,R=b)}return{rms:w,jd0:h+R*u}};let d={lambda:e.poleLambdaDeg,beta:e.poleBetaDeg,jd0:e.jd0,rms:1/0};const y=[{lam:ll(e.poleLambdaDeg),bet:cl(e.poleBetaDeg)},{lam:ll(e.poleLambdaDeg+180),bet:cl(-e.poleBetaDeg)}];for(const S of y){const E=p(S.lam,S.bet);E.rms<d.rms&&(d={lambda:S.lam,beta:S.bet,jd0:E.jd0,rms:E.rms})}for(let S=0;S<360;S+=s)for(let E=-75;E<=75;E+=a){const F=p(S,E);F.rms<d.rms&&(d={lambda:S,beta:E,jd0:F.jd0,rms:F.rms})}for(let S=-l;S<=l;S+=o)for(let E=-l;E<=l;E+=o){const F=ll(d.lambda+S),w=cl(d.beta+E),R=p(F,w);R.rms<d.rms&&(d={lambda:F,beta:w,jd0:R.jd0,rms:R.rms})}return{poleLambdaDeg:d.lambda,poleBetaDeg:d.beta,jd0:d.jd0,rms:d.rms}}function iv(i,e){if(i.points.length<=e)return i;const t=i.points.length/e,n=[];for(let r=0;r<e;r++)n.push(i.points[Math.floor(r*t)]);return{...i,points:n}}function Tf(i,e){const t=i.length,n=e*t,r=Math.floor(n)%t,s=(r+1)%t,a=n-Math.floor(n);return i[r]*(1-a)+i[s]*a}function rv(i){if(i.points.length===0)return 1;let e=0;for(let t=0;t<i.points.length;t++)e+=i.points[t].intensity;return e/i.points.length}function ll(i){let e=i%360;return e<0&&(e+=360),e}function cl(i){return Math.max(-89,Math.min(89,i))}function bf(i,e,t,n,r={}){const s=r.coarseSamples??96,a=e.periodHours/24;let o=0,l=1/0;const c=R=>{const I={...e,jd0:e.jd0-R},b=Gr(i,I,t,n),x=Vr(b,n.points),C=new Float64Array(b.length);for(let G=0;G<b.length;G++)C[G]=b[G]*x;return ol(C,n.points)};for(let R=0;R<s;R++){const I=R/s*a,b=c(I);b<l&&(l=b,o=I)}const f=a/s;let u=o-f,h=o+f;const m=(Math.sqrt(5)-1)/2;let _=h-m*(h-u),v=u+m*(h-u),p=c(_),d=c(v);for(let R=0;R<32&&h-u>1e-9;R++)p<d?(h=v,v=_,d=p,_=h-m*(h-u),p=c(_)):(u=_,_=v,p=d,v=u+m*(h-u),d=c(v));const y=(u+h)/2%a,S={...e,jd0:e.jd0-y},E=Gr(i,S,t,n),F=Vr(E,n.points),w=new Float64Array(E.length);for(let R=0;R<E.length;R++)w[R]=E[R]*F;return{jdOffset:y,scale:F,rms:ol(w,n.points)}}const Af=/\s+/;function kr(i){return i.trim().split(Af)}function wf(i){return i.replace(/\r\n?/g,`
`).split(`
`).filter(e=>e.trim().length>0)}function Cf(i){const e=wf(i);if(e.length===0)throw new Error("Shape file is empty.");const t=kr(e[0]);if(t.length<2)throw new Error(`Shape header expected "nVerts nFaces", got: "${e[0]}"`);const n=Number(t[0]),r=Number(t[1]);if(!Number.isInteger(n)||!Number.isInteger(r)||n<=0||r<=0)throw new Error(`Shape header has invalid counts: nVerts=${n} nFaces=${r}`);if(e.length<1+n+r)throw new Error(`Shape file truncated: expected ${1+n+r} non-blank lines, got ${e.length}.`);const s=new Float32Array(n*3);for(let o=0;o<n;o++){const l=kr(e[1+o]),c=Number(l[0]),f=Number(l[1]),u=Number(l[2]);if(!Number.isFinite(c)||!Number.isFinite(f)||!Number.isFinite(u))throw new Error(`Vertex ${o+1} has non-finite coordinate.`);s[o*3]=c,s[o*3+1]=f,s[o*3+2]=u}const a=new Uint32Array(r*3);for(let o=0;o<r;o++){const l=kr(e[1+n+o]),c=Number(l[0]),f=Number(l[1]),u=Number(l[2]);if(!Number.isInteger(c)||!Number.isInteger(f)||!Number.isInteger(u))throw new Error(`Face ${o+1} has non-integer index.`);if(c<1||f<1||u<1||c>n||f>n||u>n)throw new Error(`Face ${o+1} has out-of-range index (got ${c},${f},${u}; nVerts=${n}).`);a[o*3]=c-1,a[o*3+1]=f-1,a[o*3+2]=u-1}return{vertices:s,faces:a}}function Rf(i){const e=[],t=[];for(const n of i.split(/\r?\n/)){const r=n.trim();if(r.length===0||r.startsWith("#"))continue;const s=r.split(Af),a=s[0];if(a==="v")e.push(Number(s[1]),Number(s[2]),Number(s[3]));else if(a==="f"){const o=s.slice(1).map(l=>Number(l.split("/")[0])-1);for(let l=1;l<o.length-1;l++)t.push(o[0],o[l],o[l+1])}}if(e.length===0||t.length===0)throw new Error("OBJ contained no vertices or faces.");return{vertices:new Float32Array(e),faces:new Uint32Array(t)}}function Pf(i){const e=wf(i);if(e.length===0)throw new Error("Light-curve file is empty.");const t=Number(kr(e[0])[0]);if(!Number.isInteger(t)||t<=0)throw new Error(`Bad light-curve count header: "${e[0]}"`);const n=[];let r=1;for(let s=1;s<=t;s++){if(r>=e.length)throw new Error(`Light-curve file truncated before curve ${s} header.`);const a=kr(e[r++]),o=Number(a[0]),l=Number(a[1]);if(!Number.isInteger(o)||o<=0||l!==0&&l!==1)throw new Error(`Bad LC #${s} header: "${e[r-1]}"`);if(r+o>e.length)throw new Error(`Light-curve #${s} truncated: needs ${o} rows.`);const c=[];for(let f=0;f<o;f++){const u=kr(e[r++]);if(u.length<8)throw new Error(`LC #${s} row ${f+1} has fewer than 8 columns.`);const h=[Number(u[0]),Number(u[1]),Number(u[2]),Number(u[3]),Number(u[4]),Number(u[5]),Number(u[6]),Number(u[7])];for(let m=0;m<8;m++)if(!Number.isFinite(h[m]))throw new Error(`LC #${s} row ${f+1} column ${m+1}: non-finite value "${u[m]}". Stray non-numeric tokens (e.g. comment markers without leading "#") silently produce NaN intensities and corrupt downstream fits.`);c.push({jd:h[0],intensity:h[1],sun:{x:h[2],y:h[3],z:h[4]},earth:{x:h[5],y:h[6],z:h[7]}})}n.push({id:s,calibrated:l===1,points:c})}return n}function Lf(i){return sv(i).map((t,n)=>av(t,n+1))}function sv(i){if(Array.isArray(i))return i;if(typeof i=="object"&&i!==null){const e=i;for(const t of["lightcurves","light_curves","lcs","data","curves"]){const n=e[t];if(Array.isArray(n))return n}}throw new Error("lc.json: expected an array of light curves at the root.")}function av(i,e){if(typeof i!="object"||i===null)throw new Error(`lc.json curve #${e}: not an object.`);const t=i,n=Zt(t.id)??Zt(t.lc_id)??e,r=Df(t.calibrated)??Df(t.absolute)??(typeof t.scale=="number"?t.scale!==0:void 0)??!1,s=t.points??t.data??t.observations;if(!Array.isArray(s))throw new Error(`lc.json curve #${n}: missing points/data array.`);const a=s.map((o,l)=>ov(o,n,l+1));return{id:n,calibrated:r,points:a}}function ov(i,e,t){if(Array.isArray(i)&&i.length>=8)return{jd:Number(i[0]),intensity:Number(i[1]),sun:{x:Number(i[2]),y:Number(i[3]),z:Number(i[4])},earth:{x:Number(i[5]),y:Number(i[6]),z:Number(i[7])}};if(typeof i!="object"||i===null)throw new Error(`lc.json LC ${e} row ${t}: not an object/array.`);const n=i,r=Zt(n.jd)??Zt(n.JD)??Zt(n.epoch),s=Zt(n.brightness)??Zt(n.intensity)??Zt(n.flux)??Zt(n.mag),a=Uf(n.sun)??Da(n,"x_sun","y_sun","z_sun")??Da(n,"sun_x","sun_y","sun_z"),o=Uf(n.earth)??Da(n,"x_earth","y_earth","z_earth")??Da(n,"earth_x","earth_y","earth_z");if(r===void 0||s===void 0||!a||!o)throw new Error(`lc.json LC ${e} row ${t}: missing required jd/intensity/sun/earth fields.`);return{jd:r,intensity:s,sun:a,earth:o}}function Zt(i){if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i=="string"){const e=Number(i);return Number.isFinite(e)?e:void 0}}function Df(i){if(typeof i=="boolean")return i;if(typeof i=="number")return i!==0;if(typeof i=="string"){if(/^(true|1|absolute|calibrated)$/i.test(i))return!0;if(/^(false|0|relative)$/i.test(i))return!1}}function Uf(i){if(Array.isArray(i)&&i.length>=3){const e=Zt(i[0]),t=Zt(i[1]),n=Zt(i[2]);if(e!==void 0&&t!==void 0&&n!==void 0)return{x:e,y:t,z:n}}if(typeof i=="object"&&i!==null){const e=i,t=Zt(e.x),n=Zt(e.y),r=Zt(e.z);if(t!==void 0&&n!==void 0&&r!==void 0)return{x:t,y:n,z:r}}}function Da(i,e,t,n){const r=Zt(i[e]),s=Zt(i[t]),a=Zt(i[n]);return r!==void 0&&s!==void 0&&a!==void 0?{x:r,y:s,z:a}:void 0}function If(i,e,t={}){const n=i.__damitViewerDispose;typeof n=="function"&&n(),lv(),i.classList.add("damit-viewer-host"),i.textContent="";const r=document.createElement("div");r.className="damit-viewer-root",i.appendChild(r);const s=document.createElement("div");s.className="dv-header";const a=document.createElement("div");a.className="dv-title",a.textContent=e.name;const o=document.createElement("div");o.className="dv-meta",o.appendChild(document.createTextNode(`P = ${e.spin.periodHours.toFixed(5)} h · `));const l=document.createElement("span");if(e.publishedSpin&&(Math.abs(e.publishedSpin.poleLambdaDeg-e.spin.poleLambdaDeg)>.5||Math.abs(e.publishedSpin.poleBetaDeg-e.spin.poleBetaDeg)>.5)){const oe=e.publishedSpin;l.textContent=`pole (λ, β): auto-fit (${e.spin.poleLambdaDeg.toFixed(0)}°, ${e.spin.poleBetaDeg.toFixed(0)}°) ← published (${oe.poleLambdaDeg.toFixed(0)}°, ${oe.poleBetaDeg.toFixed(0)}°)`,l.title="The shape file does not advertise the pole it was inverted with, so the auto-fit pole shown is the one consistent with the bundled observations. The published pole is from the original paper for the asteroid."}else l.textContent=`pole (λ, β) = (${e.spin.poleLambdaDeg.toFixed(1)}°, ${e.spin.poleBetaDeg.toFixed(1)}°)`;o.appendChild(l),e.fitRms!==void 0&&o.appendChild(document.createTextNode(` · fit RMS ${(e.fitRms*100).toFixed(2)}%`)),e.damitId!==void 0&&o.appendChild(document.createTextNode(` · DAMIT #${e.damitId}`)),s.appendChild(a),s.appendChild(o),r.appendChild(s);const c=document.createElement("div");c.className="dv-split",r.appendChild(c);const f=document.createElement("div");f.className="dv-scene-col",c.appendChild(f);const u=document.createElement("div");u.className="dv-scene",f.appendChild(u);const h=document.createElement("div");h.className="dv-plot-col",c.appendChild(h);const m=document.createElement("div");m.className="dv-plot",h.appendChild(m);const _=ma(e.shape),v=Of(t.initialLightCurveIndex??0,e.lightCurves.length);if(e.lightCurves.length===0)throw new Error("AsteroidModel has no light curves.");const p=t.fitPhasePerLightCurve??!0;let d=v,y=e.lightCurves[d],S=Vf(e.spin,p,_,e.scattering,y),E=Gr(_,S,e.scattering,y),F=Vr(E,y.points),w=Ua(E,F,y),R=y.points[0]?.jd??S.jd0;const I=document.createElement("span");I.className="dv-jd-readout";const b=oe=>{I.textContent=`JD ${oe.toFixed(3)}`};b(R);const x=document.createElement("div");x.className="dv-footer";const C=()=>{const oe=y.points,D=oe.length>0?oe.reduce((Fe,ye)=>Fe+ye.intensity,0)/oe.length:1,Oe=D>0?w/D*100:0;x.textContent="";const Be=document.createElement("span");if(Be.textContent=`LC #${y.id} · ${y.points.length} obs · ${y.calibrated?"calibrated":"relative"} · this-curve RMS ${Oe.toFixed(2)}%`,x.appendChild(Be),x.appendChild(I),e.citation){const Fe=document.createElement("span");Fe.className="dv-cite",Fe.textContent=e.citation,x.appendChild(Fe)}};C();const G={...e,spin:S};let N,O,W;const z=a_(u,G,{onViewModeChange:oe=>{N&&N.value!==oe&&(N.value=oe)}});z.setJd(R),z.setSunEarth(y.points[0].sun,y.points[0].earth);const Z=nv(m,y,E,F,{onScrub:oe=>he(oe)});let K=!1,fe=600,ce=0,pe=0;const Te=oe=>{if(!K)return;ce===0&&(ce=oe);const D=(oe-ce)/1e3;ce=oe;const Oe=R+D*fe/86400,Be=y.points[0].jd,Fe=y.points[y.points.length-1].jd,ye=Fe>Be?Be+((Oe-Be)%(Fe-Be)+(Fe-Be))%(Fe-Be):Oe;he(ye),pe=requestAnimationFrame(Te)};function he(oe){R=oe;const{sun:D,earth:Oe}=uv(y,oe);z.setJd(oe),z.setSunEarth(D,Oe),Z.setJd(oe),b(oe)}function Q(oe){oe!==K&&(K=oe,oe?(ce=0,pe=requestAnimationFrame(Te),O&&(O.textContent="⏸ pause",O.setAttribute("aria-pressed","true"),O.setAttribute("aria-label","Pause the asteroid rotation animation"))):(cancelAnimationFrame(pe),O&&(O.textContent="▶ play",O.setAttribute("aria-pressed","false"),O.setAttribute("aria-label","Play the asteroid rotation animation"))))}function se(oe){fe=oe,W&&(W.value=String(oe),W.setAttribute("aria-valuetext",`${oe} times real time`))}function me(oe){d=Of(oe,e.lightCurves.length),y=e.lightCurves[d],S=Vf(e.spin,p,_,e.scattering,y),E=Gr(_,S,e.scattering,y),F=Vr(E,y.points),w=Ua(E,F,y),R=y.points[0].jd,Z.update(y,E,F),z.setSpin(S),z.setJd(R),z.setSunEarth(y.points[0].sun,y.points[0].earth),ae&&(ae.value=String(d)),C()}let ae;if(t.showControls!==!1){const oe=document.createElement("div");oe.className="dv-controls",ae=document.createElement("select"),ae.className="dv-select",ae.setAttribute("aria-label","Choose which light curve to display");for(let le=0;le<e.lightCurves.length;le++){const te=e.lightCurves[le],X=te.points[0]?.jd??0,Ee=document.createElement("option");Ee.value=String(le),Ee.textContent=`LC #${te.id} — JD ${X.toFixed(2)} (${te.points.length} obs)`,ae.appendChild(Ee)}ae.value=String(d),ae.addEventListener("change",()=>me(Number(ae.value))),oe.appendChild(zf("curve",ae));const D=document.createElement("button");O=D,D.className="dv-btn",D.type="button",D.textContent="▶ play",D.setAttribute("aria-label","Play the asteroid rotation animation"),D.setAttribute("aria-pressed","false");const Oe=typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(prefers-reduced-motion: reduce)"):null,Be=()=>{Oe?.matches?(D.disabled=!0,D.title="Animation disabled — prefers-reduced-motion is set in your OS or browser.",K&&(K=!1,cancelAnimationFrame(pe),D.textContent="▶ play",D.setAttribute("aria-pressed","false"))):(D.disabled=!1,D.title="")};Be(),Oe?.addEventListener?.("change",Be),D.addEventListener("click",()=>{Q(!K)}),oe.appendChild(D);const Fe=document.createElement("label");Fe.className="dv-range-label",Fe.textContent="speed (×)";const ye=document.createElement("input");W=ye,ye.type="range",ye.min="60",ye.max="3600",ye.step="60",ye.value=String(fe),ye.setAttribute("aria-label","Animation speed multiplier, times real time"),ye.setAttribute("aria-valuetext",`${fe} times real time`),ye.addEventListener("input",()=>{fe=Number(ye.value),ye.setAttribute("aria-valuetext",`${fe} times real time`)}),Fe.appendChild(ye),oe.appendChild(Fe);const it=document.createElement("select");it.className="dv-select",it.setAttribute("aria-label","3D camera mode");const He=document.createElement("option");He.value="free",He.textContent="free orbit";const Ve=document.createElement("option");Ve.value="earth",Ve.textContent="view from Earth",it.appendChild(He),it.appendChild(Ve),it.value=t.initialViewMode??"free",N=it,it.addEventListener("change",()=>{z.setViewMode(it.value)}),oe.appendChild(zf("camera",it));const U=document.createElement("label");U.className="dv-range-label";const T=document.createTextNode(`c = ${e.scattering.lambertWeight.toFixed(2)} `);U.appendChild(T);const q=document.createElement("input");q.type="range",q.min="0",q.max="0.5",q.step="0.01",q.value=String(e.scattering.lambertWeight),q.setAttribute("aria-label","Lambert weighting coefficient c in the Lommel-Seeliger + Lambert scattering model"),q.setAttribute("aria-valuetext",`c equals ${e.scattering.lambertWeight.toFixed(2)}`),q.addEventListener("input",()=>{e.scattering.lambertWeight=Number(q.value),T.nodeValue=`c = ${e.scattering.lambertWeight.toFixed(2)} `,q.setAttribute("aria-valuetext",`c equals ${e.scattering.lambertWeight.toFixed(2)}`),E=Gr(_,S,e.scattering,y),F=Vr(E,y.points),w=Ua(E,F,y),Z.update(y,E,F),C()}),U.appendChild(q),oe.appendChild(U),r.appendChild(oe)}r.appendChild(x),t.initialViewMode==="earth"&&z.setViewMode("earth");const ee=new ResizeObserver(()=>{const oe=u.clientWidth,D=u.clientHeight;oe>0&&D>0&&z.resize(oe,D);const Oe=m.clientWidth,Be=m.clientHeight;Oe>0&&Be>0&&Z.resize(Oe,Be)});ee.observe(u),ee.observe(m);let ue=!1;const xe={setLightCurveByIndex:oe=>{if(!Number.isInteger(oe)||oe<0||oe>=e.lightCurves.length)throw new RangeError(`setLightCurveByIndex(${oe}): index out of range [0, ${e.lightCurves.length-1}]`);me(oe)},setLightCurveById:oe=>{const D=e.lightCurves.findIndex(Oe=>Oe.id===oe);if(D<0)throw new RangeError(`setLightCurveById(${oe}): no light curve with id=${oe} in this model`);me(D)},setJd:he,play:oe=>{oe!==void 0&&se(oe),Q(!0)},pause:()=>Q(!1),setScatteringC:oe=>{e.scattering.lambertWeight=oe,E=Gr(_,S,e.scattering,y),F=Vr(E,y.points),w=Ua(E,F,y),Z.update(y,E,F),C()},setViewMode:oe=>z.setViewMode(oe),getModel:()=>cv(e),dispose:()=>{ue||(ue=!0,Q(!1),ee.disconnect(),Z.dispose(),z.dispose(),delete i.__damitViewerDispose,i.classList.remove("damit-viewer-host"),i.textContent="")}};return i.__damitViewerDispose=xe.dispose,xe}let Nf=!1;const Ff=new WeakSet;function lv(){if(Nf||(Nf=!0,typeof document>"u"))return;const i=document.createElement("style");i.setAttribute("data-damit-viewer",""),i.textContent=rr+`
`+Tl,document.head.firstChild?document.head.insertBefore(i,document.head.firstChild):document.head.appendChild(i)}function Bf(i){if(Ff.has(i))return;Ff.add(i);const e=document.createElement("style");e.setAttribute("data-damit-viewer",""),e.textContent=rr+`
`+Tl,i.firstChild?i.insertBefore(e,i.firstChild):i.appendChild(e)}function cv(i){const e={...i,spin:{...i.spin},scattering:{...i.scattering},publishedSpin:i.publishedSpin?{...i.publishedSpin}:void 0};return Object.freeze(e.spin),Object.freeze(e.scattering),e.publishedSpin&&Object.freeze(e.publishedSpin),Object.freeze(e),e}function Of(i,e){return e<=0?0:Math.max(0,Math.min(e-1,Math.floor(i)))}function zf(i,e){const t=document.createElement("label");return t.className="dv-labeled",t.appendChild(document.createTextNode(i)),t.appendChild(e),t}function uv(i,e){const t=i.points;if(t.length===0)return{sun:{x:0,y:0,z:0},earth:{x:0,y:0,z:0}};if(t.length===1||e<=t[0].jd){const l=t[0];return{sun:l.sun,earth:l.earth}}if(e>=t[t.length-1].jd){const l=t[t.length-1];return{sun:l.sun,earth:l.earth}}let n=0,r=t.length-1;for(;r-n>1;){const l=n+r>>1;t[l].jd<=e?n=l:r=l}const s=t[n],a=t[r],o=(e-s.jd)/(a.jd-s.jd);return{sun:Gf(s.sun,a.sun,o),earth:Gf(s.earth,a.earth,o)}}function Gf(i,e,t){return{x:i.x+(e.x-i.x)*t,y:i.y+(e.y-i.y)*t,z:i.z+(e.z-i.z)*t}}function Vf(i,e,t,n,r){if(!e)return i;const s=bf(t,i,n,r);return{...i,jd0:i.jd0-s.jdOffset}}function Ua(i,e,t){const n=new Float64Array(i.length);for(let r=0;r<i.length;r++)n[r]=i[r]*e;return ol(n,t.points)}const fv="https://damit.cuni.cz";class kf extends HTMLElement{static get observedAttributes(){return["shape-url","lc-url","model-id","asteroid-id","damit-base","pole-lambda","pole-beta","period-hours","jd0","refit-pole","lambert-c"]}#r;#i;#e;#t;#n=0;constructor(){super(),this.#r=this.attachShadow({mode:"open"}),Bf(this.#r);const e=document.createElement("div");e.style.cssText="display:block;width:100%;height:100%;min-height:480px;position:relative;",this.#i=document.createElement("div"),this.#i.style.cssText="width:100%;height:100%;",this.#e=document.createElement("div"),this.#e.style.cssText=["position:absolute;inset:0;display:flex;align-items:center;justify-content:center;","color:#9aa3b2;font:13px ui-sans-serif,system-ui,sans-serif;background:#0b0d12;","border-radius:8px;pointer-events:none;"].join(""),this.#e.textContent="",e.appendChild(this.#i),e.appendChild(this.#e),this.#r.appendChild(e)}connectedCallback(){this.style.display||(this.style.display="block"),this.style.width||(this.style.width="100%"),this.style.minHeight||(this.style.minHeight="480px"),this.#a()}disconnectedCallback(){this.#n++,this.#t&&(this.#t.dispose(),this.#t=void 0)}attributeChangedCallback(e,t,n){t!==n&&this.isConnected&&this.#a()}#o(){const e=t=>{const n=this.getAttribute(t);if(n===null)return;const r=Number(n);return Number.isFinite(r)?r:void 0};return{shapeUrl:this.getAttribute("shape-url")??void 0,lcUrl:this.getAttribute("lc-url")??void 0,modelId:e("model-id"),asteroidId:e("asteroid-id"),damitBase:this.getAttribute("damit-base")??fv,poleLambdaDeg:e("pole-lambda"),poleBetaDeg:e("pole-beta"),periodHours:e("period-hours"),jd0:e("jd0"),refitPole:this.hasAttribute("refit-pole"),lambertC:e("lambert-c")??.1,name:this.getAttribute("name")??void 0,initialLcIndex:e("initial-lc-index"),initialView:this.getAttribute("initial-view")??void 0}}#l(e){const t=e.damitBase.replace(/\/+$/,""),n=e.shapeUrl??(e.modelId!==void 0?`${t}/generated_files/open/AsteroidModel/${e.modelId}/shape.obj`:void 0),r=e.lcUrl??(e.asteroidId!==void 0?`${t}/light_curves/exportAllForAsteroid/${e.asteroidId}/json`:void 0),s=!e.shapeUrl||!e.lcUrl;return{shapeUrl:n,lcUrl:r,assumedPattern:s}}async#a(){const e=++this.#n,t=this.#o(),n=this.#l(t);if(!n.shapeUrl||!n.lcUrl){this.#s("Set either shape-url + lc-url, or model-id + asteroid-id (with optional damit-base for proxies).");return}this.#s("loading…");try{const[r,s]=await Promise.all([Hf(n.shapeUrl,n.assumedPattern),Hf(n.lcUrl,n.assumedPattern)]);if(e!==this.#n)return;const a=hv(r)?Rf(r):Cf(r),o=s.trimStart(),l=o.startsWith("[")||o.startsWith("{")?Lf(JSON.parse(s)):Pf(s),c={lambertWeight:t.lambertC},f={poleLambdaDeg:t.poleLambdaDeg??0,poleBetaDeg:t.poleBetaDeg??0,periodHours:t.periodHours??0,jd0:t.jd0??l[0]?.points[0]?.jd??0};if(t.refitPole&&f.periodHours<=0)throw new Error("refit-pole requires period-hours to be set (the optimiser searches over pole and JD0 but holds period fixed).");let u=f,h,m;if(t.refitPole){const v=ma(a),p=l.slice().sort((y,S)=>S.points.length-y.points.length).slice(0,5),d=Ef(v,f,c,p);h=f,u={...f,poleLambdaDeg:d.poleLambdaDeg,poleBetaDeg:d.poleBetaDeg,jd0:d.jd0},m=d.rms}if(e!==this.#n||!this.isConnected)return;const _={name:t.name??(t.modelId!==void 0?`DAMIT #${t.modelId}`:"Asteroid"),damitId:t.modelId,shape:a,spin:u,lightCurves:l,scattering:c,publishedSpin:h,fitRms:m};this.#t&&this.#t.dispose(),this.#t=If(this.#i,_,{initialLightCurveIndex:t.initialLcIndex??0,initialViewMode:t.initialView??"free"}),this.#c()}catch(r){if(e!==this.#n)return;const s=r.message,a=n.assumedPattern?" (The model-id / asteroid-id form assumes <damit-base>/generated_files/open/AsteroidModel/<model-id>/shape.obj and <damit-base>/light_curves/exportAllForAsteroid/<asteroid-id>/json. If your DAMIT instance uses a different path or this fetch is CORS-blocked, set shape-url and lc-url explicitly to same-origin URLs your page can fetch.)":"";this.#s(`error: ${s}${a}`)}}#s(e){this.#e.textContent=e,this.#e.style.display=""}#c(){this.#e.textContent="",this.#e.style.display="none"}}function hv(i){const e=i.slice(0,2e3).split(/\r?\n/).slice(0,40);for(const t of e){const n=t.trim();if(!(n.length===0||n.startsWith("#"))){if(/^v[ \t]/.test(n)||/^vn[ \t]/.test(n)||/^vt[ \t]/.test(n))return!0;if(!/^(o|g|s|mtllib|usemtl)[ \t]/.test(n))return!1}}return!1}async function Hf(i,e){let t;try{t=await fetch(i)}catch(n){const r=n.message;throw new Error(`Network fetch failed for ${i}: ${r}.`+(e?" If DAMIT does not yet set Access-Control-Allow-Origin, proxy the request through your own domain or use shape-src/lc-src with same-origin paths.":""))}if(!t.ok)throw new Error(`Fetch ${i} → HTTP ${t.status}`);return t.text()}typeof window<"u"&&"customElements"in window&&(window.customElements.get("damit-viewer")||window.customElements.define("damit-viewer",kf)),fn.DamitViewerElement=kf,fn.buildFacetGeometry=ma,fn.fitPhaseOffset=bf,fn.fitPoleAndPhase=Ef,fn.injectStylesIntoShadow=Bf,fn.mount=If,fn.parseLcJson=Lf,fn.parseLcTxt=Pf,fn.parseObj=Rf,fn.parseShapeTxt=Cf,Object.defineProperty(fn,Symbol.toStringTag,{value:"Module"})});
