!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(c=o,i=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(s," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([r]).join("\n")}var c,i,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(r[c]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){var o=t(2),r=t(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),c=[];function i(e){for(var n=-1,t=0;t<c.length;t++)if(c[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},o=[],r=0;r<e.length;r++){var a=e[r],s=n.base?a[0]+n.base:a[0],u=t[s]||0,d="".concat(s," ").concat(u);t[s]=u+1;var l=i(d),m={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(c[l].references++,c[l].updater(m)):c.push({identifier:d,updater:v(m,n),references:1}),o.push(d)}return o}function u(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var c=a(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function m(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(n,r);else{var a=document.createTextNode(r),c=e.childNodes;c[n]&&e.removeChild(c[n]),c.length?e.insertBefore(a,c[n]):e.appendChild(a)}}function p(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,h=0;function v(e,n){var t,o,r;if(n.singleton){var a=h++;t=f||(f=u(n)),o=m.bind(null,t,a,!1),r=m.bind(null,t,a,!0)}else t=u(n),o=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=i(t[o]);c[r].references--}for(var a=s(e,n),u=0;u<t.length;u++){var d=i(t[u]);0===c[d].references&&(c[d].updater(),c.splice(d,1))}t=a}}}},function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o)()(!1);r.push([e.i,"body {\n    background-color: red;\n}",""]),n.default=r},function(e,n,t){"use strict";t.r(n);var o=t.p+"cb4c760052d384ad25849c536e87ea7b.jpg";const r=new Image;r.src=o;class a{constructor(e,n,t){this.name=e,this.description=n,this.prize=t}}document.createElement("div").innerHTML="<h1>Welcome in restaurant!!</h1>";t(1);!function(){const e=document.getElementById("content"),n=document.createElement("nav"),t=document.createElement("ul");t.className="menu";const o=document.createElement("li");o.className="nav_home",o.textContent="HOME",t.appendChild(o);const r=document.createElement("li");r.className="nav_about",r.textContent="ABOUT",t.appendChild(r);const a=document.createElement("li");a.className="nav_menu",a.textContent="MENU",t.appendChild(a);const c=document.createElement("li");c.className="nav_contact",c.textContent="CONTACT",t.appendChild(c),e.appendChild(n),n.appendChild(t)}(),function(){const e=document.getElementById("content"),n=document.createElement("main");n.innerHTML="";const t=document.createElement("h1");t.className="home_header",t.textContent="Welcome to our fabulous restaurant";const o=r;e.appendChild(n),n.appendChild(t),n.appendChild(o)}();const c=document.querySelector(".nav_home"),i=document.querySelector(".nav_about"),s=document.querySelector(".nav_menu"),u=document.querySelector(".nav_contact"),d=document.querySelector("main");c.addEventListener("click",()=>{d.innerHTML="",content.appendChild(d),function(){const e=document.getElementById("content"),n=document.querySelector("main");n.innerHTML="",e.appendChild(n);const t=document.createElement("h1");t.className="home_header",t.textContent="Welcome to our fabulous restaurant";const o=r;e.appendChild(n),n.appendChild(t),n.appendChild(o)}()}),i.addEventListener("click",()=>{d.innerHTML="",content.appendChild(d),function(){const e=document.querySelector("main");e.innerHTML="",content.appendChild(e);const n=document.createElement("div");n.className="about",n.innerText='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',e.appendChild(n)}()}),s.addEventListener("click",()=>{d.innerHTML="",content.appendChild(d),function(){const e=document.getElementById("content"),n=document.querySelector("main");n.innerHTML="",e.appendChild(n);const t=new a("Pizza","Delicious",7),o=document.createElement("div");o.className="menu_item",o.innerHTML=`${t.name}\n                            ${t.description}\n                            ${t.prize}`,n.appendChild(o);const r=new a("Pasta","Fabulous",8),c=document.createElement("div");c.className="menu_item",c.innerHTML=`${r.name}\n                            ${r.description}\n                            ${r.prize}`,n.appendChild(c);const i=new a("Tortellini","Glorious",6),s=document.createElement("div");s.className="menu_item",s.innerHTML=`${i.name}\n                                ${i.description}\n                                ${i.prize}`,n.appendChild(s);const u=new a("Ravioli","Gorgous",7),d=document.createElement("div");d.className="menu_item",d.innerHTML=`${u.name}\n                            ${u.description}\n                            ${u.prize}`,n.appendChild(d)}()}),u.addEventListener("click",()=>{d.innerHTML="",content.appendChild(d),function(){const e=document.getElementById("content"),n=document.querySelector("main");n.innerHTML="",e.appendChild(n);const t=document.createElement("div");t.className="adress",n.appendChild(t);const o=document.createElement("p");o.className="restName",o.textContent="Fabulous restaurant",t.appendChild(o);const r=document.createElement("p");r.className="street",r.textContent="Awesome str. 2",t.appendChild(r);const a=document.createElement("p");a.className="street",a.textContent="Krakow",t.appendChild(a);const c=document.createElement("p");c.className="country",c.textContent="Poland",t.appendChild(c);const i=document.createElement("p");i.className="phone",i.textContent="+48 123 456 789",t.appendChild(i)}()})}]);