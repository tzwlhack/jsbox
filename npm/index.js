!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.JSBox=n():e.JSBox=n()}(window,(function(){return function(e){var n={};function r(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,r),t.l=!0,t.exports}return r.m=e,r.c=n,r.d=function(e,n,o){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)r.d(o,t,function(n){return e[n]}.bind(null,t));return o},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=1)}([function(e,n,r){var o,t=function(){var e=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",o={};function t(e,n){if(!o[e]){o[e]={};for(var r=0;r<e.length;r++)o[e][e.charAt(r)]=r}return o[e][n]}var c={compressToBase64:function(e){if(null==e)return"";var r=c._compress(e,6,(function(e){return n.charAt(e)}));switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:c._decompress(e.length,32,(function(r){return t(n,e.charAt(r))}))},compressToUTF16:function(n){return null==n?"":c._compress(n,15,(function(n){return e(n+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:c._decompress(e.length,16384,(function(n){return e.charCodeAt(n)-32}))},compressToUint8Array:function(e){for(var n=c.compress(e),r=new Uint8Array(2*n.length),o=0,t=n.length;o<t;o++){var i=n.charCodeAt(o);r[2*o]=i>>>8,r[2*o+1]=i%256}return r},decompressFromUint8Array:function(n){if(null==n)return c.decompress(n);for(var r=new Array(n.length/2),o=0,t=r.length;o<t;o++)r[o]=256*n[2*o]+n[2*o+1];var i=[];return r.forEach((function(n){i.push(e(n))})),c.decompress(i.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":c._compress(e,6,(function(e){return r.charAt(e)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),c._decompress(e.length,32,(function(n){return t(r,e.charAt(n))})))},compress:function(n){return c._compress(n,16,(function(n){return e(n)}))},_compress:function(e,n,r){if(null==e)return"";var o,t,c,i={},u={},a="",s="",l="",p=2,f=3,d=2,h=[],m=0,v=0;for(c=0;c<e.length;c+=1)if(a=e.charAt(c),Object.prototype.hasOwnProperty.call(i,a)||(i[a]=f++,u[a]=!0),s=l+a,Object.prototype.hasOwnProperty.call(i,s))l=s;else{if(Object.prototype.hasOwnProperty.call(u,l)){if(l.charCodeAt(0)<256){for(o=0;o<d;o++)m<<=1,v==n-1?(v=0,h.push(r(m)),m=0):v++;for(t=l.charCodeAt(0),o=0;o<8;o++)m=m<<1|1&t,v==n-1?(v=0,h.push(r(m)),m=0):v++,t>>=1}else{for(t=1,o=0;o<d;o++)m=m<<1|t,v==n-1?(v=0,h.push(r(m)),m=0):v++,t=0;for(t=l.charCodeAt(0),o=0;o<16;o++)m=m<<1|1&t,v==n-1?(v=0,h.push(r(m)),m=0):v++,t>>=1}0==--p&&(p=Math.pow(2,d),d++),delete u[l]}else for(t=i[l],o=0;o<d;o++)m=m<<1|1&t,v==n-1?(v=0,h.push(r(m)),m=0):v++,t>>=1;0==--p&&(p=Math.pow(2,d),d++),i[s]=f++,l=String(a)}if(""!==l){if(Object.prototype.hasOwnProperty.call(u,l)){if(l.charCodeAt(0)<256){for(o=0;o<d;o++)m<<=1,v==n-1?(v=0,h.push(r(m)),m=0):v++;for(t=l.charCodeAt(0),o=0;o<8;o++)m=m<<1|1&t,v==n-1?(v=0,h.push(r(m)),m=0):v++,t>>=1}else{for(t=1,o=0;o<d;o++)m=m<<1|t,v==n-1?(v=0,h.push(r(m)),m=0):v++,t=0;for(t=l.charCodeAt(0),o=0;o<16;o++)m=m<<1|1&t,v==n-1?(v=0,h.push(r(m)),m=0):v++,t>>=1}0==--p&&(p=Math.pow(2,d),d++),delete u[l]}else for(t=i[l],o=0;o<d;o++)m=m<<1|1&t,v==n-1?(v=0,h.push(r(m)),m=0):v++,t>>=1;0==--p&&(p=Math.pow(2,d),d++)}for(t=2,o=0;o<d;o++)m=m<<1|1&t,v==n-1?(v=0,h.push(r(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==n-1){h.push(r(m));break}v++}return h.join("")},decompress:function(e){return null==e?"":""==e?null:c._decompress(e.length,32768,(function(n){return e.charCodeAt(n)}))},_decompress:function(n,r,o){var t,c,i,u,a,s,l,p=[],f=4,d=4,h=3,m="",v=[],y={val:o(0),position:r,index:1};for(t=0;t<3;t+=1)p[t]=t;for(i=0,a=Math.pow(2,2),s=1;s!=a;)u=y.val&y.position,y.position>>=1,0==y.position&&(y.position=r,y.val=o(y.index++)),i|=(u>0?1:0)*s,s<<=1;switch(i){case 0:for(i=0,a=Math.pow(2,8),s=1;s!=a;)u=y.val&y.position,y.position>>=1,0==y.position&&(y.position=r,y.val=o(y.index++)),i|=(u>0?1:0)*s,s<<=1;l=e(i);break;case 1:for(i=0,a=Math.pow(2,16),s=1;s!=a;)u=y.val&y.position,y.position>>=1,0==y.position&&(y.position=r,y.val=o(y.index++)),i|=(u>0?1:0)*s,s<<=1;l=e(i);break;case 2:return""}for(p[3]=l,c=l,v.push(l);;){if(y.index>n)return"";for(i=0,a=Math.pow(2,h),s=1;s!=a;)u=y.val&y.position,y.position>>=1,0==y.position&&(y.position=r,y.val=o(y.index++)),i|=(u>0?1:0)*s,s<<=1;switch(l=i){case 0:for(i=0,a=Math.pow(2,8),s=1;s!=a;)u=y.val&y.position,y.position>>=1,0==y.position&&(y.position=r,y.val=o(y.index++)),i|=(u>0?1:0)*s,s<<=1;p[d++]=e(i),l=d-1,f--;break;case 1:for(i=0,a=Math.pow(2,16),s=1;s!=a;)u=y.val&y.position,y.position>>=1,0==y.position&&(y.position=r,y.val=o(y.index++)),i|=(u>0?1:0)*s,s<<=1;p[d++]=e(i),l=d-1,f--;break;case 2:return v.join("")}if(0==f&&(f=Math.pow(2,h),h++),p[l])m=p[l];else{if(l!==d)return null;m=c+c.charAt(0)}v.push(m),p[d++]=c+m.charAt(0),c=m,0==--f&&(f=Math.pow(2,h),h++)}}};return c}();void 0===(o=function(){return t}.call(n,r,n,e))||(e.exports=o)},function(e,n,r){"use strict";r.r(n);const o={THEME:"theme",CODE:"code",LIB:"lib",CONFIG:"config",ID:"id",ENV:"env",RUN:"run",REMIND:"remind",MES:"mes",LANG:"lang"};var t=r(0);let c={PARAM:o,THEME:{DARK:"dark",LIGHT:"light"},LIB:{jquery:"jquery",vue:"vue",react:"react",reactdom:"react-dom",angularjs:"angularjs",vuex:"vuex",redux:"redux",loadsh:"loadsh",virtualdom:"virtual-dom",nodehtmlparser:"node-html-parser",jest:"jest",mocha:"mocha",moment:"moment",dayjs:"dayjs",underscore:"underscore",axios:"axios",qrcode:"qrcode",backbone:"backbone",jsxlsx:"js-xlsx",recast:"recast",cnchar:"cnchar",cncharpoly:"cnchar-poly",cncharorder:"cnchar-order",cnchartrad:"cnchar-trad",cnchardraw:"cnchar-draw",cncharall:"cnchar-all",easyicon:"easy-icon",elementui:"element-ui",elementuistyle:"element-ui-style"},ENV:{elementui:"element-ui",cnchar:"cnchar",vue:"vue",react:"react",angularjs:"angularjs"},open:function(e){let n=a(e||i),r="https://theajack.gitee.io/jsbox?";n[o.CONFIG]?(r=u(r,o.CONFIG,n),n[o.ID]&&(r=u(r,o.ID,n))):n[o.ENV]?r=u(r,o.ENV,n):n[o.LIB]&&(r=u(r,o.LIB,n));n[o.CONFIG]&&n[o.ID]||n[o.ENV]||(n[o.CODE]&&(r=u(r,o.CODE,n)),n[o.LANG]&&(r=u(r,o.LANG,n)));[o.THEME,o.RUN,o.REMIND,o.MES].forEach(e=>{null!==n[e]&&(r=u(r,e,n))}),r=r.substr(0,r.length-1),window.open(r)},config:function(e){return i=a(e,!1),i}},i={theme:"normal",code:'console.log("Hello JSBox!")',lib:null,config:null,id:null,env:null,run:null,remind:null,mes:null,lang:null,codeSrc:"",github:"",githubConfig:""};function u(e,n,r){return`${e}${n}=${r[n]}&`}function a({theme:e=i[o.THEME],code:n=i[o.CODE],lib:r=i[o.LIB],config:t=i[o.CONFIG],id:c=i[o.ID],env:u=i[o.ENV],run:a=i[o.RUN],remind:l=i[o.REMIND],mes:p=i[o.MES]},f=!0){n&&(n=s(n,f,!0));let d={code:n,theme:e,run:a,remind:l,mes:p};return t?(d[o.CONFIG]=s(t,f),c&&(d[o.ID]=s(c,f))):u?d[o.ENV]=s(u,f):r&&(d[o.LIB]=s(r,f)),d}function s(e,n,r=!1){return n?r?Object(t.compressToEncodedURIComponent)(e):window.encodeURIComponent(e):e}n.default=c}]).default}));