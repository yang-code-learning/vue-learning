(()=>{var t={682:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(81),o=n.n(r),s=n(645),i=n.n(s)()(o());i.push([t.id,".title {\n  background-color: #3f3f3f;\n  text-decoration: underline;\n}\n",""]);const a=i},291:(t,e,n)=>{var r=n(81),o=n(645),s=n(667),i=n(533),a=o(r),c=s(i);a.push([t.id,".image-bg {\r\n  background-image: url("+c+");\r\n  background-size: contain;\r\n  width: 200px;\r\n  height: 200px;\r\n}",""]),t.exports=a},539:(t,e,n)=>{var r=n(81),o=n(645)(r);o.push([t.id,".title {\r\n  color: #00adb5;\r\n  font-size: 30px;\r\n  font-weight: 100;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none; \r\n}",""]),t.exports=o},895:(t,e,n)=>{var r=n(81),o=n(645),s=n(667),i=n(967),a=n(923),c=n(702),l=n(160),u=o(r),p=s(i),f=s(i,{hash:"#iefix"}),d=s(a),m=s(c),h=s(l);u.push([t.id,'@font-face {font-family: "iconfont";\n  src: url('+p+"); /* IE9 */\n  src: url("+f+") format('embedded-opentype'), /* IE6-IE8 */\n  url("+d+") format('woff2'),\n  url("+m+") format('woff'),\n  url("+h+') format(\'truetype\')\n}\n\n.iconfont {\n  font-family: "iconfont" !important;\n}\n\n.iconfont {\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-ashbin:before {\n  font-size: 30px;\n  content: "\\e665";\n}\n\n.icon-caps-lock:before {\n  content: "\\e667";\n}\n\n',""]),t.exports=u},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,s){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);r&&i[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},667:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var s={},i=[],a=0;a<t.length;a++){var c=t[a],l=r.base?c[0]+r.base:c[0],u=s[l]||0,p="".concat(l," ").concat(u);s[l]=u+1;var f=n(p),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(d);else{var m=o(d,r);r.byIndex=a,e.splice(a,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var s=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<s.length;i++){var a=n(s[i]);e[a].references--}for(var c=r(t,o),l=0;l<s.length;l++){var u=n(s[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}s=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},466:t=>{t.exports={priceFormat:function(){return"¥99.98"}}},967:(t,e,n)=>{"use strict";t.exports=n.p+"font/iconfont_54752c.eot"},160:(t,e,n)=>{"use strict";t.exports=n.p+"font/iconfont_c1191d.ttf"},923:(t,e,n)=>{"use strict";t.exports=n.p+"font/iconfont_c79391.woff2"},702:(t,e,n)=>{"use strict";t.exports=n.p+"font/iconfont_9a10d9.woff"},533:(t,e,n)=>{"use strict";t.exports=n.p+"img/nhlt_06dedf.jpg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={id:r,exports:{}};return t[r](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),r=n(795),o=n.n(r),s=n(569),i=n.n(s),a=n(565),c=n.n(a),l=n(216),u=n.n(l),p=n(589),f=n.n(p),d=n(539),m=n.n(d),h={};h.styleTagTransform=f(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),e()(m(),h),m()&&m().locals&&m().locals;var v=n(682),g={};g.styleTagTransform=f(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=u(),e()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;var b=n(291),y=n.n(b),x={};x.styleTagTransform=f(),x.setAttributes=c(),x.insert=i().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=u(),e()(y(),x),y()&&y().locals&&y().locals;var w=n(895),T=n.n(w),E={};E.styleTagTransform=f(),E.setAttributes=c(),E.insert=i().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=u(),e()(T(),E),T()&&T().locals&&T().locals;const S=n.p+"img/zznh_7fbcbf.png",A=document.createElement("div");A.className="title",A.innerHTML="Hello World";const C=document.createElement("div");C.className="image-bg";const I=document.createElement("img");I.src=S;const M=document.createElement("i");M.className="iconfont icon-icon",document.body.appendChild(A),document.body.appendChild(C),document.body.appendChild(I),document.body.appendChild(M);const{priceFormat:_}=n(466);console.log(50),console.log(_())})()})();