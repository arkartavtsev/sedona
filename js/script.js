!function(e){var t,o,n,r=navigator.userAgent;function i(e){var t,n,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=o.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout(function(){r.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))}function c(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)i(t[e])}function s(){clearTimeout(t),t=setTimeout(c,99)}function a(){s(),n&&n.addListener&&n.addListener(s)}e.HTMLPictureElement&&/ecko/.test(r)&&r.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(o=document.createElement("source"),n=e.matchMedia&&matchMedia("(orientation: landscape)"),o.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?a():document.addEventListener("DOMContentLoaded",a),s))}(window),function(e,i,u){"use strict";var o,l,c;i.createElement("picture");function t(){}function n(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)}function r(t){var n={};return function(e){return e in n||(n[e]=t(e)),n[e]}}var y={},s=!1,a=i.createElement("img"),d=a.getAttribute,f=a.setAttribute,m=a.removeAttribute,p=i.documentElement,h={},A={algorithm:""},v="data-pfsrc",g=v+"set",w=navigator.userAgent,E=/rident/.test(w)||/ecko/.test(w)&&w.match(/rv\:(\d+)/)&&35<RegExp.$1,S="currentSrc",L=/\s+\+?\d+(e\d+)?w/,_=/(\([^)]+\))?\s*(.+)/,b=e.picturefillCFG,T="font-size:100%!important;",x=!0,k={},q={},C=e.devicePixelRatio,R={px:1,in:96},z=i.createElement("a"),M=!1,D=/^[ \t\n\r\u000c]+/,I=/^[, \t\n\r\u000c]+/,B=/^[^ \t\n\r\u000c]+/,H=/[,]+$/,N=/^\d+$/,W=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;function X(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function O(e,t){return e.w?(e.cWidth=y.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e}var P,j,U,F,$,G,Q,K,V,J,Z,Y,ee,te,ne,re,oe,ie,ce=(P=/^([\d\.]+)(em|vw|px)$/,j=r(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var n;if(!(e in k))if(k[e]=!1,t&&(n=e.match(P)))k[e]=n[1]*R[n[2]];else try{k[e]=new Function("e",j(e))(R)}catch(e){}return k[e]}),se=function(e){if(s){var t,n,r,o=e||{};if(o.elements&&1===o.elements.nodeType&&("IMG"===o.elements.nodeName.toUpperCase()?o.elements=[o.elements]:(o.context=o.elements,o.elements=null)),r=(t=o.elements||y.qsa(o.context||i,o.reevaluate||o.reselect?y.sel:y.selShort)).length){for(y.setupRun(o),M=!0,n=0;n<r;n++)y.fillImg(t[n],o);y.teardownRun(o)}}};function ae(e,t){return e.res-t.res}function ue(e,t){var n,r,o;if(e&&t)for(o=y.parseSet(t),e=y.makeUrl(e),n=0;n<o.length;n++)if(e===y.makeUrl(o[n].url)){r=o[n];break}return r}function le(){2===$.width&&(y.supSizes=!0),l=y.supSrcset&&!y.supSizes,s=!0,setTimeout(se)}e.console&&console.warn,S in a||(S="src"),h["image/jpeg"]=!0,h["image/gif"]=!0,h["image/png"]=!0,h["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),y.ns=("pf"+(new Date).getTime()).substr(0,9),y.supSrcset="srcset"in a,y.supSizes="sizes"in a,y.supPicture=!!e.HTMLPictureElement,y.supSrcset&&y.supPicture&&!y.supSizes&&(U=i.createElement("img"),a.srcset="data:,a",U.src="data:,a",y.supSrcset=a.complete===U.complete,y.supPicture=y.supSrcset&&y.supPicture),y.supSrcset&&!y.supSizes?(F="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",($=i.createElement("img")).onload=le,$.onerror=le,$.setAttribute("sizes","9px"),$.srcset=F+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",$.src=F):s=!0,y.selShort="picture>img,img[srcset]",y.sel=y.selShort,y.cfg=A,y.DPR=C||1,y.u=R,y.types=h,y.setSize=t,y.makeUrl=r(function(e){return z.href=e,z.href}),y.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},y.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?y.matchesMedia=function(e){return!e||matchMedia(e).matches}:y.matchesMedia=y.mMQ,y.matchesMedia.apply(this,arguments)},y.mMQ=function(e){return!e||ce(e)},y.calcLength=function(e){var t=ce(e,!0)||!1;return t<0&&(t=!1),t},y.supportsType=function(e){return!e||h[e]},y.parseSize=r(function(e){var t=(e||"").match(_);return{media:t&&t[1],length:t&&t[2]}}),y.parseSet=function(e){return e.cands||(e.cands=function(r,d){function e(e){var t,n=e.exec(r.substring(c));if(n)return t=n[0],c+=t.length,t}var f,m,t,n,o,i=r.length,c=0,p=[];function s(){var e,t,n,r,o,i,c,s,a,u=!1,l={};for(r=0;r<m.length;r++)i=(o=m[r])[o.length-1],c=o.substring(0,o.length-1),s=parseInt(c,10),a=parseFloat(c),N.test(c)&&"w"===i?((e||t)&&(u=!0),0===s?u=!0:e=s):W.test(c)&&"x"===i?((e||t||n)&&(u=!0),a<0?u=!0:t=a):N.test(c)&&"h"===i?((n||t)&&(u=!0),0===s?u=!0:n=s):u=!0;u||(l.url=f,e&&(l.w=e),t&&(l.d=t),n&&(l.h=n),n||t||e||(l.d=1),1===l.d&&(d.has1x=!0),l.set=d,p.push(l))}function a(){for(e(D),t="",n="in descriptor";;){if(o=r.charAt(c),"in descriptor"===n)if(X(o))t&&(m.push(t),t="",n="after descriptor");else{if(","===o)return c+=1,t&&m.push(t),void s();if("("===o)t+=o,n="in parens";else{if(""===o)return t&&m.push(t),void s();t+=o}}else if("in parens"===n)if(")"===o)t+=o,n="in descriptor";else{if(""===o)return m.push(t),void s();t+=o}else if("after descriptor"===n)if(X(o));else{if(""===o)return void s();n="in descriptor",c-=1}c+=1}}for(;;){if(e(I),i<=c)return p;f=e(B),m=[],","===f.slice(-1)?(f=f.replace(H,""),s()):a()}}(e.srcset,e)),e.cands},y.getEmValue=function(){var e;if(!o&&(e=i.body)){var t=i.createElement("div"),n=p.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",p.style.cssText=T,e.style.cssText=T,e.appendChild(t),o=t.offsetWidth,e.removeChild(t),o=parseFloat(o,10),p.style.cssText=n,e.style.cssText=r}return o||16},y.calcListLength=function(e){if(!(e in q)||A.uT){var t=y.calcLength(function(e){var t,n,r,o,i,c,s,a=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(n=function(e){var t,n="",r=[],o=[],i=0,c=0,s=!1;function a(){n&&(r.push(n),n="")}function u(){r[0]&&(o.push(r),r=[])}for(;;){if(""===(t=e.charAt(c)))return a(),u(),o;if(s){if("*"===t&&"/"===e[c+1]){s=!1,c+=2,a();continue}c+=1}else{if(X(t)){if(e.charAt(c-1)&&X(e.charAt(c-1))||!n){c+=1;continue}if(0===i){a(),c+=1;continue}t=" "}else if("("===t)i+=1;else if(")"===t)i-=1;else{if(","===t){a(),u(),c+=1;continue}if("/"===t&&"*"===e.charAt(c+1)){s=!0,c+=2;continue}}n+=t,c+=1}}}(e)).length,t=0;t<r;t++)if(i=(o=n[t])[o.length-1],s=i,a.test(s)&&0<=parseFloat(s)||u.test(s)||"0"===s||"-0"===s||"+0"===s){if(c=i,o.pop(),0===o.length)return c;if(o=o.join(" "),y.matchesMedia(o))return c}return"100vw"}(e));q[e]=t||R.width}return q[e]},y.setRes=function(e){var t;if(e)for(var n=0,r=(t=y.parseSet(e)).length;n<r;n++)O(t[n],e.sizes);return t},y.setRes.res=O,y.applySetCandidate=function(e,t){if(e.length){var n,r,o,i,c,s,a,u,l,d,f,m,p,h,v,g=t[y.ns],w=y.DPR;if(s=g.curSrc||t[S],(a=g.curCan||function(e,t,n){var r;return!n&&t&&(n=(n=e[y.ns].sets)&&n[n.length-1]),(r=ue(t,n))&&(t=y.makeUrl(t),e[y.ns].curSrc=t,(e[y.ns].curCan=r).res||O(r,r.set.sizes)),r}(t,s,e[0].set))&&a.set===e[0].set&&((l=E&&!t.complete&&a.res-.1>w)||(a.cached=!0,a.res>=w&&(c=a))),!c)for(e.sort(ae),c=e[(i=e.length)-1],r=0;r<i;r++)if((n=e[r]).res>=w){c=e[o=r-1]&&(l||s!==y.makeUrl(n.url))&&(d=e[o].res,f=n.res,m=w,p=e[o].cached,v=h=void 0,m<("saveData"===A.algorithm?2.7<d?m+1:(v=(f-m)*(h=Math.pow(d-.6,1.5)),p&&(v+=.1*h),d+v):1<m?Math.sqrt(d*f):d))?e[o]:n;break}c&&(u=y.makeUrl(c.url),g.curSrc=u,g.curCan=c,u!==s&&y.setSrc(t,c),y.setSize(t))}},y.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},y.getSet=function(e){var t,n,r,o=!1,i=e[y.ns].sets;for(t=0;t<i.length&&!o;t++)if((n=i[t]).srcset&&y.matchesMedia(n.media)&&(r=y.supportsType(n.type))){"pending"===r&&(n=r),o=n;break}return o},y.parseSets=function(e,t,n){var r,o,i,c,s=t&&"PICTURE"===t.nodeName.toUpperCase(),a=e[y.ns];a.src!==u&&!n.src||(a.src=d.call(e,"src"),a.src?f.call(e,v,a.src):m.call(e,v)),a.srcset!==u&&!n.srcset&&y.supSrcset&&!e.srcset||(r=d.call(e,"srcset"),a.srcset=r,c=!0),a.sets=[],s&&(a.pic=!0,function(e,t){var n,r,o,i,c=e.getElementsByTagName("source");for(n=0,r=c.length;n<r;n++)(o=c[n])[y.ns]=!0,(i=o.getAttribute("srcset"))&&t.push({srcset:i,media:o.getAttribute("media"),type:o.getAttribute("type"),sizes:o.getAttribute("sizes")})}(t,a.sets)),a.srcset?(o={srcset:a.srcset,sizes:d.call(e,"sizes")},a.sets.push(o),(i=(l||a.src)&&L.test(a.srcset||""))||!a.src||ue(a.src,o)||o.has1x||(o.srcset+=", "+a.src,o.cands.push({url:a.src,d:1,set:o}))):a.src&&a.sets.push({srcset:a.src,sizes:null}),a.curCan=null,a.curSrc=u,a.supported=!(s||o&&!y.supSrcset||i&&!y.supSizes),c&&y.supSrcset&&!a.supported&&(r?(f.call(e,g,r),e.srcset=""):m.call(e,g)),a.supported&&!a.srcset&&(!a.src&&e.src||e.src!==y.makeUrl(a.src))&&(null===a.src?e.removeAttribute("src"):e.src=a.src),a.parsed=!0},y.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[y.ns]||(e[y.ns]={}),n=e[y.ns],!r&&n.evaled===c||(n.parsed&&!t.reevaluate||y.parseSets(e,e.parentNode,t),n.supported?n.evaled=c:function(e){var t,n=y.getSet(e),r=!1;"pending"!==n&&(r=c,n&&(t=y.setRes(n),y.applySetCandidate(t,e))),e[y.ns].evaled=r}(e))},y.setupRun=function(){M&&!x&&C===e.devicePixelRatio||(x=!1,C=e.devicePixelRatio,k={},q={},y.DPR=C||1,R.width=Math.max(e.innerWidth||0,p.clientWidth),R.height=Math.max(e.innerHeight||0,p.clientHeight),R.vw=R.width/100,R.vh=R.height/100,c=[R.height,R.width,C].join("-"),R.em=y.getEmValue(),R.rem=R.em)},y.supPicture?(se=t,y.fillImg=t):(Y=e.attachEvent?/d$|^c/:/d$|^c|^i/,ee=function(){var e=i.readyState||"";te=setTimeout(ee,"loading"===e?200:999),i.body&&(y.fillImgs(),(G=G||Y.test(e))&&clearTimeout(te))},te=setTimeout(ee,i.body?9:99),ne=p.clientHeight,n(e,"resize",(Q=function(){x=Math.max(e.innerWidth||0,p.clientWidth)!==R.width||p.clientHeight!==ne,ne=p.clientHeight,x&&y.fillImgs()},K=99,Z=function(){var e=new Date-J;e<K?V=setTimeout(Z,K-e):(V=null,Q())},function(){J=new Date,V||(V=setTimeout(Z,K))})),n(i,"readystatechange",ee)),y.picturefill=se,y.fillImgs=se,y.teardownRun=t,se._=y,e.picturefillCFG={pf:y,push:function(e){var t=e.shift();"function"==typeof y[t]?y[t].apply(y,e):(A[t]=e[0],M&&y.fillImgs({reselect:!0}))}};for(;b&&b.length;)e.picturefillCFG.push(b.shift());e.picturefill=se,"object"==typeof module&&"object"==typeof module.exports?module.exports=se:"function"==typeof define&&define.amd&&define("picturefill",function(){return se}),y.supPicture||(h["image/webp"]=(re="image/webp",oe="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(ie=new e.Image).onerror=function(){h[re]=!1,se()},ie.onload=function(){h[re]=1===ie.width,se()},ie.src=oe,"pending"))}(window,document),function(){"use strict";if("undefined"!=typeof window&&window.addEventListener){var e,t,n,A=Object.create(null),E=function(){clearTimeout(t),t=setTimeout(e,100)},S=function(){},L="http://www.w3.org/1999/xlink";e=function(){var e,t,n,r,o,i,c,s,a,u,l,d,f,m,p=0;function h(){0===(p-=1)&&(S(),function(){var e;window.addEventListener("resize",E,!1),window.addEventListener("orientationchange",E,!1),S=window.MutationObserver?((e=new MutationObserver(E)).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),function(){try{e.disconnect(),window.removeEventListener("resize",E,!1),window.removeEventListener("orientationchange",E,!1)}catch(e){}}):(document.documentElement.addEventListener("DOMSubtreeModified",E,!1),function(){document.documentElement.removeEventListener("DOMSubtreeModified",E,!1),window.removeEventListener("resize",E,!1),window.removeEventListener("orientationchange",E,!1)})}())}function v(e){return function(){!0!==A[e.base]&&(e.useEl.setAttributeNS(L,"xlink:href","#"+e.hash),e.useEl.hasAttribute("href")&&e.useEl.setAttribute("href","#"+e.hash))}}function g(r){return function(){var e,t=document.body,n=document.createElement("x");r.onload=null,n.innerHTML=r.responseText,(e=n.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",t.insertBefore(e,t.firstChild)),h()}}function w(e){return function(){e.onerror=null,e.ontimeout=null,h()}}for(S(),a=document.getElementsByTagName("use"),o=0;o<a.length;o+=1){try{t=a[o].getBoundingClientRect()}catch(e){t=!1}e=(s=(r=a[o].getAttribute("href")||a[o].getAttributeNS(L,"href")||a[o].getAttribute("xlink:href"))&&r.split?r.split("#"):["",""])[0],n=s[1],i=t&&0===t.left&&0===t.right&&0===t.top&&0===t.bottom,t&&0===t.width&&0===t.height&&!i?(a[o].hasAttribute("href")&&a[o].setAttributeNS(L,"xlink:href",r),e.length&&(!0!==(u=A[e])&&setTimeout(v({useEl:a[o],base:e,hash:n}),0),void 0===u&&(l=e,m=f=d=void 0,window.XMLHttpRequest&&(d=new XMLHttpRequest,f=y(location),m=y(l),d=void 0===d.withCredentials&&""!==m&&m!==f?XDomainRequest||void 0:XMLHttpRequest),void 0!==(c=d)&&(u=new c,(A[e]=u).onload=g(u),u.onerror=w(u),u.ontimeout=w(u),u.open("GET",e),u.send(),p+=1)))):i?e.length&&A[e]&&setTimeout(v({useEl:a[o],base:e,hash:n}),0):void 0===A[e]?A[e]=!0:A[e].onload&&(A[e].abort(),delete A[e].onload,A[e]=!0)}function y(e){var t;return void 0!==e.protocol?t=e:(t=document.createElement("a")).href=e,t.protocol.replace(/:/g,"")+t.host}a="",p+=1,h()},n=function(){window.removeEventListener("load",n,!1),t=setTimeout(e,0)},"complete"!==document.readyState?window.addEventListener("load",n,!1):n()}}(),function(){"NodeList"in window&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)});window.util={KeyCode:{LEFT_ARROW:37,RIGHT_ARROW:39,ESC:27},getTemplateContent:function(e){if("content"in document.createElement("template"))return document.importNode(e.content,!0);for(var t=document.createDocumentFragment(),n=e.childNodes,r=0;r<n.length;r++)t.appendChild(n[r].cloneNode(!0));return t}}}(),window.removeDebounce=function(e){var t;t&&clearTimeout(t),t=setTimeout(e,500)},function(){function i(e,t){var n=new XMLHttpRequest;return n.addEventListener("load",function(){switch(n.status){case r:e(n.response);break;case o:t("Неверный запрос к серверу.");break;case c:t("Запрашиваемый ресурс не найден на сервере.");break;case s:t("Произошла внутренняя ошибка сервера.");break;default:t("Код ответа сервера: "+n.status+" "+n.statusText+".")}}),n.addEventListener("error",function(){t("Произошла ошибка соединения с сервером.")}),n.addEventListener("timeout",function(){t("Запрос к серверу не успел выполниться за отведённое время.")}),n}var r=200,o=400,c=404,s=500;window.backend={download:function(e,t,n){var r=i(t,n);r.open("GET",e),r.send()},upload:function(e,t,n,r){var o=i(n,r);o.open("POST",t),o.send(e)}}}(),function(){var e=document.querySelector(".page-header__bar"),t=document.querySelector(".main-nav");if(e&&t){var n=e.querySelector(".menu-btn"),r=t.scrollHeight+"px";e.classList.add("page-header__bar--js"),n.classList.add("page-header__menu-btn--js"),t.classList.add("page-header__main-nav--js"),n.addEventListener("click",function(e){e.preventDefault(),t.style.height=0===t.offsetHeight?r:0}),window.addEventListener("resize",function(){t.removeAttribute("style")})}}(),function(){var r=document.querySelector(".popup"),o=document.querySelector(".overlay");if(r&&o){function i(e){e.keyCode===window.util.KeyCode.ESC&&(e.preventDefault(),l())}var c=r.querySelector(".popup__title"),s=r.querySelector(".popup__text"),a=r.querySelector(".popup__btn"),u=r.querySelector(".popup__close-btn"),l=function(){o.hidden=!0,r.classList.remove("popup--shown"),u.removeEventListener("click",l),o.removeEventListener("click",l),document.removeEventListener("keydown",i)};r.hidden=!1,window.popup={open:function(e,t,n){c.textContent=e,s.textContent=t,a.textContent=n,u.addEventListener("click",l),o.addEventListener("click",l),document.addEventListener("keydown",i),r.classList.add("popup--shown"),o.hidden=!1},close:l}}}(),function(){var o=document.querySelector(".sedona-location");window.initMap=function(){if(o){var e={lat:34.869867,lng:-111.760635},t=o.querySelector("#map"),n={center:e,zoom:8,minZoom:4,disableDoubleClickZoom:!0,disableDefaultUI:!0,backgroundColor:"#fff"},r={position:e,map:new google.maps.Map(t,n),optimized:!1,icon:{url:"img/icon-map-marker.svg",scaledSize:new google.maps.Size(25,25)}};new google.maps.Marker(r);o.classList.add("sedona-location--js"),o.querySelector(".sedona-location__img").classList.add("sedona-location__img--js")}}}(),function(){var e=document.querySelector("#hotel"),n=document.querySelector(".hotels__container");if(e&&n){function r(e){var t=i.cloneNode(!0),n=t.querySelector(".hotel-card__photo-container"),r=n.querySelector(".hotel-card__photo"),o=t.querySelector(".hotel-card__description");return r.src="img/hotel-"+e.id+"-mobile@1x.jpg",r.srcset="img/hotel-"+e.id+"-mobile@2x.jpg 2x",r.alt="Отель "+e.title,n.querySelector("#source-jpg").srcset="img/hotel-"+e.id+"@1x.jpg 1x, img/hotel-"+e.id+"@2x.jpg 2x",n.querySelector("#source-webp-mobile").srcset="img/hotel-"+e.id+"-mobile@1x.webp 1x, img/hotel-"+e.id+"-mobile@2x.webp 2x",n.querySelector("#source-webp").srcset="img/hotel-"+e.id+"@1x.webp 1x, img/hotel-"+e.id+"@2x.webp 2x",o.querySelector(".hotel-card__title").textContent=e.title,o.querySelector(".hotel-card__category-transcription").textContent="Категория отеля: "+e.category+" звезды",o.querySelector(".hotel-card__category").appendChild(function(e){for(var t=document.createDocumentFragment(),n=0;n<e;n++)t.appendChild(c.cloneNode(!0));return t}(e.category)),o.querySelector(".hotel-card__rating").textContent="Рейтинг: "+e.rating,o.querySelector(".hotel-card__type").textContent=e.type,o.querySelector(".hotel-card__price").textContent="От "+e.cost+" ₽",t}var t=window.util.getTemplateContent(e),i=t.querySelector(".hotel-card"),c=t.querySelector(".hotel-card__star");window.renderContent=function(e){var t=e.length?function(e){for(var t=document.createDocumentFragment(),n=0;n<e.length;n++)t.appendChild(r(e[n]));return t}(e):function(){var e=document.createElement("p");return e.textContent="Не удалось найти ни одного отеля. Измените критерии поиска.",e.classList.add("hotels__search-error"),e}();n.innerHTML="",n.appendChild(t)}}}(),function(){function r(e,t,n){switch(n){case"by-increase":return e-t;case"by-decrease":return t-e;default:return 0}}window.sortHotels=function(e,t){switch(t.type){case"by-cost":!function(e,n){e.sort(function(e,t){return r(e.cost,t.cost,n)})}(e,t.order);break;case"by-stars":!function(e,n){e.sort(function(e,t){return r(e.category,t.category,n)})}(e,t.order);break;case"by-rating":!function(e,n){e.sort(function(e,t){return r(e.rating,t.rating,n)})}(e,t.order)}window.renderContent(e)}}(),function(){var o=document.querySelector(".sort-pane");if(o){var i=o.querySelector('output[name="search-results"]');window.showHotels=function(e,t){var n={type:o.querySelector(".sort-type__control--current").dataset.name,order:o.querySelector(".sort-order__control--current").dataset.name},r=function(e,r){var o=[];return e&&e.forEach(function(e){var t=!0;for(var n in(-1===r.type.indexOf(e.type)||e.cost<r.costLimit.lower||e.cost>r.costLimit.upper)&&(t=!1),r.features)r.features[n]&&r.features[n]!==e.features[n]&&(t=!1);t&&o.push(e)}),i.textContent=o.length,o}(e,t);window.sortHotels(r,n)}}}(),function(){var e=document.querySelector(".search-form");if(e){var n=e.querySelectorAll('input[type="checkbox"][name^="type-"]'),r=e.querySelectorAll('input[type="checkbox"][name^="infrastructure-"]'),o=e.querySelector("#lower-limit"),i=e.querySelector("#upper-limit");window.specifyConstraints=function(){var t={type:[],features:{},costLimit:{lower:o.value,upper:i.value}};return n.forEach(function(e){e.checked&&t.type.push(e.dataset.name)}),r.forEach(function(e){e.checked?t.features[e.dataset.name]=!0:t.features[e.dataset.name]=!1}),t}}}(),function(){var n=document.querySelector(".search-form__range");if(n){n.hidden=!1;function c(e){return e.getBoundingClientRect().left+e.offsetWidth/2}function s(e,t,n){return e<t?t-i.left:n<e?n-i.left:e-i.left}function o(){d.style.left=f.style.left,d.style.right=100-parseInt(m.style.left,10)+"%"}function a(e,t,n){var r=Math.round(e/l.offsetWidth*100);n.value=50*r,t.style.left=r+"%",o()}function u(e){var t=n.querySelector(".range__picker--current");t&&t.classList.remove("range__picker--current"),e.classList.add("range__picker--current"),e.focus()}function r(e,t,n,r){if(e.keyCode===window.util.KeyCode.LEFT_ARROW||e.keyCode===window.util.KeyCode.RIGHT_ARROW){var o=function(e,t){var n=c(t);switch(e.keyCode){case window.util.KeyCode.LEFT_ARROW:n-=l.offsetWidth/100;break;case window.util.KeyCode.RIGHT_ARROW:n+=l.offsetWidth/100}return n}(e,n),i=s(o,t.left,t.right);u(n),a(i,n,r)}}function e(e,t,n,r){parseInt(e.value,10)<=parseInt(n,10)&&(e.value=n),parseInt(e.value,10)>=parseInt(r,10)&&(e.value=r),t.style.left=parseInt(e.value,10)/50+"%",o(),u(t)}var l=n.querySelector(".range__scale"),i={left:l.getBoundingClientRect().left,right:l.getBoundingClientRect().right},d=n.querySelector(".range__interval"),f=n.querySelector(".range__picker--lower-limit"),m=n.querySelector(".range__picker--upper-limit"),p=document.querySelector("#lower-limit"),h=document.querySelector("#upper-limit");f.style.left="0%",m.style.left="100%",o(),f.addEventListener("mousedown",function(){function e(e){var t=s(e.clientX,i.left,c(m));a(t,f,p)}var t=function(){document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t)};u(f),document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)}),f.addEventListener("touchstart",function(){function e(e){var t=s(e.touches[0].clientX,i.left,c(m));a(t,f,p)}var t=function(){document.removeEventListener("touchmove",e),document.removeEventListener("touchend",t)};u(f),document.addEventListener("touchmove",e),document.addEventListener("touchend",t)}),f.addEventListener("keydown",function(e){var t={left:i.left,right:c(m)};r(e,t,f,p)}),m.addEventListener("mousedown",function(){function e(e){var t=s(e.clientX,c(f),i.right);a(t,m,h)}var t=function(){document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t)};u(m),document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)}),m.addEventListener("touchstart",function(){function e(e){var t=s(e.touches[0].clientX,c(f),i.right);a(t,m,h)}var t=function(){document.removeEventListener("touchmove",e),document.removeEventListener("touchend",t)};u(m),document.addEventListener("touchmove",e),document.addEventListener("touchend",t)}),m.addEventListener("keydown",function(e){var t={left:c(f),right:i.right};r(e,t,m,h)}),l.addEventListener("click",function(e){if(e.target===l||e.target===d){var t=d.getBoundingClientRect().left+d.offsetWidth/2;(e.clientX<c(f)||e.clientX<=t)&&(u(f),a(e.clientX-i.left,f,p)),(e.clientX>c(m)||e.clientX>t)&&(u(m),a(e.clientX-i.left,m,h))}}),p.addEventListener("change",function(){e(p,f,p.min,h.value)}),h.addEventListener("change",function(){e(h,m,p.value,h.max)})}}(),function(){var e=document.querySelector(".search-form"),t=document.querySelector(".sort-pane");if(e&&t){function n(){c=window.specifyConstraints(),window.showHotels(i,c)}function r(e){e.preventDefault(),e.target!==p&&(p.classList.remove("sort-type__control--current"),e.target.classList.add("sort-type__control--current"),p=e.target,window.removeDebounce(function(){window.showHotels(i,c)}))}function o(e){e.preventDefault(),e.target!==g&&(g.classList.remove("sort-order__control--current"),e.target.classList.add("sort-order__control--current"),g=e.target,window.removeDebounce(function(){window.showHotels(i,c)}))}var i,c,s="data/hotels.json",a="Что-то пошло не так!",u="Не удалось загрузить список отелей. ",l="Ещё раз",d=e.querySelector(".search-form__btn"),f=t.querySelector(".sort-pane__sort-type"),m=f.querySelectorAll(".sort-type__control"),p=f.querySelector(".sort-type__control--current"),h=t.querySelector(".sort-pane__sort-order"),v=h.querySelectorAll(".sort-order__control"),g=h.querySelector(".sort-order__control--current"),w=document.querySelector(".popup__btn"),y=function(){window.popup.close(),setTimeout(function(){window.backend.download(s,A,E)},1e3),w.removeEventListener("click",y)},A=function(e){i=JSON.parse(e),n()},E=function(e){window.popup.open(a,u+e,l),w.addEventListener("click",y)};window.backend.download(s,A,E),d.addEventListener("click",function(e){e.preventDefault(),n()}),m.forEach(function(e){e.addEventListener("click",r)}),v.forEach(function(e){e.addEventListener("click",o)})}}(),function(){var e=document.querySelector(".feedback-form");if(e){var t=e.querySelectorAll(".form__field");e.querySelector(".feedback-form__btn").addEventListener("click",function(){t.forEach(function(e){e.validity.valid||e.classList.add("form__field--invalid")})}),t.forEach(function(e){e.addEventListener("input",function(){e.validity.patternMismatch?e.classList.add("form__field--invalid"):e.classList.remove("form__field--invalid")})})}}(),function(){var t=document.querySelector(".feedback-form");if(t){var n="https://echo.htmlacademy.ru",e={TITLE:"Ваш отзыв отправлен!",TEXT:"Спасибо за Ваше участие, Ваш отзыв уже поступил к нам. Мы обязательно учтём все Ваши замечания!",BTN_TEXT:"Ок"},r={TITLE:"Что-то пошло не так!",TEXT:"К сожалению, Ваш отзыв не был отправлен. ",BTN_TEXT:"Ещё раз"},o=t.querySelector(".feedback-form__btn"),i=document.querySelector(".popup__btn"),c=function(){window.popup.close(),i.removeEventListener("click",c)},s=function(){window.popup.close(),setTimeout(function(){window.backend.upload(new FormData(t),n,a,u)},1e3),i.removeEventListener("click",s)},a=function(){o.disabled=!1,window.popup.open(e.TITLE,e.TEXT,e.BTN_TEXT),t.reset(),i.addEventListener("click",c)},u=function(e){o.disabled=!1,window.popup.open(r.TITLE,r.TEXT+e,r.BTN_TEXT),i.addEventListener("click",s)};t.addEventListener("submit",function(e){e.preventDefault(),o.disabled=!0,window.backend.upload(new FormData(t),n,a,u)})}}();