!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.createCookieConsent=e():t.createCookieConsent=e()}(this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=21)}([function(t,e,n){var r=n(14)("wks"),o=n(15),i=n(1).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(1),o=n(9),i=n(7),c=n(18),u=n(40),l=function(t,e,n){var s,a,f,d,p=t&l.F,v=t&l.G,g=t&l.S,h=t&l.P,x=t&l.B,m=v?r:g?r[e]||(r[e]={}):(r[e]||{}).prototype,y=v?o:o[e]||(o[e]={}),b=y.prototype||(y.prototype={});for(s in v&&(n=e),n)f=((a=!p&&m&&void 0!==m[s])?m:n)[s],d=x&&a?u(f,r):h&&"function"==typeof f?u(Function.call,f):f,m&&c(m,s,f,t&l.U),y[s]!=f&&i(y,s,d),h&&b[s]!=f&&(b[s]=f)};r.core=o,l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},function(t,e,n){var r=n(33),o=n(37);t.exports=n(12)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r,o,i=n(30),c=RegExp.prototype.exec,u=String.prototype.replace,l=c,s=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),a=void 0!==/()??/.exec("")[1];(s||a)&&(l=function(t){var e,n,r,o,l=this;return a&&(n=new RegExp("^"+l.source+"$(?!\\s)",i.call(l))),s&&(e=l.lastIndex),r=c.call(l,t),s&&r&&(l.lastIndex=l.global?r.index+r[0].length:e),a&&r&&r.length>1&&u.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=l},function(t,e,n){t.exports=!n(2)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(3),o=n(8),i=n(0)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e,n){var r=n(9),o=n(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(24)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(10),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(1),o=n(7),i=n(38),c=n(15)("src"),u=n(39),l=(""+u).split("toString");n(9).inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,u){var s="function"==typeof n;s&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(s&&(i(n,c)||o(n,c,t[e]?""+t[e]:l.join(String(e)))),t===r?t[e]=n:u?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[c]||u.call(this)}))},function(t,e,n){var r=n(42),o=n(17),i=n(44);t.exports=function(t){return function(e,n,c){var u,l=r(e),s=o(l.length),a=i(c,s);if(t&&n!=n){for(;s>a;)if((u=l[a++])!=u)return!0}else for(;s>a;a++)if((t||a in l)&&l[a]===n)return t||a||0;return!t&&-1}}},function(t,e,n){},function(t,e,n){n(22),t.exports=n(20)},function(t,e,n){"use strict";n.r(e);n(23),n(41),n(46),n(48),n(20);var r=function(t){if(console.log("started exec"),null!=t){console.log("config",t);var e=C(null==t?void 0:t.cookieName),n=[],r=document.createElement("div"),i=o(null==t?void 0:t.message,null==t?void 0:t.learnMore),c=l(t,r);if(r.setAttribute("id","js-cookie-consent-box"),r.classList.add("slide-up"),null===e){for(var u=0;u<(null==t?void 0:t.options.length);u++)n.push(null==t?void 0:t.options[u].key);r.appendChild(i),r.appendChild(c);var s=p(t,n,r);r.appendChild(s),document.body.appendChild(r),console.log("final append child exec"),S(null==t?void 0:t.expiration,r,n)}else r.style.display="none"}},o=function(t,e){var n=document.createElement("div"),r=i(t),o=c(e);return n.classList.add("js-cookie-consent-main-text-box"),n.appendChild(r),n.appendChild(o),n},i=function(t){var e=document.createElement("p");return e.classList.add("title"),e.innerHTML=t,e},c=function(t){var e=document.createElement("span"),n=u(t);return e.classList.add("learn-more-box"),e.appendChild(n),e},u=function(t){var e=document.createElement("a"),n=document.createElement("a");return n.innerHTML="Learn More",n.setAttribute("href",t),n.setAttribute("target","_blank"),n.setAttribute("rel","noopener noreferrer"),n.classList.add("learn-more"),null==t||0===(null==t?void 0:t.length)?e:n},l=function(t,e){var n=document.createElement("div"),r=[],o=[],i=h(e,null==t?void 0:t.expiration,null==t?void 0:t.color);if(n.classList.add("js-cookie-consent-toogle-box"),(null==t?void 0:t.options.length)>0){for(var c=0;c<(null==t?void 0:t.options.length);c++)s(n,null==t?void 0:t.options[c],null==t?void 0:t.color),t.options[c].checked&&r.push(null==t?void 0:t.options[c].key),o.push(null==t?void 0:t.options[c].key);sessionStorage.setItem("categories",JSON.stringify(r))}return n.appendChild(i),n},s=function(t,e,n){var r=a(),o=f(null==e?void 0:e.title),i=d(null==e?void 0:e.description),c=y(null==e?void 0:e.key),u=b(null==e?void 0:e.checked),l=m(e,n);return c.appendChild(u),c.appendChild(l),r.appendChild(o),r.appendChild(c),r.appendChild(i),t.appendChild(r),r},a=function(){var t=document.createElement("div");return t.classList.add("js-cookie-consent-toogle-box-inner"),t},f=function(t){var e=document.createElement("p");return e.classList.add("settings-title"),e.innerHTML=t,e},d=function(t){var e=document.createElement("span");return e.classList.add("settings-subtitle"),e.innerHTML=t,e},p=function(t,e,n){var r=document.createElement("div"),o=v(null==t?void 0:t.expiration,n,null==t?void 0:t.color,e),i=g(n);return r.classList.add("btn-box"),r.appendChild(o),r.appendChild(i),r},v=function(t,e,n,r){var o=document.createElement("button");return o.innerHTML="Accept all",o.setAttribute("id","acceptAllCookies"),o.classList.add("btn","accept"),n&&(o.style.backgroundColor=n),o.addEventListener("click",(function(){return E(t,e,r)})),o},g=function(t){var e=document.createElement("button");return e.innerHTML="Cookie settings",e.setAttribute("id","openCookieSettings"),e.classList.add("btn","open-settings"),e.addEventListener("click",(function(){var e=t.classList.contains("slide-up");t.setAttribute("class",e?"slide-down":"slide-up")})),e},h=function(t,e,n){var r=document.createElement("div"),o=x(t,e,n);return r.classList.add("save-cookies-btn-box"),r.appendChild(o),r},x=function(t,e,n){var r=document.createElement("button");return r.innerHTML="Save cookie settings",r.setAttribute("id","saveCookieSettings"),r.classList.add("btn","save-cookies"),n&&(r.style.backgroundColor=n),r.addEventListener("click",(function(){var n=sessionStorage.getItem("categories");L("cookiesGDPR",n,e),t.style.display="none"})),r},m=function(t,e){var n=document.createElement("span");return n.classList.add("slider","round",null==t?void 0:t.key),(null==t?void 0:t.disabled)&&n.classList.add("disabled"),(null==t?void 0:t.checked)&&(n.classList.add("checked"),e&&(n.style.backgroundColor=e)),n.addEventListener("click",(function(n){n.target.className.includes("disabled")?n.preventDefault():(n.target.className.includes("checked")?(n.target.classList.remove("checked"),n.target.style.backgroundColor="#ccc"):(n.target.classList.add("checked"),n.target.style.backgroundColor=e),n.stopPropagation(),k(null==t?void 0:t.key))})),n},y=function(){var t=document.createElement("label");return t.classList.add("switch"),t},b=function(t){var e=document.createElement("input");return e.setAttribute("type","checkbox"),t?e.setAttribute("checked",""):e.removeAttribute("checked"),e},k=function(t){var e=sessionStorage.getItem("categories"),n=JSON.parse(e),r=n.indexOf(t);-1!==r?n.splice(r,1):n.push(t),sessionStorage.setItem("categories",JSON.stringify(n))},E=function(t,e,n){L("cookiesGDPR",JSON.stringify(n),null==t?void 0:t.expiration),e.style.display="none"},S=function(t,e,n){window.addEventListener("scroll",(function r(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&(E(t,e,n),window.removeEventListener("click",r))}))},C=function(t){if(document.cookie.length)for(var e=t+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(e))return o.substring(e.length,o.length)}return null},L=function(t,e,n,r){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var i="expires="+o.toUTCString();document.cookie=t+"="+e+";"+i+";path="+(r||"/")};e.default={init:function(t){r(t)}}},function(t,e,n){"use strict";var r=n(13),o=n(4),i=n(25),c=n(26),u=n(17),l=n(28),s=n(11),a=n(2),f=Math.min,d=[].push,p="length",v=!a((function(){RegExp(4294967295,"y")}));n(31)("split",2,(function(t,e,n,a){var g;return g="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[p]||2!="ab".split(/(?:ab)*/)[p]||4!=".".split(/(.?)(.?)/)[p]||".".split(/()()/)[p]>1||"".split(/.?/)[p]?function(t,e){var o=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(o,t,e);for(var i,c,u,l=[],a=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=void 0===e?4294967295:e>>>0,g=new RegExp(t.source,a+"g");(i=s.call(g,o))&&!((c=g.lastIndex)>f&&(l.push(o.slice(f,i.index)),i[p]>1&&i.index<o[p]&&d.apply(l,i.slice(1)),u=i[0][p],f=c,l[p]>=v));)g.lastIndex===i.index&&g.lastIndex++;return f===o[p]?!u&&g.test("")||l.push(""):l.push(o.slice(f)),l[p]>v?l.slice(0,v):l}:"0".split(void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var o=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,o,r):g.call(String(o),n,r)},function(t,e){var r=a(g,t,this,e,g!==n);if(r.done)return r.value;var s=o(t),d=String(this),p=i(s,RegExp),h=s.unicode,x=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(v?"y":"g"),m=new p(v?s:"^(?:"+s.source+")",x),y=void 0===e?4294967295:e>>>0;if(0===y)return[];if(0===d.length)return null===l(m,d)?[d]:[];for(var b=0,k=0,E=[];k<d.length;){m.lastIndex=v?k:0;var S,C=l(m,v?d:d.slice(k));if(null===C||(S=f(u(m.lastIndex+(v?0:k)),d.length))===b)k=c(d,k,h);else{if(E.push(d.slice(b,k)),E.length===y)return E;for(var L=1;L<=C.length-1;L++)if(E.push(C[L]),E.length===y)return E;k=b=S}}return E.push(d.slice(b)),E}]}))},function(t,e){t.exports=!1},function(t,e,n){var r=n(4),o=n(16),i=n(0)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){"use strict";var r=n(27)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(10),o=n(5);t.exports=function(t){return function(e,n){var i,c,u=String(o(e)),l=r(n),s=u.length;return l<0||l>=s?t?"":void 0:(i=u.charCodeAt(l))<55296||i>56319||l+1===s||(c=u.charCodeAt(l+1))<56320||c>57343?t?u.charAt(l):i:t?u.slice(l,l+2):c-56320+(i-55296<<10)+65536}}},function(t,e,n){"use strict";var r=n(29),o=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){var r=n(8),o=n(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){"use strict";var r=n(4);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";n(32);var r=n(18),o=n(7),i=n(2),c=n(5),u=n(0),l=n(11),s=u("species"),a=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=u(t),p=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),v=p?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[s]=function(){return n}),n[d](""),!e})):void 0;if(!p||!v||"replace"===t&&!a||"split"===t&&!f){var g=/./[d],h=n(c,d,""[t],(function(t,e,n,r,o){return e.exec===l?p&&!o?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),x=h[0],m=h[1];r(String.prototype,t,x),o(RegExp.prototype,d,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},function(t,e,n){"use strict";var r=n(11);n(6)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,e,n){var r=n(4),o=n(34),i=n(36),c=Object.defineProperty;e.f=n(12)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(12)&&!n(2)((function(){return 7!=Object.defineProperty(n(35)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(3),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){t.exports=n(14)("native-function-to-string",Function.toString)},function(t,e,n){var r=n(16);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){"use strict";var r=n(6),o=n(19)(!1),i=[].indexOf,c=!!i&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(c||!n(45)(i)),"Array",{indexOf:function(t){return c?i.apply(this,arguments)||0:o(this,t,arguments[1])}})},function(t,e,n){var r=n(43),o=n(5);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(8);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(10),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},function(t,e,n){"use strict";var r=n(6),o=n(19)(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(47)("includes")},function(t,e,n){var r=n(0)("unscopables"),o=Array.prototype;null==o[r]&&n(7)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,e,n){"use strict";var r=n(6),o=n(49);r(r.P+r.F*n(50)("includes"),"String",{includes:function(t){return!!~o(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(13),o=n(5);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},function(t,e,n){var r=n(0)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}}]).default}));