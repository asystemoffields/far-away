(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const op='.uplot,.uplot *,.uplot *:before,.uplot *:after{box-sizing:border-box}.uplot{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5;width:min-content}.u-title{text-align:center;font-size:18px;font-weight:700}.u-wrap{position:relative;user-select:none}.u-over,.u-under{position:absolute}.u-under{overflow:hidden}.uplot canvas{display:block;position:relative;width:100%;height:100%}.u-axis{position:absolute}.u-legend{font-size:14px;margin:auto;text-align:center}.u-inline{display:block}.u-inline *{display:inline-block}.u-inline tr{margin-right:16px}.u-legend th{font-weight:600}.u-legend th>*{vertical-align:middle;display:inline-block}.u-legend .u-marker{width:1em;height:1em;margin-right:4px;background-clip:padding-box!important}.u-inline.u-live th:after{content:":";vertical-align:middle}.u-inline:not(.u-live) .u-value{display:none}.u-series>*{padding:4px}.u-series th{cursor:pointer}.u-legend .u-off>*{opacity:.3}.u-select{background:#00000012;position:absolute;pointer-events:none}.u-cursor-x,.u-cursor-y{position:absolute;left:0;top:0;pointer-events:none;will-change:transform}.u-hz .u-cursor-x,.u-vt .u-cursor-y{height:100%;border-right:1px dashed #607D8B}.u-hz .u-cursor-y,.u-vt .u-cursor-x{width:100%;border-bottom:1px dashed #607D8B}.u-cursor-pt{position:absolute;top:0;left:0;border-radius:50%;border:0 solid;pointer-events:none;will-change:transform;background-clip:padding-box!important}.u-axis.u-off,.u-select.u-off,.u-cursor-x.u-off,.u-cursor-y.u-off,.u-cursor-pt.u-off{display:none}',lp=":where(.damit-viewer-host) :where(.dv-btn,.dv-select,.dv-range-label,.dv-range-label input,.dv-labeled,.dv-title,.dv-meta,.dv-footer,.dv-cite,.dv-controls,.dv-header,.dv-scene,.dv-plot,.dv-scene-col,.dv-plot-col,.dv-split,.damit-viewer-root){all:revert;font-family:inherit;color:inherit;box-sizing:border-box}.damit-viewer-host{display:block;width:100%;height:100%;min-height:480px;color:#e7eaf2;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#0b0d12;border-radius:8px;overflow:hidden;contain:layout size}.damit-viewer-root{display:flex;flex-direction:column;height:100%;min-height:0}.dv-header{display:flex;justify-content:space-between;align-items:baseline;padding:10px 14px;border-bottom:1px solid #1c212b;flex-wrap:wrap;gap:8px}.dv-title{font-weight:600;font-size:15px;letter-spacing:.02em}.dv-meta{font-size:12px;color:#9aa3b2;font-variant-numeric:tabular-nums}.dv-split{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);flex:1 1 auto;min-height:0}.dv-scene-col,.dv-plot-col{display:flex;flex-direction:column;min-width:0;min-height:0}.dv-scene-col{border-right:1px solid #1c212b}.dv-scene{flex:1 1 0;min-height:0;position:relative}.dv-plot{flex:1 1 0;min-height:0;position:relative;padding:8px 8px 0;overflow:hidden}.dv-plot .u-wrap{background:transparent}.dv-plot .u-title{color:#e7eaf2}.dv-plot .u-legend{color:#c9d0db;font-size:12px}.dv-footer{display:flex;justify-content:space-between;padding:6px 12px;font-size:11px;color:#8a93a4;border-top:1px solid #1c212b;gap:8px}.dv-cite{font-style:italic}.dv-controls{display:flex;align-items:center;flex-wrap:wrap;gap:12px;padding:8px 12px;border-top:1px solid #1c212b;font-size:12px}.dv-labeled{display:inline-flex;align-items:center;gap:6px;color:#9aa3b2}.dv-select{background:#161a22;color:#e7eaf2;border:1px solid #2a313d;padding:4px 8px;border-radius:4px;font:inherit}.dv-btn{background:#1b2230;color:#e7eaf2;border:1px solid #2a313d;padding:4px 12px;border-radius:4px;cursor:pointer;font:inherit}.dv-btn:hover{background:#232c3d}.dv-range-label{display:inline-flex;align-items:center;gap:6px;color:#9aa3b2}.dv-range-label input[type=range]{vertical-align:middle;width:100px}@media (max-width: 720px){.dv-split{grid-template-columns:1fr;grid-template-rows:minmax(280px,1fr) minmax(280px,1fr)}.dv-scene-col{border-right:none;border-bottom:1px solid #1c212b}}";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xc="166",cp=0,pu=1,up=2,mh=1,fp=2,Si=3,Vi=0,Mn=1,li=2,zi=0,es=1,mu=2,gu=3,_u=4,hp=5,or=100,dp=101,pp=102,mp=103,gp=104,_p=200,vp=201,xp=202,Mp=203,wl=204,Cl=205,Sp=206,yp=207,Ep=208,bp=209,Tp=210,Ap=211,wp=212,Cp=213,Rp=214,Pp=0,Lp=1,Dp=2,Wa=3,Ip=4,Up=5,Np=6,Fp=7,gh=0,Op=1,Bp=2,ki=0,zp=1,kp=2,Hp=3,Vp=4,Gp=5,Wp=6,Xp=7,_h=300,ss=301,as=302,Rl=303,Pl=304,oo=306,Ll=1e3,ur=1001,Dl=1002,Fn=1003,qp=1004,ia=1005,$n=1006,Fo=1007,fr=1008,Ai=1009,vh=1010,xh=1011,Gs=1012,Mc=1013,dr=1014,yi=1015,Xs=1016,Sc=1017,yc=1018,os=1020,Mh=35902,Sh=1021,yh=1022,Zn=1023,Eh=1024,bh=1025,ts=1026,ls=1027,Th=1028,Ec=1029,Ah=1030,bc=1031,Tc=1033,Oa=33776,Ba=33777,za=33778,ka=33779,Il=35840,Ul=35841,Nl=35842,Fl=35843,Ol=36196,Bl=37492,zl=37496,kl=37808,Hl=37809,Vl=37810,Gl=37811,Wl=37812,Xl=37813,ql=37814,Yl=37815,$l=37816,jl=37817,Kl=37818,Zl=37819,Jl=37820,Ql=37821,Ha=36492,ec=36494,tc=36495,wh=36283,nc=36284,ic=36285,rc=36286,Yp=3200,$p=3201,Ch=0,jp=1,Bi="",ai="srgb",Xi="srgb-linear",Ac="display-p3",lo="display-p3-linear",Xa="linear",Pt="srgb",qa="rec709",Ya="p3",Cr=7680,vu=519,Kp=512,Zp=513,Jp=514,Rh=515,Qp=516,em=517,tm=518,nm=519,sc=35044,xu="300 es",Ei=2e3,$a=2001;class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oo=Math.PI/180,ac=180/Math.PI;function Hi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function xn(i,e,t){return Math.max(e,Math.min(t,i))}function im(i,e){return(i%e+e)%e}function Bo(i,e,t){return(1-t)*i+t*e}function ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,n,r,s,a,o,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],u=n[7],h=n[2],m=n[5],_=n[8],v=r[0],p=r[3],d=r[6],x=r[1],y=r[4],E=r[7],F=r[2],C=r[5],P=r[8];return s[0]=a*v+o*x+l*F,s[3]=a*p+o*y+l*C,s[6]=a*d+o*E+l*P,s[1]=c*v+f*x+u*F,s[4]=c*p+f*y+u*C,s[7]=c*d+f*E+u*P,s[2]=h*v+m*x+_*F,s[5]=h*p+m*y+_*C,s[8]=h*d+m*E+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-n*s*f+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=f*a-o*c,h=o*l-f*s,m=c*s-a*l,_=t*u+n*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=u*v,e[1]=(r*c-f*n)*v,e[2]=(o*n-r*a)*v,e[3]=h*v,e[4]=(f*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zo.makeScale(e,t)),this}rotate(e){return this.premultiply(zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zo=new nt;function Ph(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rm(){const i=ja("canvas");return i.style.display="block",i}const Mu={};function wc(i){i in Mu||(Mu[i]=!0,console.warn(i))}function sm(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Su=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yu=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ra={[Xi]:{transfer:Xa,primaries:qa,toReference:i=>i,fromReference:i=>i},[ai]:{transfer:Pt,primaries:qa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[lo]:{transfer:Xa,primaries:Ya,toReference:i=>i.applyMatrix3(yu),fromReference:i=>i.applyMatrix3(Su)},[Ac]:{transfer:Pt,primaries:Ya,toReference:i=>i.convertSRGBToLinear().applyMatrix3(yu),fromReference:i=>i.applyMatrix3(Su).convertLinearToSRGB()}},am=new Set([Xi,lo]),gt={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!am.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ra[e].toReference,r=ra[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ra[i].primaries},getTransfer:function(i){return i===Bi?Xa:ra[i].transfer}};function ns(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ko(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Rr;class om{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rr===void 0&&(Rr=ja("canvas")),Rr.width=e.width,Rr.height=e.height;const n=Rr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ja("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ns(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ns(t[n]/255)*255):t[n]=ns(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lm=0;class Lh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ho(r[a].image)):s.push(Ho(r[a]))}else s=Ho(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ho(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?om.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cm=0;class _n extends ps{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,n=ur,r=ur,s=$n,a=fr,o=Zn,l=Ai,c=_n.DEFAULT_ANISOTROPY,f=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Hi(),this.name="",this.source=new Lh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ll:e.x=e.x-Math.floor(e.x);break;case ur:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ll:e.y=e.y-Math.floor(e.y);break;case ur:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=_h;_n.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,n=0,r=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],m=l[5],_=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,E=(m+1)/2,F=(d+1)/2,C=(f+h)/4,P=(u+v)/4,U=(_+p)/4;return y>E&&y>F?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=C/n,s=P/n):E>F?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=C/r,s=U/r):F<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),n=P/s,r=U/s),this.set(n,r,s,t),this}let x=Math.sqrt((p-_)*(p-_)+(u-v)*(u-v)+(h-f)*(h-f));return Math.abs(x)<.001&&(x=1),this.x=(p-_)/x,this.y=(u-v)/x,this.z=(h-f)/x,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class um extends ps{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new _n(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pr extends um{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Dh extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fm extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qs{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],f=n[r+2],u=n[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(u!==v||l!==h||c!==m||f!==_){let p=1-o;const d=l*h+c*m+f*_+u*v,x=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const F=Math.sqrt(y),C=Math.atan2(F,d*x);p=Math.sin(p*C)/F,o=Math.sin(o*C)/F}const E=o*x;if(l=l*p+h*E,c=c*p+m*E,f=f*p+_*E,u=u*p+v*E,p===1-o){const F=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=F,c*=F,f*=F,u*=F}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],f=n[r+3],u=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+f*u+l*m-c*h,e[t+1]=l*_+f*h+c*u-o*m,e[t+2]=c*_+f*m+o*h-l*u,e[t+3]=f*_-o*u-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(r/2),u=o(s/2),h=l(n/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*f*u+c*m*_,this._y=c*m*u-h*f*_,this._z=c*f*_+h*m*u,this._w=c*f*u-h*m*_;break;case"YXZ":this._x=h*f*u+c*m*_,this._y=c*m*u-h*f*_,this._z=c*f*_-h*m*u,this._w=c*f*u+h*m*_;break;case"ZXY":this._x=h*f*u-c*m*_,this._y=c*m*u+h*f*_,this._z=c*f*_+h*m*u,this._w=c*f*u-h*m*_;break;case"ZYX":this._x=h*f*u-c*m*_,this._y=c*m*u+h*f*_,this._z=c*f*_-h*m*u,this._w=c*f*u+h*m*_;break;case"YZX":this._x=h*f*u+c*m*_,this._y=c*m*u+h*f*_,this._z=c*f*_-h*m*u,this._w=c*f*u-h*m*_;break;case"XZY":this._x=h*f*u-c*m*_,this._y=c*m*u-h*f*_,this._z=c*f*_+h*m*u,this._w=c*f*u+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],u=t[10],h=n+o+u;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-n*c,this._z=s*f+a*c+n*l-r*o,this._w=a*f-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),u=Math.sin((1-t)*f)/c,h=Math.sin(t*f)/c;return this._w=a*u+this._w*h,this._x=n*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),f=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*f,this.y=n+l*f+o*c-s*u,this.z=r+l*u+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new K,Eu=new qs;class Ys{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(e.matrixWorld),this.union(sa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),aa.subVectors(this.max,As),Pr.subVectors(e.a,As),Lr.subVectors(e.b,As),Dr.subVectors(e.c,As),Li.subVectors(Lr,Pr),Di.subVectors(Dr,Lr),Zi.subVectors(Pr,Dr);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-Zi.z,Zi.y,Li.z,0,-Li.x,Di.z,0,-Di.x,Zi.z,0,-Zi.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-Zi.y,Zi.x,0];return!Go(t,Pr,Lr,Dr,aa)||(t=[1,0,0,0,1,0,0,0,1],!Go(t,Pr,Lr,Dr,aa))?!1:(oa.crossVectors(Li,Di),t=[oa.x,oa.y,oa.z],Go(t,Pr,Lr,Dr,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new K,new K,new K,new K,new K,new K,new K,new K],Gn=new K,sa=new Ys,Pr=new K,Lr=new K,Dr=new K,Li=new K,Di=new K,Zi=new K,As=new K,aa=new K,oa=new K,Ji=new K;function Go(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ji.fromArray(i,s);const o=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),l=e.dot(Ji),c=t.dot(Ji),f=n.dot(Ji);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const hm=new Ys,ws=new K,Wo=new K;class co{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const t=ws.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ws,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(Wo)),this.expandByPoint(ws.copy(e.center).sub(Wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new K,Xo=new K,la=new K,Ii=new K,qo=new K,ca=new K,Yo=new K;class Ih{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Xo.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(Xo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(la),o=Ii.dot(this.direction),l=-Ii.dot(la),c=Ii.lengthSq(),f=Math.abs(1-a*a);let u,h,m,_;if(f>0)if(u=a*l-o,h=a*o-l,_=s*f,u>=0)if(h>=-_)if(h<=_){const v=1/f;u*=v,h*=v,m=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;else h<=-_?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+h*(h+2*l)+c):h<=_?(u=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+h*(h+2*l)+c);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Xo).addScaledVector(la,h),m}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const n=_i.dot(this.direction),r=_i.dot(_i)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,r,s){qo.subVectors(t,e),ca.subVectors(n,e),Yo.crossVectors(qo,ca);let a=this.direction.dot(Yo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ii.subVectors(this.origin,e);const l=o*this.direction.dot(ca.crossVectors(Ii,ca));if(l<0)return null;const c=o*this.direction.dot(qo.cross(Ii));if(c<0||l+c>a)return null;const f=-o*Ii.dot(Yo);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,n,r,s,a,o,l,c,f,u,h,m,_,v,p){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,f,u,h,m,_,v,p)}set(e,t,n,r,s,a,o,l,c,f,u,h,m,_,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=f,d[10]=u,d[14]=h,d[3]=m,d[7]=_,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),a=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=a*f,m=a*u,_=o*f,v=o*u;t[0]=l*f,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*f,m=l*u,_=c*f,v=c*u;t[0]=h+v*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*f,t[9]=-o,t[2]=m*o-_,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*f,m=l*u,_=c*f,v=c*u;t[0]=h-v*o,t[4]=-a*u,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*f,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*f,m=a*u,_=o*f,v=o*u;t[0]=l*f,t[4]=_*c-m,t[8]=h*c+v,t[1]=l*u,t[5]=v*c+h,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,v=o*c;t[0]=l*f,t[4]=v-h*u,t[8]=_*u+m,t[1]=u,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=m*u+_,t[10]=h-v*u}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,v=o*c;t[0]=l*f,t[4]=-u,t[8]=c*f,t[1]=h*u+v,t[5]=a*f,t[9]=m*u-_,t[2]=_*u-m,t[6]=o*f,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dm,e,pm)}lookAt(e,t,n){const r=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ui.crossVectors(n,Tn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ui.crossVectors(n,Tn)),Ui.normalize(),ua.crossVectors(Tn,Ui),r[0]=Ui.x,r[4]=ua.x,r[8]=Tn.x,r[1]=Ui.y,r[5]=ua.y,r[9]=Tn.y,r[2]=Ui.z,r[6]=ua.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],u=n[5],h=n[9],m=n[13],_=n[2],v=n[6],p=n[10],d=n[14],x=n[3],y=n[7],E=n[11],F=n[15],C=r[0],P=r[4],U=r[8],b=r[12],M=r[1],w=r[5],O=r[9],N=r[13],H=r[2],G=r[6],X=r[10],$=r[14],ee=r[3],fe=r[7],le=r[11],de=r[15];return s[0]=a*C+o*M+l*H+c*ee,s[4]=a*P+o*w+l*G+c*fe,s[8]=a*U+o*O+l*X+c*le,s[12]=a*b+o*N+l*$+c*de,s[1]=f*C+u*M+h*H+m*ee,s[5]=f*P+u*w+h*G+m*fe,s[9]=f*U+u*O+h*X+m*le,s[13]=f*b+u*N+h*$+m*de,s[2]=_*C+v*M+p*H+d*ee,s[6]=_*P+v*w+p*G+d*fe,s[10]=_*U+v*O+p*X+d*le,s[14]=_*b+v*N+p*$+d*de,s[3]=x*C+y*M+E*H+F*ee,s[7]=x*P+y*w+E*G+F*fe,s[11]=x*U+y*O+E*X+F*le,s[15]=x*b+y*N+E*$+F*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],m=e[14],_=e[3],v=e[7],p=e[11],d=e[15];return _*(+s*l*u-r*c*u-s*o*h+n*c*h+r*o*m-n*l*m)+v*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*f-s*l*f)+p*(+t*c*u-t*o*m-s*a*u+n*a*m+s*o*f-n*c*f)+d*(-r*o*f-t*l*u+t*o*h+r*a*u-n*a*h+n*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],m=e[11],_=e[12],v=e[13],p=e[14],d=e[15],x=u*p*c-v*h*c+v*l*m-o*p*m-u*l*d+o*h*d,y=_*h*c-f*p*c-_*l*m+a*p*m+f*l*d-a*h*d,E=f*v*c-_*u*c+_*o*m-a*v*m-f*o*d+a*u*d,F=_*u*l-f*v*l-_*o*h+a*v*h+f*o*p-a*u*p,C=t*x+n*y+r*E+s*F;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=x*P,e[1]=(v*h*s-u*p*s-v*r*m+n*p*m+u*r*d-n*h*d)*P,e[2]=(o*p*s-v*l*s+v*r*c-n*p*c-o*r*d+n*l*d)*P,e[3]=(u*l*s-o*h*s-u*r*c+n*h*c+o*r*m-n*l*m)*P,e[4]=y*P,e[5]=(f*p*s-_*h*s+_*r*m-t*p*m-f*r*d+t*h*d)*P,e[6]=(_*l*s-a*p*s-_*r*c+t*p*c+a*r*d-t*l*d)*P,e[7]=(a*h*s-f*l*s+f*r*c-t*h*c-a*r*m+t*l*m)*P,e[8]=E*P,e[9]=(_*u*s-f*v*s-_*n*m+t*v*m+f*n*d-t*u*d)*P,e[10]=(a*v*s-_*o*s+_*n*c-t*v*c-a*n*d+t*o*d)*P,e[11]=(f*o*s-a*u*s-f*n*c+t*u*c+a*n*m-t*o*m)*P,e[12]=F*P,e[13]=(f*v*r-_*u*r+_*n*h-t*v*h-f*n*p+t*u*p)*P,e[14]=(_*o*r-a*v*r-_*n*l+t*v*l+a*n*p-t*o*p)*P,e[15]=(a*u*r-f*o*r+f*n*l-t*u*l-a*n*h+t*o*h)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+n,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,u=o+o,h=s*c,m=s*f,_=s*u,v=a*f,p=a*u,d=o*u,x=l*c,y=l*f,E=l*u,F=n.x,C=n.y,P=n.z;return r[0]=(1-(v+d))*F,r[1]=(m+E)*F,r[2]=(_-y)*F,r[3]=0,r[4]=(m-E)*C,r[5]=(1-(h+d))*C,r[6]=(p+x)*C,r[7]=0,r[8]=(_+y)*P,r[9]=(p-x)*P,r[10]=(1-(h+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ir.set(r[0],r[1],r[2]).length();const a=Ir.set(r[4],r[5],r[6]).length(),o=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/s,f=1/a,u=1/o;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=f,Wn.elements[5]*=f,Wn.elements[6]*=f,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,t.setFromRotationMatrix(Wn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Ei){const l=this.elements,c=2*s/(t-e),f=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r);let m,_;if(o===Ei)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===$a)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Ei){const l=this.elements,c=1/(t-e),f=1/(n-r),u=1/(a-s),h=(t+e)*c,m=(n+r)*f;let _,v;if(o===Ei)_=(a+s)*u,v=-2*u;else if(o===$a)_=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ir=new K,Wn=new It,dm=new K(0,0,0),pm=new K(1,1,1),Ui=new K,ua=new K,Tn=new K,bu=new It,Tu=new qs;class ui{constructor(e=0,t=0,n=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],u=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class Uh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mm=0;const Au=new K,Ur=new qs,vi=new It,fa=new K,Cs=new K,gm=new K,_m=new qs,wu=new K(1,0,0),Cu=new K(0,1,0),Ru=new K(0,0,1),Pu={type:"added"},vm={type:"removed"},Nr={type:"childadded",child:null},$o={type:"childremoved",child:null};class qt extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new K,t=new ui,n=new qs,r=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new nt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(wu,e)}rotateY(e){return this.rotateOnAxis(Cu,e)}rotateZ(e){return this.rotateOnAxis(Ru,e)}translateOnAxis(e,t){return Au.copy(e).applyQuaternion(this.quaternion),this.position.add(Au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wu,e)}translateY(e){return this.translateOnAxis(Cu,e)}translateZ(e){return this.translateOnAxis(Ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Cs,fa,this.up):vi.lookAt(fa,Cs,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(vi),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pu),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vm),$o.child=e,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pu),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,gm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,_m,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),u=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}qt.DEFAULT_UP=new K(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new K,xi=new K,jo=new K,Mi=new K,Fr=new K,Or=new K,Lu=new K,Ko=new K,Zo=new K,Jo=new K;class jn{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xn.subVectors(e,t),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Xn.subVectors(r,t),xi.subVectors(n,t),jo.subVectors(e,t);const a=Xn.dot(Xn),o=Xn.dot(xi),l=Xn.dot(jo),c=xi.dot(xi),f=xi.dot(jo),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,m=(c*l-o*f)*h,_=(a*f-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(a,Mi.y),l.addScaledVector(o,Mi.z),l)}static isFrontFacing(e,t,n,r){return Xn.subVectors(n,t),xi.subVectors(e,t),Xn.cross(xi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Xn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Fr.subVectors(r,n),Or.subVectors(s,n),Ko.subVectors(e,n);const l=Fr.dot(Ko),c=Or.dot(Ko);if(l<=0&&c<=0)return t.copy(n);Zo.subVectors(e,r);const f=Fr.dot(Zo),u=Or.dot(Zo);if(f>=0&&u<=f)return t.copy(r);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(Fr,a);Jo.subVectors(e,s);const m=Fr.dot(Jo),_=Or.dot(Jo);if(_>=0&&m<=_)return t.copy(s);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Or,o);const p=f*_-m*u;if(p<=0&&u-f>=0&&m-_>=0)return Lu.subVectors(s,r),o=(u-f)/(u-f+(m-_)),t.copy(r).addScaledVector(Lu,o);const d=1/(p+v+h);return a=v*d,o=h*d,t.copy(n).addScaledVector(Fr,a).addScaledVector(Or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Qo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=gt.workingColorSpace){if(e=im(e,1),t=xn(t,0,1),n=xn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Qo(a,s,e+1/3),this.g=Qo(a,s,e),this.b=Qo(a,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,t=ai){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const n=Nh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return gt.fromWorkingColorSpace(ln.copy(this),e),Math.round(xn(ln.r*255,0,255))*65536+Math.round(xn(ln.g*255,0,255))*256+Math.round(xn(ln.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(ln.copy(this),t);const n=ln.r,r=ln.g,s=ln.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=f<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=ai){gt.fromWorkingColorSpace(ln.copy(this),e);const t=ln.r,n=ln.g,r=ln.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(ha);const n=Bo(Ni.h,ha.h,t),r=Bo(Ni.s,ha.s,t),s=Bo(Ni.l,ha.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new ct;ct.NAMES=Nh;let xm=0;class gr extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=es,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=Cl,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wl&&(n.blendSrc=this.blendSrc),this.blendDst!==Cl&&(n.blendDst=this.blendDst),this.blendEquation!==or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Cc extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new K,da=new Je;class Sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sc&&(e.usage=this.usage),e}}class Fh extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Oh extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class On extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mm=0;const Dn=new It,el=new qt,Br=new K,An=new Ys,Rs=new Ys,nn=new K;class Bn extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ph(e)?Oh:Fh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new On(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];An.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(An.min,Rs.min),An.expandByPoint(nn),nn.addVectors(An.max,Rs.max),An.expandByPoint(nn)):(An.expandByPoint(Rs.min),An.expandByPoint(Rs.max))}An.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)nn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(nn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)nn.fromBufferAttribute(o,c),l&&(Br.fromBufferAttribute(e,c),nn.add(Br)),r=Math.max(r,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new K,l[U]=new K;const c=new K,f=new K,u=new K,h=new Je,m=new Je,_=new Je,v=new K,p=new K;function d(U,b,M){c.fromBufferAttribute(n,U),f.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),h.fromBufferAttribute(s,U),m.fromBufferAttribute(s,b),_.fromBufferAttribute(s,M),f.sub(c),u.sub(c),m.sub(h),_.sub(h);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(v.copy(f).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(w),p.copy(u).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(w),o[U].add(v),o[b].add(v),o[M].add(v),l[U].add(p),l[b].add(p),l[M].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let U=0,b=x.length;U<b;++U){const M=x[U],w=M.start,O=M.count;for(let N=w,H=w+O;N<H;N+=3)d(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const y=new K,E=new K,F=new K,C=new K;function P(U){F.fromBufferAttribute(r,U),C.copy(F);const b=o[U];y.copy(b),y.sub(F.multiplyScalar(F.dot(b))).normalize(),E.crossVectors(C,b);const w=E.dot(l[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,w)}for(let U=0,b=x.length;U<b;++U){const M=x[U],w=M.start,O=M.count;for(let N=w,H=w+O;N<H;N+=3)P(e.getX(N+0)),P(e.getX(N+1)),P(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new K,s=new K,a=new K,o=new K,l=new K,c=new K,f=new K,u=new K;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(f),l.add(f),c.add(f),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,u=o.normalized,h=new c.constructor(l.length*f);let m=0,_=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*f;for(let d=0;d<f;d++)h[_++]=c[m++]}return new Sn(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,u=c.length;f<u;f++){const h=c[f],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const m=c[u];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],u=s[c];for(let h=0,m=u.length;h<m;h++)f.push(u[h].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Du=new It,Qi=new Ih,pa=new co,Iu=new K,zr=new K,kr=new K,Hr=new K,tl=new K,ma=new K,ga=new Je,_a=new Je,va=new Je,Uu=new K,Nu=new K,Fu=new K,xa=new K,Ma=new K;class Jn extends qt{constructor(e=new Bn,t=new Cc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ma.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],u=s[l];f!==0&&(tl.fromBufferAttribute(u,e),a?ma.addScaledVector(tl,f):ma.addScaledVector(tl.sub(t),f))}t.add(ma)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),Qi.copy(e.ray).recast(e.near),!(pa.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(pa,Iu)===null||Qi.origin.distanceToSquared(Iu)>(e.far-e.near)**2))&&(Du.copy(s).invert(),Qi.copy(e.ray).applyMatrix4(Du),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const p=h[_],d=a[p.materialIndex],x=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=x,F=y;E<F;E+=3){const C=o.getX(E),P=o.getX(E+1),U=o.getX(E+2);r=Sa(this,d,e,n,c,f,u,C,P,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const x=o.getX(p),y=o.getX(p+1),E=o.getX(p+2);r=Sa(this,a,e,n,c,f,u,x,y,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const p=h[_],d=a[p.materialIndex],x=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=x,F=y;E<F;E+=3){const C=E,P=E+1,U=E+2;r=Sa(this,d,e,n,c,f,u,C,P,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const x=p,y=p+1,E=p+2;r=Sa(this,a,e,n,c,f,u,x,y,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Sm(i,e,t,n,r,s,a,o){let l;if(e.side===Mn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Vi,o),l===null)return null;Ma.copy(o),Ma.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ma);return c<t.near||c>t.far?null:{distance:c,point:Ma.clone(),object:i}}function Sa(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,zr),i.getVertexPosition(l,kr),i.getVertexPosition(c,Hr);const f=Sm(i,e,t,n,zr,kr,Hr,xa);if(f){r&&(ga.fromBufferAttribute(r,o),_a.fromBufferAttribute(r,l),va.fromBufferAttribute(r,c),f.uv=jn.getInterpolation(xa,zr,kr,Hr,ga,_a,va,new Je)),s&&(ga.fromBufferAttribute(s,o),_a.fromBufferAttribute(s,l),va.fromBufferAttribute(s,c),f.uv1=jn.getInterpolation(xa,zr,kr,Hr,ga,_a,va,new Je)),a&&(Uu.fromBufferAttribute(a,o),Nu.fromBufferAttribute(a,l),Fu.fromBufferAttribute(a,c),f.normal=jn.getInterpolation(xa,zr,kr,Hr,Uu,Nu,Fu,new K),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new K,materialIndex:0};jn.getNormal(zr,kr,Hr,u.normal),f.face=u}return f}class $s extends Bn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],u=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new On(c,3)),this.setAttribute("normal",new On(f,3)),this.setAttribute("uv",new On(u,2));function _(v,p,d,x,y,E,F,C,P,U,b){const M=E/P,w=F/U,O=E/2,N=F/2,H=C/2,G=P+1,X=U+1;let $=0,ee=0;const fe=new K;for(let le=0;le<X;le++){const de=le*w-N;for(let xe=0;xe<G;xe++){const ne=xe*M-O;fe[v]=ne*x,fe[p]=de*y,fe[d]=H,c.push(fe.x,fe.y,fe.z),fe[v]=0,fe[p]=0,fe[d]=C>0?1:-1,f.push(fe.x,fe.y,fe.z),u.push(xe/P),u.push(1-le/U),$+=1}}for(let le=0;le<U;le++)for(let de=0;de<P;de++){const xe=h+de+G*le,ne=h+de+G*(le+1),q=h+(de+1)+G*(le+1),re=h+(de+1)+G*le;l.push(xe,ne,re),l.push(ne,q,re),ee+=6}o.addGroup(m,ee,b),m+=ee,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function mn(i){const e={};for(let t=0;t<i.length;t++){const n=cs(i[t]);for(const r in n)e[r]=n[r]}return e}function ym(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Em={clone:cs,merge:mn};var bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bm,this.fragmentShader=Tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=ym(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zh extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new K,Ou=new Je,Bu=new Je;class Nn extends zh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ac*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ac*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,Ou,Bu),t.subVectors(Bu,Ou)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vr=-90,Gr=1;class Am extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(Vr,Gr,e,t);r.layers=this.layers,this.add(r);const s=new Nn(Vr,Gr,e,t);s.layers=this.layers,this.add(s);const a=new Nn(Vr,Gr,e,t);a.layers=this.layers,this.add(a);const o=new Nn(Vr,Gr,e,t);o.layers=this.layers,this.add(o);const l=new Nn(Vr,Gr,e,t);l.layers=this.layers,this.add(l);const c=new Nn(Vr,Gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$a)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(u,h,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class kh extends _n{constructor(e,t,n,r,s,a,o,l,c,f){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,n,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wm extends pr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new kh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $s(5,5,5),s=new Gi({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:zi});s.uniforms.tEquirect.value=t;const a=new Jn(r,s),o=t.minFilter;return t.minFilter===fr&&(t.minFilter=$n),new Am(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const nl=new K,Cm=new K,Rm=new nt;class ir{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=nl.subVectors(n,t).cross(Cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(nl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rm.getNormalMatrix(e),r=this.coplanarPoint(nl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new co,ya=new K;class Rc{constructor(e=new ir,t=new ir,n=new ir,r=new ir,s=new ir,a=new ir){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ei){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],f=r[5],u=r[6],h=r[7],m=r[8],_=r[9],v=r[10],p=r[11],d=r[12],x=r[13],y=r[14],E=r[15];if(n[0].setComponents(l-s,h-c,p-m,E-d).normalize(),n[1].setComponents(l+s,h+c,p+m,E+d).normalize(),n[2].setComponents(l+a,h+f,p+_,E+x).normalize(),n[3].setComponents(l-a,h-f,p-_,E-x).normalize(),n[4].setComponents(l-o,h-u,p-v,E-y).normalize(),t===Ei)n[5].setComponents(l+o,h+u,p+v,E+y).normalize();else if(t===$a)n[5].setComponents(o,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ya.x=r.normal.x>0?e.max.x:e.min.x,ya.y=r.normal.y>0?e.max.y:e.min.y,ya.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hh(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Pm(i){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const f=l.array,u=l._updateRange,h=l.updateRanges;if(i.bindBuffer(c,o),u.count===-1&&h.length===0&&i.bufferSubData(c,0,f),h.length!==0){for(let m=0,_=h.length;m<_;m++){const v=h[m];i.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*f.BYTES_PER_ELEMENT,f,u.offset,u.count),u.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class uo extends Bn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,f=l+1,u=e/o,h=t/l,m=[],_=[],v=[],p=[];for(let d=0;d<f;d++){const x=d*h-a;for(let y=0;y<c;y++){const E=y*u-s;_.push(E,-x,0),v.push(0,0,1),p.push(y/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){const y=x+c*d,E=x+c*(d+1),F=x+1+c*(d+1),C=x+1+c*d;m.push(y,E,C),m.push(E,F,C)}this.setIndex(m),this.setAttribute("position",new On(_,3)),this.setAttribute("normal",new On(v,3)),this.setAttribute("uv",new On(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dm=`#ifdef USE_ALPHAHASH
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
#endif`,Im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Om=`#ifdef USE_AOMAP
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
#endif`,Bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zm=`#ifdef USE_BATCHING
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
#endif`,km=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wm=`#ifdef USE_IRIDESCENCE
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
#endif`,Xm=`#ifdef USE_BUMPMAP
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
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,eg=`#define PI 3.141592653589793
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
} // validated`,tg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ng=`vec3 transformedNormal = objectNormal;
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
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,og="gl_FragColor = linearToOutputTexel( gl_FragColor );",lg=`
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
}`,cg=`#ifdef USE_ENVMAP
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
#endif`,ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vg=`#ifdef USE_GRADIENTMAP
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
}`,xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yg=`uniform bool receiveShadow;
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
#endif`,Eg=`#ifdef USE_ENVMAP
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
#endif`,bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cg=`PhysicalMaterial material;
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
#endif`,Rg=`struct PhysicalMaterial {
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
}`,Pg=`
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
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ig=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ug=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kg=`#if defined( USE_POINTS_UV )
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
#endif`,Hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`#ifdef USE_MORPHTARGETS
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
#endif`,Yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qg=`#ifdef USE_NORMALMAP
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
#endif`,e_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,m_=`float getShadowMask() {
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
}`,g_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,__=`#ifdef USE_SKINNING
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
#endif`,v_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x_=`#ifdef USE_SKINNING
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
#endif`,M_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b_=`#ifdef USE_TRANSMISSION
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
#endif`,T_=`#ifdef USE_TRANSMISSION
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
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L_=`uniform sampler2D t2D;
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
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,U_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F_=`#include <common>
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
}`,O_=`#if DEPTH_PACKING == 3200
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
}`,B_=`#define DISTANCE
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
}`,z_=`#define DISTANCE
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`uniform float scale;
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
}`,G_=`uniform vec3 diffuse;
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
}`,W_=`#include <common>
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
}`,X_=`uniform vec3 diffuse;
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
}`,q_=`#define LAMBERT
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
}`,Y_=`#define LAMBERT
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
}`,$_=`#define MATCAP
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
}`,j_=`#define MATCAP
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
}`,K_=`#define NORMAL
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
}`,Z_=`#define NORMAL
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
}`,J_=`#define PHONG
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
}`,Q_=`#define PHONG
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
}`,e0=`#define STANDARD
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
}`,t0=`#define STANDARD
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
}`,n0=`#define TOON
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
}`,i0=`#define TOON
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
}`,r0=`uniform float size;
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
}`,s0=`uniform vec3 diffuse;
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
}`,a0=`#include <common>
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
}`,o0=`uniform vec3 color;
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
}`,l0=`uniform float rotation;
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
}`,c0=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Lm,alphahash_pars_fragment:Dm,alphamap_fragment:Im,alphamap_pars_fragment:Um,alphatest_fragment:Nm,alphatest_pars_fragment:Fm,aomap_fragment:Om,aomap_pars_fragment:Bm,batching_pars_vertex:zm,batching_vertex:km,begin_vertex:Hm,beginnormal_vertex:Vm,bsdfs:Gm,iridescence_fragment:Wm,bumpmap_pars_fragment:Xm,clipping_planes_fragment:qm,clipping_planes_pars_fragment:Ym,clipping_planes_pars_vertex:$m,clipping_planes_vertex:jm,color_fragment:Km,color_pars_fragment:Zm,color_pars_vertex:Jm,color_vertex:Qm,common:eg,cube_uv_reflection_fragment:tg,defaultnormal_vertex:ng,displacementmap_pars_vertex:ig,displacementmap_vertex:rg,emissivemap_fragment:sg,emissivemap_pars_fragment:ag,colorspace_fragment:og,colorspace_pars_fragment:lg,envmap_fragment:cg,envmap_common_pars_fragment:ug,envmap_pars_fragment:fg,envmap_pars_vertex:hg,envmap_physical_pars_fragment:Eg,envmap_vertex:dg,fog_vertex:pg,fog_pars_vertex:mg,fog_fragment:gg,fog_pars_fragment:_g,gradientmap_pars_fragment:vg,lightmap_pars_fragment:xg,lights_lambert_fragment:Mg,lights_lambert_pars_fragment:Sg,lights_pars_begin:yg,lights_toon_fragment:bg,lights_toon_pars_fragment:Tg,lights_phong_fragment:Ag,lights_phong_pars_fragment:wg,lights_physical_fragment:Cg,lights_physical_pars_fragment:Rg,lights_fragment_begin:Pg,lights_fragment_maps:Lg,lights_fragment_end:Dg,logdepthbuf_fragment:Ig,logdepthbuf_pars_fragment:Ug,logdepthbuf_pars_vertex:Ng,logdepthbuf_vertex:Fg,map_fragment:Og,map_pars_fragment:Bg,map_particle_fragment:zg,map_particle_pars_fragment:kg,metalnessmap_fragment:Hg,metalnessmap_pars_fragment:Vg,morphinstance_vertex:Gg,morphcolor_vertex:Wg,morphnormal_vertex:Xg,morphtarget_pars_vertex:qg,morphtarget_vertex:Yg,normal_fragment_begin:$g,normal_fragment_maps:jg,normal_pars_fragment:Kg,normal_pars_vertex:Zg,normal_vertex:Jg,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:e_,clearcoat_normal_fragment_maps:t_,clearcoat_pars_fragment:n_,iridescence_pars_fragment:i_,opaque_fragment:r_,packing:s_,premultiplied_alpha_fragment:a_,project_vertex:o_,dithering_fragment:l_,dithering_pars_fragment:c_,roughnessmap_fragment:u_,roughnessmap_pars_fragment:f_,shadowmap_pars_fragment:h_,shadowmap_pars_vertex:d_,shadowmap_vertex:p_,shadowmask_pars_fragment:m_,skinbase_vertex:g_,skinning_pars_vertex:__,skinning_vertex:v_,skinnormal_vertex:x_,specularmap_fragment:M_,specularmap_pars_fragment:S_,tonemapping_fragment:y_,tonemapping_pars_fragment:E_,transmission_fragment:b_,transmission_pars_fragment:T_,uv_pars_fragment:A_,uv_pars_vertex:w_,uv_vertex:C_,worldpos_vertex:R_,background_vert:P_,background_frag:L_,backgroundCube_vert:D_,backgroundCube_frag:I_,cube_vert:U_,cube_frag:N_,depth_vert:F_,depth_frag:O_,distanceRGBA_vert:B_,distanceRGBA_frag:z_,equirect_vert:k_,equirect_frag:H_,linedashed_vert:V_,linedashed_frag:G_,meshbasic_vert:W_,meshbasic_frag:X_,meshlambert_vert:q_,meshlambert_frag:Y_,meshmatcap_vert:$_,meshmatcap_frag:j_,meshnormal_vert:K_,meshnormal_frag:Z_,meshphong_vert:J_,meshphong_frag:Q_,meshphysical_vert:e0,meshphysical_frag:t0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:r0,points_frag:s0,shadow_vert:a0,shadow_frag:o0,sprite_vert:l0,sprite_frag:c0},Ee={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},oi={basic:{uniforms:mn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:mn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ct(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:mn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:mn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:mn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new ct(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:mn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:mn([Ee.points,Ee.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:mn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:mn([Ee.common,Ee.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:mn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:mn([Ee.sprite,Ee.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:mn([Ee.common,Ee.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:mn([Ee.lights,Ee.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};oi.physical={uniforms:mn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Ea={r:0,b:0,g:0},tr=new ui,u0=new It;function f0(i,e,t,n,r,s,a){const o=new ct(0);let l=s===!0?0:1,c,f,u=null,h=0,m=null;function _(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function v(x){let y=!1;const E=_(x);E===null?d(o,l):E&&E.isColor&&(d(E,1),y=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(x,y){const E=_(y);E&&(E.isCubeTexture||E.mapping===oo)?(f===void 0&&(f=new Jn(new $s(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:cs(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(F,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),tr.copy(y.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),f.material.uniforms.envMap.value=E,f.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(u0.makeRotationFromEuler(tr)),f.material.toneMapped=gt.getTransfer(E.colorSpace)!==Pt,(u!==E||h!==E.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,u=E,h=E.version,m=i.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Jn(new uo(2,2),new Gi({name:"BackgroundMaterial",uniforms:cs(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=gt.getTransfer(E.colorSpace)!==Pt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||h!==E.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,h=E.version,m=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function d(x,y){x.getRGB(Ea,Bh(i)),n.buffers.color.setClear(Ea.r,Ea.g,Ea.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(o,l)},render:v,addToRenderList:p}}function h0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(M,w,O,N,H){let G=!1;const X=u(N,O,w);s!==X&&(s=X,c(s.object)),G=m(M,N,O,H),G&&_(M,N,O,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,E(M,w,O,N),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function f(M){return i.deleteVertexArray(M)}function u(M,w,O){const N=O.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let G=H[w.id];G===void 0&&(G={},H[w.id]=G);let X=G[N];return X===void 0&&(X=h(l()),G[N]=X),X}function h(M){const w=[],O=[],N=[];for(let H=0;H<t;H++)w[H]=0,O[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:N,object:M,attributes:{},index:null}}function m(M,w,O,N){const H=s.attributes,G=w.attributes;let X=0;const $=O.getAttributes();for(const ee in $)if($[ee].location>=0){const le=H[ee];let de=G[ee];if(de===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),le===void 0||le.attribute!==de||de&&le.data!==de.data)return!0;X++}return s.attributesNum!==X||s.index!==N}function _(M,w,O,N){const H={},G=w.attributes;let X=0;const $=O.getAttributes();for(const ee in $)if($[ee].location>=0){let le=G[ee];le===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(le=M.instanceColor));const de={};de.attribute=le,le&&le.data&&(de.data=le.data),H[ee]=de,X++}s.attributes=H,s.attributesNum=X,s.index=N}function v(){const M=s.newAttributes;for(let w=0,O=M.length;w<O;w++)M[w]=0}function p(M){d(M,0)}function d(M,w){const O=s.newAttributes,N=s.enabledAttributes,H=s.attributeDivisors;O[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),H[M]!==w&&(i.vertexAttribDivisor(M,w),H[M]=w)}function x(){const M=s.newAttributes,w=s.enabledAttributes;for(let O=0,N=w.length;O<N;O++)w[O]!==M[O]&&(i.disableVertexAttribArray(O),w[O]=0)}function y(M,w,O,N,H,G,X){X===!0?i.vertexAttribIPointer(M,w,O,H,G):i.vertexAttribPointer(M,w,O,N,H,G)}function E(M,w,O,N){v();const H=N.attributes,G=O.getAttributes(),X=w.defaultAttributeValues;for(const $ in G){const ee=G[$];if(ee.location>=0){let fe=H[$];if(fe===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),fe!==void 0){const le=fe.normalized,de=fe.itemSize,xe=e.get(fe);if(xe===void 0)continue;const ne=xe.buffer,q=xe.type,re=xe.bytesPerElement,z=q===i.INT||q===i.UNSIGNED_INT||fe.gpuType===Mc;if(fe.isInterleavedBufferAttribute){const J=fe.data,me=J.stride,Te=fe.offset;if(J.isInstancedInterleavedBuffer){for(let Ce=0;Ce<ee.locationSize;Ce++)d(ee.location+Ce,J.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ce=0;Ce<ee.locationSize;Ce++)p(ee.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Ce=0;Ce<ee.locationSize;Ce++)y(ee.location+Ce,de/ee.locationSize,q,le,me*re,(Te+de/ee.locationSize*Ce)*re,z)}else{if(fe.isInstancedBufferAttribute){for(let J=0;J<ee.locationSize;J++)d(ee.location+J,fe.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let J=0;J<ee.locationSize;J++)p(ee.location+J);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let J=0;J<ee.locationSize;J++)y(ee.location+J,de/ee.locationSize,q,le,de*re,de/ee.locationSize*J*re,z)}}else if(X!==void 0){const le=X[$];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(ee.location,le);break;case 3:i.vertexAttrib3fv(ee.location,le);break;case 4:i.vertexAttrib4fv(ee.location,le);break;default:i.vertexAttrib1fv(ee.location,le)}}}}x()}function F(){U();for(const M in n){const w=n[M];for(const O in w){const N=w[O];for(const H in N)f(N[H].object),delete N[H];delete w[O]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const w=n[M.id];for(const O in w){const N=w[O];for(const H in N)f(N[H].object),delete N[H];delete w[O]}delete n[M.id]}function P(M){for(const w in n){const O=n[w];if(O[M.id]===void 0)continue;const N=O[M.id];for(const H in N)f(N[H].object),delete N[H];delete O[M.id]}}function U(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:b,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:p,disableUnusedAttributes:x}}function d0(i,e,t){let n;function r(c){n=c}function s(c,f){i.drawArrays(n,c,f),t.update(f,n,1)}function a(c,f,u){u!==0&&(i.drawArraysInstanced(n,c,f,u),t.update(f,n,u))}function o(c,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=f[_];t.update(m,n,1)}function l(c,f,u,h){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],f[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,f,0,h,0,u);let _=0;for(let v=0;v<u;v++)_+=f[v];for(let v=0;v<h.length;v++)t.update(_,n,h[v])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function p0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Zn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===Xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ai&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==yi&&!P)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:E,maxSamples:F}}function m0(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new ir,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const m=u.length!==0||h||n!==0||r;return r=h,n=u.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=f(u,h,0)},this.setState=function(u,h,m){const _=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!r||_===null||_.length===0||s&&!p)s?f(null):c();else{const x=s?0:n,y=x*4;let E=d.clippingState||null;l.value=E,E=f(_,h,y,m);for(let F=0;F!==y;++F)E[F]=t[F];d.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(u,h,m,_){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const d=m+v*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,E=m;y!==v;++y,E+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function g0(i){let e=new WeakMap;function t(a,o){return o===Rl?a.mapping=ss:o===Pl&&(a.mapping=as),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rl||o===Pl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new wm(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Vh extends zh{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zr=4,zu=[.125,.215,.35,.446,.526,.582],lr=20,il=new Vh,ku=new ct;let rl=null,sl=0,al=0,ol=!1;const rr=(1+Math.sqrt(5))/2,Wr=1/rr,Hu=[new K(-rr,Wr,0),new K(rr,Wr,0),new K(-Wr,0,rr),new K(Wr,0,rr),new K(0,rr,-Wr),new K(0,rr,Wr),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class Vu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){rl=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rl,sl,al),this._renderer.xr.enabled=ol,e.scissorTest=!1,ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rl=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Xs,format:Zn,colorSpace:Xi,depthBuffer:!1},r=Gu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_0(s)),this._blurMaterial=v0(s,e,t)}return r}_compileMaterial(e){const t=new Jn(this._lodPlanes[0],e);this._renderer.compile(t,il)}_sceneToCubeUV(e,t,n,r){const o=new Nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(ku),f.toneMapping=ki,f.autoClear=!1;const m=new Cc({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),_=new Jn(new $s,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(ku),v=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):x===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const y=this._cubeSize;ba(r,x*y,d>2?y:0,y,y),f.setRenderTarget(r),v&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ss||e.mapping===as;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Jn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ba(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,il)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Hu[(r-s-1)%Hu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new Jn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*lr-1),v=s/_,p=isFinite(s)?1+Math.floor(f*v):lr;p>lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${lr}`);const d=[];let x=0;for(let P=0;P<lr;++P){const U=P/v,b=Math.exp(-U*U/2);d.push(b),P===0?x+=b:P<p&&(x+=2*b)}for(let P=0;P<d.length;P++)d[P]=d[P]/x;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-n;const E=this._sizeLods[r],F=3*E*(r>y-Zr?r-y+Zr:0),C=4*(this._cubeSize-E);ba(t,F,C,3*E,2*E),l.setRenderTarget(t),l.render(u,il)}}function _0(i){const e=[],t=[],n=[];let r=i;const s=i-Zr+1+zu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Zr?l=zu[a-i+Zr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],m=6,_=6,v=3,p=2,d=1,x=new Float32Array(v*_*m),y=new Float32Array(p*_*m),E=new Float32Array(d*_*m);for(let C=0;C<m;C++){const P=C%3*2/3-1,U=C>2?0:-1,b=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];x.set(b,v*_*C),y.set(h,p*_*C);const M=[C,C,C,C,C,C];E.set(M,d*_*C)}const F=new Bn;F.setAttribute("position",new Sn(x,v)),F.setAttribute("uv",new Sn(y,p)),F.setAttribute("faceIndex",new Sn(E,d)),e.push(F),r>Zr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gu(i,e,t){const n=new pr(i,e,t);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ba(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function v0(i,e,t){const n=new Float32Array(lr),r=new K(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Wu(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Xu(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function x0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Rl||l===Pl,f=l===ss||l===as;if(c||f){let u=e.get(o);const h=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Vu(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||f&&m&&r(m)?(t===null&&(t=new Vu(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function M0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&wc("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function S0(i,e,t,n){const r={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const v=h.morphAttributes[_];for(let p=0,d=v.length;p<d;p++)e.remove(v[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const _ in h)e.update(h[_],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const v=m[_];for(let p=0,d=v.length;p<d;p++)e.update(v[p],i.ARRAY_BUFFER)}}function c(u){const h=[],m=u.index,_=u.attributes.position;let v=0;if(m!==null){const x=m.array;v=m.version;for(let y=0,E=x.length;y<E;y+=3){const F=x[y+0],C=x[y+1],P=x[y+2];h.push(F,C,C,P,P,F)}}else if(_!==void 0){const x=_.array;v=_.version;for(let y=0,E=x.length/3-1;y<E;y+=3){const F=y+0,C=y+1,P=y+2;h.push(F,C,C,P,P,F)}}else return;const p=new(Ph(h)?Oh:Fh)(h,1);p.version=v;const d=s.get(u);d&&e.remove(d),s.set(u,p)}function f(u){const h=s.get(u);if(h){const m=u.index;m!==null&&h.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:f}}function y0(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){i.drawElements(n,m,s,h*a),t.update(m,n,1)}function c(h,m,_){_!==0&&(i.drawElementsInstanced(n,m,s,h*a,_),t.update(m,n,_))}function f(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,h,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];t.update(p,n,1)}function u(h,m,_,v){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/a,m[d],v[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,h,0,v,0,_);let d=0;for(let x=0;x<_;x++)d+=m[x];for(let x=0;x<v.length;x++)t.update(d,n,v[x])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function E0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function b0(i,e,t){const n=new WeakMap,r=new Xt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let h=n.get(o);if(h===void 0||h.count!==u){let M=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var m=M;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),v===!0&&(E=2),p===!0&&(E=3);let F=o.attributes.position.count*E,C=1;F>e.maxTextureSize&&(C=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const P=new Float32Array(F*C*4*u),U=new Dh(P,F,C,u);U.type=yi,U.needsUpdate=!0;const b=E*4;for(let w=0;w<u;w++){const O=d[w],N=x[w],H=y[w],G=F*C*4*w;for(let X=0;X<O.count;X++){const $=X*b;_===!0&&(r.fromBufferAttribute(O,X),P[G+$+0]=r.x,P[G+$+1]=r.y,P[G+$+2]=r.z,P[G+$+3]=0),v===!0&&(r.fromBufferAttribute(N,X),P[G+$+4]=r.x,P[G+$+5]=r.y,P[G+$+6]=r.z,P[G+$+7]=0),p===!0&&(r.fromBufferAttribute(H,X),P[G+$+8]=r.x,P[G+$+9]=r.y,P[G+$+10]=r.z,P[G+$+11]=H.itemSize===4?r.w:1)}}h={count:u,texture:U,size:new Je(F,C)},n.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function T0(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Gh extends _n{constructor(e,t,n,r,s,a,o,l,c,f=ts){if(f!==ts&&f!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===ts&&(n=dr),n===void 0&&f===ls&&(n=os),super(null,r,s,a,o,l,f,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Wh=new _n,qu=new Gh(1,1),Xh=new Dh,qh=new fm,Yh=new kh,Yu=[],$u=[],ju=new Float32Array(16),Ku=new Float32Array(9),Zu=new Float32Array(4);function ms(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Yu[r];if(s===void 0&&(s=new Float32Array(r),Yu[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fo(i,e){let t=$u[e];t===void 0&&(t=new Int32Array(e),$u[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function A0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function w0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function C0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function R0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function P0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Zu.set(n),i.uniformMatrix2fv(this.addr,!1,Zu),$t(t,n)}}function L0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Ku.set(n),i.uniformMatrix3fv(this.addr,!1,Ku),$t(t,n)}}function D0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;ju.set(n),i.uniformMatrix4fv(this.addr,!1,ju),$t(t,n)}}function I0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function U0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function N0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function F0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function O0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function B0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function k0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function H0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(qu.compareFunction=Rh,s=qu):s=Wh,t.setTexture2D(e||s,r)}function V0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||qh,r)}function G0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Yh,r)}function W0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Xh,r)}function X0(i){switch(i){case 5126:return A0;case 35664:return w0;case 35665:return C0;case 35666:return R0;case 35674:return P0;case 35675:return L0;case 35676:return D0;case 5124:case 35670:return I0;case 35667:case 35671:return U0;case 35668:case 35672:return N0;case 35669:case 35673:return F0;case 5125:return O0;case 36294:return B0;case 36295:return z0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return W0}}function q0(i,e){i.uniform1fv(this.addr,e)}function Y0(i,e){const t=ms(e,this.size,2);i.uniform2fv(this.addr,t)}function $0(i,e){const t=ms(e,this.size,3);i.uniform3fv(this.addr,t)}function j0(i,e){const t=ms(e,this.size,4);i.uniform4fv(this.addr,t)}function K0(i,e){const t=ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Z0(i,e){const t=ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function J0(i,e){const t=ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Q0(i,e){i.uniform1iv(this.addr,e)}function ev(i,e){i.uniform2iv(this.addr,e)}function tv(i,e){i.uniform3iv(this.addr,e)}function nv(i,e){i.uniform4iv(this.addr,e)}function iv(i,e){i.uniform1uiv(this.addr,e)}function rv(i,e){i.uniform2uiv(this.addr,e)}function sv(i,e){i.uniform3uiv(this.addr,e)}function av(i,e){i.uniform4uiv(this.addr,e)}function ov(i,e,t){const n=this.cache,r=e.length,s=fo(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Wh,s[a])}function lv(i,e,t){const n=this.cache,r=e.length,s=fo(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||qh,s[a])}function cv(i,e,t){const n=this.cache,r=e.length,s=fo(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Yh,s[a])}function uv(i,e,t){const n=this.cache,r=e.length,s=fo(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Xh,s[a])}function fv(i){switch(i){case 5126:return q0;case 35664:return Y0;case 35665:return $0;case 35666:return j0;case 35674:return K0;case 35675:return Z0;case 35676:return J0;case 5124:case 35670:return Q0;case 35667:case 35671:return ev;case 35668:case 35672:return tv;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return rv;case 36295:return sv;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return uv}}class hv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=X0(t.type)}}class dv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fv(t.type)}}class pv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ll=/(\w+)(\])?(\[|\.)?/g;function Ju(i,e){i.seq.push(e),i.map[e.id]=e}function mv(i,e,t){const n=i.name,r=n.length;for(ll.lastIndex=0;;){const s=ll.exec(n),a=ll.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ju(t,c===void 0?new hv(o,i,e):new dv(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new pv(o),Ju(t,u)),t=u}}}class Va{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);mv(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Qu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const gv=37297;let _v=0;function vv(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function xv(i){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(i);let n;switch(e===t?n="":e===Ya&&t===qa?n="LinearDisplayP3ToLinearSRGB":e===qa&&t===Ya&&(n="LinearSRGBToLinearDisplayP3"),i){case Xi:case lo:return[n,"LinearTransferOETF"];case ai:case Ac:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ef(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+vv(i.getShaderSource(e),a)}else return r}function Mv(i,e){const t=xv(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Sv(i,e){let t;switch(e){case zp:t="Linear";break;case kp:t="Reinhard";break;case Hp:t="OptimizedCineon";break;case Vp:t="ACESFilmic";break;case Wp:t="AgX";break;case Xp:t="Neutral";break;case Gp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function Ev(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Fs(i){return i!==""}function tf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(i){return i.replace(Tv,wv)}const Av=new Map;function wv(i,e){let t=tt[e];if(t===void 0){const n=Av.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return oc(t)}const Cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rf(i){return i.replace(Cv,Rv)}function Rv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Pv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===fp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function Lv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ss:case as:e="ENVMAP_TYPE_CUBE";break;case oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case as:e="ENVMAP_MODE_REFRACTION";break}return e}function Iv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gh:e="ENVMAP_BLENDING_MULTIPLY";break;case Op:e="ENVMAP_BLENDING_MIX";break;case Bp:e="ENVMAP_BLENDING_ADD";break}return e}function Uv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Nv(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Pv(t),c=Lv(t),f=Dv(t),u=Iv(t),h=Uv(t),m=yv(t),_=Ev(s),v=r.createProgram();let p,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fs).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fs).join(`
`),d.length>0&&(d+=`
`)):(p=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),d=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?tt.tonemapping_pars_fragment:"",t.toneMapping!==ki?Sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Mv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),a=oc(a),a=tf(a,t),a=nf(a,t),o=oc(o),o=tf(o,t),o=nf(o,t),a=rf(a),o=rf(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=x+p+a,E=x+d+o,F=Qu(r,r.VERTEX_SHADER,y),C=Qu(r,r.FRAGMENT_SHADER,E);r.attachShader(v,F),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(w){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(v).trim(),N=r.getShaderInfoLog(F).trim(),H=r.getShaderInfoLog(C).trim();let G=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,F,C);else{const $=ef(r,F,"vertex"),ee=ef(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+$+`
`+ee)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||H==="")&&(X=!1);X&&(w.diagnostics={runnable:G,programLog:O,vertexShader:{log:N,prefix:p},fragmentShader:{log:H,prefix:d}})}r.deleteShader(F),r.deleteShader(C),U=new Va(r,v),b=bv(r,v)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,gv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_v++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=C,this}let Fv=0;class Ov{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Bv(e),t.set(e,n)),n}}class Bv{constructor(e){this.id=Fv++,this.code=e,this.usedTimes=0}}function zv(i,e,t,n,r,s,a){const o=new Uh,l=new Ov,c=new Set,f=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,M,w,O,N){const H=O.fog,G=N.geometry,X=b.isMeshStandardMaterial?O.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||X),ee=$&&$.mapping===oo?$.image.height:null,fe=_[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const le=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,de=le!==void 0?le.length:0;let xe=0;G.morphAttributes.position!==void 0&&(xe=1),G.morphAttributes.normal!==void 0&&(xe=2),G.morphAttributes.color!==void 0&&(xe=3);let ne,q,re,z;if(fe){const ut=oi[fe];ne=ut.vertexShader,q=ut.fragmentShader}else ne=b.vertexShader,q=b.fragmentShader,l.update(b),re=l.getVertexShaderID(b),z=l.getFragmentShaderID(b);const J=i.getRenderTarget(),me=N.isInstancedMesh===!0,Te=N.isBatchedMesh===!0,Ce=!!b.map,je=!!b.matcap,I=!!$,Qe=!!b.aoMap,ke=!!b.lightMap,et=!!b.bumpMap,Ue=!!b.normalMap,_t=!!b.displacementMap,He=!!b.emissiveMap,Xe=!!b.metalnessMap,D=!!b.roughnessMap,T=b.anisotropy>0,te=b.clearcoat>0,ce=b.dispersion>0,ie=b.iridescence>0,Y=b.sheen>0,ye=b.transmission>0,ge=T&&!!b.anisotropyMap,Pe=te&&!!b.clearcoatMap,Ye=te&&!!b.clearcoatNormalMap,pe=te&&!!b.clearcoatRoughnessMap,Ae=ie&&!!b.iridescenceMap,$e=ie&&!!b.iridescenceThicknessMap,Fe=Y&&!!b.sheenColorMap,Se=Y&&!!b.sheenRoughnessMap,Be=!!b.specularMap,Ze=!!b.specularColorMap,vt=!!b.specularIntensityMap,k=ye&&!!b.transmissionMap,_e=ye&&!!b.thicknessMap,oe=!!b.gradientMap,se=!!b.alphaMap,Me=b.alphaTest>0,Ve=!!b.alphaHash,at=!!b.extensions;let Ut=ki;b.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ut=i.toneMapping);const Ht={shaderID:fe,shaderType:b.type,shaderName:b.name,vertexShader:ne,fragmentShader:q,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Te,batchingColor:Te&&N._colorsTexture!==null,instancing:me,instancingColor:me&&N.instanceColor!==null,instancingMorph:me&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Xi,alphaToCoverage:!!b.alphaToCoverage,map:Ce,matcap:je,envMap:I,envMapMode:I&&$.mapping,envMapCubeUVHeight:ee,aoMap:Qe,lightMap:ke,bumpMap:et,normalMap:Ue,displacementMap:h&&_t,emissiveMap:He,normalMapObjectSpace:Ue&&b.normalMapType===jp,normalMapTangentSpace:Ue&&b.normalMapType===Ch,metalnessMap:Xe,roughnessMap:D,anisotropy:T,anisotropyMap:ge,clearcoat:te,clearcoatMap:Pe,clearcoatNormalMap:Ye,clearcoatRoughnessMap:pe,dispersion:ce,iridescence:ie,iridescenceMap:Ae,iridescenceThicknessMap:$e,sheen:Y,sheenColorMap:Fe,sheenRoughnessMap:Se,specularMap:Be,specularColorMap:Ze,specularIntensityMap:vt,transmission:ye,transmissionMap:k,thicknessMap:_e,gradientMap:oe,opaque:b.transparent===!1&&b.blending===es&&b.alphaToCoverage===!1,alphaMap:se,alphaTest:Me,alphaHash:Ve,combine:b.combine,mapUv:Ce&&v(b.map.channel),aoMapUv:Qe&&v(b.aoMap.channel),lightMapUv:ke&&v(b.lightMap.channel),bumpMapUv:et&&v(b.bumpMap.channel),normalMapUv:Ue&&v(b.normalMap.channel),displacementMapUv:_t&&v(b.displacementMap.channel),emissiveMapUv:He&&v(b.emissiveMap.channel),metalnessMapUv:Xe&&v(b.metalnessMap.channel),roughnessMapUv:D&&v(b.roughnessMap.channel),anisotropyMapUv:ge&&v(b.anisotropyMap.channel),clearcoatMapUv:Pe&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(b.sheenRoughnessMap.channel),specularMapUv:Be&&v(b.specularMap.channel),specularColorMapUv:Ze&&v(b.specularColorMap.channel),specularIntensityMapUv:vt&&v(b.specularIntensityMap.channel),transmissionMapUv:k&&v(b.transmissionMap.channel),thicknessMapUv:_e&&v(b.thicknessMap.channel),alphaMapUv:se&&v(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ue||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(Ce||se),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Ce&&b.map.isVideoTexture===!0&&gt.getTransfer(b.map.colorSpace)===Pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===li,flipSided:b.side===Mn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:at&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&b.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function d(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const w in b.defines)M.push(w),M.push(b.defines[w]);return b.isRawShaderMaterial===!1&&(x(M,b),y(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),b.push(o.mask)}function E(b){const M=_[b.type];let w;if(M){const O=oi[M];w=Em.clone(O.uniforms)}else w=b.uniforms;return w}function F(b,M){let w;for(let O=0,N=f.length;O<N;O++){const H=f[O];if(H.cacheKey===M){w=H,++w.usedTimes;break}}return w===void 0&&(w=new Nv(i,M,b,s),f.push(w)),w}function C(b){if(--b.usedTimes===0){const M=f.indexOf(b);f[M]=f[f.length-1],f.pop(),b.destroy()}}function P(b){l.remove(b)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:F,releaseProgram:C,releaseShaderCache:P,programs:f,dispose:U}}function kv(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Hv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function af(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function of(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u,h,m,_,v,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:h,material:m,groupOrder:_,renderOrder:u.renderOrder,z:v,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=h,d.material=m,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=v,d.group=p),e++,d}function o(u,h,m,_,v,p){const d=a(u,h,m,_,v,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(u,h,m,_,v,p){const d=a(u,h,m,_,v,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,h){t.length>1&&t.sort(u||Hv),n.length>1&&n.sort(h||af),r.length>1&&r.sort(h||af)}function f(){for(let u=e,h=i.length;u<h;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function Vv(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new of,i.set(n,[a])):r>=s.length?(a=new of,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Gv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new ct};break;case"SpotLight":t={position:new K,direction:new K,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new K,halfWidth:new K,halfHeight:new K};break}return i[e.id]=t,t}}}function Wv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Xv=0;function qv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Yv(i){const e=new Gv,t=Wv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new K);const r=new K,s=new It,a=new It;function o(c){let f=0,u=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,_=0,v=0,p=0,d=0,x=0,y=0,E=0,F=0,C=0,P=0;c.sort(qv);for(let b=0,M=c.length;b<M;b++){const w=c[b],O=w.color,N=w.intensity,H=w.distance,G=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=O.r*N,u+=O.g*N,h+=O.b*N;else if(w.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(w.sh.coefficients[X],N);P++}else if(w.isDirectionalLight){const X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const $=w.shadow,ee=t.get(w);ee.shadowIntensity=$.intensity,ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=G,n.directionalShadowMatrix[m]=w.shadow.matrix,x++}n.directional[m]=X,m++}else if(w.isSpotLight){const X=e.get(w);X.position.setFromMatrixPosition(w.matrixWorld),X.color.copy(O).multiplyScalar(N),X.distance=H,X.coneCos=Math.cos(w.angle),X.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),X.decay=w.decay,n.spot[v]=X;const $=w.shadow;if(w.map&&(n.spotLightMap[F]=w.map,F++,$.updateMatrices(w),w.castShadow&&C++),n.spotLightMatrix[v]=$.matrix,w.castShadow){const ee=t.get(w);ee.shadowIntensity=$.intensity,ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,n.spotShadow[v]=ee,n.spotShadowMap[v]=G,E++}v++}else if(w.isRectAreaLight){const X=e.get(w);X.color.copy(O).multiplyScalar(N),X.halfWidth.set(w.width*.5,0,0),X.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=X,p++}else if(w.isPointLight){const X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),X.distance=w.distance,X.decay=w.decay,w.castShadow){const $=w.shadow,ee=t.get(w);ee.shadowIntensity=$.intensity,ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,ee.shadowCameraNear=$.camera.near,ee.shadowCameraFar=$.camera.far,n.pointShadow[_]=ee,n.pointShadowMap[_]=G,n.pointShadowMatrix[_]=w.shadow.matrix,y++}n.point[_]=X,_++}else if(w.isHemisphereLight){const X=e.get(w);X.skyColor.copy(w.color).multiplyScalar(N),X.groundColor.copy(w.groundColor).multiplyScalar(N),n.hemi[d]=X,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;const U=n.hash;(U.directionalLength!==m||U.pointLength!==_||U.spotLength!==v||U.rectAreaLength!==p||U.hemiLength!==d||U.numDirectionalShadows!==x||U.numPointShadows!==y||U.numSpotShadows!==E||U.numSpotMaps!==F||U.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+F-C,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,U.directionalLength=m,U.pointLength=_,U.spotLength=v,U.rectAreaLength=p,U.hemiLength=d,U.numDirectionalShadows=x,U.numPointShadows=y,U.numSpotShadows=E,U.numSpotMaps=F,U.numLightProbes=P,n.version=Xv++)}function l(c,f){let u=0,h=0,m=0,_=0,v=0;const p=f.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const y=c[d];if(y.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),u++}else if(y.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function lf(i){const e=new Yv(i),t=[],n=[];function r(f){c.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function o(){e.setup(t)}function l(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function $v(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new lf(i),e.set(r,[o])):s>=a.length?(o=new lf(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class jv extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kv extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jv=`uniform sampler2D shadow_pass;
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
}`;function Qv(i,e,t){let n=new Rc;const r=new Je,s=new Je,a=new Xt,o=new jv({depthPacking:$p}),l=new Kv,c={},f=t.maxTextureSize,u={[Vi]:Mn,[Mn]:Vi,[li]:li},h=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Zv,fragmentShader:Jv}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Bn;_.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Jn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mh;let d=this.type;this.render=function(C,P,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),O=i.state;O.setBlending(zi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=d!==Si&&this.type===Si,H=d===Si&&this.type!==Si;for(let G=0,X=C.length;G<X;G++){const $=C[G],ee=$.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;r.copy(ee.mapSize);const fe=ee.getFrameExtents();if(r.multiply(fe),s.copy(ee.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/fe.x),r.x=s.x*fe.x,ee.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/fe.y),r.y=s.y*fe.y,ee.mapSize.y=s.y)),ee.map===null||N===!0||H===!0){const de=this.type!==Si?{minFilter:Fn,magFilter:Fn}:{};ee.map!==null&&ee.map.dispose(),ee.map=new pr(r.x,r.y,de),ee.map.texture.name=$.name+".shadowMap",ee.camera.updateProjectionMatrix()}i.setRenderTarget(ee.map),i.clear();const le=ee.getViewportCount();for(let de=0;de<le;de++){const xe=ee.getViewport(de);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),O.viewport(a),ee.updateMatrices($,de),n=ee.getFrustum(),E(P,U,ee.camera,$,this.type)}ee.isPointLightShadow!==!0&&this.type===Si&&x(ee,U),ee.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(b,M,w)};function x(C,P){const U=e.update(v);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new pr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,U,h,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,U,m,v,null)}function y(C,P,U,b){let M=null;const w=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)M=w;else if(M=U.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const O=M.uuid,N=P.uuid;let H=c[O];H===void 0&&(H={},c[O]=H);let G=H[N];G===void 0&&(G=M.clone(),H[N]=G,P.addEventListener("dispose",F)),M=G}if(M.visible=P.visible,M.wireframe=P.wireframe,b===Si?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=U}return M}function E(C,P,U,b,M){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Si)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const N=e.update(C),H=C.material;if(Array.isArray(H)){const G=N.groups;for(let X=0,$=G.length;X<$;X++){const ee=G[X],fe=H[ee.materialIndex];if(fe&&fe.visible){const le=y(C,fe,b,M);C.onBeforeShadow(i,C,P,U,N,le,ee),i.renderBufferDirect(U,null,N,le,C,ee),C.onAfterShadow(i,C,P,U,N,le,ee)}}}else if(H.visible){const G=y(C,H,b,M);C.onBeforeShadow(i,C,P,U,N,G,null),i.renderBufferDirect(U,null,N,G,C,null),C.onAfterShadow(i,C,P,U,N,G,null)}}const O=C.children;for(let N=0,H=O.length;N<H;N++)E(O[N],P,U,b,M)}function F(C){C.target.removeEventListener("dispose",F);for(const U in c){const b=c[U],M=C.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function ex(i){function e(){let k=!1;const _e=new Xt;let oe=null;const se=new Xt(0,0,0,0);return{setMask:function(Me){oe!==Me&&!k&&(i.colorMask(Me,Me,Me,Me),oe=Me)},setLocked:function(Me){k=Me},setClear:function(Me,Ve,at,Ut,Ht){Ht===!0&&(Me*=Ut,Ve*=Ut,at*=Ut),_e.set(Me,Ve,at,Ut),se.equals(_e)===!1&&(i.clearColor(Me,Ve,at,Ut),se.copy(_e))},reset:function(){k=!1,oe=null,se.set(-1,0,0,0)}}}function t(){let k=!1,_e=null,oe=null,se=null;return{setTest:function(Me){Me?z(i.DEPTH_TEST):J(i.DEPTH_TEST)},setMask:function(Me){_e!==Me&&!k&&(i.depthMask(Me),_e=Me)},setFunc:function(Me){if(oe!==Me){switch(Me){case Pp:i.depthFunc(i.NEVER);break;case Lp:i.depthFunc(i.ALWAYS);break;case Dp:i.depthFunc(i.LESS);break;case Wa:i.depthFunc(i.LEQUAL);break;case Ip:i.depthFunc(i.EQUAL);break;case Up:i.depthFunc(i.GEQUAL);break;case Np:i.depthFunc(i.GREATER);break;case Fp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=Me}},setLocked:function(Me){k=Me},setClear:function(Me){se!==Me&&(i.clearDepth(Me),se=Me)},reset:function(){k=!1,_e=null,oe=null,se=null}}}function n(){let k=!1,_e=null,oe=null,se=null,Me=null,Ve=null,at=null,Ut=null,Ht=null;return{setTest:function(ut){k||(ut?z(i.STENCIL_TEST):J(i.STENCIL_TEST))},setMask:function(ut){_e!==ut&&!k&&(i.stencilMask(ut),_e=ut)},setFunc:function(ut,zn,Kt){(oe!==ut||se!==zn||Me!==Kt)&&(i.stencilFunc(ut,zn,Kt),oe=ut,se=zn,Me=Kt)},setOp:function(ut,zn,Kt){(Ve!==ut||at!==zn||Ut!==Kt)&&(i.stencilOp(ut,zn,Kt),Ve=ut,at=zn,Ut=Kt)},setLocked:function(ut){k=ut},setClear:function(ut){Ht!==ut&&(i.clearStencil(ut),Ht=ut)},reset:function(){k=!1,_e=null,oe=null,se=null,Me=null,Ve=null,at=null,Ut=null,Ht=null}}}const r=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},f={},u=new WeakMap,h=[],m=null,_=!1,v=null,p=null,d=null,x=null,y=null,E=null,F=null,C=new ct(0,0,0),P=0,U=!1,b=null,M=null,w=null,O=null,N=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,X=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),G=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),G=X>=2);let ee=null,fe={};const le=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),xe=new Xt().fromArray(le),ne=new Xt().fromArray(de);function q(k,_e,oe,se){const Me=new Uint8Array(4),Ve=i.createTexture();i.bindTexture(k,Ve),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<oe;at++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(_e+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Ve}const re={};re[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),z(i.DEPTH_TEST),s.setFunc(Wa),et(!1),Ue(pu),z(i.CULL_FACE),Qe(zi);function z(k){c[k]!==!0&&(i.enable(k),c[k]=!0)}function J(k){c[k]!==!1&&(i.disable(k),c[k]=!1)}function me(k,_e){return f[k]!==_e?(i.bindFramebuffer(k,_e),f[k]=_e,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=_e),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function Te(k,_e){let oe=h,se=!1;if(k){oe=u.get(_e),oe===void 0&&(oe=[],u.set(_e,oe));const Me=k.textures;if(oe.length!==Me.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let Ve=0,at=Me.length;Ve<at;Ve++)oe[Ve]=i.COLOR_ATTACHMENT0+Ve;oe.length=Me.length,se=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,se=!0);se&&i.drawBuffers(oe)}function Ce(k){return m!==k?(i.useProgram(k),m=k,!0):!1}const je={[or]:i.FUNC_ADD,[dp]:i.FUNC_SUBTRACT,[pp]:i.FUNC_REVERSE_SUBTRACT};je[mp]=i.MIN,je[gp]=i.MAX;const I={[_p]:i.ZERO,[vp]:i.ONE,[xp]:i.SRC_COLOR,[wl]:i.SRC_ALPHA,[Tp]:i.SRC_ALPHA_SATURATE,[Ep]:i.DST_COLOR,[Sp]:i.DST_ALPHA,[Mp]:i.ONE_MINUS_SRC_COLOR,[Cl]:i.ONE_MINUS_SRC_ALPHA,[bp]:i.ONE_MINUS_DST_COLOR,[yp]:i.ONE_MINUS_DST_ALPHA,[Ap]:i.CONSTANT_COLOR,[wp]:i.ONE_MINUS_CONSTANT_COLOR,[Cp]:i.CONSTANT_ALPHA,[Rp]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(k,_e,oe,se,Me,Ve,at,Ut,Ht,ut){if(k===zi){_===!0&&(J(i.BLEND),_=!1);return}if(_===!1&&(z(i.BLEND),_=!0),k!==hp){if(k!==v||ut!==U){if((p!==or||y!==or)&&(i.blendEquation(i.FUNC_ADD),p=or,y=or),ut)switch(k){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mu:i.blendFunc(i.ONE,i.ONE);break;case gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _u:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _u:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}d=null,x=null,E=null,F=null,C.set(0,0,0),P=0,v=k,U=ut}return}Me=Me||_e,Ve=Ve||oe,at=at||se,(_e!==p||Me!==y)&&(i.blendEquationSeparate(je[_e],je[Me]),p=_e,y=Me),(oe!==d||se!==x||Ve!==E||at!==F)&&(i.blendFuncSeparate(I[oe],I[se],I[Ve],I[at]),d=oe,x=se,E=Ve,F=at),(Ut.equals(C)===!1||Ht!==P)&&(i.blendColor(Ut.r,Ut.g,Ut.b,Ht),C.copy(Ut),P=Ht),v=k,U=!1}function ke(k,_e){k.side===li?J(i.CULL_FACE):z(i.CULL_FACE);let oe=k.side===Mn;_e&&(oe=!oe),et(oe),k.blending===es&&k.transparent===!1?Qe(zi):Qe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);const se=k.stencilWrite;a.setTest(se),se&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),He(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?z(i.SAMPLE_ALPHA_TO_COVERAGE):J(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(k){b!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),b=k)}function Ue(k){k!==cp?(z(i.CULL_FACE),k!==M&&(k===pu?i.cullFace(i.BACK):k===up?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):J(i.CULL_FACE),M=k}function _t(k){k!==w&&(G&&i.lineWidth(k),w=k)}function He(k,_e,oe){k?(z(i.POLYGON_OFFSET_FILL),(O!==_e||N!==oe)&&(i.polygonOffset(_e,oe),O=_e,N=oe)):J(i.POLYGON_OFFSET_FILL)}function Xe(k){k?z(i.SCISSOR_TEST):J(i.SCISSOR_TEST)}function D(k){k===void 0&&(k=i.TEXTURE0+H-1),ee!==k&&(i.activeTexture(k),ee=k)}function T(k,_e,oe){oe===void 0&&(ee===null?oe=i.TEXTURE0+H-1:oe=ee);let se=fe[oe];se===void 0&&(se={type:void 0,texture:void 0},fe[oe]=se),(se.type!==k||se.texture!==_e)&&(ee!==oe&&(i.activeTexture(oe),ee=oe),i.bindTexture(k,_e||re[k]),se.type=k,se.texture=_e)}function te(){const k=fe[ee];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ce(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ye(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $e(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(k){xe.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),xe.copy(k))}function Se(k){ne.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ne.copy(k))}function Be(k,_e){let oe=l.get(_e);oe===void 0&&(oe=new WeakMap,l.set(_e,oe));let se=oe.get(k);se===void 0&&(se=i.getUniformBlockIndex(_e,k.name),oe.set(k,se))}function Ze(k,_e){const se=l.get(_e).get(k);o.get(_e)!==se&&(i.uniformBlockBinding(_e,se,k.__bindingPointIndex),o.set(_e,se))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},ee=null,fe={},f={},u=new WeakMap,h=[],m=null,_=!1,v=null,p=null,d=null,x=null,y=null,E=null,F=null,C=new ct(0,0,0),P=0,U=!1,b=null,M=null,w=null,O=null,N=null,xe.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:z,disable:J,bindFramebuffer:me,drawBuffers:Te,useProgram:Ce,setBlending:Qe,setMaterial:ke,setFlipSided:et,setCullFace:Ue,setLineWidth:_t,setPolygonOffset:He,setScissorTest:Xe,activeTexture:D,bindTexture:T,unbindTexture:te,compressedTexImage2D:ce,compressedTexImage3D:ie,texImage2D:Ae,texImage3D:$e,updateUBOMapping:Be,uniformBlockBinding:Ze,texStorage2D:Ye,texStorage3D:pe,texSubImage2D:Y,texSubImage3D:ye,compressedTexSubImage2D:ge,compressedTexSubImage3D:Pe,scissor:Fe,viewport:Se,reset:vt}}function cf(i,e,t,n){const r=tx(n);switch(t){case Sh:return i*e;case Eh:return i*e;case bh:return i*e*2;case Th:return i*e/r.components*r.byteLength;case Ec:return i*e/r.components*r.byteLength;case Ah:return i*e*2/r.components*r.byteLength;case bc:return i*e*2/r.components*r.byteLength;case yh:return i*e*3/r.components*r.byteLength;case Zn:return i*e*4/r.components*r.byteLength;case Tc:return i*e*4/r.components*r.byteLength;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case za:case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Fl:return Math.max(i,16)*Math.max(e,8)/4;case Il:case Nl:return Math.max(i,8)*Math.max(e,8)/2;case Ol:case Bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ha:case ec:case tc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wh:case nc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ic:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tx(i){switch(i){case Ai:case vh:return{byteLength:1,components:1};case Gs:case xh:case Xs:return{byteLength:2,components:1};case Sc:case yc:return{byteLength:2,components:4};case dr:case Mc:case yi:return{byteLength:4,components:1};case Mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function nx(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,f=new WeakMap;let u;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,T){return m?new OffscreenCanvas(D,T):ja("canvas")}function v(D,T,te){let ce=1;const ie=Xe(D);if((ie.width>te||ie.height>te)&&(ce=te/Math.max(ie.width,ie.height)),ce<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Y=Math.floor(ce*ie.width),ye=Math.floor(ce*ie.height);u===void 0&&(u=_(Y,ye));const ge=T?_(Y,ye):u;return ge.width=Y,ge.height=ye,ge.getContext("2d").drawImage(D,0,0,Y,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Y+"x"+ye+")."),ge}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),D;return D}function p(D){return D.generateMipmaps&&D.minFilter!==Fn&&D.minFilter!==$n}function d(D){i.generateMipmap(D)}function x(D,T,te,ce,ie=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Y=T;if(T===i.RED&&(te===i.FLOAT&&(Y=i.R32F),te===i.HALF_FLOAT&&(Y=i.R16F),te===i.UNSIGNED_BYTE&&(Y=i.R8)),T===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(Y=i.R8UI),te===i.UNSIGNED_SHORT&&(Y=i.R16UI),te===i.UNSIGNED_INT&&(Y=i.R32UI),te===i.BYTE&&(Y=i.R8I),te===i.SHORT&&(Y=i.R16I),te===i.INT&&(Y=i.R32I)),T===i.RG&&(te===i.FLOAT&&(Y=i.RG32F),te===i.HALF_FLOAT&&(Y=i.RG16F),te===i.UNSIGNED_BYTE&&(Y=i.RG8)),T===i.RG_INTEGER&&(te===i.UNSIGNED_BYTE&&(Y=i.RG8UI),te===i.UNSIGNED_SHORT&&(Y=i.RG16UI),te===i.UNSIGNED_INT&&(Y=i.RG32UI),te===i.BYTE&&(Y=i.RG8I),te===i.SHORT&&(Y=i.RG16I),te===i.INT&&(Y=i.RG32I)),T===i.RGB&&te===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),T===i.RGBA){const ye=ie?Xa:gt.getTransfer(ce);te===i.FLOAT&&(Y=i.RGBA32F),te===i.HALF_FLOAT&&(Y=i.RGBA16F),te===i.UNSIGNED_BYTE&&(Y=ye===Pt?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(D,T){let te;return D?T===null||T===dr||T===os?te=i.DEPTH24_STENCIL8:T===yi?te=i.DEPTH32F_STENCIL8:T===Gs&&(te=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===dr||T===os?te=i.DEPTH_COMPONENT24:T===yi?te=i.DEPTH_COMPONENT32F:T===Gs&&(te=i.DEPTH_COMPONENT16),te}function E(D,T){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==Fn&&D.minFilter!==$n?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function F(D){const T=D.target;T.removeEventListener("dispose",F),P(T),T.isVideoTexture&&f.delete(T)}function C(D){const T=D.target;T.removeEventListener("dispose",C),b(T)}function P(D){const T=n.get(D);if(T.__webglInit===void 0)return;const te=D.source,ce=h.get(te);if(ce){const ie=ce[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&U(D),Object.keys(ce).length===0&&h.delete(te)}n.remove(D)}function U(D){const T=n.get(D);i.deleteTexture(T.__webglTexture);const te=D.source,ce=h.get(te);delete ce[T.__cacheKey],a.memory.textures--}function b(D){const T=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(T.__webglFramebuffer[ce]))for(let ie=0;ie<T.__webglFramebuffer[ce].length;ie++)i.deleteFramebuffer(T.__webglFramebuffer[ce][ie]);else i.deleteFramebuffer(T.__webglFramebuffer[ce]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ce])}else{if(Array.isArray(T.__webglFramebuffer))for(let ce=0;ce<T.__webglFramebuffer.length;ce++)i.deleteFramebuffer(T.__webglFramebuffer[ce]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ce=0;ce<T.__webglColorRenderbuffer.length;ce++)T.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ce]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=D.textures;for(let ce=0,ie=te.length;ce<ie;ce++){const Y=n.get(te[ce]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(te[ce])}n.remove(D)}let M=0;function w(){M=0}function O(){const D=M;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),M+=1,D}function N(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function H(D,T){const te=n.get(D);if(D.isVideoTexture&&_t(D),D.isRenderTargetTexture===!1&&D.version>0&&te.__version!==D.version){const ce=D.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(te,D,T);return}}t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+T)}function G(D,T){const te=n.get(D);if(D.version>0&&te.__version!==D.version){ne(te,D,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+T)}function X(D,T){const te=n.get(D);if(D.version>0&&te.__version!==D.version){ne(te,D,T);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+T)}function $(D,T){const te=n.get(D);if(D.version>0&&te.__version!==D.version){q(te,D,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+T)}const ee={[Ll]:i.REPEAT,[ur]:i.CLAMP_TO_EDGE,[Dl]:i.MIRRORED_REPEAT},fe={[Fn]:i.NEAREST,[qp]:i.NEAREST_MIPMAP_NEAREST,[ia]:i.NEAREST_MIPMAP_LINEAR,[$n]:i.LINEAR,[Fo]:i.LINEAR_MIPMAP_NEAREST,[fr]:i.LINEAR_MIPMAP_LINEAR},le={[Kp]:i.NEVER,[nm]:i.ALWAYS,[Zp]:i.LESS,[Rh]:i.LEQUAL,[Jp]:i.EQUAL,[tm]:i.GEQUAL,[Qp]:i.GREATER,[em]:i.NOTEQUAL};function de(D,T){if(T.type===yi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===$n||T.magFilter===Fo||T.magFilter===ia||T.magFilter===fr||T.minFilter===$n||T.minFilter===Fo||T.minFilter===ia||T.minFilter===fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,ee[T.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,ee[T.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,ee[T.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,fe[T.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,fe[T.minFilter]),T.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,le[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Fn||T.minFilter!==ia&&T.minFilter!==fr||T.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function xe(D,T){let te=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",F));const ce=T.source;let ie=h.get(ce);ie===void 0&&(ie={},h.set(ce,ie));const Y=N(T);if(Y!==D.__cacheKey){ie[Y]===void 0&&(ie[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,te=!0),ie[Y].usedTimes++;const ye=ie[D.__cacheKey];ye!==void 0&&(ie[D.__cacheKey].usedTimes--,ye.usedTimes===0&&U(T)),D.__cacheKey=Y,D.__webglTexture=ie[Y].texture}return te}function ne(D,T,te){let ce=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ce=i.TEXTURE_3D);const ie=xe(D,T),Y=T.source;t.bindTexture(ce,D.__webglTexture,i.TEXTURE0+te);const ye=n.get(Y);if(Y.version!==ye.__version||ie===!0){t.activeTexture(i.TEXTURE0+te);const ge=gt.getPrimaries(gt.workingColorSpace),Pe=T.colorSpace===Bi?null:gt.getPrimaries(T.colorSpace),Ye=T.colorSpace===Bi||ge===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let pe=v(T.image,!1,r.maxTextureSize);pe=He(T,pe);const Ae=s.convert(T.format,T.colorSpace),$e=s.convert(T.type);let Fe=x(T.internalFormat,Ae,$e,T.colorSpace,T.isVideoTexture);de(ce,T);let Se;const Be=T.mipmaps,Ze=T.isVideoTexture!==!0,vt=ye.__version===void 0||ie===!0,k=Y.dataReady,_e=E(T,pe);if(T.isDepthTexture)Fe=y(T.format===ls,T.type),vt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,Fe,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,Fe,pe.width,pe.height,0,Ae,$e,null));else if(T.isDataTexture)if(Be.length>0){Ze&&vt&&t.texStorage2D(i.TEXTURE_2D,_e,Fe,Be[0].width,Be[0].height);for(let oe=0,se=Be.length;oe<se;oe++)Se=Be[oe],Ze?k&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Se.width,Se.height,Ae,$e,Se.data):t.texImage2D(i.TEXTURE_2D,oe,Fe,Se.width,Se.height,0,Ae,$e,Se.data);T.generateMipmaps=!1}else Ze?(vt&&t.texStorage2D(i.TEXTURE_2D,_e,Fe,pe.width,pe.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,Ae,$e,pe.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,pe.width,pe.height,0,Ae,$e,pe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ze&&vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Fe,Be[0].width,Be[0].height,pe.depth);for(let oe=0,se=Be.length;oe<se;oe++)if(Se=Be[oe],T.format!==Zn)if(Ae!==null)if(Ze){if(k)if(T.layerUpdates.size>0){const Me=cf(Se.width,Se.height,T.format,T.type);for(const Ve of T.layerUpdates){const at=Se.data.subarray(Ve*Me/Se.data.BYTES_PER_ELEMENT,(Ve+1)*Me/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Ve,Se.width,Se.height,1,Ae,at,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Se.width,Se.height,pe.depth,Ae,Se.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Fe,Se.width,Se.height,pe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Se.width,Se.height,pe.depth,Ae,$e,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Fe,Se.width,Se.height,pe.depth,0,Ae,$e,Se.data)}else{Ze&&vt&&t.texStorage2D(i.TEXTURE_2D,_e,Fe,Be[0].width,Be[0].height);for(let oe=0,se=Be.length;oe<se;oe++)Se=Be[oe],T.format!==Zn?Ae!==null?Ze?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,Se.width,Se.height,Ae,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Fe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?k&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Se.width,Se.height,Ae,$e,Se.data):t.texImage2D(i.TEXTURE_2D,oe,Fe,Se.width,Se.height,0,Ae,$e,Se.data)}else if(T.isDataArrayTexture)if(Ze){if(vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Fe,pe.width,pe.height,pe.depth),k)if(T.layerUpdates.size>0){const oe=cf(pe.width,pe.height,T.format,T.type);for(const se of T.layerUpdates){const Me=pe.data.subarray(se*oe/pe.data.BYTES_PER_ELEMENT,(se+1)*oe/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,pe.width,pe.height,1,Ae,$e,Me)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ae,$e,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,pe.width,pe.height,pe.depth,0,Ae,$e,pe.data);else if(T.isData3DTexture)Ze?(vt&&t.texStorage3D(i.TEXTURE_3D,_e,Fe,pe.width,pe.height,pe.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ae,$e,pe.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,pe.width,pe.height,pe.depth,0,Ae,$e,pe.data);else if(T.isFramebufferTexture){if(vt)if(Ze)t.texStorage2D(i.TEXTURE_2D,_e,Fe,pe.width,pe.height);else{let oe=pe.width,se=pe.height;for(let Me=0;Me<_e;Me++)t.texImage2D(i.TEXTURE_2D,Me,Fe,oe,se,0,Ae,$e,null),oe>>=1,se>>=1}}else if(Be.length>0){if(Ze&&vt){const oe=Xe(Be[0]);t.texStorage2D(i.TEXTURE_2D,_e,Fe,oe.width,oe.height)}for(let oe=0,se=Be.length;oe<se;oe++)Se=Be[oe],Ze?k&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Ae,$e,Se):t.texImage2D(i.TEXTURE_2D,oe,Fe,Ae,$e,Se);T.generateMipmaps=!1}else if(Ze){if(vt){const oe=Xe(pe);t.texStorage2D(i.TEXTURE_2D,_e,Fe,oe.width,oe.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,$e,pe)}else t.texImage2D(i.TEXTURE_2D,0,Fe,Ae,$e,pe);p(T)&&d(ce),ye.__version=Y.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function q(D,T,te){if(T.image.length!==6)return;const ce=xe(D,T),ie=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+te);const Y=n.get(ie);if(ie.version!==Y.__version||ce===!0){t.activeTexture(i.TEXTURE0+te);const ye=gt.getPrimaries(gt.workingColorSpace),ge=T.colorSpace===Bi?null:gt.getPrimaries(T.colorSpace),Pe=T.colorSpace===Bi||ye===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ye=T.isCompressedTexture||T.image[0].isCompressedTexture,pe=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let se=0;se<6;se++)!Ye&&!pe?Ae[se]=v(T.image[se],!0,r.maxCubemapSize):Ae[se]=pe?T.image[se].image:T.image[se],Ae[se]=He(T,Ae[se]);const $e=Ae[0],Fe=s.convert(T.format,T.colorSpace),Se=s.convert(T.type),Be=x(T.internalFormat,Fe,Se,T.colorSpace),Ze=T.isVideoTexture!==!0,vt=Y.__version===void 0||ce===!0,k=ie.dataReady;let _e=E(T,$e);de(i.TEXTURE_CUBE_MAP,T);let oe;if(Ye){Ze&&vt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Be,$e.width,$e.height);for(let se=0;se<6;se++){oe=Ae[se].mipmaps;for(let Me=0;Me<oe.length;Me++){const Ve=oe[Me];T.format!==Zn?Fe!==null?Ze?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,0,0,Ve.width,Ve.height,Fe,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,Be,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,0,0,Ve.width,Ve.height,Fe,Se,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,Be,Ve.width,Ve.height,0,Fe,Se,Ve.data)}}}else{if(oe=T.mipmaps,Ze&&vt){oe.length>0&&_e++;const se=Xe(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Be,se.width,se.height)}for(let se=0;se<6;se++)if(pe){Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ae[se].width,Ae[se].height,Fe,Se,Ae[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Be,Ae[se].width,Ae[se].height,0,Fe,Se,Ae[se].data);for(let Me=0;Me<oe.length;Me++){const at=oe[Me].image[se].image;Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,0,0,at.width,at.height,Fe,Se,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,Be,at.width,at.height,0,Fe,Se,at.data)}}else{Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Fe,Se,Ae[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Be,Fe,Se,Ae[se]);for(let Me=0;Me<oe.length;Me++){const Ve=oe[Me];Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,0,0,Fe,Se,Ve.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,Be,Fe,Se,Ve.image[se])}}}p(T)&&d(i.TEXTURE_CUBE_MAP),Y.__version=ie.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function re(D,T,te,ce,ie,Y){const ye=s.convert(te.format,te.colorSpace),ge=s.convert(te.type),Pe=x(te.internalFormat,ye,ge,te.colorSpace);if(!n.get(T).__hasExternalTextures){const pe=Math.max(1,T.width>>Y),Ae=Math.max(1,T.height>>Y);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,Y,Pe,pe,Ae,T.depth,0,ye,ge,null):t.texImage2D(ie,Y,Pe,pe,Ae,0,ye,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Ue(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,ie,n.get(te).__webglTexture,0,et(T)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,ie,n.get(te).__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function z(D,T,te){if(i.bindRenderbuffer(i.RENDERBUFFER,D),T.depthBuffer){const ce=T.depthTexture,ie=ce&&ce.isDepthTexture?ce.type:null,Y=y(T.stencilBuffer,ie),ye=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=et(T);Ue(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,Y,T.width,T.height):te?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,Y,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Y,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,D)}else{const ce=T.textures;for(let ie=0;ie<ce.length;ie++){const Y=ce[ie],ye=s.convert(Y.format,Y.colorSpace),ge=s.convert(Y.type),Pe=x(Y.internalFormat,ye,ge,Y.colorSpace),Ye=et(T);te&&Ue(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,Pe,T.width,T.height):Ue(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,Pe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function J(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),H(T.depthTexture,0);const ce=n.get(T.depthTexture).__webglTexture,ie=et(T);if(T.depthTexture.format===ts)Ue(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(T.depthTexture.format===ls)Ue(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function me(D){const T=n.get(D),te=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");J(T.__webglFramebuffer,D)}else if(te){T.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ce]),T.__webglDepthbuffer[ce]=i.createRenderbuffer(),z(T.__webglDepthbuffer[ce],D,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),z(T.__webglDepthbuffer,D,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(D,T,te){const ce=n.get(D);T!==void 0&&re(ce.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&me(D)}function Ce(D){const T=D.texture,te=n.get(D),ce=n.get(T);D.addEventListener("dispose",C);const ie=D.textures,Y=D.isWebGLCubeRenderTarget===!0,ye=ie.length>1;if(ye||(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=T.version,a.memory.textures++),Y){te.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[ge]=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)te.__webglFramebuffer[ge][Pe]=i.createFramebuffer()}else te.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let ge=0;ge<T.mipmaps.length;ge++)te.__webglFramebuffer[ge]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(ye)for(let ge=0,Pe=ie.length;ge<Pe;ge++){const Ye=n.get(ie[ge]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&Ue(D)===!1){te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let ge=0;ge<ie.length;ge++){const Pe=ie[ge];te.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[ge]);const Ye=s.convert(Pe.format,Pe.colorSpace),pe=s.convert(Pe.type),Ae=x(Pe.internalFormat,Ye,pe,Pe.colorSpace,D.isXRRenderTarget===!0),$e=et(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,Ae,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,te.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),z(te.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),de(i.TEXTURE_CUBE_MAP,T);for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)re(te.__webglFramebuffer[ge][Pe],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe);else re(te.__webglFramebuffer[ge],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);p(T)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ge=0,Pe=ie.length;ge<Pe;ge++){const Ye=ie[ge],pe=n.get(Ye);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),de(i.TEXTURE_2D,Ye),re(te.__webglFramebuffer,D,Ye,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),p(Ye)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ge=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,ce.__webglTexture),de(ge,T),T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)re(te.__webglFramebuffer[Pe],D,T,i.COLOR_ATTACHMENT0,ge,Pe);else re(te.__webglFramebuffer,D,T,i.COLOR_ATTACHMENT0,ge,0);p(T)&&d(ge),t.unbindTexture()}D.depthBuffer&&me(D)}function je(D){const T=D.textures;for(let te=0,ce=T.length;te<ce;te++){const ie=T[te];if(p(ie)){const Y=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ye=n.get(ie).__webglTexture;t.bindTexture(Y,ye),d(Y),t.unbindTexture()}}}const I=[],Qe=[];function ke(D){if(D.samples>0){if(Ue(D)===!1){const T=D.textures,te=D.width,ce=D.height;let ie=i.COLOR_BUFFER_BIT;const Y=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(D),ge=T.length>1;if(ge)for(let Pe=0;Pe<T.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Pe=0;Pe<T.length;Pe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Pe]);const Ye=n.get(T[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ye,0)}i.blitFramebuffer(0,0,te,ce,0,0,te,ce,ie,i.NEAREST),l===!0&&(I.length=0,Qe.length=0,I.push(i.COLOR_ATTACHMENT0+Pe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(I.push(Y),Qe.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Qe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Pe=0;Pe<T.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Pe]);const Ye=n.get(T[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function et(D){return Math.min(r.maxSamples,D.samples)}function Ue(D){const T=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function _t(D){const T=a.render.frame;f.get(D)!==T&&(f.set(D,T),D.update())}function He(D,T){const te=D.colorSpace,ce=D.format,ie=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||te!==Xi&&te!==Bi&&(gt.getTransfer(te)===Pt?(ce!==Zn||ie!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function Xe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=w,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=$,this.rebindTextures=Te,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Ue}function ix(i,e){function t(n,r=Bi){let s;const a=gt.getTransfer(r);if(n===Ai)return i.UNSIGNED_BYTE;if(n===Sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vh)return i.BYTE;if(n===xh)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===Mc)return i.INT;if(n===dr)return i.UNSIGNED_INT;if(n===yi)return i.FLOAT;if(n===Xs)return i.HALF_FLOAT;if(n===Sh)return i.ALPHA;if(n===yh)return i.RGB;if(n===Zn)return i.RGBA;if(n===Eh)return i.LUMINANCE;if(n===bh)return i.LUMINANCE_ALPHA;if(n===ts)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===Th)return i.RED;if(n===Ec)return i.RED_INTEGER;if(n===Ah)return i.RG;if(n===bc)return i.RG_INTEGER;if(n===Tc)return i.RGBA_INTEGER;if(n===Oa||n===Ba||n===za||n===ka)if(a===Pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Il||n===Ul||n===Nl||n===Fl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Il)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ol||n===Bl||n===zl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ol||n===Bl)return a===Pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===zl)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===jl||n===Kl||n===Zl||n===Jl||n===Ql)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===kl)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hl)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vl)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gl)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wl)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xl)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ql)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yl)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$l)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jl)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kl)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zl)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jl)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ql)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ha||n===ec||n===tc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ha)return a===Pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wh||n===nc||n===ic||n===rc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ha)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ic)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class rx extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Os extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sx={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Os;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ox=`
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

}`;class lx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new _n,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Gi({vertexShader:ax,fragmentShader:ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jn(new uo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cx extends ps{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,u=null,h=null,m=null,_=null;const v=new lx,p=t.getContextAttributes();let d=null,x=null;const y=[],E=[],F=new Je;let C=null;const P=new Nn;P.layers.enable(1),P.viewport=new Xt;const U=new Nn;U.layers.enable(2),U.viewport=new Xt;const b=[P,U],M=new rx;M.layers.enable(1),M.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=y[q];return re===void 0&&(re=new cl,y[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=y[q];return re===void 0&&(re=new cl,y[q]=re),re.getGripSpace()},this.getHand=function(q){let re=y[q];return re===void 0&&(re=new cl,y[q]=re),re.getHandSpace()};function N(q){const re=E.indexOf(q.inputSource);if(re===-1)return;const z=y[re];z!==void 0&&(z.update(q.inputSource,q.frame,c||a),z.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",G);for(let q=0;q<y.length;q++){const re=E[q];re!==null&&(E[q]=null,y[q].disconnect(re))}w=null,O=null,v.reset(),e.setRenderTarget(d),m=null,h=null,u=null,r=null,x=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",H),r.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0){const re={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new pr(m.framebufferWidth,m.framebufferHeight,{format:Zn,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let re=null,z=null,J=null;p.depth&&(J=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=p.stencil?ls:ts,z=p.stencil?os:dr);const me={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new pr(h.textureWidth,h.textureHeight,{format:Zn,type:Ai,depthTexture:new Gh(h.textureWidth,h.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ne.setContext(r),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(q){for(let re=0;re<q.removed.length;re++){const z=q.removed[re],J=E.indexOf(z);J>=0&&(E[J]=null,y[J].disconnect(z))}for(let re=0;re<q.added.length;re++){const z=q.added[re];let J=E.indexOf(z);if(J===-1){for(let Te=0;Te<y.length;Te++)if(Te>=E.length){E.push(z),J=Te;break}else if(E[Te]===null){E[Te]=z,J=Te;break}if(J===-1)break}const me=y[J];me&&me.connect(z)}}const X=new K,$=new K;function ee(q,re,z){X.setFromMatrixPosition(re.matrixWorld),$.setFromMatrixPosition(z.matrixWorld);const J=X.distanceTo($),me=re.projectionMatrix.elements,Te=z.projectionMatrix.elements,Ce=me[14]/(me[10]-1),je=me[14]/(me[10]+1),I=(me[9]+1)/me[5],Qe=(me[9]-1)/me[5],ke=(me[8]-1)/me[0],et=(Te[8]+1)/Te[0],Ue=Ce*ke,_t=Ce*et,He=J/(-ke+et),Xe=He*-ke;re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Xe),q.translateZ(He),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const D=Ce+He,T=je+He,te=Ue-Xe,ce=_t+(J-Xe),ie=I*je/T*D,Y=Qe*je/T*D;q.projectionMatrix.makePerspective(te,ce,ie,Y,D,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function fe(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;v.texture!==null&&(q.near=v.depthNear,q.far=v.depthFar),M.near=U.near=P.near=q.near,M.far=U.far=P.far=q.far,(w!==M.near||O!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,O=M.far,P.near=w,P.far=O,U.near=w,U.far=O,P.updateProjectionMatrix(),U.updateProjectionMatrix(),q.updateProjectionMatrix());const re=q.parent,z=M.cameras;fe(M,re);for(let J=0;J<z.length;J++)fe(z[J],re);z.length===2?ee(M,P,U):M.projectionMatrix.copy(P.projectionMatrix),le(q,M,re)};function le(q,re,z){z===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(z.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ac*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let de=null;function xe(q,re){if(f=re.getViewerPose(c||a),_=re,f!==null){const z=f.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let J=!1;z.length!==M.cameras.length&&(M.cameras.length=0,J=!0);for(let Te=0;Te<z.length;Te++){const Ce=z[Te];let je=null;if(m!==null)je=m.getViewport(Ce);else{const Qe=u.getViewSubImage(h,Ce);je=Qe.viewport,Te===0&&(e.setRenderTargetTextures(x,Qe.colorTexture,h.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(x))}let I=b[Te];I===void 0&&(I=new Nn,I.layers.enable(Te),I.viewport=new Xt,b[Te]=I),I.matrix.fromArray(Ce.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(Ce.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(je.x,je.y,je.width,je.height),Te===0&&(M.matrix.copy(I.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),J===!0&&M.cameras.push(I)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")){const Te=u.getDepthInformation(z[0]);Te&&Te.isValid&&Te.texture&&v.init(e,Te,r.renderState)}}for(let z=0;z<y.length;z++){const J=E[z],me=y[z];J!==null&&me!==void 0&&me.update(J,re,c||a)}de&&de(q,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),_=null}const ne=new Hh;ne.setAnimationLoop(xe),this.setAnimationLoop=function(q){de=q},this.dispose=function(){}}}const nr=new ui,ux=new It;function fx(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Bh(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,x,y,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),f(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,x,y):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Mn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Mn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const x=e.get(d),y=x.envMap,E=x.envMapRotation;y&&(p.envMap.value=y,nr.copy(E),nr.x*=-1,nr.y*=-1,nr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),p.envMapRotation.value.setFromMatrix4(ux.makeRotationFromEuler(nr)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,x,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*x,p.scale.value=y*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function f(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,x){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Mn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const x=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function hx(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const E=y.program;n.uniformBlockBinding(x,E)}function c(x,y){let E=r[x.id];E===void 0&&(_(x),E=f(x),r[x.id]=E,x.addEventListener("dispose",p));const F=y.program;n.updateUBOMapping(x,F);const C=e.render.frame;s[x.id]!==C&&(h(x),s[x.id]=C)}function f(x){const y=u();x.__bindingPointIndex=y;const E=i.createBuffer(),F=x.__size,C=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,F,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=r[x.id],E=x.uniforms,F=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,P=E.length;C<P;C++){const U=Array.isArray(E[C])?E[C]:[E[C]];for(let b=0,M=U.length;b<M;b++){const w=U[b];if(m(w,C,b,F)===!0){const O=w.__offset,N=Array.isArray(w.value)?w.value:[w.value];let H=0;for(let G=0;G<N.length;G++){const X=N[G],$=v(X);typeof X=="number"||typeof X=="boolean"?(w.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,O+H,w.__data)):X.isMatrix3?(w.__data[0]=X.elements[0],w.__data[1]=X.elements[1],w.__data[2]=X.elements[2],w.__data[3]=0,w.__data[4]=X.elements[3],w.__data[5]=X.elements[4],w.__data[6]=X.elements[5],w.__data[7]=0,w.__data[8]=X.elements[6],w.__data[9]=X.elements[7],w.__data[10]=X.elements[8],w.__data[11]=0):(X.toArray(w.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,y,E,F){const C=x.value,P=y+"_"+E;if(F[P]===void 0)return typeof C=="number"||typeof C=="boolean"?F[P]=C:F[P]=C.clone(),!0;{const U=F[P];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return F[P]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function _(x){const y=x.uniforms;let E=0;const F=16;for(let P=0,U=y.length;P<U;P++){const b=Array.isArray(y[P])?y[P]:[y[P]];for(let M=0,w=b.length;M<w;M++){const O=b[M],N=Array.isArray(O.value)?O.value:[O.value];for(let H=0,G=N.length;H<G;H++){const X=N[H],$=v(X),ee=E%F;ee!==0&&F-ee<$.boundary&&(E+=F-ee),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=$.storage}}}const C=E%F;return C>0&&(E+=F-C),x.__size=E,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function p(x){const y=x.target;y.removeEventListener("dispose",p);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class dx{constructor(e={}){const{canvas:t=rm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const d=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ai,this.toneMapping=ki,this.toneMappingExposure=1;const y=this;let E=!1,F=0,C=0,P=null,U=-1,b=null;const M=new Xt,w=new Xt;let O=null;const N=new ct(0);let H=0,G=t.width,X=t.height,$=1,ee=null,fe=null;const le=new Xt(0,0,G,X),de=new Xt(0,0,G,X);let xe=!1;const ne=new Rc;let q=!1,re=!1;const z=new It,J=new K,me=new Xt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function je(){return P===null?$:1}let I=n;function Qe(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xc}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",Me,!1),I===null){const W="webgl2";if(I=Qe(W,A),I===null)throw Qe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ke,et,Ue,_t,He,Xe,D,T,te,ce,ie,Y,ye,ge,Pe,Ye,pe,Ae,$e,Fe,Se,Be,Ze,vt;function k(){ke=new M0(I),ke.init(),Be=new ix(I,ke),et=new p0(I,ke,e,Be),Ue=new ex(I),_t=new E0(I),He=new kv,Xe=new nx(I,ke,Ue,He,et,Be,_t),D=new g0(y),T=new x0(y),te=new Pm(I),Ze=new h0(I,te),ce=new S0(I,te,_t,Ze),ie=new T0(I,ce,te,_t),$e=new b0(I,et,Xe),Ye=new m0(He),Y=new zv(y,D,T,ke,et,Ze,Ye),ye=new fx(y,He),ge=new Vv,Pe=new $v(ke),Ae=new f0(y,D,T,Ue,ie,h,l),pe=new Qv(y,ie,et),vt=new hx(I,_t,et,Ue),Fe=new d0(I,ke,_t),Se=new y0(I,ke,_t),_t.programs=Y.programs,y.capabilities=et,y.extensions=ke,y.properties=He,y.renderLists=ge,y.shadowMap=pe,y.state=Ue,y.info=_t}k();const _e=new cx(y,I);this.xr=_e,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ke.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ke.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(G,X,!1))},this.getSize=function(A){return A.set(G,X)},this.setSize=function(A,W,Q=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,X=W,t.width=Math.floor(A*$),t.height=Math.floor(W*$),Q===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(G*$,X*$).floor()},this.setDrawingBufferSize=function(A,W,Q){G=A,X=W,$=Q,t.width=Math.floor(A*Q),t.height=Math.floor(W*Q),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,W,Q,j){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,W,Q,j),Ue.viewport(M.copy(le).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(de)},this.setScissor=function(A,W,Q,j){A.isVector4?de.set(A.x,A.y,A.z,A.w):de.set(A,W,Q,j),Ue.scissor(w.copy(de).multiplyScalar($).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(A){Ue.setScissorTest(xe=A)},this.setOpaqueSort=function(A){ee=A},this.setTransparentSort=function(A){fe=A},this.getClearColor=function(A){return A.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(A=!0,W=!0,Q=!0){let j=0;if(A){let V=!1;if(P!==null){const ue=P.texture.format;V=ue===Tc||ue===bc||ue===Ec}if(V){const ue=P.texture.type,be=ue===Ai||ue===dr||ue===Gs||ue===os||ue===Sc||ue===yc,we=Ae.getClearColor(),De=Ae.getClearAlpha(),Ge=we.r,We=we.g,ze=we.b;be?(m[0]=Ge,m[1]=We,m[2]=ze,m[3]=De,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Ge,_[1]=We,_[2]=ze,_[3]=De,I.clearBufferiv(I.COLOR,0,_))}else j|=I.COLOR_BUFFER_BIT}W&&(j|=I.DEPTH_BUFFER_BIT),Q&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),ge.dispose(),Pe.dispose(),He.dispose(),D.dispose(),T.dispose(),ie.dispose(),Ze.dispose(),vt.dispose(),Y.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Kt),_e.removeEventListener("sessionend",Vt),Zt.stop()};function oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=_t.autoReset,W=pe.enabled,Q=pe.autoUpdate,j=pe.needsUpdate,V=pe.type;k(),_t.autoReset=A,pe.enabled=W,pe.autoUpdate=Q,pe.needsUpdate=j,pe.type=V}function Me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ve(A){const W=A.target;W.removeEventListener("dispose",Ve),at(W)}function at(A){Ut(A),He.remove(A)}function Ut(A){const W=He.get(A).programs;W!==void 0&&(W.forEach(function(Q){Y.releaseProgram(Q)}),A.isShaderMaterial&&Y.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,Q,j,V,ue){W===null&&(W=Te);const be=V.isMesh&&V.matrixWorld.determinant()<0,we=yo(A,W,Q,j,V);Ue.setMaterial(j,be);let De=Q.index,Ge=1;if(j.wireframe===!0){if(De=ce.getWireframeAttribute(Q),De===void 0)return;Ge=2}const We=Q.drawRange,ze=Q.attributes.position;let it=We.start*Ge,Et=(We.start+We.count)*Ge;ue!==null&&(it=Math.max(it,ue.start*Ge),Et=Math.min(Et,(ue.start+ue.count)*Ge)),De!==null?(it=Math.max(it,0),Et=Math.min(Et,De.count)):ze!=null&&(it=Math.max(it,0),Et=Math.min(Et,ze.count));const bt=Et-it;if(bt<0||bt===1/0)return;Ze.setup(V,j,we,Q,De);let rn,ot=Fe;if(De!==null&&(rn=te.get(De),ot=Se,ot.setIndex(rn)),V.isMesh)j.wireframe===!0?(Ue.setLineWidth(j.wireframeLinewidth*je()),ot.setMode(I.LINES)):ot.setMode(I.TRIANGLES);else if(V.isLine){let Ne=j.linewidth;Ne===void 0&&(Ne=1),Ue.setLineWidth(Ne*je()),V.isLineSegments?ot.setMode(I.LINES):V.isLineLoop?ot.setMode(I.LINE_LOOP):ot.setMode(I.LINE_STRIP)}else V.isPoints?ot.setMode(I.POINTS):V.isSprite&&ot.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ot.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ne=V._multiDrawStarts,Ot=V._multiDrawCounts,lt=V._multiDrawCount,Tt=De?te.get(De).bytesPerElement:1,pi=He.get(j).currentProgram.getUniforms();for(let an=0;an<lt;an++)pi.setValue(I,"_gl_DrawID",an),ot.render(Ne[an]/Tt,Ot[an])}else if(V.isInstancedMesh)ot.renderInstances(it,bt,V.count);else if(Q.isInstancedBufferGeometry){const Ne=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ot=Math.min(Q.instanceCount,Ne);ot.renderInstances(it,bt,Ot)}else ot.render(it,bt)};function Ht(A,W,Q){A.transparent===!0&&A.side===li&&A.forceSinglePass===!1?(A.side=Mn,A.needsUpdate=!0,qi(A,W,Q),A.side=Vi,A.needsUpdate=!0,qi(A,W,Q),A.side=li):qi(A,W,Q)}this.compile=function(A,W,Q=null){Q===null&&(Q=A),p=Pe.get(Q),p.init(W),x.push(p),Q.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==Q&&A.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const j=new Set;return A.traverse(function(V){const ue=V.material;if(ue)if(Array.isArray(ue))for(let be=0;be<ue.length;be++){const we=ue[be];Ht(we,Q,V),j.add(we)}else Ht(ue,Q,V),j.add(ue)}),x.pop(),p=null,j},this.compileAsync=function(A,W,Q=null){const j=this.compile(A,W,Q);return new Promise(V=>{function ue(){if(j.forEach(function(be){He.get(be).currentProgram.isReady()&&j.delete(be)}),j.size===0){V(A);return}setTimeout(ue,10)}ke.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let ut=null;function zn(A){ut&&ut(A)}function Kt(){Zt.stop()}function Vt(){Zt.start()}const Zt=new Hh;Zt.setAnimationLoop(zn),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(A){ut=A,_e.setAnimationLoop(A),A===null?Zt.stop():Zt.start()},_e.addEventListener("sessionstart",Kt),_e.addEventListener("sessionend",Vt),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(W),W=_e.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,W,P),p=Pe.get(A,x.length),p.init(W),x.push(p),z.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ne.setFromProjectionMatrix(z),re=this.localClippingEnabled,q=Ye.init(this.clippingPlanes,re),v=ge.get(A,d.length),v.init(),d.push(v),_e.enabled===!0&&_e.isPresenting===!0){const ue=y.xr.getDepthSensingMesh();ue!==null&&Qn(ue,W,-1/0,y.sortObjects)}Qn(A,W,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(ee,fe),Ce=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Ce&&Ae.addToRenderList(v,A),this.info.render.frame++,q===!0&&Ye.beginShadows();const Q=p.state.shadowsArray;pe.render(Q,A,W),q===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=v.opaque,V=v.transmissive;if(p.setupLights(),W.isArrayCamera){const ue=W.cameras;if(V.length>0)for(let be=0,we=ue.length;be<we;be++){const De=ue[be];un(j,V,A,De)}Ce&&Ae.render(A);for(let be=0,we=ue.length;be<we;be++){const De=ue[be];fi(v,A,De,De.viewport)}}else V.length>0&&un(j,V,A,W),Ce&&Ae.render(A),fi(v,A,W);P!==null&&(Xe.updateMultisampleRenderTarget(P),Xe.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(y,A,W),Ze.resetDefaultState(),U=-1,b=null,x.pop(),x.length>0?(p=x[x.length-1],q===!0&&Ye.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Qn(A,W,Q,j){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ne.intersectsSprite(A)){j&&me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(z);const be=ie.update(A),we=A.material;we.visible&&v.push(A,be,we,Q,me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ne.intersectsObject(A))){const be=ie.update(A),we=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),me.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),me.copy(be.boundingSphere.center)),me.applyMatrix4(A.matrixWorld).applyMatrix4(z)),Array.isArray(we)){const De=be.groups;for(let Ge=0,We=De.length;Ge<We;Ge++){const ze=De[Ge],it=we[ze.materialIndex];it&&it.visible&&v.push(A,be,it,Q,me.z,ze)}}else we.visible&&v.push(A,be,we,Q,me.z,null)}}const ue=A.children;for(let be=0,we=ue.length;be<we;be++)Qn(ue[be],W,Q,j)}function fi(A,W,Q,j){const V=A.opaque,ue=A.transmissive,be=A.transparent;p.setupLightsView(Q),q===!0&&Ye.setGlobalState(y.clippingPlanes,Q),j&&Ue.viewport(M.copy(j)),V.length>0&&kn(V,W,Q),ue.length>0&&kn(ue,W,Q),be.length>0&&kn(be,W,Q),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function un(A,W,Q,j){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new pr(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Xs:Ai,minFilter:fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const ue=p.state.transmissionRenderTarget[j.id],be=j.viewport||M;ue.setSize(be.z,be.w);const we=y.getRenderTarget();y.setRenderTarget(ue),y.getClearColor(N),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),Ce?Ae.render(Q):y.clear();const De=y.toneMapping;y.toneMapping=ki;const Ge=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),q===!0&&Ye.setGlobalState(y.clippingPlanes,j),kn(A,Q,j),Xe.updateMultisampleRenderTarget(ue),Xe.updateRenderTargetMipmap(ue),ke.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let ze=0,it=W.length;ze<it;ze++){const Et=W[ze],bt=Et.object,rn=Et.geometry,ot=Et.material,Ne=Et.group;if(ot.side===li&&bt.layers.test(j.layers)){const Ot=ot.side;ot.side=Mn,ot.needsUpdate=!0,hi(bt,Q,j,rn,ot,Ne),ot.side=Ot,ot.needsUpdate=!0,We=!0}}We===!0&&(Xe.updateMultisampleRenderTarget(ue),Xe.updateRenderTargetMipmap(ue))}y.setRenderTarget(we),y.setClearColor(N,H),Ge!==void 0&&(j.viewport=Ge),y.toneMapping=De}function kn(A,W,Q){const j=W.isScene===!0?W.overrideMaterial:null;for(let V=0,ue=A.length;V<ue;V++){const be=A[V],we=be.object,De=be.geometry,Ge=j===null?be.material:j,We=be.group;we.layers.test(Q.layers)&&hi(we,W,Q,De,Ge,We)}}function hi(A,W,Q,j,V,ue){A.onBeforeRender(y,W,Q,j,V,ue),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.transparent===!0&&V.side===li&&V.forceSinglePass===!1?(V.side=Mn,V.needsUpdate=!0,y.renderBufferDirect(Q,W,j,V,A,ue),V.side=Vi,V.needsUpdate=!0,y.renderBufferDirect(Q,W,j,V,A,ue),V.side=li):y.renderBufferDirect(Q,W,j,V,A,ue),A.onAfterRender(y,W,Q,j,V,ue)}function qi(A,W,Q){W.isScene!==!0&&(W=Te);const j=He.get(A),V=p.state.lights,ue=p.state.shadowsArray,be=V.state.version,we=Y.getParameters(A,V.state,ue,W,Q),De=Y.getProgramCacheKey(we);let Ge=j.programs;j.environment=A.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(A.isMeshStandardMaterial?T:D).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",Ve),Ge=new Map,j.programs=Ge);let We=Ge.get(De);if(We!==void 0){if(j.currentProgram===We&&j.lightsStateVersion===be)return js(A,we),We}else we.uniforms=Y.getUniforms(A),A.onBeforeCompile(we,y),We=Y.acquireProgram(we,De),Ge.set(De,We),j.uniforms=we.uniforms;const ze=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=Ye.uniform),js(A,we),j.needsLights=Eo(A),j.lightsStateVersion=be,j.needsLights&&(ze.ambientLightColor.value=V.state.ambient,ze.lightProbe.value=V.state.probe,ze.directionalLights.value=V.state.directional,ze.directionalLightShadows.value=V.state.directionalShadow,ze.spotLights.value=V.state.spot,ze.spotLightShadows.value=V.state.spotShadow,ze.rectAreaLights.value=V.state.rectArea,ze.ltc_1.value=V.state.rectAreaLTC1,ze.ltc_2.value=V.state.rectAreaLTC2,ze.pointLights.value=V.state.point,ze.pointLightShadows.value=V.state.pointShadow,ze.hemisphereLights.value=V.state.hemi,ze.directionalShadowMap.value=V.state.directionalShadowMap,ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ze.spotShadowMap.value=V.state.spotShadowMap,ze.spotLightMatrix.value=V.state.spotLightMatrix,ze.spotLightMap.value=V.state.spotLightMap,ze.pointShadowMap.value=V.state.pointShadowMap,ze.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=We,j.uniformsList=null,We}function xs(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Va.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function js(A,W){const Q=He.get(A);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function yo(A,W,Q,j,V){W.isScene!==!0&&(W=Te),Xe.resetTextureUnits();const ue=W.fog,be=j.isMeshStandardMaterial?W.environment:null,we=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Xi,De=(j.isMeshStandardMaterial?T:D).get(j.envMap||be),Ge=j.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,We=!!Q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ze=!!Q.morphAttributes.position,it=!!Q.morphAttributes.normal,Et=!!Q.morphAttributes.color;let bt=ki;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(bt=y.toneMapping);const rn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ot=rn!==void 0?rn.length:0,Ne=He.get(j),Ot=p.state.lights;if(q===!0&&(re===!0||A!==b)){const vn=A===b&&j.id===U;Ye.setState(j,A,vn)}let lt=!1;j.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Ot.state.version||Ne.outputColorSpace!==we||V.isBatchedMesh&&Ne.batching===!1||!V.isBatchedMesh&&Ne.batching===!0||V.isBatchedMesh&&Ne.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ne.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ne.instancing===!1||!V.isInstancedMesh&&Ne.instancing===!0||V.isSkinnedMesh&&Ne.skinning===!1||!V.isSkinnedMesh&&Ne.skinning===!0||V.isInstancedMesh&&Ne.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ne.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ne.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ne.instancingMorph===!1&&V.morphTexture!==null||Ne.envMap!==De||j.fog===!0&&Ne.fog!==ue||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Ye.numPlanes||Ne.numIntersection!==Ye.numIntersection)||Ne.vertexAlphas!==Ge||Ne.vertexTangents!==We||Ne.morphTargets!==ze||Ne.morphNormals!==it||Ne.morphColors!==Et||Ne.toneMapping!==bt||Ne.morphTargetsCount!==ot)&&(lt=!0):(lt=!0,Ne.__version=j.version);let Tt=Ne.currentProgram;lt===!0&&(Tt=qi(j,W,V));let pi=!1,an=!1,Yi=!1;const Dt=Tt.getUniforms(),ei=Ne.uniforms;if(Ue.useProgram(Tt.program)&&(pi=!0,an=!0,Yi=!0),j.id!==U&&(U=j.id,an=!0),pi||b!==A){Dt.setValue(I,"projectionMatrix",A.projectionMatrix),Dt.setValue(I,"viewMatrix",A.matrixWorldInverse);const vn=Dt.map.cameraPosition;vn!==void 0&&vn.setValue(I,J.setFromMatrixPosition(A.matrixWorld)),et.logarithmicDepthBuffer&&Dt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Dt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,an=!0,Yi=!0)}if(V.isSkinnedMesh){Dt.setOptional(I,V,"bindMatrix"),Dt.setOptional(I,V,"bindMatrixInverse");const vn=V.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Dt.setValue(I,"boneTexture",vn.boneTexture,Xe))}V.isBatchedMesh&&(Dt.setOptional(I,V,"batchingTexture"),Dt.setValue(I,"batchingTexture",V._matricesTexture,Xe),Dt.setOptional(I,V,"batchingIdTexture"),Dt.setValue(I,"batchingIdTexture",V._indirectTexture,Xe),Dt.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&Dt.setValue(I,"batchingColorTexture",V._colorsTexture,Xe));const Ms=Q.morphAttributes;if((Ms.position!==void 0||Ms.normal!==void 0||Ms.color!==void 0)&&$e.update(V,Q,Tt),(an||Ne.receiveShadow!==V.receiveShadow)&&(Ne.receiveShadow=V.receiveShadow,Dt.setValue(I,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(ei.envMap.value=De,ei.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&W.environment!==null&&(ei.envMapIntensity.value=W.environmentIntensity),an&&(Dt.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ne.needsLights&&di(ei,Yi),ue&&j.fog===!0&&ye.refreshFogUniforms(ei,ue),ye.refreshMaterialUniforms(ei,j,$,X,p.state.transmissionRenderTarget[A.id]),Va.upload(I,xs(Ne),ei,Xe)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Va.upload(I,xs(Ne),ei,Xe),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Dt.setValue(I,"center",V.center),Dt.setValue(I,"modelViewMatrix",V.modelViewMatrix),Dt.setValue(I,"normalMatrix",V.normalMatrix),Dt.setValue(I,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const vn=j.uniformsGroups;for(let vr=0,Ks=vn.length;vr<Ks;vr++){const Zs=vn[vr];vt.update(Zs,Tt),vt.bind(Zs,Tt)}}return Tt}function di(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Eo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,W,Q){He.get(A.texture).__webglTexture=W,He.get(A.depthTexture).__webglTexture=Q;const j=He.get(A);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Q===void 0,j.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const Q=He.get(A);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,Q=0){P=A,F=W,C=Q;let j=!0,V=null,ue=!1,be=!1;if(A){const De=He.get(A);De.__useDefaultFramebuffer!==void 0?(Ue.bindFramebuffer(I.FRAMEBUFFER,null),j=!1):De.__webglFramebuffer===void 0?Xe.setupRenderTarget(A):De.__hasExternalTextures&&Xe.rebindTextures(A,He.get(A.texture).__webglTexture,He.get(A.depthTexture).__webglTexture);const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(be=!0);const We=He.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[W])?V=We[W][Q]:V=We[W],ue=!0):A.samples>0&&Xe.useMultisampledRTT(A)===!1?V=He.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?V=We[Q]:V=We,M.copy(A.viewport),w.copy(A.scissor),O=A.scissorTest}else M.copy(le).multiplyScalar($).floor(),w.copy(de).multiplyScalar($).floor(),O=xe;if(Ue.bindFramebuffer(I.FRAMEBUFFER,V)&&j&&Ue.drawBuffers(A,V),Ue.viewport(M),Ue.scissor(w),Ue.setScissorTest(O),ue){const De=He.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,De.__webglTexture,Q)}else if(be){const De=He.get(A.texture),Ge=W||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,De.__webglTexture,Q||0,Ge)}U=-1},this.readRenderTargetPixels=function(A,W,Q,j,V,ue,be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=He.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we){Ue.bindFramebuffer(I.FRAMEBUFFER,we);try{const De=A.texture,Ge=De.format,We=De.type;if(!et.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-j&&Q>=0&&Q<=A.height-V&&I.readPixels(W,Q,j,V,Be.convert(Ge),Be.convert(We),ue)}finally{const De=P!==null?He.get(P).__webglFramebuffer:null;Ue.bindFramebuffer(I.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(A,W,Q,j,V,ue,be){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=He.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we){Ue.bindFramebuffer(I.FRAMEBUFFER,we);try{const De=A.texture,Ge=De.format,We=De.type;if(!et.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-j&&Q>=0&&Q<=A.height-V){const ze=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ze),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),I.readPixels(W,Q,j,V,Be.convert(Ge),Be.convert(We),0),I.flush();const it=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await sm(I,it,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,ze),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue)}finally{I.deleteBuffer(ze),I.deleteSync(it)}return ue}}finally{const De=P!==null?He.get(P).__webglFramebuffer:null;Ue.bindFramebuffer(I.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(A,W=null,Q=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const j=Math.pow(2,-Q),V=Math.floor(A.image.width*j),ue=Math.floor(A.image.height*j),be=W!==null?W.x:0,we=W!==null?W.y:0;Xe.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,Q,0,0,be,we,V,ue),Ue.unbindTexture()},this.copyTextureToTexture=function(A,W,Q=null,j=null,V=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1],W=arguments[2],V=arguments[3]||0,Q=null);let ue,be,we,De,Ge,We;Q!==null?(ue=Q.max.x-Q.min.x,be=Q.max.y-Q.min.y,we=Q.min.x,De=Q.min.y):(ue=A.image.width,be=A.image.height,we=0,De=0),j!==null?(Ge=j.x,We=j.y):(Ge=0,We=0);const ze=Be.convert(W.format),it=Be.convert(W.type);Xe.setTexture2D(W,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const Et=I.getParameter(I.UNPACK_ROW_LENGTH),bt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),rn=I.getParameter(I.UNPACK_SKIP_PIXELS),ot=I.getParameter(I.UNPACK_SKIP_ROWS),Ne=I.getParameter(I.UNPACK_SKIP_IMAGES),Ot=A.isCompressedTexture?A.mipmaps[V]:A.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ot.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ot.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,we),I.pixelStorei(I.UNPACK_SKIP_ROWS,De),A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,V,Ge,We,ue,be,ze,it,Ot.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,V,Ge,We,Ot.width,Ot.height,ze,Ot.data):I.texSubImage2D(I.TEXTURE_2D,V,Ge,We,ue,be,ze,it,Ot),I.pixelStorei(I.UNPACK_ROW_LENGTH,Et),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,bt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,rn),I.pixelStorei(I.UNPACK_SKIP_ROWS,ot),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ne),V===0&&W.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ue.unbindTexture()},this.copyTextureToTexture3D=function(A,W,Q=null,j=null,V=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,j=arguments[1]||null,A=arguments[2],W=arguments[3],V=arguments[4]||0);let ue,be,we,De,Ge,We,ze,it,Et;const bt=A.isCompressedTexture?A.mipmaps[V]:A.image;Q!==null?(ue=Q.max.x-Q.min.x,be=Q.max.y-Q.min.y,we=Q.max.z-Q.min.z,De=Q.min.x,Ge=Q.min.y,We=Q.min.z):(ue=bt.width,be=bt.height,we=bt.depth,De=0,Ge=0,We=0),j!==null?(ze=j.x,it=j.y,Et=j.z):(ze=0,it=0,Et=0);const rn=Be.convert(W.format),ot=Be.convert(W.type);let Ne;if(W.isData3DTexture)Xe.setTexture3D(W,0),Ne=I.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)Xe.setTexture2DArray(W,0),Ne=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const Ot=I.getParameter(I.UNPACK_ROW_LENGTH),lt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Tt=I.getParameter(I.UNPACK_SKIP_PIXELS),pi=I.getParameter(I.UNPACK_SKIP_ROWS),an=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,bt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,bt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,De),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ge),I.pixelStorei(I.UNPACK_SKIP_IMAGES,We),A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Ne,V,ze,it,Et,ue,be,we,rn,ot,bt.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(Ne,V,ze,it,Et,ue,be,we,rn,bt.data):I.texSubImage3D(Ne,V,ze,it,Et,ue,be,we,rn,ot,bt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ot),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Tt),I.pixelStorei(I.UNPACK_SKIP_ROWS,pi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,an),V===0&&W.generateMipmaps&&I.generateMipmap(Ne),Ue.unbindTexture()},this.initRenderTarget=function(A){He.get(A).__webglFramebuffer===void 0&&Xe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Xe.setTextureCube(A,0):A.isData3DTexture?Xe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Xe.setTexture2DArray(A,0):Xe.setTexture2D(A,0),Ue.unbindTexture()},this.resetState=function(){F=0,C=0,P=null,Ue.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ac?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===lo?"display-p3":"srgb"}}class px extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new K;class Ka{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ka(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $h extends gr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Xr;const Ps=new K,qr=new K,Yr=new K,$r=new Je,Ls=new Je,jh=new It,Ta=new K,Ds=new K,Aa=new K,uf=new Je,ul=new Je,ff=new Je;class gx extends qt{constructor(e=new $h){if(super(),this.isSprite=!0,this.type="Sprite",Xr===void 0){Xr=new Bn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mx(t,5);Xr.setIndex([0,1,2,0,2,3]),Xr.setAttribute("position",new Ka(n,3,0,!1)),Xr.setAttribute("uv",new Ka(n,2,3,!1))}this.geometry=Xr,this.material=e,this.center=new Je(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qr.setFromMatrixScale(this.matrixWorld),jh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qr.multiplyScalar(-Yr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;wa(Ta.set(-.5,-.5,0),Yr,a,qr,r,s),wa(Ds.set(.5,-.5,0),Yr,a,qr,r,s),wa(Aa.set(.5,.5,0),Yr,a,qr,r,s),uf.set(0,0),ul.set(1,0),ff.set(1,1);let o=e.ray.intersectTriangle(Ta,Ds,Aa,!1,Ps);if(o===null&&(wa(Ds.set(-.5,.5,0),Yr,a,qr,r,s),ul.set(0,1),o=e.ray.intersectTriangle(Ta,Aa,Ds,!1,Ps),o===null))return;const l=e.ray.origin.distanceTo(Ps);l<e.near||l>e.far||t.push({distance:l,point:Ps.clone(),uv:jn.getInterpolation(Ps,Ta,Ds,Aa,uf,ul,ff,new Je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function wa(i,e,t,n,r,s){$r.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ls.x=s*$r.x-r*$r.y,Ls.y=r*$r.x+s*$r.y):Ls.copy($r),i.copy(e),i.x+=Ls.x,i.y+=Ls.y,i.applyMatrix4(jh)}class Kh extends gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Za=new K,Ja=new K,hf=new It,Is=new Ih,Ca=new co,fl=new K,df=new K;class _x extends qt{constructor(e=new Bn,t=new Kh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Za.fromBufferAttribute(t,r-1),Ja.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Za.distanceTo(Ja);e.setAttribute("lineDistance",new On(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(r),Ca.radius+=s,e.ray.intersectsSphere(Ca)===!1)return;hf.copy(r).invert(),Is.copy(e.ray).applyMatrix4(hf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let v=m,p=_-1;v<p;v+=c){const d=f.getX(v),x=f.getX(v+1),y=Ra(this,e,Is,l,d,x);y&&t.push(y)}if(this.isLineLoop){const v=f.getX(_-1),p=f.getX(m),d=Ra(this,e,Is,l,v,p);d&&t.push(d)}}else{const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let v=m,p=_-1;v<p;v+=c){const d=Ra(this,e,Is,l,v,v+1);d&&t.push(d)}if(this.isLineLoop){const v=Ra(this,e,Is,l,_-1,m);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ra(i,e,t,n,r,s){const a=i.geometry.attributes.position;if(Za.fromBufferAttribute(a,r),Ja.fromBufferAttribute(a,s),t.distanceSqToSegment(Za,Ja,fl,df)>n)return;fl.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(fl);if(!(l<e.near||l>e.far))return{distance:l,point:df.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}class vx extends _n{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lc extends Bn{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],u=[],h=[],m=[];let _=0;const v=[],p=n/2;let d=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new On(u,3)),this.setAttribute("normal",new On(h,3)),this.setAttribute("uv",new On(m,2));function x(){const E=new K,F=new K;let C=0;const P=(t-e)/n;for(let U=0;U<=s;U++){const b=[],M=U/s,w=M*(t-e)+e;for(let O=0;O<=r;O++){const N=O/r,H=N*l+o,G=Math.sin(H),X=Math.cos(H);F.x=w*G,F.y=-M*n+p,F.z=w*X,u.push(F.x,F.y,F.z),E.set(G,P,X).normalize(),h.push(E.x,E.y,E.z),m.push(N,1-M),b.push(_++)}v.push(b)}for(let U=0;U<r;U++)for(let b=0;b<s;b++){const M=v[b][U],w=v[b+1][U],O=v[b+1][U+1],N=v[b][U+1];f.push(M,w,N),f.push(w,O,N),C+=6}c.addGroup(d,C,0),d+=C}function y(E){const F=_,C=new Je,P=new K;let U=0;const b=E===!0?e:t,M=E===!0?1:-1;for(let O=1;O<=r;O++)u.push(0,p*M,0),h.push(0,M,0),m.push(.5,.5),_++;const w=_;for(let O=0;O<=r;O++){const H=O/r*l+o,G=Math.cos(H),X=Math.sin(H);P.x=b*X,P.y=p*M,P.z=b*G,u.push(P.x,P.y,P.z),h.push(0,M,0),C.x=G*.5+.5,C.y=X*.5*M+.5,m.push(C.x,C.y),_++}for(let O=0;O<r;O++){const N=F+O,H=w+O;E===!0?f.push(H,H+1,N):f.push(H+1,H,N),U+=3}c.addGroup(d,U,E===!0?1:2),d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xx extends gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zh extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const hl=new It,pf=new K,mf=new K;class Mx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(pf),mf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mf),t.updateMatrixWorld(),hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sx extends Mx{constructor(){super(new Vh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yx extends Zh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Sx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ex extends Zh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const gf=new K;let Pa,dl;class bx extends qt{constructor(e=new K(0,0,1),t=new K(0,0,0),n=1,r=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",Pa===void 0&&(Pa=new Bn,Pa.setAttribute("position",new On([0,0,0,0,1,0],3)),dl=new Lc(0,.5,1,5,1),dl.translate(0,-.5,0)),this.position.copy(t),this.line=new _x(Pa,new Kh({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Jn(dl,new Cc({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{gf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(gf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xc);const Tx=Math.PI/180,Ax=1/24;function Qa(i){return i*Tx}function wx(i,e){const t=i.periodHours*Ax;return 2*Math.PI*(e-i.jd0)/t}function _f(i,e=new Float64Array(9)){const t=Math.cos(i),n=Math.sin(i);return e[0]=t,e[1]=-n,e[2]=0,e[3]=n,e[4]=t,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function Cx(i,e=new Float64Array(9)){const t=Math.cos(i),n=Math.sin(i);return e[0]=t,e[1]=0,e[2]=n,e[3]=0,e[4]=1,e[5]=0,e[6]=-n,e[7]=0,e[8]=t,e}function vf(i,e,t=new Float64Array(9)){const n=i[0],r=i[1],s=i[2],a=i[3],o=i[4],l=i[5],c=i[6],f=i[7],u=i[8],h=e[0],m=e[1],_=e[2],v=e[3],p=e[4],d=e[5],x=e[6],y=e[7],E=e[8];return t[0]=n*h+r*v+s*x,t[1]=n*m+r*p+s*y,t[2]=n*_+r*d+s*E,t[3]=a*h+o*v+l*x,t[4]=a*m+o*p+l*y,t[5]=a*_+o*d+l*E,t[6]=c*h+f*v+u*x,t[7]=c*m+f*p+u*y,t[8]=c*_+f*d+u*E,t}function xf(i,e){return{x:i[0]*e.x+i[1]*e.y+i[2]*e.z,y:i[3]*e.x+i[4]*e.y+i[5]*e.z,z:i[6]*e.x+i[7]*e.y+i[8]*e.z}}function Rx(i,e=new Float64Array(9)){return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],e}function Jh(i,e){const t=wx(i,e),n=Qa(i.poleLambdaDeg),r=Qa(i.poleBetaDeg),s=_f(t),a=Cx(Math.PI/2-r),o=_f(n),l=vf(a,s);return vf(o,l)}function La(i){const e=Qa(i.poleLambdaDeg),t=Qa(i.poleBetaDeg),n=Math.cos(t);return{x:n*Math.cos(e),y:n*Math.sin(e),z:Math.sin(t)}}function Px(i){return Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z)}function eo(i){const e=Px(i)||1;return{x:i.x/e,y:i.y/e,z:i.z/e}}function pl(i,e,t,n,r){const s=e*3;i[s]=(i[s]??0)+t,i[s+1]=(i[s+1]??0)+n,i[s+2]=(i[s+2]??0)+r}function Lx(i,e,t,n,r,s){return[e*s-t*r,t*n-i*s,i*r-e*n]}function ho(i){const{vertices:e,faces:t}=i,n=t.length/3,r=e.length/3,s=new Float32Array(n*3),a=new Float32Array(n),o=new Float32Array(r*3);for(let l=0;l<n;l++){const c=t[l*3],f=t[l*3+1],u=t[l*3+2],h=e[c*3],m=e[c*3+1],_=e[c*3+2],v=e[f*3],p=e[f*3+1],d=e[f*3+2],x=e[u*3],y=e[u*3+1],E=e[u*3+2],[F,C,P]=Lx(v-h,p-m,d-_,x-h,y-m,E-_),U=Math.sqrt(F*F+C*C+P*P),b=U*.5;a[l]=b;const M=U>0?1/U:0,w=F*M,O=C*M,N=P*M;s[l*3]=w,s[l*3+1]=O,s[l*3+2]=N;const H=w*b,G=O*b,X=N*b;pl(o,c,H,G,X),pl(o,f,H,G,X),pl(o,u,H,G,X)}for(let l=0;l<r;l++){const c=l*3,f=o[c],u=o[c+1],h=o[c+2],m=Math.sqrt(f*f+u*u+h*h);if(m>0){const _=1/m;o[c]=f*_,o[c+1]=u*_,o[c+2]=h*_}}return{normals:s,areas:a,vertexNormals:o}}function Dx(i){const e=i.vertices;let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let _=0;_<e.length;_+=3){const v=e[_],p=e[_+1],d=e[_+2];v<t&&(t=v),v>s&&(s=v),p<n&&(n=p),p>a&&(a=p),d<r&&(r=d),d>o&&(o=d)}const l=(t+s)/2,c=(n+a)/2,f=(r+o)/2,u=s-t,h=a-n,m=o-r;return{min:[t,n,r],max:[s,a,o],centre:[l,c,f],radius:.5*Math.sqrt(u*u+h*h+m*m)}}function Ix(i,e){const t=i.clientWidth||480,n=i.clientHeight||360,r=new dx({antialias:!0,alpha:!0,powerPreference:"high-performance"});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setSize(t,n),r.setClearColor(new ct(724242),1),i.appendChild(r.domElement),r.domElement.style.display="block",r.domElement.style.width="100%",r.domElement.style.height="100%";const s=new px,a=ho(e.shape),o=Dx(e.shape),l=o.radius>0?1/o.radius:1,c=new Float32Array(e.shape.vertices.length);for(let z=0;z<c.length;z+=3)c[z]=(e.shape.vertices[z]-o.centre[0])*l,c[z+1]=(e.shape.vertices[z+1]-o.centre[1])*l,c[z+2]=(e.shape.vertices[z+2]-o.centre[2])*l;const f=new Bn;f.setAttribute("position",new Sn(c,3)),f.setAttribute("normal",new Sn(a.vertexNormals.slice(),3)),f.setIndex(new Sn(e.shape.faces.slice(),1));const u=new xx({color:10128248,roughness:1,metalness:0,flatShading:!1,side:li}),h=new Jn(f,u),m=new Os;m.add(h),m.matrixAutoUpdate=!1,s.add(m);const _=new yx(16773853,2.4);_.position.set(10,0,0),s.add(_);const v=new Ex(4871012,1.05);s.add(v);let p=e.spin;const d=La(p),x=new bx(new K(d.x,d.y,d.z),new K(0,0,0),1.5,16761167,.25,.12);x.traverse(z=>{const J=z.material;J&&(J.depthTest=!1,J.depthWrite=!1,J.transparent=!0)}),x.renderOrder=999,s.add(x);const y=Ux("pole","#ffc14f");y.position.set(d.x*1.75,d.y*1.75,d.z*1.75),y.renderOrder=1e3,s.add(y);const E=6.5,F=new Nn(35,t/Math.max(n,1),.01,100);s.add(F);const C={distance:E,tilt:Math.PI/3,azim:0},P=()=>{const z=La(p),J=Math.abs(z.z)>.95?{x:1,y:0,z:0}:{x:0,y:0,z:1},me=U(z,J),Te=U(z,me),Ce=Math.sin(C.tilt),je=Math.cos(C.tilt),I=Math.sin(C.azim),Qe=Math.cos(C.azim),ke=C.distance;F.position.set(ke*(Ce*(Qe*me.x+I*Te.x)+je*z.x),ke*(Ce*(Qe*me.y+I*Te.y)+je*z.y),ke*(Ce*(Qe*me.z+I*Te.z)+je*z.z)),F.up.set(z.x,z.y,z.z),F.lookAt(0,0,0)};function U(z,J){const me=z.y*J.z-z.z*J.y,Te=z.z*J.x-z.x*J.z,Ce=z.x*J.y-z.y*J.x,je=Math.sqrt(me*me+Te*Te+Ce*Ce)||1;return{x:me/je,y:Te/je,z:Ce/je}}P();let b="free",M={x:-1,y:0,z:0},w={x:-1.01,y:0,z:0};const O=()=>{const z=eo(w),J=C.distance;F.position.set(z.x*J,z.y*J,z.z*J);const me=La(e.spin),Te=Math.abs(z.x*me.x+z.y*me.y+z.z*me.z)>.99?{x:0,y:0,z:1}:me;F.up.set(Te.x,Te.y,Te.z),F.lookAt(0,0,0)};let N=!0;const H=()=>{N=!0},G=z=>{m.matrix.set(z[0],z[1],z[2],0,z[3],z[4],z[5],0,z[6],z[7],z[8],0,0,0,0,1),m.matrixWorldNeedsUpdate=!0},X=r.domElement;X.setAttribute("role","img"),X.setAttribute("aria-label","Asteroid 3D shape. Drag to rotate. Hold Shift and scroll to zoom."),X.tabIndex=0,X.style.touchAction="none";const $=[],ee=(z,J,me)=>{X.addEventListener(z,J,me),$.push([z,J,me])};let fe=!1,le=0,de=0;ee("pointerdown",z=>{b==="free"&&(fe=!0,le=z.clientX,de=z.clientY,X.setPointerCapture(z.pointerId))}),ee("pointermove",z=>{if(!fe)return;const J=z.clientX-le,me=z.clientY-de;le=z.clientX,de=z.clientY,C.azim-=J*.008,C.tilt+=me*.008,C.tilt=Math.max(.1,Math.min(Math.PI-.1,C.tilt)),P(),H()});const xe=z=>{fe=!1,X.hasPointerCapture(z.pointerId)&&X.releasePointerCapture(z.pointerId)};ee("pointerup",xe),ee("pointercancel",xe),ee("wheel",z=>{if(!z.shiftKey)return;z.preventDefault();const J=Math.exp(z.deltaY*.001);C.distance=Math.max(1.4,Math.min(20,C.distance*J)),b==="free"?P():O(),H()},{passive:!1});let ne=0,q=e.spin.jd0;const re=()=>{if(N){N=!1;const z=Jh(p,q);G(z);const J=eo(M);_.position.set(J.x*10,J.y*10,J.z*10),r.render(s,F)}ne=requestAnimationFrame(re)};return re(),{setJd(z){q=z,H()},setSunEarth(z,J){M=z,w=J,b==="earth"&&O(),H()},setViewMode(z){b=z,z==="earth"?O():P(),H()},setSpin(z){p=z;const J=La(z);x.setDirection(new K(J.x,J.y,J.z)),y.position.set(J.x*1.75,J.y*1.75,J.z*1.75),H()},resize(z,J){r.setSize(z,J),F.aspect=z/Math.max(J,1),F.updateProjectionMatrix(),H()},dispose(){cancelAnimationFrame(ne);for(const[z,J,me]of $)X.removeEventListener(z,J,me);$.length=0,f.dispose(),u.dispose(),x.traverse(z=>{const J=z.geometry;J&&typeof J.dispose=="function"&&J.dispose();const me=z.material;me&&typeof me.dispose=="function"&&me.dispose()}),y.material.map?.dispose(),y.material.dispose(),r.dispose(),r.forceContextLoss(),r.domElement.parentNode===i&&i.removeChild(r.domElement)},requestRender:H}}function Ux(i,e){const t=typeof window<"u"?Math.min(window.devicePixelRatio||1,2):1,n=64,r=document.createElement("canvas");r.width=256*t,r.height=96*t;const s=r.getContext("2d");s.scale(t,t),s.font=`600 ${n/t}px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.shadowColor="rgba(0,0,0,0.9)",s.shadowBlur=8,s.fillStyle=e,s.fillText(i,128,48);const a=new vx(r);a.minFilter=a.magFilter=1006,a.needsUpdate=!0;const o=new $h({map:a,depthTest:!1,depthWrite:!1,transparent:!0}),l=new gx(o);return l.scale.set(.55,.21,1),l}const Nx=!0,jt="u-",Fx="uplot",Ox=jt+"hz",Bx=jt+"vt",zx=jt+"title",kx=jt+"wrap",Hx=jt+"under",Vx=jt+"over",Gx=jt+"axis",cr=jt+"off",Wx=jt+"select",Xx=jt+"cursor-x",qx=jt+"cursor-y",Yx=jt+"cursor-pt",$x=jt+"legend",jx=jt+"live",Kx=jt+"inline",Zx=jt+"series",Jx=jt+"marker",Mf=jt+"label",Qx=jt+"value",Bs="width",zs="height",Us="top",Sf="bottom",jr="left",ml="right",Dc="#000",yf=Dc+"0",gl="mousemove",Ef="mousedown",_l="mouseup",bf="mouseenter",Tf="mouseleave",Af="dblclick",eM="resize",tM="scroll",wf="change",to="dppxchange",Ic="--",gs=typeof window<"u",lc=gs?document:null,is=gs?window:null,nM=gs?navigator:null;let pt,Da;function cc(){let i=devicePixelRatio;pt!=i&&(pt=i,Da&&fc(wf,Da,cc),Da=matchMedia(`(min-resolution: ${pt-.001}dppx) and (max-resolution: ${pt+.001}dppx)`),hr(wf,Da,cc),is.dispatchEvent(new CustomEvent(to)))}function wn(i,e){if(e!=null){let t=i.classList;!t.contains(e)&&t.add(e)}}function uc(i,e){let t=i.classList;t.contains(e)&&t.remove(e)}function Rt(i,e,t){i.style[e]=t+"px"}function qn(i,e,t,n){let r=lc.createElement(i);return e!=null&&wn(r,e),t?.insertBefore(r,n),r}function In(i,e){return qn("div",i,e)}const Cf=new WeakMap;function si(i,e,t,n,r){let s="translate("+e+"px,"+t+"px)",a=Cf.get(i);s!=a&&(i.style.transform=s,Cf.set(i,s),e<0||t<0||e>n||t>r?wn(i,cr):uc(i,cr))}const Rf=new WeakMap;function Pf(i,e,t){let n=e+t,r=Rf.get(i);n!=r&&(Rf.set(i,n),i.style.background=e,i.style.borderColor=t)}const Lf=new WeakMap;function Df(i,e,t,n){let r=e+""+t,s=Lf.get(i);r!=s&&(Lf.set(i,r),i.style.height=t+"px",i.style.width=e+"px",i.style.marginLeft=n?-e/2+"px":0,i.style.marginTop=n?-t/2+"px":0)}const Uc={passive:!0},iM={...Uc,capture:!0};function hr(i,e,t,n){e.addEventListener(i,t,n?iM:Uc)}function fc(i,e,t,n){e.removeEventListener(i,t,Uc)}gs&&cc();function Yn(i,e,t,n){let r;t=t||0,n=n||e.length-1;let s=n<=2147483647;for(;n-t>1;)r=s?t+n>>1:Cn((t+n)/2),e[r]<i?t=r:n=r;return i-e[t]<=e[n]-i?t:n}function Qh(i){return(t,n,r)=>{let s=-1,a=-1;for(let o=n;o<=r;o++)if(i(t[o])){s=o;break}for(let o=r;o>=n;o--)if(i(t[o])){a=o;break}return[s,a]}}const ed=i=>i!=null,td=i=>i!=null&&i>0,po=Qh(ed),rM=Qh(td);function sM(i,e,t,n=0,r=!1){let s=r?rM:po,a=r?td:ed;[e,t]=s(i,e,t);let o=i[e],l=i[e];if(e>-1)if(n==1)o=i[e],l=i[t];else if(n==-1)o=i[t],l=i[e];else for(let c=e;c<=t;c++){let f=i[c];a(f)&&(f<o?o=f:f>l&&(l=f))}return[o??St,l??-St]}function mo(i,e,t,n){let r=Nf(i),s=Nf(e);i==e&&(r==-1?(i*=t,e/=t):(i/=t,e*=t));let a=t==10?bi:nd,o=r==1?Cn:Un,l=s==1?Un:Cn,c=o(a(Wt(i))),f=l(a(Wt(e))),u=us(t,c),h=us(t,f);return t==10&&(c<0&&(u=yt(u,-c)),f<0&&(h=yt(h,-f))),n||t==2?(i=u*r,e=h*s):(i=ad(i,u),e=go(e,h)),[i,e]}function Nc(i,e,t,n){let r=mo(i,e,t,n);return i==0&&(r[0]=0),e==0&&(r[1]=0),r}const Fc=.1,If={mode:3,pad:Fc},Hs={pad:0,soft:null,mode:0},aM={min:Hs,max:Hs};function no(i,e,t,n){return _o(t)?Uf(i,e,t):(Hs.pad=t,Hs.soft=n?0:null,Hs.mode=n?3:0,Uf(i,e,aM))}function ht(i,e){return i??e}function oM(i,e,t){for(e=ht(e,0),t=ht(t,i.length-1);e<=t;){if(i[e]!=null)return!0;e++}return!1}function Uf(i,e,t){let n=t.min,r=t.max,s=ht(n.pad,0),a=ht(r.pad,0),o=ht(n.hard,-St),l=ht(r.hard,St),c=ht(n.soft,St),f=ht(r.soft,-St),u=ht(n.mode,0),h=ht(r.mode,0),m=e-i,_=bi(m),v=gn(Wt(i),Wt(e)),p=bi(v),d=Wt(p-_);(m<1e-24||d>10)&&(m=0,(i==0||e==0)&&(m=1e-24,u==2&&c!=St&&(s=0),h==2&&f!=-St&&(a=0)));let x=m||v||1e3,y=bi(x),E=us(10,Cn(y)),F=x*(m==0?i==0?.1:1:s),C=yt(ad(i-F,E/10),24),P=i>=c&&(u==1||u==3&&C<=c||u==2&&C>=c)?c:St,U=gn(o,C<P&&i>=P?P:Kn(P,C)),b=x*(m==0?e==0?.1:1:a),M=yt(go(e+b,E/10),24),w=e<=f&&(h==1||h==3&&M>=f||h==2&&M<=f)?f:-St,O=Kn(l,M>w&&e<=w?w:gn(w,M));return U==O&&U==0&&(O=100),[U,O]}const lM=new Intl.NumberFormat(gs?nM.language:"en-US"),Oc=i=>lM.format(i),Rn=Math,Ga=Rn.PI,Wt=Rn.abs,Cn=Rn.floor,Gt=Rn.round,Un=Rn.ceil,Kn=Rn.min,gn=Rn.max,us=Rn.pow,Nf=Rn.sign,bi=Rn.log10,nd=Rn.log2,cM=(i,e=1)=>Rn.sinh(i)*e,vl=(i,e=1)=>Rn.asinh(i/e),St=1/0;function Ff(i){return(bi((i^i>>31)-(i>>31))|0)+1}function hc(i,e,t){return Kn(gn(i,e),t)}function id(i){return typeof i=="function"}function st(i){return id(i)?i:()=>i}const uM=()=>{},rd=i=>i,sd=(i,e)=>e,fM=i=>null,Of=i=>!0,Bf=(i,e)=>i==e,hM=/\.\d*?(?=9{6,}|0{6,})/gm,mr=i=>{if(ld(i)||Wi.has(i))return i;const e=`${i}`,t=e.match(hM);if(t==null)return i;let n=t[0].length-1;if(e.indexOf("e-")!=-1){let[r,s]=e.split("e");return+`${mr(r)}e${s}`}return yt(i,n)};function sr(i,e){return mr(yt(mr(i/e))*e)}function go(i,e){return mr(Un(mr(i/e))*e)}function ad(i,e){return mr(Cn(mr(i/e))*e)}function yt(i,e=0){if(ld(i))return i;let t=10**e,n=i*t*(1+Number.EPSILON);return Gt(n)/t}const Wi=new Map;function od(i){return((""+i).split(".")[1]||"").length}function Ws(i,e,t,n){let r=[],s=n.map(od);for(let a=e;a<t;a++){let o=Wt(a),l=yt(us(i,a),o);for(let c=0;c<n.length;c++){let f=i==10?+`${n[c]}e${a}`:n[c]*l,u=(a>=0?0:o)+(a>=s[c]?0:s[c]),h=i==10?f:yt(f,u);r.push(h),Wi.set(h,u)}}return r}const Vs={},Bc=[],fs=[null,null],Oi=Array.isArray,ld=Number.isInteger,dM=i=>i===void 0;function zf(i){return typeof i=="string"}function _o(i){let e=!1;if(i!=null){let t=i.constructor;e=t==null||t==Object}return e}function pM(i){return i!=null&&typeof i=="object"}const mM=Object.getPrototypeOf(Uint8Array),cd="__proto__";function hs(i,e=_o){let t;if(Oi(i)){let n=i.find(r=>r!=null);if(Oi(n)||e(n)){t=Array(i.length);for(let r=0;r<i.length;r++)t[r]=hs(i[r],e)}else t=i.slice()}else if(i instanceof mM)t=i.slice();else if(e(i)){t={};for(let n in i)n!=cd&&(t[n]=hs(i[n],e))}else t=i;return t}function kt(i){let e=arguments;for(let t=1;t<e.length;t++){let n=e[t];for(let r in n)r!=cd&&(_o(i[r])?kt(i[r],hs(n[r])):i[r]=hs(n[r]))}return i}const gM=0,_M=1,vM=2;function xM(i,e,t){for(let n=0,r,s=-1;n<e.length;n++){let a=e[n];if(a>s){for(r=a-1;r>=0&&i[r]==null;)i[r--]=null;for(r=a+1;r<t&&i[r]==null;)i[s=r++]=null}}}function MM(i,e){if(EM(i)){let a=i[0].slice();for(let o=1;o<i.length;o++)a.push(...i[o].slice(1));return bM(a[0])||(a=yM(a)),a}let t=new Set;for(let a=0;a<i.length;a++){let l=i[a][0],c=l.length;for(let f=0;f<c;f++)t.add(l[f])}let n=[Array.from(t).sort((a,o)=>a-o)],r=n[0].length,s=new Map;for(let a=0;a<r;a++)s.set(n[0][a],a);for(let a=0;a<i.length;a++){let o=i[a],l=o[0];for(let c=1;c<o.length;c++){let f=o[c],u=Array(r).fill(void 0),h=e?e[a][c]:_M,m=[];for(let _=0;_<f.length;_++){let v=f[_],p=s.get(l[_]);v===null?h!=gM&&(u[p]=v,h==vM&&m.push(p)):u[p]=v}xM(u,m,r),n.push(u)}}return n}const SM=typeof queueMicrotask>"u"?i=>Promise.resolve().then(i):queueMicrotask;function yM(i){let e=i[0],t=e.length,n=Array(t);for(let s=0;s<n.length;s++)n[s]=s;n.sort((s,a)=>e[s]-e[a]);let r=[];for(let s=0;s<i.length;s++){let a=i[s],o=Array(t);for(let l=0;l<t;l++)o[l]=a[n[l]];r.push(o)}return r}function EM(i){let e=i[0][0],t=e.length;for(let n=1;n<i.length;n++){let r=i[n][0];if(r.length!=t)return!1;if(r!=e){for(let s=0;s<t;s++)if(r[s]!=e[s])return!1}}return!0}function bM(i,e=100){const t=i.length;if(t<=1)return!0;let n=0,r=t-1;for(;n<=r&&i[n]==null;)n++;for(;r>=n&&i[r]==null;)r--;if(r<=n)return!0;const s=gn(1,Cn((r-n+1)/e));for(let a=i[n],o=n+s;o<=r;o+=s){const l=i[o];if(l!=null){if(l<=a)return!1;a=l}}return!0}const ud=["January","February","March","April","May","June","July","August","September","October","November","December"],fd=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function hd(i){return i.slice(0,3)}const TM=fd.map(hd),AM=ud.map(hd),wM={MMMM:ud,MMM:AM,WWWW:fd,WWW:TM};function Ns(i){return(i<10?"0":"")+i}function CM(i){return(i<10?"00":i<100?"0":"")+i}const RM={YYYY:i=>i.getFullYear(),YY:i=>(i.getFullYear()+"").slice(2),MMMM:(i,e)=>e.MMMM[i.getMonth()],MMM:(i,e)=>e.MMM[i.getMonth()],MM:i=>Ns(i.getMonth()+1),M:i=>i.getMonth()+1,DD:i=>Ns(i.getDate()),D:i=>i.getDate(),WWWW:(i,e)=>e.WWWW[i.getDay()],WWW:(i,e)=>e.WWW[i.getDay()],HH:i=>Ns(i.getHours()),H:i=>i.getHours(),h:i=>{let e=i.getHours();return e==0?12:e>12?e-12:e},AA:i=>i.getHours()>=12?"PM":"AM",aa:i=>i.getHours()>=12?"pm":"am",a:i=>i.getHours()>=12?"p":"a",mm:i=>Ns(i.getMinutes()),m:i=>i.getMinutes(),ss:i=>Ns(i.getSeconds()),s:i=>i.getSeconds(),fff:i=>CM(i.getMilliseconds())};function zc(i,e){e=e||wM;let t=[],n=/\{([a-z]+)\}|[^{]+/gi,r;for(;r=n.exec(i);)t.push(r[0][0]=="{"?RM[r[1]]:r[0]);return s=>{let a="";for(let o=0;o<t.length;o++)a+=typeof t[o]=="string"?t[o]:t[o](s,e);return a}}const PM=new Intl.DateTimeFormat().resolvedOptions().timeZone;function LM(i,e){let t;return e=="UTC"||e=="Etc/UTC"?t=new Date(+i+i.getTimezoneOffset()*6e4):e==PM?t=i:(t=new Date(i.toLocaleString("en-US",{timeZone:e})),t.setMilliseconds(i.getMilliseconds())),t}const dd=i=>i%1==0,io=[1,2,2.5,5],DM=Ws(10,-32,0,io),pd=Ws(10,0,32,io),IM=pd.filter(dd),ar=DM.concat(pd),kc=`
`,md="{YYYY}",kf=kc+md,gd="{M}/{D}",ks=kc+gd,Ia=ks+"/{YY}",_d="{aa}",UM="{h}:{mm}",Kr=UM+_d,Hf=kc+Kr,Vf=":{ss}",mt=null;function vd(i){let e=i*1e3,t=e*60,n=t*60,r=n*24,s=r*30,a=r*365,l=(i==1?Ws(10,0,3,io).filter(dd):Ws(10,-3,0,io)).concat([e,e*5,e*10,e*15,e*30,t,t*5,t*10,t*15,t*30,n,n*2,n*3,n*4,n*6,n*8,n*12,r,r*2,r*3,r*4,r*5,r*6,r*7,r*8,r*9,r*10,r*15,s,s*2,s*3,s*4,s*6,a,a*2,a*5,a*10,a*25,a*50,a*100]);const c=[[a,md,mt,mt,mt,mt,mt,mt,1],[r*28,"{MMM}",kf,mt,mt,mt,mt,mt,1],[r,gd,kf,mt,mt,mt,mt,mt,1],[n,"{h}"+_d,Ia,mt,ks,mt,mt,mt,1],[t,Kr,Ia,mt,ks,mt,mt,mt,1],[e,Vf,Ia+" "+Kr,mt,ks+" "+Kr,mt,Hf,mt,1],[i,Vf+".{fff}",Ia+" "+Kr,mt,ks+" "+Kr,mt,Hf,mt,1]];function f(u){return(h,m,_,v,p,d)=>{let x=[],y=p>=a,E=p>=s&&p<a,F=u(_),C=yt(F*i,3),P=xl(F.getFullYear(),y?0:F.getMonth(),E||y?1:F.getDate()),U=yt(P*i,3);if(E||y){let b=E?p/s:0,M=y?p/a:0,w=C==U?C:yt(xl(P.getFullYear()+M,P.getMonth()+b,1)*i,3),O=new Date(Gt(w/i)),N=O.getFullYear(),H=O.getMonth();for(let G=0;w<=v;G++){let X=xl(N+M*G,H+b*G,1),$=X-u(yt(X*i,3));w=yt((+X+$)*i,3),w<=v&&x.push(w)}}else{let b=p>=r?r:p,M=Cn(_)-Cn(C),w=U+M+go(C-U,b);x.push(w);let O=u(w),N=O.getHours()+O.getMinutes()/t+O.getSeconds()/n,H=p/n,G=h.axes[m]._space,X=d/G;for(;w=yt(w+p,i==1?0:3),!(w>v);)if(H>1){let $=Cn(yt(N+H,6))%24,le=u(w).getHours()-$;le>1&&(le=-1),w-=le*n,N=(N+H)%24;let de=x[x.length-1];yt((w-de)/p,3)*X>=.7&&x.push(w)}else x.push(w)}return x}}return[l,c,f]}const[NM,FM,OM]=vd(1),[BM,zM,kM]=vd(.001);Ws(2,-53,53,[1]);function Gf(i,e){return i.map(t=>t.map((n,r)=>r==0||r==8||n==null?n:e(r==1||t[8]==0?n:t[1]+n)))}function Wf(i,e){return(t,n,r,s,a)=>{let o=e.find(_=>a>=_[0])||e[e.length-1],l,c,f,u,h,m;return n.map(_=>{let v=i(_),p=v.getFullYear(),d=v.getMonth(),x=v.getDate(),y=v.getHours(),E=v.getMinutes(),F=v.getSeconds(),C=p!=l&&o[2]||d!=c&&o[3]||x!=f&&o[4]||y!=u&&o[5]||E!=h&&o[6]||F!=m&&o[7]||o[1];return l=p,c=d,f=x,u=y,h=E,m=F,C(v)})}}function HM(i,e){let t=zc(e);return(n,r,s,a,o)=>r.map(l=>t(i(l)))}function xl(i,e,t){return new Date(i,e,t)}function Xf(i,e){return e(i)}const VM="{YYYY}-{MM}-{DD} {h}:{mm}{aa}";function qf(i,e){return(t,n,r,s)=>s==null?Ic:e(i(n))}function GM(i,e){let t=i.series[e];return t.width?t.stroke(i,e):t.points.width?t.points.stroke(i,e):null}function WM(i,e){return i.series[e].fill(i,e)}const XM={show:!0,live:!0,isolate:!1,mount:uM,markers:{show:!0,width:2,stroke:GM,fill:WM,dash:"solid"},idx:null,idxs:null,values:[]};function qM(i,e){let t=i.cursor.points,n=In(),r=t.size(i,e);Rt(n,Bs,r),Rt(n,zs,r);let s=r/-2;Rt(n,"marginLeft",s),Rt(n,"marginTop",s);let a=t.width(i,e,r);return a&&Rt(n,"borderWidth",a),n}function YM(i,e){let t=i.series[e].points;return t._fill||t._stroke}function $M(i,e){let t=i.series[e].points;return t._stroke||t._fill}function jM(i,e){return i.series[e].points.size}const Ml=[0,0];function KM(i,e,t){return Ml[0]=e,Ml[1]=t,Ml}function Ua(i,e,t,n=!0){return r=>{r.button==0&&(!n||r.target==e)&&t(r)}}function Sl(i,e,t,n=!0){return r=>{(!n||r.target==e)&&t(r)}}const ZM={show:!0,x:!0,y:!0,lock:!1,move:KM,points:{one:!1,show:qM,size:jM,width:0,stroke:$M,fill:YM},bind:{mousedown:Ua,mouseup:Ua,click:Ua,dblclick:Ua,mousemove:Sl,mouseleave:Sl,mouseenter:Sl},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(i,e)=>{e.stopPropagation(),e.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(i,e,t,n,r)=>n-r,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},xd={show:!0,stroke:"rgba(0,0,0,0.07)",width:2},Hc=kt({},xd,{filter:sd}),Md=kt({},Hc,{size:10}),Sd=kt({},xd,{show:!1}),Vc='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',yd="bold "+Vc,Ed=1.5,Yf={show:!0,scale:"x",stroke:Dc,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:yd,side:2,grid:Hc,ticks:Md,border:Sd,font:Vc,lineGap:Ed,rotate:0},JM="Value",QM="Time",$f={show:!0,scale:"x",auto:!1,sorted:1,min:St,max:-St,idxs:[]};function eS(i,e,t,n,r){return e.map(s=>s==null?"":Oc(s))}function tS(i,e,t,n,r,s,a){let o=[],l=Wi.get(r)||0;t=a?t:yt(go(t,r),l);for(let c=t;c<=n;c=yt(c+r,l))o.push(Object.is(c,-0)?0:c);return o}function dc(i,e,t,n,r,s,a){const o=[],l=i.scales[i.axes[e].scale].log,c=l==10?bi:nd,f=Cn(c(t));r=us(l,f),l==10&&(r=ar[Yn(r,ar)]);let u=t,h=r*l;l==10&&(h=ar[Yn(h,ar)]);do o.push(u),u=u+r,l==10&&!Wi.has(u)&&(u=yt(u,Wi.get(r))),u>=h&&(r=u,h=r*l,l==10&&(h=ar[Yn(h,ar)]));while(u<=n);return o}function nS(i,e,t,n,r,s,a){let l=i.scales[i.axes[e].scale].asinh,c=n>l?dc(i,e,gn(l,t),n,r):[l],f=n>=0&&t<=0?[0]:[];return(t<-l?dc(i,e,gn(l,-n),-t,r):[l]).reverse().map(h=>-h).concat(f,c)}const bd=/./,iS=/[12357]/,rS=/[125]/,jf=/1/,pc=(i,e,t,n)=>i.map((r,s)=>e==4&&r==0||s%n==0&&t.test(r.toExponential()[r<0?1:0])?r:null);function sS(i,e,t,n,r){let s=i.axes[t],a=s.scale,o=i.scales[a],l=i.valToPos,c=s._space,f=l(10,a),u=l(9,a)-f>=c?bd:l(7,a)-f>=c?iS:l(5,a)-f>=c?rS:jf;if(u==jf){let h=Wt(l(1,a)-f);if(h<c)return pc(e.slice().reverse(),o.distr,u,Un(c/h)).reverse()}return pc(e,o.distr,u,1)}function aS(i,e,t,n,r){let s=i.axes[t],a=s.scale,o=s._space,l=i.valToPos,c=Wt(l(1,a)-l(2,a));return c<o?pc(e.slice().reverse(),3,bd,Un(o/c)).reverse():e}function oS(i,e,t,n){return n==null?Ic:e==null?"":Oc(e)}const Kf={show:!0,scale:"y",stroke:Dc,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:yd,side:3,grid:Hc,ticks:Md,border:Sd,font:Vc,lineGap:Ed,rotate:0};function lS(i,e){let t=3+(i||1)*2;return yt(t*e,3)}function cS(i,e){let{scale:t,idxs:n}=i.series[0],r=i._data[0],s=i.valToPos(r[n[0]],t,!0),a=i.valToPos(r[n[1]],t,!0),o=Wt(a-s),l=i.series[e],c=o/(l.points.space*pt);return n[1]-n[0]<=c}const Zf={scale:null,auto:!0,sorted:0,min:St,max:-St},Td=(i,e,t,n,r)=>r,Jf={show:!0,auto:!0,sorted:0,gaps:Td,alpha:1,facets:[kt({},Zf,{scale:"x"}),kt({},Zf,{scale:"y"})]},Qf={scale:"y",auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:Td,alpha:1,points:{show:cS,filter:null},values:null,min:St,max:-St,idxs:[],path:null,clip:null};function uS(i,e,t,n,r){return t/10}const Ad={time:Nx,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},fS=kt({},Ad,{time:!1,ori:1}),eh={};function wd(i,e){let t=eh[i];return t||(t={key:i,plots:[],sub(n){t.plots.push(n)},unsub(n){t.plots=t.plots.filter(r=>r!=n)},pub(n,r,s,a,o,l,c){for(let f=0;f<t.plots.length;f++)t.plots[f]!=r&&t.plots[f].pub(n,r,s,a,o,l,c)}},i!=null&&(eh[i]=t)),t}const ds=1,mc=2;function _r(i,e,t){const n=i.mode,r=i.series[e],s=n==2?i._data[e]:i._data,a=i.scales,o=i.bbox;let l=s[0],c=n==2?s[1]:s[e],f=n==2?a[r.facets[0].scale]:a[i.series[0].scale],u=n==2?a[r.facets[1].scale]:a[r.scale],h=o.left,m=o.top,_=o.width,v=o.height,p=i.valToPosH,d=i.valToPosV;return f.ori==0?t(r,l,c,f,u,p,d,h,m,_,v,xo,_s,So,Rd,Ld):t(r,l,c,f,u,d,p,m,h,v,_,Mo,vs,Xc,Pd,Dd)}function Gc(i,e){let t=0,n=0,r=ht(i.bands,Bc);for(let s=0;s<r.length;s++){let a=r[s];a.series[0]==e?t=a.dir:a.series[1]==e&&(a.dir==1?n|=1:n|=2)}return[t,n==1?-1:n==2?1:n==3?2:0]}function hS(i,e,t,n,r){let s=i.mode,a=i.series[e],o=s==2?a.facets[1].scale:a.scale,l=i.scales[o];return r==-1?l.min:r==1?l.max:l.distr==3?l.dir==1?l.min:l.max:0}function Ti(i,e,t,n,r,s){return _r(i,e,(a,o,l,c,f,u,h,m,_,v,p)=>{let d=a.pxRound;const x=c.dir*(c.ori==0?1:-1),y=c.ori==0?_s:vs;let E,F;x==1?(E=t,F=n):(E=n,F=t);let C=d(u(o[E],c,v,m)),P=d(h(l[E],f,p,_)),U=d(u(o[F],c,v,m)),b=d(h(s==1?f.max:f.min,f,p,_)),M=new Path2D(r);return y(M,U,b),y(M,C,b),y(M,C,P),M})}function vo(i,e,t,n,r,s){let a=null;if(i.length>0){a=new Path2D;const o=e==0?So:Xc;let l=t;for(let u=0;u<i.length;u++){let h=i[u];if(h[1]>h[0]){let m=h[0]-l;m>0&&o(a,l,n,m,n+s),l=h[1]}}let c=t+r-l,f=10;c>0&&o(a,l,n-f/2,c,n+s+f)}return a}function dS(i,e,t){let n=i[i.length-1];n&&n[0]==e?n[1]=t:i.push([e,t])}function Wc(i,e,t,n,r,s,a){let o=[],l=i.length;for(let c=r==1?t:n;c>=t&&c<=n;c+=r)if(e[c]===null){let u=c,h=c;if(r==1)for(;++c<=n&&e[c]===null;)h=c;else for(;--c>=t&&e[c]===null;)h=c;let m=s(i[u]),_=h==u?m:s(i[h]),v=u-r;m=a<=0&&v>=0&&v<l?s(i[v]):m;let d=h+r;_=a>=0&&d>=0&&d<l?s(i[d]):_,_>=m&&o.push([m,_])}return o}function th(i){return i==0?rd:i==1?Gt:e=>sr(e,i)}function Cd(i){let e=i==0?xo:Mo,t=i==0?(r,s,a,o,l,c)=>{r.arcTo(s,a,o,l,c)}:(r,s,a,o,l,c)=>{r.arcTo(a,s,l,o,c)},n=i==0?(r,s,a,o,l)=>{r.rect(s,a,o,l)}:(r,s,a,o,l)=>{r.rect(a,s,l,o)};return(r,s,a,o,l,c=0,f=0)=>{c==0&&f==0?n(r,s,a,o,l):(c=Kn(c,o/2,l/2),f=Kn(f,o/2,l/2),e(r,s+c,a),t(r,s+o,a,s+o,a+l,c),t(r,s+o,a+l,s,a+l,f),t(r,s,a+l,s,a,f),t(r,s,a,s+o,a,c),r.closePath())}}const xo=(i,e,t)=>{i.moveTo(e,t)},Mo=(i,e,t)=>{i.moveTo(t,e)},_s=(i,e,t)=>{i.lineTo(e,t)},vs=(i,e,t)=>{i.lineTo(t,e)},So=Cd(0),Xc=Cd(1),Rd=(i,e,t,n,r,s)=>{i.arc(e,t,n,r,s)},Pd=(i,e,t,n,r,s)=>{i.arc(t,e,n,r,s)},Ld=(i,e,t,n,r,s,a)=>{i.bezierCurveTo(e,t,n,r,s,a)},Dd=(i,e,t,n,r,s,a)=>{i.bezierCurveTo(t,e,r,n,a,s)};function Id(i){return(e,t,n,r,s)=>_r(e,t,(a,o,l,c,f,u,h,m,_,v,p)=>{let{pxRound:d,points:x}=a,y,E;c.ori==0?(y=xo,E=Rd):(y=Mo,E=Pd);const F=yt(x.width*pt,3);let C=(x.size-x.width)/2*pt,P=yt(C*2,3),U=new Path2D,b=new Path2D,{left:M,top:w,width:O,height:N}=e.bbox;So(b,M-P,w-P,O+P*2,N+P*2);const H=G=>{if(l[G]!=null){let X=d(u(o[G],c,v,m)),$=d(h(l[G],f,p,_));y(U,X+C,$),E(U,X,$,C,0,Ga*2)}};if(s)s.forEach(H);else for(let G=n;G<=r;G++)H(G);return{stroke:F>0?U:null,fill:U,clip:b,flags:ds|mc}})}function Ud(i){return(e,t,n,r,s,a)=>{n!=r&&(s!=n&&a!=n&&i(e,t,n),s!=r&&a!=r&&i(e,t,r),i(e,t,a))}}const pS=Ud(_s),mS=Ud(vs);function Nd(i){const e=ht(i?.alignGaps,0);return(t,n,r,s)=>_r(t,n,(a,o,l,c,f,u,h,m,_,v,p)=>{[r,s]=po(l,r,s);let d=a.pxRound,x=N=>d(u(N,c,v,m)),y=N=>d(h(N,f,p,_)),E,F;c.ori==0?(E=_s,F=pS):(E=vs,F=mS);const C=c.dir*(c.ori==0?1:-1),P={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:ds},U=P.stroke;let b=!1;if(s-r>=v*4){let N=ne=>t.posToVal(ne,c.key,!0),H=null,G=null,X,$,ee,fe=x(o[C==1?r:s]),le=x(o[r]),de=x(o[s]),xe=N(C==1?le+1:de-1);for(let ne=C==1?r:s;ne>=r&&ne<=s;ne+=C){let q=o[ne],z=(C==1?q<xe:q>xe)?fe:x(q),J=l[ne];z==fe?J!=null?($=J,H==null?(E(U,z,y($)),X=H=G=$):$<H?H=$:$>G&&(G=$)):J===null&&(b=!0):(H!=null&&F(U,fe,y(H),y(G),y(X),y($)),J!=null?($=J,E(U,z,y($)),H=G=X=$):(H=G=null,J===null&&(b=!0)),fe=z,xe=N(fe+C))}H!=null&&H!=G&&ee!=fe&&F(U,fe,y(H),y(G),y(X),y($))}else for(let N=C==1?r:s;N>=r&&N<=s;N+=C){let H=l[N];H===null?b=!0:H!=null&&E(U,x(o[N]),y(H))}let[w,O]=Gc(t,n);if(a.fill!=null||w!=0){let N=P.fill=new Path2D(U),H=a.fillTo(t,n,a.min,a.max,w),G=y(H),X=x(o[r]),$=x(o[s]);C==-1&&([$,X]=[X,$]),E(N,$,G),E(N,X,G)}if(!a.spanGaps){let N=[];b&&N.push(...Wc(o,l,r,s,C,x,e)),P.gaps=N=a.gaps(t,n,r,s,N),P.clip=vo(N,c.ori,m,_,v,p)}return O!=0&&(P.band=O==2?[Ti(t,n,r,s,U,-1),Ti(t,n,r,s,U,1)]:Ti(t,n,r,s,U,O)),P})}function gS(i){const e=ht(i.align,1),t=ht(i.ascDesc,!1),n=ht(i.alignGaps,0),r=ht(i.extend,!1);return(s,a,o,l)=>_r(s,a,(c,f,u,h,m,_,v,p,d,x,y)=>{[o,l]=po(u,o,l);let E=c.pxRound,{left:F,width:C}=s.bbox,P=le=>E(_(le,h,x,p)),U=le=>E(v(le,m,y,d)),b=h.ori==0?_s:vs;const M={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:ds},w=M.stroke,O=h.dir*(h.ori==0?1:-1);let N=U(u[O==1?o:l]),H=P(f[O==1?o:l]),G=H,X=H;r&&e==-1&&(X=F,b(w,X,N)),b(w,H,N);for(let le=O==1?o:l;le>=o&&le<=l;le+=O){let de=u[le];if(de==null)continue;let xe=P(f[le]),ne=U(de);e==1?b(w,xe,N):b(w,G,ne),b(w,xe,ne),N=ne,G=xe}let $=G;r&&e==1&&($=F+C,b(w,$,N));let[ee,fe]=Gc(s,a);if(c.fill!=null||ee!=0){let le=M.fill=new Path2D(w),de=c.fillTo(s,a,c.min,c.max,ee),xe=U(de);b(le,$,xe),b(le,X,xe)}if(!c.spanGaps){let le=[];le.push(...Wc(f,u,o,l,O,P,n));let de=c.width*pt/2,xe=t||e==1?de:-de,ne=t||e==-1?-de:de;le.forEach(q=>{q[0]+=xe,q[1]+=ne}),M.gaps=le=c.gaps(s,a,o,l,le),M.clip=vo(le,h.ori,p,d,x,y)}return fe!=0&&(M.band=fe==2?[Ti(s,a,o,l,w,-1),Ti(s,a,o,l,w,1)]:Ti(s,a,o,l,w,fe)),M})}function nh(i,e,t,n,r,s,a=St){if(i.length>1){let o=null;for(let l=0,c=1/0;l<i.length;l++)if(e[l]!==void 0){if(o!=null){let f=Wt(i[l]-i[o]);f<c&&(c=f,a=Wt(t(i[l],n,r,s)-t(i[o],n,r,s)))}o=l}}return a}function _S(i){i=i||Vs;const e=ht(i.size,[.6,St,1]),t=i.align||0,n=i.gap||0;let r=i.radius;r=r==null?[0,0]:typeof r=="number"?[r,0]:r;const s=st(r),a=1-e[0],o=ht(e[1],St),l=ht(e[2],1),c=ht(i.disp,Vs),f=ht(i.each,m=>{}),{fill:u,stroke:h}=c;return(m,_,v,p)=>_r(m,_,(d,x,y,E,F,C,P,U,b,M,w)=>{let O=d.pxRound,N=t,H=n*pt,G=o*pt,X=l*pt,$,ee;E.ori==0?[$,ee]=s(m,_):[ee,$]=s(m,_);const fe=E.dir*(E.ori==0?1:-1);let le=E.ori==0?So:Xc,de=E.ori==0?f:(Y,ye,ge,Pe,Ye,pe,Ae)=>{f(Y,ye,ge,Ye,Pe,Ae,pe)},xe=ht(m.bands,Bc).find(Y=>Y.series[0]==_),ne=xe!=null?xe.dir:0,q=d.fillTo(m,_,d.min,d.max,ne),re=O(P(q,F,w,b)),z,J,me,Te=M,Ce=O(d.width*pt),je=!1,I=null,Qe=null,ke=null,et=null;u!=null&&(Ce==0||h!=null)&&(je=!0,I=u.values(m,_,v,p),Qe=new Map,new Set(I).forEach(Y=>{Y!=null&&Qe.set(Y,new Path2D)}),Ce>0&&(ke=h.values(m,_,v,p),et=new Map,new Set(ke).forEach(Y=>{Y!=null&&et.set(Y,new Path2D)})));let{x0:Ue,size:_t}=c;if(Ue!=null&&_t!=null){N=1,x=Ue.values(m,_,v,p),Ue.unit==2&&(x=x.map(ge=>m.posToVal(U+ge*M,E.key,!0)));let Y=_t.values(m,_,v,p);_t.unit==2?J=Y[0]*M:J=C(Y[0],E,M,U)-C(0,E,M,U),Te=nh(x,y,C,E,M,U,Te),me=Te-J+H}else Te=nh(x,y,C,E,M,U,Te),me=Te*a+H,J=Te-me;me<1&&(me=0),Ce>=J/2&&(Ce=0),me<5&&(O=rd);let He=me>0,Xe=Te-me-(He?Ce:0);J=O(hc(Xe,X,G)),z=(N==0?J/2:N==fe?0:J)-N*fe*((N==0?H/2:0)+(He?Ce/2:0));const D={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},T=je?null:new Path2D;let te=null;if(xe!=null)te=m.data[xe.series[1]];else{let{y0:Y,y1:ye}=c;Y!=null&&ye!=null&&(y=ye.values(m,_,v,p),te=Y.values(m,_,v,p))}let ce=$*J,ie=ee*J;for(let Y=fe==1?v:p;Y>=v&&Y<=p;Y+=fe){let ye=y[Y];if(ye==null)continue;if(te!=null){let Se=te[Y]??0;if(ye-Se==0)continue;re=P(Se,F,w,b)}let ge=E.distr!=2||c!=null?x[Y]:Y,Pe=C(ge,E,M,U),Ye=P(ht(ye,q),F,w,b),pe=O(Pe-z),Ae=O(gn(Ye,re)),$e=O(Kn(Ye,re)),Fe=Ae-$e;if(ye!=null){let Se=ye<0?ie:ce,Be=ye<0?ce:ie;je?(Ce>0&&ke[Y]!=null&&le(et.get(ke[Y]),pe,$e+Cn(Ce/2),J,gn(0,Fe-Ce),Se,Be),I[Y]!=null&&le(Qe.get(I[Y]),pe,$e+Cn(Ce/2),J,gn(0,Fe-Ce),Se,Be)):le(T,pe,$e+Cn(Ce/2),J,gn(0,Fe-Ce),Se,Be),de(m,_,Y,pe-Ce/2,$e,J+Ce,Fe)}}return Ce>0?D.stroke=je?et:T:je||(D._fill=d.width==0?d._fill:d._stroke??d._fill,D.width=0),D.fill=je?Qe:T,D})}function vS(i,e){const t=ht(e?.alignGaps,0);return(n,r,s,a)=>_r(n,r,(o,l,c,f,u,h,m,_,v,p,d)=>{[s,a]=po(c,s,a);let x=o.pxRound,y=$=>x(h($,f,p,_)),E=$=>x(m($,u,d,v)),F,C,P;f.ori==0?(F=xo,P=_s,C=Ld):(F=Mo,P=vs,C=Dd);const U=f.dir*(f.ori==0?1:-1);let b=y(l[U==1?s:a]),M=b,w=[],O=[];for(let $=U==1?s:a;$>=s&&$<=a;$+=U)if(c[$]!=null){let fe=l[$],le=y(fe);w.push(M=le),O.push(E(c[$]))}const N={stroke:i(w,O,F,P,C,x),fill:null,clip:null,band:null,gaps:null,flags:ds},H=N.stroke;let[G,X]=Gc(n,r);if(o.fill!=null||G!=0){let $=N.fill=new Path2D(H),ee=o.fillTo(n,r,o.min,o.max,G),fe=E(ee);P($,M,fe),P($,b,fe)}if(!o.spanGaps){let $=[];$.push(...Wc(l,c,s,a,U,y,t)),N.gaps=$=o.gaps(n,r,s,a,$),N.clip=vo($,f.ori,_,v,p,d)}return X!=0&&(N.band=X==2?[Ti(n,r,s,a,H,-1),Ti(n,r,s,a,H,1)]:Ti(n,r,s,a,H,X)),N})}function xS(i){return vS(MS,i)}function MS(i,e,t,n,r,s){const a=i.length;if(a<2)return null;const o=new Path2D;if(t(o,i[0],e[0]),a==2)n(o,i[1],e[1]);else{let l=Array(a),c=Array(a-1),f=Array(a-1),u=Array(a-1);for(let h=0;h<a-1;h++)f[h]=e[h+1]-e[h],u[h]=i[h+1]-i[h],c[h]=f[h]/u[h];l[0]=c[0];for(let h=1;h<a-1;h++)c[h]===0||c[h-1]===0||c[h-1]>0!=c[h]>0?l[h]=0:(l[h]=3*(u[h-1]+u[h])/((2*u[h]+u[h-1])/c[h-1]+(u[h]+2*u[h-1])/c[h]),isFinite(l[h])||(l[h]=0));l[a-1]=c[a-2];for(let h=0;h<a-1;h++)r(o,i[h]+u[h]/3,e[h]+l[h]*u[h]/3,i[h+1]-u[h]/3,e[h+1]-l[h+1]*u[h]/3,i[h+1],e[h+1])}return o}const gc=new Set;function ih(){for(let i of gc)i.syncRect(!0)}gs&&(hr(eM,is,ih),hr(tM,is,ih,!0),hr(to,is,()=>{cn.pxRatio=pt}));const SS=Nd(),yS=Id();function rh(i,e,t,n){return(n?[i[0],i[1]].concat(i.slice(2)):[i[0]].concat(i.slice(1))).map((s,a)=>_c(s,a,e,t))}function ES(i,e){return i.map((t,n)=>n==0?{}:kt({},e,t))}function _c(i,e,t,n){return kt({},e==0?t:n,i)}function Fd(i,e,t){return e==null?fs:[e,t]}const bS=Fd;function TS(i,e,t){return e==null?fs:no(e,t,Fc,!0)}function Od(i,e,t,n){return e==null?fs:mo(e,t,i.scales[n].log,!1)}const AS=Od;function Bd(i,e,t,n){return e==null?fs:Nc(e,t,i.scales[n].log,!1)}const wS=Bd;function CS(i,e,t,n,r){let s=gn(Ff(i),Ff(e)),a=e-i,o=Yn(r/n*a,t);do{let l=t[o],c=n*l/a;if(c>=r&&s+(l<5?Wi.get(l):0)<=17)return[l,c]}while(++o<t.length);return[0,0]}function sh(i){let e,t;return i=i.replace(/(\d+)px/,(n,r)=>(e=Gt((t=+r)*pt))+"px"),[i,e,t]}function RS(i){i.show&&[i.font,i.labelFont].forEach(e=>{let t=yt(e[2]*pt,1);e[0]=e[0].replace(/[0-9.]+px/,t+"px"),e[1]=t})}function cn(i,e,t){const n={mode:ht(i.mode,1)},r=n.mode;function s(g,S,R,L){let B=S.valToPct(g);return L+R*(S.dir==-1?1-B:B)}function a(g,S,R,L){let B=S.valToPct(g);return L+R*(S.dir==-1?B:1-B)}function o(g,S,R,L){return S.ori==0?s(g,S,R,L):a(g,S,R,L)}n.valToPosH=s,n.valToPosV=a;let l=!1;n.status=0;const c=n.root=In(Fx);if(i.id!=null&&(c.id=i.id),wn(c,i.class),i.title){let g=In(zx,c);g.textContent=i.title}const f=qn("canvas"),u=n.ctx=f.getContext("2d"),h=In(kx,c);hr("click",h,g=>{g.target===_&&(At!=Er||Lt!=br)&&sn.click(n,g)},!0);const m=n.under=In(Hx,h);h.appendChild(f);const _=n.over=In(Vx,h);i=hs(i);const v=+ht(i.pxAlign,1),p=th(v);(i.plugins||[]).forEach(g=>{g.opts&&(i=g.opts(n,i)||i)});const d=i.ms||.001,x=n.series=r==1?rh(i.series||[],$f,Qf,!1):ES(i.series||[null],Jf),y=n.axes=rh(i.axes||[],Yf,Kf,!0),E=n.scales={},F=n.bands=i.bands||[];F.forEach(g=>{g.fill=st(g.fill||null),g.dir=ht(g.dir,-1)});const C=r==2?x[1].facets[0].scale:x[0].scale,P={axes:qd,series:vn},U=(i.drawOrder||["axes","series"]).map(g=>P[g]);function b(g){const S=g.distr==3?R=>bi(R>0?R:g.clamp(n,R,g.min,g.max,g.key)):g.distr==4?R=>vl(R,g.asinh):g.distr==100?R=>g.fwd(R):R=>R;return R=>{let L=S(R),{_min:B,_max:Z}=g,ae=Z-B;return(L-B)/ae}}function M(g){let S=E[g];if(S==null){let R=(i.scales||Vs)[g]||Vs;if(R.from!=null){M(R.from);let L=kt({},E[R.from],R,{key:g});L.valToPct=b(L),E[g]=L}else{S=E[g]=kt({},g==C?Ad:fS,R),S.key=g;let L=S.time,B=S.range,Z=Oi(B);if((g!=C||r==2&&!L)&&(Z&&(B[0]==null||B[1]==null)&&(B={min:B[0]==null?If:{mode:1,hard:B[0],soft:B[0]},max:B[1]==null?If:{mode:1,hard:B[1],soft:B[1]}},Z=!1),!Z&&_o(B))){let ae=B;B=(he,ve,Re)=>ve==null?fs:no(ve,Re,ae)}S.range=st(B||(L?bS:g==C?S.distr==3?AS:S.distr==4?wS:Fd:S.distr==3?Od:S.distr==4?Bd:TS)),S.auto=st(Z?!1:S.auto),S.clamp=st(S.clamp||uS),S._min=S._max=null,S.valToPct=b(S)}}}M("x"),M("y"),r==1&&x.forEach(g=>{M(g.scale)}),y.forEach(g=>{M(g.scale)});for(let g in i.scales)M(g);const w=E[C],O=w.distr;let N,H;w.ori==0?(wn(c,Ox),N=s,H=a):(wn(c,Bx),N=a,H=s);const G={};for(let g in E){let S=E[g];(S.min!=null||S.max!=null)&&(G[g]={min:S.min,max:S.max},S.min=S.max=null)}const X=i.tzDate||(g=>new Date(Gt(g/d))),$=i.fmtDate||zc,ee=d==1?OM(X):kM(X),fe=Wf(X,Gf(d==1?FM:zM,$)),le=qf(X,Xf(VM,$)),de=[],xe=n.legend=kt({},XM,i.legend),ne=n.cursor=kt({},ZM,{drag:{y:r==2}},i.cursor),q=xe.show,re=ne.show,z=xe.markers;xe.idxs=de,z.width=st(z.width),z.dash=st(z.dash),z.stroke=st(z.stroke),z.fill=st(z.fill);let J,me,Te,Ce=[],je=[],I,Qe=!1,ke={};if(xe.live){const g=x[1]?x[1].values:null;Qe=g!=null,I=Qe?g(n,1,0):{_:0};for(let S in I)ke[S]=Ic}if(q)if(J=qn("table",$x,c),Te=qn("tbody",null,J),xe.mount(n,J),Qe){me=qn("thead",null,J,Te);let g=qn("tr",null,me);qn("th",null,g);for(var et in I)qn("th",Mf,g).textContent=et}else wn(J,Kx),xe.live&&wn(J,jx);const Ue={show:!0},_t={show:!1};function He(g,S){if(S==0&&(Qe||!xe.live||r==2))return fs;let R=[],L=qn("tr",Zx,Te,Te.childNodes[S]);wn(L,g.class),g.show||wn(L,cr);let B=qn("th",null,L);if(z.show){let he=In(Jx,B);if(S>0){let ve=z.width(n,S);ve&&(he.style.border=ve+"px "+z.dash(n,S)+" "+z.stroke(n,S)),he.style.background=z.fill(n,S)}}let Z=In(Mf,B);g.label instanceof HTMLElement?Z.appendChild(g.label):Z.textContent=g.label,S>0&&(z.show||(Z.style.color=g.width>0?z.stroke(n,S):z.fill(n,S)),D("click",B,he=>{if(ne._lock)return;Kt(he);let ve=x.indexOf(g);if((he.ctrlKey||he.metaKey)!=xe.isolate){let Re=x.some((Le,Ie)=>Ie>0&&Ie!=ve&&Le.show);x.forEach((Le,Ie)=>{Ie>0&&ti(Ie,Re?Ie==ve?Ue:_t:Ue,!0,Bt.setSeries)})}else ti(ve,{show:!g.show},!0,Bt.setSeries)},!1),Qn&&D(bf,B,he=>{ne._lock||(Kt(he),ti(x.indexOf(g),Ar,!0,Bt.setSeries))},!1));for(var ae in I){let he=qn("td",Qx,L);he.textContent="--",R.push(he)}return[L,R]}const Xe=new Map;function D(g,S,R,L=!0){const B=Xe.get(S)||{},Z=ne.bind[g](n,S,R,L);Z&&(hr(g,S,B[g]=Z),Xe.set(S,B))}function T(g,S,R){const L=Xe.get(S)||{};for(let B in L)(g==null||B==g)&&(fc(B,S,L[B]),delete L[B]);g==null&&Xe.delete(S)}let te=0,ce=0,ie=0,Y=0,ye=0,ge=0,Pe=ye,Ye=ge,pe=ie,Ae=Y,$e=0,Fe=0,Se=0,Be=0;n.bbox={};let Ze=!1,vt=!1,k=!1,_e=!1,oe=!1,se=!1;function Me(g,S,R){(R||g!=n.width||S!=n.height)&&Ve(g,S),xr(!1),k=!0,vt=!0,Mr()}function Ve(g,S){n.width=te=ie=g,n.height=ce=Y=S,ye=ge=0,ut(),zn();let R=n.bbox;$e=R.left=sr(ye*pt,.5),Fe=R.top=sr(ge*pt,.5),Se=R.width=sr(ie*pt,.5),Be=R.height=sr(Y*pt,.5)}const at=3;function Ut(){let g=!1,S=0;for(;!g;){S++;let R=Wd(S),L=Xd(S);g=S==at||R&&L,g||(Ve(n.width,n.height),vt=!0)}}function Ht({width:g,height:S}){Me(g,S)}n.setSize=Ht;function ut(){let g=!1,S=!1,R=!1,L=!1;y.forEach((B,Z)=>{if(B.show&&B._show){let{side:ae,_size:he}=B,ve=ae%2,Re=B.label!=null?B.labelSize:0,Le=he+Re;Le>0&&(ve?(ie-=Le,ae==3?(ye+=Le,L=!0):R=!0):(Y-=Le,ae==0?(ge+=Le,g=!0):S=!0))}}),di[0]=g,di[1]=R,di[2]=S,di[3]=L,ie-=Q[1]+Q[3],ye+=Q[3],Y-=Q[2]+Q[0],ge+=Q[0]}function zn(){let g=ye+ie,S=ge+Y,R=ye,L=ge;function B(Z,ae){switch(Z){case 1:return g+=ae,g-ae;case 2:return S+=ae,S-ae;case 3:return R-=ae,R+ae;case 0:return L-=ae,L+ae}}y.forEach((Z,ae)=>{if(Z.show&&Z._show){let he=Z.side;Z._pos=B(he,Z._size),Z.label!=null&&(Z._lpos=B(he,Z.labelSize))}})}if(ne.dataIdx==null){let g=ne.hover,S=g.skip=new Set(g.skip??[]);S.add(void 0);let R=g.prox=st(g.prox),L=g.bias??=0;ne.dataIdx=(B,Z,ae,he)=>{if(Z==0)return ae;let ve=ae,Re=R(B,Z,ae,he)??St,Le=Re>=0&&Re<St,Ie=w.ori==0?ie:Y,Ke=ne.left,dt=e[0],ft=e[Z];if(S.has(ft[ae])){ve=null;let rt=null,qe=null,Oe;if(L==0||L==-1)for(Oe=ae;rt==null&&Oe-- >0;)S.has(ft[Oe])||(rt=Oe);if(L==0||L==1)for(Oe=ae;qe==null&&Oe++<ft.length;)S.has(ft[Oe])||(qe=Oe);if(rt!=null||qe!=null)if(Le){let Ct=rt==null?-1/0:N(dt[rt],w,Ie,0),Nt=qe==null?1/0:N(dt[qe],w,Ie,0),tn=Ke-Ct,xt=Nt-Ke;tn<=xt?tn<=Re&&(ve=rt):xt<=Re&&(ve=qe)}else ve=qe==null?rt:rt==null?qe:ae-rt<=qe-ae?rt:qe}else Le&&Wt(Ke-N(dt[ae],w,Ie,0))>Re&&(ve=null);return ve}}const Kt=g=>{ne.event=g};ne.idxs=de,ne._lock=!1;let Vt=ne.points;Vt.show=st(Vt.show),Vt.size=st(Vt.size),Vt.stroke=st(Vt.stroke),Vt.width=st(Vt.width),Vt.fill=st(Vt.fill);const Zt=n.focus=kt({},i.focus||{alpha:.3},ne.focus),Qn=Zt.prox>=0,fi=Qn&&Vt.one;let un=[],kn=[],hi=[];function qi(g,S){let R=Vt.show(n,S);if(R instanceof HTMLElement)return wn(R,Yx),wn(R,g.class),si(R,-10,-10,ie,Y),_.insertBefore(R,un[S]),R}function xs(g,S){if(r==1||S>0){let R=r==1&&E[g.scale].time,L=g.value;g.value=R?zf(L)?qf(X,Xf(L,$)):L||le:L||oS,g.label=g.label||(R?QM:JM)}if(fi||S>0){g.width=g.width==null?1:g.width,g.paths=g.paths||SS||fM,g.fillTo=st(g.fillTo||hS),g.pxAlign=+ht(g.pxAlign,v),g.pxRound=th(g.pxAlign),g.stroke=st(g.stroke||null),g.fill=st(g.fill||null),g._stroke=g._fill=g._paths=g._focus=null;let R=lS(gn(1,g.width),1),L=g.points=kt({},{size:R,width:gn(1,R*.2),stroke:g.stroke,space:R*2,paths:yS,_stroke:null,_fill:null},g.points);L.show=st(L.show),L.filter=st(L.filter),L.fill=st(L.fill),L.stroke=st(L.stroke),L.paths=st(L.paths),L.pxAlign=g.pxAlign}if(q){let R=He(g,S);Ce.splice(S,0,R[0]),je.splice(S,0,R[1]),xe.values.push(null)}if(re){de.splice(S,0,null);let R=null;fi?S==0&&(R=qi(g,S)):S>0&&(R=qi(g,S)),un.splice(S,0,R),kn.splice(S,0,0),hi.splice(S,0,0)}en("addSeries",S)}function js(g,S){S=S??x.length,g=r==1?_c(g,S,$f,Qf):_c(g,S,{},Jf),x.splice(S,0,g),xs(x[S],S)}n.addSeries=js;function yo(g){if(x.splice(g,1),q){xe.values.splice(g,1),je.splice(g,1);let S=Ce.splice(g,1)[0];T(null,S.firstChild),S.remove()}re&&(de.splice(g,1),un.splice(g,1)[0].remove(),kn.splice(g,1),hi.splice(g,1)),en("delSeries",g)}n.delSeries=yo;const di=[!1,!1,!1,!1];function Eo(g,S){if(g._show=g.show,g.show){let R=g.side%2,L=E[g.scale];L==null&&(g.scale=R?x[1].scale:C,L=E[g.scale]);let B=L.time;g.size=st(g.size),g.space=st(g.space),g.rotate=st(g.rotate),Oi(g.incrs)&&g.incrs.forEach(ae=>{!Wi.has(ae)&&Wi.set(ae,od(ae))}),g.incrs=st(g.incrs||(L.distr==2?IM:B?d==1?NM:BM:ar)),g.splits=st(g.splits||(B&&L.distr==1?ee:L.distr==3?dc:L.distr==4?nS:tS)),g.stroke=st(g.stroke),g.grid.stroke=st(g.grid.stroke),g.ticks.stroke=st(g.ticks.stroke),g.border.stroke=st(g.border.stroke);let Z=g.values;g.values=Oi(Z)&&!Oi(Z[0])?st(Z):B?Oi(Z)?Wf(X,Gf(Z,$)):zf(Z)?HM(X,Z):Z||fe:Z||eS,g.filter=st(g.filter||(L.distr>=3&&L.log==10?sS:L.distr==3&&L.log==2?aS:sd)),g.font=sh(g.font),g.labelFont=sh(g.labelFont),g._size=g.size(n,null,S,0),g._space=g._rotate=g._incrs=g._found=g._splits=g._values=null,g._size>0&&(di[S]=!0,g._el=In(Gx,h))}}function A(g,S,R,L){let[B,Z,ae,he]=R,ve=S%2,Re=0;return ve==0&&(he||Z)&&(Re=S==0&&!B||S==2&&!ae?Gt(Yf.size/3):0),ve==1&&(B||ae)&&(Re=S==1&&!Z||S==3&&!he?Gt(Kf.size/2):0),Re}const W=n.padding=(i.padding||[A,A,A,A]).map(g=>st(ht(g,A))),Q=n._padding=W.map((g,S)=>g(n,S,di,0));let j,V=null,ue=null;const be=r==1?x[0].idxs:null;let we=null,De=!1;function Ge(g,S){if(e=g??[],n.data=n._data=e,r==2){j=0;for(let R=1;R<x.length;R++)j+=e[R][0].length}else{e.length==0&&(n.data=n._data=e=[[]]),we=e[0],j=we.length;let R=e;if(O==2){R=e.slice();let L=R[0]=Array(j);for(let B=0;B<j;B++)L[B]=B}n._data=e=R}if(xr(!0),en("setData"),O==2&&(k=!0),S!==!1){let R=w;R.auto(n,De)?We():Ci(C,R.min,R.max),_e=_e||ne.left>=0,se=!0,Mr()}}n.setData=Ge;function We(){De=!0;let g,S;r==1&&(j>0?(V=be[0]=0,ue=be[1]=j-1,g=e[0][V],S=e[0][ue],O==2?(g=V,S=ue):g==S&&(O==3?[g,S]=mo(g,g,w.log,!1):O==4?[g,S]=Nc(g,g,w.log,!1):w.time?S=g+Gt(86400/d):[g,S]=no(g,S,Fc,!0))):(V=be[0]=g=null,ue=be[1]=S=null)),Ci(C,g,S)}let ze,it,Et,bt,rn,ot,Ne,Ot,lt,Tt;function pi(g,S,R,L,B,Z){g??=yf,R??=Bc,L??="butt",B??=yf,Z??="round",g!=ze&&(u.strokeStyle=ze=g),B!=it&&(u.fillStyle=it=B),S!=Et&&(u.lineWidth=Et=S),Z!=rn&&(u.lineJoin=rn=Z),L!=ot&&(u.lineCap=ot=L),R!=bt&&u.setLineDash(bt=R)}function an(g,S,R,L){S!=it&&(u.fillStyle=it=S),g!=Ne&&(u.font=Ne=g),R!=Ot&&(u.textAlign=Ot=R),L!=lt&&(u.textBaseline=lt=L)}function Yi(g,S,R,L,B=0){if(L.length>0&&g.auto(n,De)&&(S==null||S.min==null)){let Z=ht(V,0),ae=ht(ue,L.length-1),he=R.min==null?sM(L,Z,ae,B,g.distr==3):[R.min,R.max];g.min=Kn(g.min,R.min=he[0]),g.max=gn(g.max,R.max=he[1])}}const Dt={min:null,max:null};function ei(){for(let L in E){let B=E[L];G[L]==null&&(B.min==null||G[C]!=null&&B.auto(n,De))&&(G[L]=Dt)}for(let L in E){let B=E[L];G[L]==null&&B.from!=null&&G[B.from]!=null&&(G[L]=Dt)}G[C]!=null&&xr(!0);let g={};for(let L in G){let B=G[L];if(B!=null){let Z=g[L]=hs(E[L],pM);if(B.min!=null)kt(Z,B);else if(L!=C||r==2)if(j==0&&Z.from==null){let ae=Z.range(n,null,null,L);Z.min=ae[0],Z.max=ae[1]}else Z.min=St,Z.max=-St}}if(j>0){x.forEach((L,B)=>{if(r==1){let Z=L.scale,ae=G[Z];if(ae==null)return;let he=g[Z];if(B==0){let ve=he.range(n,he.min,he.max,Z);he.min=ve[0],he.max=ve[1],V=Yn(he.min,e[0]),ue=Yn(he.max,e[0]),ue-V>1&&(e[0][V]<he.min&&V++,e[0][ue]>he.max&&ue--),L.min=we[V],L.max=we[ue]}else L.show&&L.auto&&Yi(he,ae,L,e[B],L.sorted);L.idxs[0]=V,L.idxs[1]=ue}else if(B>0&&L.show&&L.auto){let[Z,ae]=L.facets,he=Z.scale,ve=ae.scale,[Re,Le]=e[B],Ie=g[he],Ke=g[ve];Ie!=null&&Yi(Ie,G[he],Z,Re,Z.sorted),Ke!=null&&Yi(Ke,G[ve],ae,Le,ae.sorted),L.min=ae.min,L.max=ae.max}});for(let L in g){let B=g[L],Z=G[L];if(B.from==null&&(Z==null||Z.min==null)){let ae=B.range(n,B.min==St?null:B.min,B.max==-St?null:B.max,L);B.min=ae[0],B.max=ae[1]}}}for(let L in g){let B=g[L];if(B.from!=null){let Z=g[B.from];if(Z.min==null)B.min=B.max=null;else{let ae=B.range(n,Z.min,Z.max,L);B.min=ae[0],B.max=ae[1]}}}let S={},R=!1;for(let L in g){let B=g[L],Z=E[L];if(Z.min!=B.min||Z.max!=B.max){Z.min=B.min,Z.max=B.max;let ae=Z.distr;Z._min=ae==3?bi(Z.min):ae==4?vl(Z.min,Z.asinh):ae==100?Z.fwd(Z.min):Z.min,Z._max=ae==3?bi(Z.max):ae==4?vl(Z.max,Z.asinh):ae==100?Z.fwd(Z.max):Z.max,S[L]=R=!0}}if(R){x.forEach((L,B)=>{r==2?B>0&&S.y&&(L._paths=null):S[L.scale]&&(L._paths=null)});for(let L in S)k=!0,en("setScale",L);re&&ne.left>=0&&(_e=se=!0)}for(let L in G)G[L]=null}function Ms(g){let S=hc(V-1,0,j-1),R=hc(ue+1,0,j-1);for(;g[S]==null&&S>0;)S--;for(;g[R]==null&&R<j-1;)R++;return[S,R]}function vn(){if(j>0){let g=x.some(S=>S._focus)&&Tt!=Zt.alpha;g&&(u.globalAlpha=Tt=Zt.alpha),x.forEach((S,R)=>{if(R>0&&S.show&&(vr(R,!1),vr(R,!0),S._paths==null)){let L=Tt;Tt!=S.alpha&&(u.globalAlpha=Tt=S.alpha);let B=r==2?[0,e[R][0].length-1]:Ms(e[R]);S._paths=S.paths(n,R,B[0],B[1]),Tt!=L&&(u.globalAlpha=Tt=L)}}),x.forEach((S,R)=>{if(R>0&&S.show){let L=Tt;Tt!=S.alpha&&(u.globalAlpha=Tt=S.alpha),S._paths!=null&&Ks(R,!1);{let B=S._paths!=null?S._paths.gaps:null,Z=S.points.show(n,R,V,ue,B),ae=S.points.filter(n,R,Z,B);(Z||ae)&&(S.points._paths=S.points.paths(n,R,V,ue,ae),Ks(R,!0))}Tt!=L&&(u.globalAlpha=Tt=L),en("drawSeries",R)}}),g&&(u.globalAlpha=Tt=1)}}function vr(g,S){let R=S?x[g].points:x[g];R._stroke=R.stroke(n,g),R._fill=R.fill(n,g)}function Ks(g,S){let R=S?x[g].points:x[g],{stroke:L,fill:B,clip:Z,flags:ae,_stroke:he=R._stroke,_fill:ve=R._fill,_width:Re=R.width}=R._paths;Re=yt(Re*pt,3);let Le=null,Ie=Re%2/2;S&&ve==null&&(ve=Re>0?"#fff":he);let Ke=R.pxAlign==1&&Ie>0;if(Ke&&u.translate(Ie,Ie),!S){let dt=$e-Re/2,ft=Fe-Re/2,rt=Se+Re,qe=Be+Re;Le=new Path2D,Le.rect(dt,ft,rt,qe)}S?bo(he,Re,R.dash,R.cap,ve,L,B,ae,Z):Zs(g,he,Re,R.dash,R.cap,ve,L,B,ae,Le,Z),Ke&&u.translate(-Ie,-Ie)}function Zs(g,S,R,L,B,Z,ae,he,ve,Re,Le){let Ie=!1;ve!=0&&F.forEach((Ke,dt)=>{if(Ke.series[0]==g){let ft=x[Ke.series[1]],rt=e[Ke.series[1]],qe=(ft._paths||Vs).band;Oi(qe)&&(qe=Ke.dir==1?qe[0]:qe[1]);let Oe,Ct=null;ft.show&&qe&&oM(rt,V,ue)?(Ct=Ke.fill(n,dt)||Z,Oe=ft._paths.clip):qe=null,bo(S,R,L,B,Ct,ae,he,ve,Re,Le,Oe,qe),Ie=!0}}),Ie||bo(S,R,L,B,Z,ae,he,ve,Re,Le)}const $c=ds|mc;function bo(g,S,R,L,B,Z,ae,he,ve,Re,Le,Ie){pi(g,S,R,L,B),(ve||Re||Ie)&&(u.save(),ve&&u.clip(ve),Re&&u.clip(Re)),Ie?(he&$c)==$c?(u.clip(Ie),Le&&u.clip(Le),Qs(B,ae),Js(g,Z,S)):he&mc?(Qs(B,ae),u.clip(Ie),Js(g,Z,S)):he&ds&&(u.save(),u.clip(Ie),Le&&u.clip(Le),Qs(B,ae),u.restore(),Js(g,Z,S)):(Qs(B,ae),Js(g,Z,S)),(ve||Re||Ie)&&u.restore()}function Js(g,S,R){R>0&&(S instanceof Map?S.forEach((L,B)=>{u.strokeStyle=ze=B,u.stroke(L)}):S!=null&&g&&u.stroke(S))}function Qs(g,S){S instanceof Map?S.forEach((R,L)=>{u.fillStyle=it=L,u.fill(R)}):S!=null&&g&&u.fill(S)}function Gd(g,S,R,L){let B=y[g],Z;if(L<=0)Z=[0,0];else{let ae=B._space=B.space(n,g,S,R,L),he=B._incrs=B.incrs(n,g,S,R,L,ae);Z=CS(S,R,he,L,ae)}return B._found=Z}function To(g,S,R,L,B,Z,ae,he,ve,Re){let Le=ae%2/2;v==1&&u.translate(Le,Le),pi(he,ae,ve,Re,he),u.beginPath();let Ie,Ke,dt,ft,rt=B+(L==0||L==3?-Z:Z);R==0?(Ke=B,ft=rt):(Ie=B,dt=rt);for(let qe=0;qe<g.length;qe++)S[qe]!=null&&(R==0?Ie=dt=g[qe]:Ke=ft=g[qe],u.moveTo(Ie,Ke),u.lineTo(dt,ft));u.stroke(),v==1&&u.translate(-Le,-Le)}function Wd(g){let S=!0;return y.forEach((R,L)=>{if(!R.show)return;let B=E[R.scale];if(B.min==null){R._show&&(S=!1,R._show=!1,xr(!1));return}else R._show||(S=!1,R._show=!0,xr(!1));let Z=R.side,ae=Z%2,{min:he,max:ve}=B,[Re,Le]=Gd(L,he,ve,ae==0?ie:Y);if(Le==0)return;let Ie=B.distr==2,Ke=R._splits=R.splits(n,L,he,ve,Re,Le,Ie),dt=B.distr==2?Ke.map(Oe=>we[Oe]):Ke,ft=B.distr==2?we[Ke[1]]-we[Ke[0]]:Re,rt=R._values=R.values(n,R.filter(n,dt,L,Le,ft),L,Le,ft);R._rotate=Z==2?R.rotate(n,rt,L,Le):0;let qe=R._size;R._size=Un(R.size(n,rt,L,g)),qe!=null&&R._size!=qe&&(S=!1)}),S}function Xd(g){let S=!0;return W.forEach((R,L)=>{let B=R(n,L,di,g);B!=Q[L]&&(S=!1),Q[L]=B}),S}function qd(){for(let g=0;g<y.length;g++){let S=y[g];if(!S.show||!S._show)continue;let R=S.side,L=R%2,B,Z,ae=S.stroke(n,g),he=R==0||R==3?-1:1,[ve,Re]=S._found;if(S.label!=null){let hn=S.labelGap*he,bn=Gt((S._lpos+hn)*pt);an(S.labelFont[0],ae,"center",R==2?Us:Sf),u.save(),L==1?(B=Z=0,u.translate(bn,Gt(Fe+Be/2)),u.rotate((R==3?-Ga:Ga)/2)):(B=Gt($e+Se/2),Z=bn);let Ki=id(S.label)?S.label(n,g,ve,Re):S.label;u.fillText(Ki,B,Z),u.restore()}if(Re==0)continue;let Le=E[S.scale],Ie=L==0?Se:Be,Ke=L==0?$e:Fe,dt=S._splits,ft=Le.distr==2?dt.map(hn=>we[hn]):dt,rt=Le.distr==2?we[dt[1]]-we[dt[0]]:ve,qe=S.ticks,Oe=S.border,Ct=qe.show?qe.size:0,Nt=Gt(Ct*pt),tn=Gt((S.alignTo==2?S._size-Ct-S.gap:S.gap)*pt),xt=S._rotate*-Ga/180,Ft=p(S._pos*pt),yn=(Nt+tn)*he,fn=Ft+yn;Z=L==0?fn:0,B=L==1?fn:0;let Pn=S.font[0],Hn=S.align==1?jr:S.align==2?ml:xt>0?jr:xt<0?ml:L==0?"center":R==3?ml:jr,ii=xt||L==1?"middle":R==2?Us:Sf;an(Pn,ae,Hn,ii);let En=S.font[1]*S.lineGap,Ln=dt.map(hn=>p(o(hn,Le,Ie,Ke))),Vn=S._values;for(let hn=0;hn<Vn.length;hn++){let bn=Vn[hn];if(bn!=null){L==0?B=Ln[hn]:Z=Ln[hn],bn=""+bn;let Ki=bn.indexOf(`
`)==-1?[bn]:bn.split(/\n/gm);for(let dn=0;dn<Ki.length;dn++){let du=Ki[dn];xt?(u.save(),u.translate(B,Z+dn*En),u.rotate(xt),u.fillText(du,0,0),u.restore()):u.fillText(du,B,Z+dn*En)}}}qe.show&&To(Ln,qe.filter(n,ft,g,Re,rt),L,R,Ft,Nt,yt(qe.width*pt,3),qe.stroke(n,g),qe.dash,qe.cap);let ri=S.grid;ri.show&&To(Ln,ri.filter(n,ft,g,Re,rt),L,L==0?2:1,L==0?Fe:$e,L==0?Be:Se,yt(ri.width*pt,3),ri.stroke(n,g),ri.dash,ri.cap),Oe.show&&To([Ft],[1],L==0?1:0,L==0?1:2,L==1?Fe:$e,L==1?Be:Se,yt(Oe.width*pt,3),Oe.stroke(n,g),Oe.dash,Oe.cap)}en("drawAxes")}function xr(g){x.forEach((S,R)=>{R>0&&(S._paths=null,g&&(r==1?(S.min=null,S.max=null):S.facets.forEach(L=>{L.min=null,L.max=null})))})}let ea=!1,Ao=!1,Ss=[];function Yd(){Ao=!1;for(let g=0;g<Ss.length;g++)en(...Ss[g]);Ss.length=0}function Mr(){ea||(SM(jc),ea=!0)}function $d(g,S=!1){ea=!0,Ao=S,g(n),jc(),S&&Ss.length>0&&queueMicrotask(Yd)}n.batch=$d;function jc(){if(Ze&&(ei(),Ze=!1),k&&(Ut(),k=!1),vt){if(Rt(m,jr,ye),Rt(m,Us,ge),Rt(m,Bs,ie),Rt(m,zs,Y),Rt(_,jr,ye),Rt(_,Us,ge),Rt(_,Bs,ie),Rt(_,zs,Y),Rt(h,Bs,te),Rt(h,zs,ce),f.width=Gt(te*pt),f.height=Gt(ce*pt),y.forEach(({_el:g,_show:S,_size:R,_pos:L,side:B})=>{if(g!=null)if(S){let Z=B===3||B===0?R:0,ae=B%2==1;Rt(g,ae?"left":"top",L-Z),Rt(g,ae?"width":"height",R),Rt(g,ae?"top":"left",ae?ge:ye),Rt(g,ae?"height":"width",ae?Y:ie),uc(g,cr)}else wn(g,cr)}),ze=it=Et=rn=ot=Ne=Ot=lt=bt=null,Tt=1,bs(!0),ye!=Pe||ge!=Ye||ie!=pe||Y!=Ae){xr(!1);let g=ie/pe,S=Y/Ae;if(re&&!_e&&ne.left>=0){ne.left*=g,ne.top*=S,Sr&&si(Sr,Gt(ne.left),0,ie,Y),yr&&si(yr,0,Gt(ne.top),ie,Y);for(let R=0;R<un.length;R++){let L=un[R];L!=null&&(kn[R]*=g,hi[R]*=S,si(L,Un(kn[R]),Un(hi[R]),ie,Y))}}if(wt.show&&!oe&&wt.left>=0&&wt.width>0){wt.left*=g,wt.width*=g,wt.top*=S,wt.height*=S;for(let R in Do)Rt(Tr,R,wt[R])}Pe=ye,Ye=ge,pe=ie,Ae=Y}en("setSize"),vt=!1}te>0&&ce>0&&(u.clearRect(0,0,f.width,f.height),en("drawClear"),U.forEach(g=>g()),en("draw")),wt.show&&oe&&(ta(wt),oe=!1),re&&_e&&(ji(null,!0,!1),_e=!1),xe.show&&xe.live&&se&&(Po(),se=!1),l||(l=!0,n.status=1,en("ready")),De=!1,ea=!1}n.redraw=(g,S)=>{k=S||!1,g!==!1?Ci(C,w.min,w.max):Mr()};function wo(g,S){let R=E[g];if(R.from==null){if(j==0){let L=R.range(n,S.min,S.max,g);S.min=L[0],S.max=L[1]}if(S.min>S.max){let L=S.min;S.min=S.max,S.max=L}if(j>1&&S.min!=null&&S.max!=null&&S.max-S.min<1e-16)return;g==C&&R.distr==2&&j>0&&(S.min=Yn(S.min,e[0]),S.max=Yn(S.max,e[0]),S.min==S.max&&S.max++),G[g]=S,Ze=!0,Mr()}}n.setScale=wo;let Co,Ro,Sr,yr,Kc,Zc,Er,br,Jc,Qc,At,Lt,wi=!1;const sn=ne.drag;let Jt=sn.x,Qt=sn.y;re&&(ne.x&&(Co=In(Xx,_)),ne.y&&(Ro=In(qx,_)),w.ori==0?(Sr=Co,yr=Ro):(Sr=Ro,yr=Co),At=ne.left,Lt=ne.top);const wt=n.select=kt({show:!0,over:!0,left:0,width:0,top:0,height:0},i.select),Tr=wt.show?In(Wx,wt.over?_:m):null;function ta(g,S){if(wt.show){for(let R in g)wt[R]=g[R],R in Do&&Rt(Tr,R,g[R]);S!==!1&&en("setSelect")}}n.setSelect=ta;function jd(g){if(x[g].show)q&&uc(Ce[g],cr);else if(q&&wn(Ce[g],cr),re){let R=fi?un[0]:un[g];R!=null&&si(R,-10,-10,ie,Y)}}function Ci(g,S,R){wo(g,{min:S,max:R})}function ti(g,S,R,L){S.focus!=null&&ep(g),S.show!=null&&x.forEach((B,Z)=>{Z>0&&(g==Z||g==null)&&(B.show=S.show,jd(Z),r==2?(Ci(B.facets[0].scale,null,null),Ci(B.facets[1].scale,null,null)):Ci(B.scale,null,null),Mr())}),R!==!1&&en("setSeries",g,S),L&&Ts("setSeries",n,g,S)}n.setSeries=ti;function Kd(g,S){kt(F[g],S)}function Zd(g,S){g.fill=st(g.fill||null),g.dir=ht(g.dir,-1),S=S??F.length,F.splice(S,0,g)}function Jd(g){g==null?F.length=0:F.splice(g,1)}n.addBand=Zd,n.setBand=Kd,n.delBand=Jd;function Qd(g,S){x[g].alpha=S,re&&un[g]!=null&&(un[g].style.opacity=S),q&&Ce[g]&&(Ce[g].style.opacity=S)}let mi,Ri,$i;const Ar={focus:!0};function ep(g){if(g!=$i){let S=g==null,R=Zt.alpha!=1;x.forEach((L,B)=>{if(r==1||B>0){let Z=S||B==0||B==g;L._focus=S?null:Z,R&&Qd(B,Z?1:Zt.alpha)}}),$i=g,R&&Mr()}}q&&Qn&&D(Tf,J,g=>{ne._lock||(Kt(g),$i!=null&&ti(null,Ar,!0,Bt.setSeries))});function ni(g,S,R){let L=E[S];R&&(g=g/pt-(L.ori==1?ge:ye));let B=ie;L.ori==1&&(B=Y,g=B-g),L.dir==-1&&(g=B-g);let Z=L._min,ae=L._max,he=g/B,ve=Z+(ae-Z)*he,Re=L.distr;return Re==3?us(10,ve):Re==4?cM(ve,L.asinh):Re==100?L.bwd(ve):ve}function tp(g,S){let R=ni(g,C,S);return Yn(R,e[0],V,ue)}n.valToIdx=g=>Yn(g,e[0]),n.posToIdx=tp,n.posToVal=ni,n.valToPos=(g,S,R)=>E[S].ori==0?s(g,E[S],R?Se:ie,R?$e:0):a(g,E[S],R?Be:Y,R?Fe:0),n.setCursor=(g,S,R)=>{At=g.left,Lt=g.top,ji(null,S,R)};function eu(g,S){Rt(Tr,jr,wt.left=g),Rt(Tr,Bs,wt.width=S)}function tu(g,S){Rt(Tr,Us,wt.top=g),Rt(Tr,zs,wt.height=S)}let ys=w.ori==0?eu:tu,Es=w.ori==1?eu:tu;function np(){if(q&&xe.live)for(let g=r==2?1:0;g<x.length;g++){if(g==0&&Qe)continue;let S=xe.values[g],R=0;for(let L in S)je[g][R++].firstChild.nodeValue=S[L]}}function Po(g,S){if(g!=null&&(g.idxs?g.idxs.forEach((R,L)=>{de[L]=R}):dM(g.idx)||de.fill(g.idx),xe.idx=de[0]),q&&xe.live){for(let R=0;R<x.length;R++)(R>0||r==1&&!Qe)&&ip(R,de[R]);np()}se=!1,S!==!1&&en("setLegend")}n.setLegend=Po;function ip(g,S){let R=x[g],L=g==0&&O==2?we:e[g],B;Qe?B=R.values(n,g,S)??ke:(B=R.value(n,S==null?null:L[S],g,S),B=B==null?ke:{_:B}),xe.values[g]=B}function ji(g,S,R){Jc=At,Qc=Lt,[At,Lt]=ne.move(n,At,Lt),ne.left=At,ne.top=Lt,re&&(Sr&&si(Sr,Gt(At),0,ie,Y),yr&&si(yr,0,Gt(Lt),ie,Y));let L,B=V>ue;mi=St,Ri=null;let Z=w.ori==0?ie:Y,ae=w.ori==1?ie:Y;if(At<0||j==0||B){L=ne.idx=null;for(let he=0;he<x.length;he++){let ve=un[he];ve!=null&&si(ve,-10,-10,ie,Y)}Qn&&ti(null,Ar,!0,g==null&&Bt.setSeries),xe.live&&(de.fill(L),se=!0)}else{let he,ve,Re;r==1&&(he=w.ori==0?At:Lt,ve=ni(he,C),L=ne.idx=Yn(ve,e[0],V,ue),Re=N(e[0][L],w,Z,0));let Le=-10,Ie=-10,Ke=0,dt=0,ft=!0,rt="",qe="";for(let Oe=r==2?1:0;Oe<x.length;Oe++){let Ct=x[Oe],Nt=de[Oe],tn=Nt==null?null:r==1?e[Oe][Nt]:e[Oe][1][Nt],xt=ne.dataIdx(n,Oe,L,ve),Ft=xt==null?null:r==1?e[Oe][xt]:e[Oe][1][xt];if(se=se||Ft!=tn||xt!=Nt,de[Oe]=xt,Oe>0&&Ct.show){let yn=xt==null?-10:xt==L?Re:N(r==1?e[0][xt]:e[Oe][0][xt],w,Z,0),fn=Ft==null?-10:H(Ft,r==1?E[Ct.scale]:E[Ct.facets[1].scale],ae,0);if(Qn&&Ft!=null){let Pn=w.ori==1?At:Lt,Hn=Wt(Zt.dist(n,Oe,xt,fn,Pn));if(Hn<mi){let ii=Zt.bias;if(ii!=0){let En=ni(Pn,Ct.scale),Ln=Ft>=0?1:-1,Vn=En>=0?1:-1;Vn==Ln&&(Vn==1?ii==1?Ft>=En:Ft<=En:ii==1?Ft<=En:Ft>=En)&&(mi=Hn,Ri=Oe)}else mi=Hn,Ri=Oe}}if(se||fi){let Pn,Hn;w.ori==0?(Pn=yn,Hn=fn):(Pn=fn,Hn=yn);let ii,En,Ln,Vn,ri,hn,bn=!0,Ki=Vt.bbox;if(Ki!=null){bn=!1;let dn=Ki(n,Oe);Ln=dn.left,Vn=dn.top,ii=dn.width,En=dn.height}else Ln=Pn,Vn=Hn,ii=En=Vt.size(n,Oe);if(hn=Vt.fill(n,Oe),ri=Vt.stroke(n,Oe),fi)Oe==Ri&&mi<=Zt.prox&&(Le=Ln,Ie=Vn,Ke=ii,dt=En,ft=bn,rt=hn,qe=ri);else{let dn=un[Oe];dn!=null&&(kn[Oe]=Ln,hi[Oe]=Vn,Df(dn,ii,En,bn),Pf(dn,hn,ri),si(dn,Un(Ln),Un(Vn),ie,Y))}}}}if(fi){let Oe=Zt.prox,Ct=$i==null?mi<=Oe:mi>Oe||Ri!=$i;if(se||Ct){let Nt=un[0];Nt!=null&&(kn[0]=Le,hi[0]=Ie,Df(Nt,Ke,dt,ft),Pf(Nt,rt,qe),si(Nt,Un(Le),Un(Ie),ie,Y))}}}if(wt.show&&wi)if(g!=null){let[he,ve]=Bt.scales,[Re,Le]=Bt.match,[Ie,Ke]=g.cursor.sync.scales,dt=g.cursor.drag;if(Jt=dt._x,Qt=dt._y,Jt||Qt){let{left:ft,top:rt,width:qe,height:Oe}=g.select,Ct=g.scales[Ie].ori,Nt=g.posToVal,tn,xt,Ft,yn,fn,Pn=he!=null&&Re(he,Ie),Hn=ve!=null&&Le(ve,Ke);Pn&&Jt?(Ct==0?(tn=ft,xt=qe):(tn=rt,xt=Oe),Ft=E[he],yn=N(Nt(tn,Ie),Ft,Z,0),fn=N(Nt(tn+xt,Ie),Ft,Z,0),ys(Kn(yn,fn),Wt(fn-yn))):ys(0,Z),Hn&&Qt?(Ct==1?(tn=ft,xt=qe):(tn=rt,xt=Oe),Ft=E[ve],yn=H(Nt(tn,Ke),Ft,ae,0),fn=H(Nt(tn+xt,Ke),Ft,ae,0),Es(Kn(yn,fn),Wt(fn-yn))):Es(0,ae)}else Io()}else{let he=Wt(Jc-Kc),ve=Wt(Qc-Zc);if(w.ori==1){let Ke=he;he=ve,ve=Ke}Jt=sn.x&&he>=sn.dist,Qt=sn.y&&ve>=sn.dist;let Re=sn.uni;Re!=null?Jt&&Qt&&(Jt=he>=Re,Qt=ve>=Re,!Jt&&!Qt&&(ve>he?Qt=!0:Jt=!0)):sn.x&&sn.y&&(Jt||Qt)&&(Jt=Qt=!0);let Le,Ie;Jt&&(w.ori==0?(Le=Er,Ie=At):(Le=br,Ie=Lt),ys(Kn(Le,Ie),Wt(Ie-Le)),Qt||Es(0,ae)),Qt&&(w.ori==1?(Le=Er,Ie=At):(Le=br,Ie=Lt),Es(Kn(Le,Ie),Wt(Ie-Le)),Jt||ys(0,Z)),!Jt&&!Qt&&(ys(0,0),Es(0,0))}if(sn._x=Jt,sn._y=Qt,g==null){if(R){if(hu!=null){let[he,ve]=Bt.scales;Bt.values[0]=he!=null?ni(w.ori==0?At:Lt,he):null,Bt.values[1]=ve!=null?ni(w.ori==1?At:Lt,ve):null}Ts(gl,n,At,Lt,ie,Y,L)}if(Qn){let he=R&&Bt.setSeries,ve=Zt.prox;$i==null?mi<=ve&&ti(Ri,Ar,!0,he):mi>ve?ti(null,Ar,!0,he):Ri!=$i&&ti(Ri,Ar,!0,he)}}se&&(xe.idx=L,Po()),S!==!1&&en("setCursor")}let Pi=null;Object.defineProperty(n,"rect",{get(){return Pi==null&&bs(!1),Pi}});function bs(g=!1){g?Pi=null:(Pi=_.getBoundingClientRect(),en("syncRect",Pi))}function nu(g,S,R,L,B,Z,ae){ne._lock||wi&&g!=null&&g.movementX==0&&g.movementY==0||(Lo(g,S,R,L,B,Z,ae,!1,g!=null),g!=null?ji(null,!0,!0):ji(S,!0,!1))}function Lo(g,S,R,L,B,Z,ae,he,ve){if(Pi==null&&bs(!1),Kt(g),g!=null)R=g.clientX-Pi.left,L=g.clientY-Pi.top;else{if(R<0||L<0){At=-10,Lt=-10;return}let[Re,Le]=Bt.scales,Ie=S.cursor.sync,[Ke,dt]=Ie.values,[ft,rt]=Ie.scales,[qe,Oe]=Bt.match,Ct=S.axes[0].side%2==1,Nt=w.ori==0?ie:Y,tn=w.ori==1?ie:Y,xt=Ct?Z:B,Ft=Ct?B:Z,yn=Ct?L:R,fn=Ct?R:L;if(ft!=null?R=qe(Re,ft)?o(Ke,E[Re],Nt,0):-10:R=Nt*(yn/xt),rt!=null?L=Oe(Le,rt)?o(dt,E[Le],tn,0):-10:L=tn*(fn/Ft),w.ori==1){let Pn=R;R=L,L=Pn}}ve&&(S==null||S.cursor.event.type==gl)&&((R<=1||R>=ie-1)&&(R=sr(R,ie)),(L<=1||L>=Y-1)&&(L=sr(L,Y))),he?(Kc=R,Zc=L,[Er,br]=ne.move(n,R,L)):(At=R,Lt=L)}const Do={width:0,height:0,left:0,top:0};function Io(){ta(Do,!1)}let iu,ru,su,au;function ou(g,S,R,L,B,Z,ae){wi=!0,Jt=Qt=sn._x=sn._y=!1,Lo(g,S,R,L,B,Z,ae,!0,!1),g!=null&&(D(_l,lc,lu,!1),Ts(Ef,n,Er,br,ie,Y,null));let{left:he,top:ve,width:Re,height:Le}=wt;iu=he,ru=ve,su=Re,au=Le}function lu(g,S,R,L,B,Z,ae){wi=sn._x=sn._y=!1,Lo(g,S,R,L,B,Z,ae,!1,!0);let{left:he,top:ve,width:Re,height:Le}=wt,Ie=Re>0||Le>0,Ke=iu!=he||ru!=ve||su!=Re||au!=Le;if(Ie&&Ke&&ta(wt),sn.setScale&&Ie&&Ke){let dt=he,ft=Re,rt=ve,qe=Le;if(w.ori==1&&(dt=ve,ft=Le,rt=he,qe=Re),Jt&&Ci(C,ni(dt,C),ni(dt+ft,C)),Qt)for(let Oe in E){let Ct=E[Oe];Oe!=C&&Ct.from==null&&Ct.min!=St&&Ci(Oe,ni(rt+qe,Oe),ni(rt,Oe))}Io()}else ne.lock&&(ne._lock=!ne._lock,ji(S,!0,g!=null));g!=null&&(T(_l,lc),Ts(_l,n,At,Lt,ie,Y,null))}function rp(g,S,R,L,B,Z,ae){if(ne._lock)return;Kt(g);let he=wi;if(wi){let ve=!0,Re=!0,Le=10,Ie,Ke;w.ori==0?(Ie=Jt,Ke=Qt):(Ie=Qt,Ke=Jt),Ie&&Ke&&(ve=At<=Le||At>=ie-Le,Re=Lt<=Le||Lt>=Y-Le),Ie&&ve&&(At=At<Er?0:ie),Ke&&Re&&(Lt=Lt<br?0:Y),ji(null,!0,!0),wi=!1}At=-10,Lt=-10,de.fill(null),ji(null,!0,!0),he&&(wi=he)}function cu(g,S,R,L,B,Z,ae){ne._lock||(Kt(g),We(),Io(),g!=null&&Ts(Af,n,At,Lt,ie,Y,null))}function uu(){y.forEach(RS),Me(n.width,n.height,!0)}hr(to,is,uu);const wr={};wr.mousedown=ou,wr.mousemove=nu,wr.mouseup=lu,wr.dblclick=cu,wr.setSeries=(g,S,R,L)=>{let B=Bt.match[2];R=B(n,S,R),R!=-1&&ti(R,L,!0,!1)},re&&(D(Ef,_,ou),D(gl,_,nu),D(bf,_,g=>{Kt(g),bs(!1)}),D(Tf,_,rp),D(Af,_,cu),gc.add(n),n.syncRect=bs);const na=n.hooks=i.hooks||{};function en(g,S,R){Ao?Ss.push([g,S,R]):g in na&&na[g].forEach(L=>{L.call(null,n,S,R)})}(i.plugins||[]).forEach(g=>{for(let S in g.hooks)na[S]=(na[S]||[]).concat(g.hooks[S])});const fu=(g,S,R)=>R,Bt=kt({key:null,setSeries:!1,filters:{pub:Of,sub:Of},scales:[C,x[1]?x[1].scale:null],match:[Bf,Bf,fu],values:[null,null]},ne.sync);Bt.match.length==2&&Bt.match.push(fu),ne.sync=Bt;const hu=Bt.key,Uo=wd(hu);function Ts(g,S,R,L,B,Z,ae){Bt.filters.pub(g,S,R,L,B,Z,ae)&&Uo.pub(g,S,R,L,B,Z,ae)}Uo.sub(n);function sp(g,S,R,L,B,Z,ae){Bt.filters.sub(g,S,R,L,B,Z,ae)&&wr[g](null,S,R,L,B,Z,ae)}n.pub=sp;function ap(){Uo.unsub(n),gc.delete(n),Xe.clear(),fc(to,is,uu),c.remove(),J?.remove(),en("destroy")}n.destroy=ap;function No(){en("init",i,e),Ge(e||i.data,!1),G[C]?wo(C,G[C]):We(),oe=wt.show&&(wt.width>0||wt.height>0),_e=se=!0,Me(i.width,i.height)}return x.forEach(xs),y.forEach(Eo),t?t instanceof HTMLElement?(t.appendChild(c),No()):t(n,No):No(),n}cn.assign=kt;cn.fmtNum=Oc;cn.rangeNum=no;cn.rangeLog=mo;cn.rangeAsinh=Nc;cn.orient=_r;cn.pxRatio=pt;cn.join=MM;cn.fmtDate=zc,cn.tzDate=LM;cn.sync=wd;{cn.addGap=dS,cn.clipGaps=vo;let i=cn.paths={points:Id};i.linear=Nd,i.stepped=gS,i.bars=_S,i.spline=xS}function PS(i,e,t,n,r){let s=e,a=t,o=n,l=s.points[0]?.jd??0,c=l;const f=ah(s,a,o),u={width:i.clientWidth||480,height:i.clientHeight||240,title:"",cursor:{drag:{x:!1,y:!1},sync:{key:"lc-cursor"}},legend:{show:!0,live:!0},axes:[{label:"time (hours from start of observing run)",labelSize:18,stroke:"#c9d0db",grid:{stroke:"#22272e",width:1},ticks:{stroke:"#22272e"}},{label:"reduced intensity (arb. units)",labelSize:22,size:50,stroke:"#c9d0db",grid:{stroke:"#22272e",width:1},ticks:{stroke:"#22272e"}}],series:[{label:"t (h)"},{label:"observed",stroke:"#7cc7ff",fill:"#7cc7ff",points:{show:!0,size:6},paths:()=>null},{label:"predicted × k",stroke:"#ffc14f",width:2,points:{show:!1}}],scales:{x:{time:!1},y:{auto:!0}},hooks:{ready:[m=>{const _=m.root.querySelector(".u-over");if(!_)return;const v=document.createElement("div");v.className="lc-jd-marker",v.style.position="absolute",v.style.top="0",v.style.bottom="0",v.style.width="2px",v.style.background="#ff6b6b",v.style.pointerEvents="none",v.style.zIndex="5",v.setAttribute("aria-hidden","true"),_.appendChild(v),m._jdMarker=v,Na(m,l,c)}],setSize:[m=>Na(m,l,c)]}},h=new cn(u,f,i);return h.root.querySelector(".u-over").addEventListener("click",m=>{const _=m.currentTarget.getBoundingClientRect(),v=m.clientX-_.left,p=h.posToVal(v,"x"),d=c+p/24;r.onScrub(d)}),{update(m,_,v){s=m,a=_,o=v,c=s.points[0]?.jd??0,l=c,h.setData(ah(s,a,o)),Na(h,l,c)},setJd(m){l=m,Na(h,l,c)},resize(m,_){h.setSize({width:m,height:_})},dispose(){h.destroy()}}}function ah(i,e,t){const n=i.points[0]?.jd??0,r=new Array(i.points.length),s=new Array(i.points.length),a=new Array(i.points.length);for(let o=0;o<i.points.length;o++){const l=i.points[o];r[o]=(l.jd-n)*24,s[o]=l.intensity,a[o]=e[o]*t}return[r,s,a]}function Na(i,e,t){const n=i._jdMarker;if(!n)return;const r=(e-t)*24,s=i.valToPos(r,"x");Number.isFinite(s)?(n.style.left=`${s-1}px`,n.style.display="block"):n.style.display="none"}function qc(i,e,t,n){const r=Jh(e,n.jd),s=Rx(r),a=eo(xf(s,n.sun)),o=eo(xf(s,n.earth)),{normals:l,areas:c}=i,f=t.lambertWeight,u=c.length;let h=0;for(let m=0;m<u;m++){const _=l[m*3],v=l[m*3+1],p=l[m*3+2],d=_*a.x+v*a.y+p*a.z;if(d<=0)continue;const x=_*o.x+v*o.y+p*o.z;if(x<=0)continue;const y=x+d;if(y<=0)continue;const E=x*d*(1/y+f);h+=c[m]*E}return h}function Jr(i,e,t,n){const r=new Float64Array(n.points.length);for(let s=0;s<n.points.length;s++)r[s]=qc(i,e,t,n.points[s]);return r}function Qr(i,e){let t=0,n=0;const r=Math.min(i.length,e.length);for(let s=0;s<r;s++){const a=i[s],o=e[s].intensity;t+=a*o,n+=a*a}return n>0?t/n:1}function vc(i,e){const t=Math.min(i.length,e.length);if(t===0)return 0;let n=0;for(let r=0;r<t;r++){const s=i[r]-e[r].intensity;n+=s*s}return Math.sqrt(n/t)}function LS(i,e,t,n,r={}){const s=r.coarseLambdaStep??15,a=r.coarseBetaStep??15,o=r.refineStep??3,l=r.refineRadius??15,c=r.maxObsPerCurve??80,f=n.map(x=>DS(x,c));if(f.length===0||f[0].points.length===0)return{poleLambdaDeg:e.poleLambdaDeg,poleBetaDeg:e.poleBetaDeg,jd0:e.jd0,rms:1/0};const u=e.periodHours/24,h=f[0].points[0].jd,m=f.map(x=>({tCenter:x.points[Math.floor(x.points.length/2)].jd,mean:IS(x)})),_=64,v=f.map(()=>new Float64Array(_)),p=(x,y)=>{const E={...e,poleLambdaDeg:x,poleBetaDeg:y};for(let P=0;P<f.length;P++){const U=f[P],b=m[P],M=U.points[Math.floor(U.points.length/2)],w=v[P];for(let O=0;O<_;O++){const N=b.tCenter+O/_*u;w[O]=qc(i,{...E,jd0:b.tCenter},t,{jd:N,sun:M.sun,earth:M.earth})}}let F=1/0,C=0;for(let P=0;P<_;P++){const U=P/_;let b=0,M=0,w=!1;for(let N=0;N<f.length;N++){const H=f[N],G=m[N];if(G.mean<=0)continue;const X=v[N];let $=0,ee=0;for(let xe=0;xe<H.points.length;xe++){const ne=H.points[xe];let q=((ne.jd-h)/u-U)%1;q<0&&(q+=1);const re=oh(X,q);$+=re*ne.intensity,ee+=re*re}if(ee<=0)continue;const fe=$/ee;let le=0;for(let xe=0;xe<H.points.length;xe++){const ne=H.points[xe];let q=((ne.jd-h)/u-U)%1;q<0&&(q+=1);const z=oh(X,q)*fe-ne.intensity;le+=z*z}const de=H.points.length*G.mean;b+=de,M+=de*(le/H.points.length)/(G.mean*G.mean),w=!0}if(!w||b<=0)continue;const O=Math.sqrt(M/b);O<F&&(F=O,C=U)}return{rms:F,jd0:h+C*u}};let d={lambda:e.poleLambdaDeg,beta:e.poleBetaDeg,jd0:e.jd0,rms:1/0};for(let x=0;x<360;x+=s)for(let y=-75;y<=75;y+=a){const E=p(x,y);E.rms<d.rms&&(d={lambda:x,beta:y,jd0:E.jd0,rms:E.rms})}for(let x=-l;x<=l;x+=o)for(let y=-l;y<=l;y+=o){const E=US(d.lambda+x),F=Math.max(-89,Math.min(89,d.beta+y)),C=p(E,F);C.rms<d.rms&&(d={lambda:E,beta:F,jd0:C.jd0,rms:C.rms})}return{poleLambdaDeg:d.lambda,poleBetaDeg:d.beta,jd0:d.jd0,rms:d.rms}}function DS(i,e){if(i.points.length<=e)return i;const t=i.points.length/e,n=[];for(let r=0;r<e;r++)n.push(i.points[Math.floor(r*t)]);return{...i,points:n}}function oh(i,e){const t=i.length,n=e*t,r=Math.floor(n)%t,s=(r+1)%t,a=n-Math.floor(n);return i[r]*(1-a)+i[s]*a}function IS(i){if(i.points.length===0)return 1;let e=0;for(let t=0;t<i.points.length;t++)e+=i.points[t].intensity;return e/i.points.length}function US(i){let e=i%360;return e<0&&(e+=360),e}function NS(i,e,t,n,r={}){const s=r.coarseSamples??96,a=e.periodHours/24;let o=0,l=1/0;const c=P=>{const U={...e,jd0:e.jd0-P},b=Jr(i,U,t,n),M=Qr(b,n.points),w=new Float64Array(b.length);for(let O=0;O<b.length;O++)w[O]=b[O]*M;return vc(w,n.points)};for(let P=0;P<s;P++){const U=P/s*a,b=c(U);b<l&&(l=b,o=U)}const f=a/s;let u=o-f,h=o+f;const m=(Math.sqrt(5)-1)/2;let _=h-m*(h-u),v=u+m*(h-u),p=c(_),d=c(v);for(let P=0;P<32&&h-u>1e-9;P++)p<d?(h=v,v=_,d=p,_=h-m*(h-u),p=c(_)):(u=_,_=v,p=d,v=u+m*(h-u),d=c(v));const x=(u+h)/2%a,y={...e,jd0:e.jd0-x},E=Jr(i,y,t,n),F=Qr(E,n.points),C=new Float64Array(E.length);for(let P=0;P<E.length;P++)C[P]=E[P]*F;return{jdOffset:x,scale:F,rms:vc(C,n.points)}}const FS=/\s+/;function rs(i){return i.trim().split(FS)}function zd(i){return i.replace(/\r\n?/g,`
`).split(`
`).filter(e=>e.trim().length>0)}function OS(i){const e=zd(i);if(e.length===0)throw new Error("Shape file is empty.");const t=rs(e[0]);if(t.length<2)throw new Error(`Shape header expected "nVerts nFaces", got: "${e[0]}"`);const n=Number(t[0]),r=Number(t[1]);if(!Number.isInteger(n)||!Number.isInteger(r)||n<=0||r<=0)throw new Error(`Shape header has invalid counts: nVerts=${n} nFaces=${r}`);if(e.length<1+n+r)throw new Error(`Shape file truncated: expected ${1+n+r} non-blank lines, got ${e.length}.`);const s=new Float32Array(n*3);for(let o=0;o<n;o++){const l=rs(e[1+o]),c=Number(l[0]),f=Number(l[1]),u=Number(l[2]);if(!Number.isFinite(c)||!Number.isFinite(f)||!Number.isFinite(u))throw new Error(`Vertex ${o+1} has non-finite coordinate.`);s[o*3]=c,s[o*3+1]=f,s[o*3+2]=u}const a=new Uint32Array(r*3);for(let o=0;o<r;o++){const l=rs(e[1+n+o]),c=Number(l[0]),f=Number(l[1]),u=Number(l[2]);if(!Number.isInteger(c)||!Number.isInteger(f)||!Number.isInteger(u))throw new Error(`Face ${o+1} has non-integer index.`);if(c<1||f<1||u<1||c>n||f>n||u>n)throw new Error(`Face ${o+1} has out-of-range index (got ${c},${f},${u}; nVerts=${n}).`);a[o*3]=c-1,a[o*3+1]=f-1,a[o*3+2]=u-1}return{vertices:s,faces:a}}function BS(i){const e=zd(i);if(e.length===0)throw new Error("Light-curve file is empty.");const t=Number(rs(e[0])[0]);if(!Number.isInteger(t)||t<=0)throw new Error(`Bad light-curve count header: "${e[0]}"`);const n=[];let r=1;for(let s=1;s<=t;s++){if(r>=e.length)throw new Error(`Light-curve file truncated before curve ${s} header.`);const a=rs(e[r++]),o=Number(a[0]),l=Number(a[1]);if(!Number.isInteger(o)||o<=0||l!==0&&l!==1)throw new Error(`Bad LC #${s} header: "${e[r-1]}"`);if(r+o>e.length)throw new Error(`Light-curve #${s} truncated: needs ${o} rows.`);const c=[];for(let f=0;f<o;f++){const u=rs(e[r++]);if(u.length<8)throw new Error(`LC #${s} row ${f+1} has fewer than 8 columns.`);const h=[Number(u[0]),Number(u[1]),Number(u[2]),Number(u[3]),Number(u[4]),Number(u[5]),Number(u[6]),Number(u[7])];for(let m=0;m<8;m++)if(!Number.isFinite(h[m]))throw new Error(`LC #${s} row ${f+1} column ${m+1}: non-finite value "${u[m]}". Stray non-numeric tokens (e.g. comment markers without leading "#") silently produce NaN intensities and corrupt downstream fits.`);c.push({jd:h[0],intensity:h[1],sun:{x:h[2],y:h[3],z:h[4]},earth:{x:h[5],y:h[6],z:h[7]}})}n.push({id:s,calibrated:l===1,points:c})}return n}function zS(i,e,t={}){const n=i.__damitViewerDispose;typeof n=="function"&&n(),kS(),i.classList.add("damit-viewer-host"),i.textContent="";const r=document.createElement("div");r.className="damit-viewer-root",i.appendChild(r);const s=document.createElement("div");s.className="dv-header";const a=document.createElement("div");a.className="dv-title",a.textContent=e.name;const o=document.createElement("div");o.className="dv-meta",o.appendChild(document.createTextNode(`P = ${e.spin.periodHours.toFixed(5)} h · `));const l=document.createElement("span");if(e.publishedSpin&&(Math.abs(e.publishedSpin.poleLambdaDeg-e.spin.poleLambdaDeg)>.5||Math.abs(e.publishedSpin.poleBetaDeg-e.spin.poleBetaDeg)>.5)){const ne=e.publishedSpin;l.textContent=`pole (λ, β): auto-fit (${e.spin.poleLambdaDeg.toFixed(0)}°, ${e.spin.poleBetaDeg.toFixed(0)}°) ← published (${ne.poleLambdaDeg.toFixed(0)}°, ${ne.poleBetaDeg.toFixed(0)}°)`,l.title="The shape file does not advertise the pole it was inverted with, so the auto-fit pole shown is the one consistent with the bundled observations. The published pole is from the original paper for the asteroid."}else l.textContent=`pole (λ, β) = (${e.spin.poleLambdaDeg.toFixed(1)}°, ${e.spin.poleBetaDeg.toFixed(1)}°)`;o.appendChild(l),e.fitRms!==void 0&&o.appendChild(document.createTextNode(` · fit RMS ${(e.fitRms*100).toFixed(2)}%`)),e.damitId!==void 0&&o.appendChild(document.createTextNode(` · DAMIT #${e.damitId}`)),s.appendChild(a),s.appendChild(o),r.appendChild(s);const c=document.createElement("div");c.className="dv-split",r.appendChild(c);const f=document.createElement("div");f.className="dv-scene-col",c.appendChild(f);const u=document.createElement("div");u.className="dv-scene",f.appendChild(u);const h=document.createElement("div");h.className="dv-plot-col",c.appendChild(h);const m=document.createElement("div");m.className="dv-plot",h.appendChild(m);const _=ho(e.shape),v=ch(t.initialLightCurveIndex??0,e.lightCurves.length);if(e.lightCurves.length===0)throw new Error("AsteroidModel has no light curves.");const p=t.fitPhasePerLightCurve??!0;let d=v,x=e.lightCurves[d],y=hh(e.spin,p,_,e.scattering,x),E=Jr(_,y,e.scattering,x),F=Qr(E,x.points),C=Fa(E,F,x),P=x.points[0]?.jd??y.jd0;const U=document.createElement("div");U.className="dv-footer",h.appendChild(U);const b=()=>{const ne=x.points,q=ne.length>0?ne.reduce((J,me)=>J+me.intensity,0)/ne.length:1,re=q>0?C/q*100:0;U.textContent="";const z=document.createElement("span");if(z.textContent=`LC #${x.id} · ${x.points.length} obs · ${x.calibrated?"calibrated":"relative"} · RMS ${re.toFixed(2)}%`,U.appendChild(z),e.citation){const J=document.createElement("span");J.className="dv-cite",J.textContent=e.citation,U.appendChild(J)}};b();const M={...e,spin:y},w=Ix(u,M);w.setJd(P),w.setSunEarth(x.points[0].sun,x.points[0].earth);const O=PS(m,x,E,F,{onScrub:ne=>ee(ne)});let N=!1,H=600,G=0,X=0;const $=ne=>{if(!N)return;G===0&&(G=ne);const q=(ne-G)/1e3;G=ne;const re=P+q*H/86400,z=x.points[0].jd,J=x.points[x.points.length-1].jd,me=J>z?z+((re-z)%(J-z)+(J-z))%(J-z):re;ee(me),X=requestAnimationFrame($)};function ee(ne){P=ne;const{sun:q,earth:re}=VS(x,ne);w.setJd(ne),w.setSunEarth(q,re),O.setJd(ne)}function fe(ne){d=ch(ne,e.lightCurves.length),x=e.lightCurves[d],y=hh(e.spin,p,_,e.scattering,x),E=Jr(_,y,e.scattering,x),F=Qr(E,x.points),C=Fa(E,F,x),P=x.points[0].jd,O.update(x,E,F),w.setSpin(y),w.setJd(P),w.setSunEarth(x.points[0].sun,x.points[0].earth),le&&(le.value=String(d)),b()}let le;if(t.showControls!==!1){const ne=document.createElement("div");ne.className="dv-controls",h.appendChild(ne),le=document.createElement("select"),le.className="dv-select",le.setAttribute("aria-label","Choose which light curve to display");for(let et=0;et<e.lightCurves.length;et++){const Ue=e.lightCurves[et],_t=Ue.points[0]?.jd??0,He=document.createElement("option");He.value=String(et),He.textContent=`LC #${Ue.id} — JD ${_t.toFixed(2)} (${Ue.points.length} obs)`,le.appendChild(He)}le.value=String(d),le.addEventListener("change",()=>fe(Number(le.value))),ne.appendChild(uh("curve",le));const q=document.createElement("button");q.className="dv-btn",q.type="button",q.textContent="▶ play",q.setAttribute("aria-label","Play the asteroid rotation animation"),q.setAttribute("aria-pressed","false");const re=typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(prefers-reduced-motion: reduce)"):null,z=()=>{re?.matches?(q.disabled=!0,q.title="Animation disabled — prefers-reduced-motion is set in your OS or browser.",N&&(N=!1,cancelAnimationFrame(X),q.textContent="▶ play",q.setAttribute("aria-pressed","false"))):(q.disabled=!1,q.title="")};z(),re?.addEventListener?.("change",z),q.addEventListener("click",()=>{N?(N=!1,cancelAnimationFrame(X),q.textContent="▶ play",q.setAttribute("aria-pressed","false"),q.setAttribute("aria-label","Play the asteroid rotation animation")):(N=!0,G=0,X=requestAnimationFrame($),q.textContent="⏸ pause",q.setAttribute("aria-pressed","true"),q.setAttribute("aria-label","Pause the asteroid rotation animation"))}),ne.appendChild(q);const J=document.createElement("label");J.className="dv-range-label",J.textContent="speed (×)";const me=document.createElement("input");me.type="range",me.min="60",me.max="3600",me.step="60",me.value=String(H),me.setAttribute("aria-label","Animation speed multiplier, times real time"),me.setAttribute("aria-valuetext",`${H} times real time`),me.addEventListener("input",()=>{H=Number(me.value),me.setAttribute("aria-valuetext",`${H} times real time`)}),J.appendChild(me),ne.appendChild(J);const Te=document.createElement("select");Te.className="dv-select",Te.setAttribute("aria-label","3D camera mode");const Ce=document.createElement("option");Ce.value="free",Ce.textContent="free orbit";const je=document.createElement("option");je.value="earth",je.textContent="view from Earth",Te.appendChild(Ce),Te.appendChild(je),Te.value=t.initialViewMode??"free",Te.addEventListener("change",()=>{w.setViewMode(Te.value)}),ne.appendChild(uh("camera",Te));const I=document.createElement("label");I.className="dv-range-label";const Qe=document.createTextNode(`c = ${e.scattering.lambertWeight.toFixed(2)} `);I.appendChild(Qe);const ke=document.createElement("input");ke.type="range",ke.min="0",ke.max="0.5",ke.step="0.01",ke.value=String(e.scattering.lambertWeight),ke.setAttribute("aria-label","Lambert weighting coefficient c in the Lommel-Seeliger + Lambert scattering model"),ke.setAttribute("aria-valuetext",`c equals ${e.scattering.lambertWeight.toFixed(2)}`),ke.addEventListener("input",()=>{e.scattering.lambertWeight=Number(ke.value),Qe.nodeValue=`c = ${e.scattering.lambertWeight.toFixed(2)} `,ke.setAttribute("aria-valuetext",`c equals ${e.scattering.lambertWeight.toFixed(2)}`),E=Jr(_,y,e.scattering,x),F=Qr(E,x.points),C=Fa(E,F,x),O.update(x,E,F),b()}),I.appendChild(ke),ne.appendChild(I)}t.initialViewMode==="earth"&&w.setViewMode("earth");const de=new ResizeObserver(()=>{const ne=u.clientWidth,q=u.clientHeight;ne>0&&q>0&&w.resize(ne,q);const re=m.clientWidth,z=m.clientHeight;re>0&&z>0&&O.resize(re,z)});de.observe(u),de.observe(m);const xe={setLightCurveByIndex:ne=>fe(ne),setLightCurveById:ne=>{const q=e.lightCurves.findIndex(re=>re.id===ne);q>=0&&fe(q)},setJd:ee,play:ne=>{ne!==void 0&&(H=ne),N||(N=!0,G=0,X=requestAnimationFrame($))},pause:()=>{N=!1,cancelAnimationFrame(X)},setScatteringC:ne=>{e.scattering.lambertWeight=ne,E=Jr(_,y,e.scattering,x),F=Qr(E,x.points),C=Fa(E,F,x),O.update(x,E,F),b()},setViewMode:ne=>w.setViewMode(ne),getModel:()=>HS(e),dispose:()=>{N=!1,cancelAnimationFrame(X),de.disconnect(),O.dispose(),w.dispose(),delete i.__damitViewerDispose,i.classList.remove("damit-viewer-host"),i.textContent=""}};return i.__damitViewerDispose=xe.dispose,xe}let lh=!1;function kS(){if(lh||(lh=!0,typeof document>"u"))return;const i=document.createElement("style");i.setAttribute("data-damit-viewer",""),i.textContent=op+`
`+lp,document.head.firstChild?document.head.insertBefore(i,document.head.firstChild):document.head.appendChild(i)}function HS(i){Object.freeze(i);for(const e of Object.keys(i)){const t=i[e];t&&typeof t=="object"&&!ArrayBuffer.isView(t)&&!Array.isArray(t)&&!Object.isFrozen(t)&&Object.freeze(t)}return i}function ch(i,e){return e<=0?0:Math.max(0,Math.min(e-1,Math.floor(i)))}function uh(i,e){const t=document.createElement("label");return t.className="dv-labeled",t.appendChild(document.createTextNode(i)),t.appendChild(e),t}function VS(i,e){const t=i.points;if(t.length===0)return{sun:{x:0,y:0,z:0},earth:{x:0,y:0,z:0}};if(t.length===1||e<=t[0].jd){const l=t[0];return{sun:l.sun,earth:l.earth}}if(e>=t[t.length-1].jd){const l=t[t.length-1];return{sun:l.sun,earth:l.earth}}let n=0,r=t.length-1;for(;r-n>1;){const l=n+r>>1;t[l].jd<=e?n=l:r=l}const s=t[n],a=t[r],o=(e-s.jd)/(a.jd-s.jd);return{sun:fh(s.sun,a.sun,o),earth:fh(s.earth,a.earth,o)}}function fh(i,e,t){return{x:i.x+(e.x-i.x)*t,y:i.y+(e.y-i.y)*t,z:i.z+(e.z-i.z)*t}}function hh(i,e,t,n,r){if(!e)return i;const s=NS(t,i,n,r);return{...i,jd0:i.jd0-s.jdOffset}}function Fa(i,e,t){const n=new Float64Array(i.length);for(let r=0;r<i.length;r++)n[r]=i[r]*e;return vc(n,t.points)}const ro={lambertWeight:.1};async function GS(i){const[e,t]=await Promise.all([i.shapeUrl?dh(i.shapeUrl).then(OS):Promise.resolve(i.placeholderShape),dh(i.lcUrl)]);if(!e)throw new Error(`Catalog entry "${i.id}" has no shape (neither shapeUrl nor placeholderShape).`);const n=BS(t);let r=i.spin,s=i.citation,a,o;if(i.refitPoleOnLoad&&n.length>0){const l=ho(e),c=[...n].sort((u,h)=>h.points.length-u.points.length).slice(0,5),f=LS(l,i.spin,ro,c);a=i.spin,r={...i.spin,poleLambdaDeg:f.poleLambdaDeg,poleBetaDeg:f.poleBetaDeg,jd0:f.jd0},o=f.rms,s=`${i.citation} Pole auto-fit from LCs: (${f.poleLambdaDeg.toFixed(0)}°, ${f.poleBetaDeg.toFixed(0)}°), RMS ${(f.rms*100).toFixed(2)}% of mean.`}return{name:i.name,shape:e,spin:r,lightCurves:n,scattering:{...ro},citation:s,publishedSpin:a,fitRms:o}}async function dh(i){const e=await fetch(i);if(!e.ok)throw new Error(`Fetch failed (${e.status}) for ${i}`);return e.text()}const ph="/far-away/".replace(/\/$/,""),WS=[{id:"hermione",name:"(121) Hermione",shapeUrl:`${ph}/sample-data/hermione/shape_damit_155.txt`,lcUrl:`${ph}/sample-data/hermione/herm.lc`,spin:{poleLambdaDeg:293,poleBetaDeg:-34,periodHours:5.55128,jd0:24430325e-1},citation:"Shape: Hanuš et al., Asteroids-MDSM model 155 (CC BY 4.0). Light curves: matvii/ADAM Contours/herm.lc.",refitPoleOnLoad:!0}];function XS(){const i=jS(1,.45,.42);return Yc({name:"(demo) elongated brick",shape:i,spin:{poleLambdaDeg:78,poleBetaDeg:25,periodHours:7.5,jd0:2451545},apparitions:[{nObs:80,durationHours:6,sun:{x:-.95,y:-.3,z:.08},earth:{x:-1.78,y:-.34,z:.05},jdStart:24515451e-1,noiseFrac:.012},{nObs:65,durationHours:5.5,sun:{x:-.2,y:-.96,z:.06},earth:{x:-.45,y:-1.81,z:.03},jdStart:24518102e-1,noiseFrac:.018}],citation:"Synthetic demo — replace with a real DAMIT model."})}function qS(){return Yc({name:"(demo) near-spherical body",shape:kd(),spin:{poleLambdaDeg:0,poleBetaDeg:90,periodHours:6,jd0:2451545},apparitions:[{nObs:60,durationHours:5,sun:{x:-1,y:0,z:0},earth:{x:-1.5,y:-.4,z:0},jdStart:2451545,noiseFrac:.005}],citation:"Synthetic demo — sphere check, brightness should be nearly flat."})}function YS(){return Yc({name:"(demo) bumpy ellipsoid",shape:KS(),spin:{poleLambdaDeg:210,poleBetaDeg:-55,periodHours:11.27,jd0:2451545},apparitions:[{nObs:100,durationHours:8,sun:{x:.71,y:-.7,z:.12},earth:{x:1.34,y:-1.32,z:.1},jdStart:2452e3,noiseFrac:.02}],citation:"Synthetic demo — bumpy ellipsoid, two unequal maxima per rotation."})}function Yc(i){const e=ho(i.shape),t=$S(10604125),n=i.apparitions.map((r,s)=>{const a=[];for(let o=0;o<r.nObs;o++){const l=r.jdStart+o*r.durationHours/24/Math.max(1,r.nObs-1),c=qc(e,i.spin,ro,{jd:l,sun:r.sun,earth:r.earth}),f=(t()*2-1)*r.noiseFrac*c;a.push({jd:l,intensity:c+f,sun:r.sun,earth:r.earth})}return{id:s+1,calibrated:!1,points:a}});return{name:i.name,shape:i.shape,spin:i.spin,lightCurves:n,scattering:{...ro},citation:i.citation}}function $S(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function jS(i,e,t){const n=i/2,r=e/2,s=t/2,a=new Float32Array([-n,-r,-s,n,-r,-s,n,r,-s,-n,r,-s,-n,-r,s,n,-r,s,n,r,s,-n,r,s]),o=(c,f,u,h)=>[c,f,u,c,u,h],l=new Uint32Array([...o(0,3,2,1),...o(4,5,6,7),...o(0,1,5,4),...o(2,3,7,6),...o(1,2,6,5),...o(0,4,7,3)]);return{vertices:a,faces:l}}function kd(){const e=[],t=[],n=new Map,r=(a,o,l)=>{const c=Math.sqrt(a*a+o*o+l*l),f=a/c,u=o/c,h=l/c,m=`${f.toFixed(8)},${u.toFixed(8)},${h.toFixed(8)}`;let _=n.get(m);return _===void 0&&(_=e.length/3,e.push(f,u,h),n.set(m,_)),_},s=[(a,o)=>[1,2*o/14-1,2*a/14-1],(a,o)=>[-1,2*o/14-1,-(2*a/14-1)],(a,o)=>[2*o/14-1,1,-(2*a/14-1)],(a,o)=>[2*o/14-1,-1,2*a/14-1],(a,o)=>[-(2*o/14-1),2*a/14-1,1],(a,o)=>[2*o/14-1,2*a/14-1,-1]];for(const a of s)for(let o=0;o<14;o++)for(let l=0;l<14;l++){const c=r(...a(o,l)),f=r(...a(o+1,l)),u=r(...a(o+1,l+1)),h=r(...a(o,l+1));t.push(c,f,u,c,u,h)}return{vertices:new Float32Array(e),faces:new Uint32Array(t)}}function KS(){const i=kd(),e=new Float32Array(i.vertices);for(let t=0;t<e.length;t+=3){const n=e[t],r=e[t+1],s=e[t+2],a=1,o=.58,l=.42,c=.08*Math.exp(-12*((n-.6)**2+(r-0)**2+(s-0)**2)),f=.05*Math.exp(-18*((n+.5)**2+(r+.2)**2+(s-.1)**2)),u=1+c+f;e[t]=a*n*u,e[t+1]=o*r*u,e[t+2]=l*s*u}return{vertices:e,faces:i.faces}}const ZS=WS.map(i=>({id:i.id,label:i.name,load:()=>GS(i),hint:i.id==="hermione"?"real shape + 41 real LCs; pole auto-fit from photometry":"real DAMIT data",initialLightCurveIndex:i.id==="hermione"?9:0,initialViewMode:i.id==="hermione"?"earth":"free"})),yl=[{id:"synth-potato",label:"(demo) bumpy ellipsoid",hint:"synthetic — realistic LC, scientifically-clean fit",load:async()=>YS()},{id:"synth-brick",label:"(demo) elongated brick",hint:"synthetic — classic two-peak LC, RMS at noise floor",load:async()=>XS()},{id:"synth-sphere",label:"(demo) near-sphere",hint:"synthetic — flat curve, rotation-invariant sanity check",load:async()=>qS()}],so=[ZS.find(i=>i.id==="hermione"),yl[0],yl[1],yl[2]],JS=document.getElementById("app");JS.innerHTML=`
  <header class="demo-header">
    <h1>DAMIT-coupled asteroid viewer</h1>
    <p class="demo-tagline">
      Side-by-side 3D shape model and photometric light curve. The shape rotates
      at its sidereal period; the predicted light curve from the shape's
      illumination geometry is overlaid on the observations that produced it.
      Drag the 3D view to orbit; click on the curve to scrub time; press play.
    </p>
    <div class="demo-controls">
      <label>asteroid
        <select id="picker"></select>
      </label>
      <span id="status" class="demo-status"></span>
    </div>
  </header>
  <div id="host" class="demo-host"></div>
  <footer class="demo-footer">
    <span>
      Data sources: shape from
      <a href="https://github.com/mkretlow/Asteroids-MDSM" target="_blank" rel="noopener">Asteroids-MDSM</a>
      (CC BY 4.0); LCs from
      <a href="https://github.com/matvii/ADAM" target="_blank" rel="noopener">matvii/ADAM</a>
      and
      <a href="https://github.com/mkretlow/DAMIT-convex" target="_blank" rel="noopener">DAMIT-convex</a>.
      DAMIT-format light-curve and shape spec from
      <a href="https://astro.troja.mff.cuni.cz/projects/damit/pages/documentation" target="_blank" rel="noopener">DAMIT</a>.
    </span>
  </footer>
`;const ao=document.getElementById("picker");for(const i of so){const e=document.createElement("option");e.value=i.id,e.textContent=`${i.label} — ${i.hint}`,ao.appendChild(e)}const El=document.getElementById("status"),bl=document.getElementById("host");let Tl,Al=0;async function Hd(i){const e=so.find(n=>n.id===i);if(!e)return;const t=++Al;El.textContent="loading…";try{const n=await e.load();if(t!==Al)return;Tl&&Tl.dispose(),Tl=zS(bl,n,{initialLightCurveIndex:e.initialLightCurveIndex??0,initialViewMode:e.initialViewMode??"free"}),El.textContent=`${n.lightCurves.length} light curves, ${n.shape.faces.length/3} facets`}catch(n){if(t!==Al)return;const r=n.message;El.textContent=`error: ${r}`,bl.textContent="";const s=document.createElement("div");s.className="demo-error",s.textContent=r,bl.appendChild(s)}}ao.addEventListener("change",()=>Hd(ao.value));const Vd=so.find(i=>i.id==="hermione")?.id??so[0].id;ao.value=Vd;Hd(Vd);
//# sourceMappingURL=index-B9M028Vu.js.map
