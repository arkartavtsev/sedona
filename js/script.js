!function(e){var t,o,n,r,i,c,s,a=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(a)&&a.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(o=document.createElement("source"),n=function(e){var t,n,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=o.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout(function(){r.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},r=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},i=function(){clearTimeout(t),t=setTimeout(r,99)},c=e.matchMedia&&matchMedia("(orientation: landscape)"),s=function(){i(),c&&c.addListener&&c.addListener(i)},o.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?s():document.addEventListener("DOMContentLoaded",s),i))}(window),function(e,i,u){"use strict";var o,l,a;i.createElement("picture");var _={},c=!1,t=function(){},n=i.createElement("img"),d=n.getAttribute,f=n.setAttribute,m=n.removeAttribute,s=i.documentElement,r={},b={algorithm:""},p="data-pfsrc",h=p+"set",v=navigator.userAgent,T=/rident/.test(v)||/ecko/.test(v)&&v.match(/rv\:(\d+)/)&&35<RegExp.$1,x="currentSrc",g=/\s+\+?\d+(e\d+)?w/,w=/(\([^)]+\))?\s*(.+)/,y=e.picturefillCFG,A="font-size:100%!important;",E=!0,S={},L={},k=e.devicePixelRatio,q={px:1,in:96},C=i.createElement("a"),R=!1,z=/^[ \t\n\r\u000c]+/,M=/^[, \t\n\r\u000c]+/,D=/^[^ \t\n\r\u000c]+/,I=/[,]+$/,B=/^\d+$/,H=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,N=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},W=function(t){var n={};return function(e){return e in n||(n[e]=t(e)),n[e]}};function X(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var O,P,j,U,F,$,G,Q,K,V,J,Z,Y,ee,te,ne,re,oe,ie,ce=(O=/^([\d\.]+)(em|vw|px)$/,P=W(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var n;if(!(e in S))if(S[e]=!1,t&&(n=e.match(O)))S[e]=n[1]*q[n[2]];else try{S[e]=new Function("e",P(e))(q)}catch(e){}return S[e]}),se=function(e,t){return e.w?(e.cWidth=_.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ae=function(e){if(c){var t,n,r,o=e||{};if(o.elements&&1===o.elements.nodeType&&("IMG"===o.elements.nodeName.toUpperCase()?o.elements=[o.elements]:(o.context=o.elements,o.elements=null)),r=(t=o.elements||_.qsa(o.context||i,o.reevaluate||o.reselect?_.sel:_.selShort)).length){for(_.setupRun(o),R=!0,n=0;n<r;n++)_.fillImg(t[n],o);_.teardownRun(o)}}};function ue(e,t){return e.res-t.res}function le(e,t){var n,r,o;if(e&&t)for(o=_.parseSet(t),e=_.makeUrl(e),n=0;n<o.length;n++)if(e===_.makeUrl(o[n].url)){r=o[n];break}return r}e.console&&console.warn,x in n||(x="src"),r["image/jpeg"]=!0,r["image/gif"]=!0,r["image/png"]=!0,r["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),_.ns=("pf"+(new Date).getTime()).substr(0,9),_.supSrcset="srcset"in n,_.supSizes="sizes"in n,_.supPicture=!!e.HTMLPictureElement,_.supSrcset&&_.supPicture&&!_.supSizes&&(j=i.createElement("img"),n.srcset="data:,a",j.src="data:,a",_.supSrcset=n.complete===j.complete,_.supPicture=_.supSrcset&&_.supPicture),_.supSrcset&&!_.supSizes?(U="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",F=i.createElement("img"),$=function(){2===F.width&&(_.supSizes=!0),l=_.supSrcset&&!_.supSizes,c=!0,setTimeout(ae)},F.onload=$,F.onerror=$,F.setAttribute("sizes","9px"),F.srcset=U+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",F.src=U):c=!0,_.selShort="picture>img,img[srcset]",_.sel=_.selShort,_.cfg=b,_.DPR=k||1,_.u=q,_.types=r,_.setSize=t,_.makeUrl=W(function(e){return C.href=e,C.href}),_.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},_.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?_.matchesMedia=function(e){return!e||matchMedia(e).matches}:_.matchesMedia=_.mMQ,_.matchesMedia.apply(this,arguments)},_.mMQ=function(e){return!e||ce(e)},_.calcLength=function(e){var t=ce(e,!0)||!1;return t<0&&(t=!1),t},_.supportsType=function(e){return!e||r[e]},_.parseSize=W(function(e){var t=(e||"").match(w);return{media:t&&t[1],length:t&&t[2]}}),_.parseSet=function(e){return e.cands||(e.cands=function(r,d){function e(e){var t,n=e.exec(r.substring(c));if(n)return t=n[0],c+=t.length,t}var f,m,t,n,o,i=r.length,c=0,p=[];function s(){var e,t,n,r,o,i,c,s,a,u=!1,l={};for(r=0;r<m.length;r++)i=(o=m[r])[o.length-1],c=o.substring(0,o.length-1),s=parseInt(c,10),a=parseFloat(c),B.test(c)&&"w"===i?((e||t)&&(u=!0),0===s?u=!0:e=s):H.test(c)&&"x"===i?((e||t||n)&&(u=!0),a<0?u=!0:t=a):B.test(c)&&"h"===i?((n||t)&&(u=!0),0===s?u=!0:n=s):u=!0;u||(l.url=f,e&&(l.w=e),t&&(l.d=t),n&&(l.h=n),n||t||e||(l.d=1),1===l.d&&(d.has1x=!0),l.set=d,p.push(l))}function a(){for(e(z),t="",n="in descriptor";;){if(o=r.charAt(c),"in descriptor"===n)if(X(o))t&&(m.push(t),t="",n="after descriptor");else{if(","===o)return c+=1,t&&m.push(t),void s();if("("===o)t+=o,n="in parens";else{if(""===o)return t&&m.push(t),void s();t+=o}}else if("in parens"===n)if(")"===o)t+=o,n="in descriptor";else{if(""===o)return m.push(t),void s();t+=o}else if("after descriptor"===n)if(X(o));else{if(""===o)return void s();n="in descriptor",c-=1}c+=1}}for(;;){if(e(M),i<=c)return p;f=e(D),m=[],","===f.slice(-1)?(f=f.replace(I,""),s()):a()}}(e.srcset,e)),e.cands},_.getEmValue=function(){var e;if(!o&&(e=i.body)){var t=i.createElement("div"),n=s.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",s.style.cssText=A,e.style.cssText=A,e.appendChild(t),o=t.offsetWidth,e.removeChild(t),o=parseFloat(o,10),s.style.cssText=n,e.style.cssText=r}return o||16},_.calcListLength=function(e){if(!(e in L)||b.uT){var t=_.calcLength(function(e){var t,n,r,o,i,c,s,a=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(n=function(e){var t,n="",r=[],o=[],i=0,c=0,s=!1;function a(){n&&(r.push(n),n="")}function u(){r[0]&&(o.push(r),r=[])}for(;;){if(""===(t=e.charAt(c)))return a(),u(),o;if(s){if("*"===t&&"/"===e[c+1]){s=!1,c+=2,a();continue}c+=1}else{if(X(t)){if(e.charAt(c-1)&&X(e.charAt(c-1))||!n){c+=1;continue}if(0===i){a(),c+=1;continue}t=" "}else if("("===t)i+=1;else if(")"===t)i-=1;else{if(","===t){a(),u(),c+=1;continue}if("/"===t&&"*"===e.charAt(c+1)){s=!0,c+=2;continue}}n+=t,c+=1}}}(e)).length,t=0;t<r;t++)if(i=(o=n[t])[o.length-1],s=i,a.test(s)&&0<=parseFloat(s)||u.test(s)||"0"===s||"-0"===s||"+0"===s){if(c=i,o.pop(),0===o.length)return c;if(o=o.join(" "),_.matchesMedia(o))return c}return"100vw"}(e));L[e]=t||q.width}return L[e]},_.setRes=function(e){var t;if(e)for(var n=0,r=(t=_.parseSet(e)).length;n<r;n++)se(t[n],e.sizes);return t},_.setRes.res=se,_.applySetCandidate=function(e,t){if(e.length){var n,r,o,i,c,s,a,u,l,d,f,m,p,h,v,g,w,y,A,E,S=t[_.ns],L=_.DPR;if(s=S.curSrc||t[x],(a=S.curCan||(d=t,f=s,!(m=e[0].set)&&f&&(m=(m=d[_.ns].sets)&&m[m.length-1]),(p=le(f,m))&&(f=_.makeUrl(f),d[_.ns].curSrc=f,(d[_.ns].curCan=p).res||se(p,p.set.sizes)),p))&&a.set===e[0].set&&((l=T&&!t.complete&&a.res-.1>L)||(a.cached=!0,a.res>=L&&(c=a))),!c)for(e.sort(ue),c=e[(i=e.length)-1],r=0;r<i;r++)if((n=e[r]).res>=L){c=e[o=r-1]&&(l||s!==_.makeUrl(n.url))&&(h=e[o].res,v=n.res,g=L,w=e[o].cached,E=A=y=void 0,"saveData"===b.algorithm?2.7<h?E=g+1:(A=(v-g)*(y=Math.pow(h-.6,1.5)),w&&(A+=.1*y),E=h+A):E=1<g?Math.sqrt(h*v):h,g<E)?e[o]:n;break}c&&(u=_.makeUrl(c.url),S.curSrc=u,S.curCan=c,u!==s&&_.setSrc(t,c),_.setSize(t))}},_.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},_.getSet=function(e){var t,n,r,o=!1,i=e[_.ns].sets;for(t=0;t<i.length&&!o;t++)if((n=i[t]).srcset&&_.matchesMedia(n.media)&&(r=_.supportsType(n.type))){"pending"===r&&(n=r),o=n;break}return o},_.parseSets=function(e,t,n){var r,o,i,c,s=t&&"PICTURE"===t.nodeName.toUpperCase(),a=e[_.ns];(a.src===u||n.src)&&(a.src=d.call(e,"src"),a.src?f.call(e,p,a.src):m.call(e,p)),(a.srcset===u||n.srcset||!_.supSrcset||e.srcset)&&(r=d.call(e,"srcset"),a.srcset=r,c=!0),a.sets=[],s&&(a.pic=!0,function(e,t){var n,r,o,i,c=e.getElementsByTagName("source");for(n=0,r=c.length;n<r;n++)(o=c[n])[_.ns]=!0,(i=o.getAttribute("srcset"))&&t.push({srcset:i,media:o.getAttribute("media"),type:o.getAttribute("type"),sizes:o.getAttribute("sizes")})}(t,a.sets)),a.srcset?(o={srcset:a.srcset,sizes:d.call(e,"sizes")},a.sets.push(o),(i=(l||a.src)&&g.test(a.srcset||""))||!a.src||le(a.src,o)||o.has1x||(o.srcset+=", "+a.src,o.cands.push({url:a.src,d:1,set:o}))):a.src&&a.sets.push({srcset:a.src,sizes:null}),a.curCan=null,a.curSrc=u,a.supported=!(s||o&&!_.supSrcset||i&&!_.supSizes),c&&_.supSrcset&&!a.supported&&(r?(f.call(e,h,r),e.srcset=""):m.call(e,h)),a.supported&&!a.srcset&&(!a.src&&e.src||e.src!==_.makeUrl(a.src))&&(null===a.src?e.removeAttribute("src"):e.src=a.src),a.parsed=!0},_.fillImg=function(e,t){var n,r,o,i,c,s=t.reselect||t.reevaluate;(e[_.ns]||(e[_.ns]={}),n=e[_.ns],s||n.evaled!==a)&&(n.parsed&&!t.reevaluate||_.parseSets(e,e.parentNode,t),n.supported?n.evaled=a:(r=e,i=_.getSet(r),c=!1,"pending"!==i&&(c=a,i&&(o=_.setRes(i),_.applySetCandidate(o,r))),r[_.ns].evaled=c))},_.setupRun=function(){R&&!E&&k===e.devicePixelRatio||(E=!1,k=e.devicePixelRatio,S={},L={},_.DPR=k||1,q.width=Math.max(e.innerWidth||0,s.clientWidth),q.height=Math.max(e.innerHeight||0,s.clientHeight),q.vw=q.width/100,q.vh=q.height/100,a=[q.height,q.width,k].join("-"),q.em=_.getEmValue(),q.rem=q.em)},_.supPicture?(ae=t,_.fillImg=t):(Y=e.attachEvent?/d$|^c/:/d$|^c|^i/,ee=function(){var e=i.readyState||"";te=setTimeout(ee,"loading"===e?200:999),i.body&&(_.fillImgs(),(G=G||Y.test(e))&&clearTimeout(te))},te=setTimeout(ee,i.body?9:99),ne=s.clientHeight,N(e,"resize",(Q=function(){E=Math.max(e.innerWidth||0,s.clientWidth)!==q.width||s.clientHeight!==ne,ne=s.clientHeight,E&&_.fillImgs()},K=99,Z=function(){var e=new Date-J;e<K?V=setTimeout(Z,K-e):(V=null,Q())},function(){J=new Date,V||(V=setTimeout(Z,K))})),N(i,"readystatechange",ee)),_.picturefill=ae,_.fillImgs=ae,_.teardownRun=t,ae._=_,e.picturefillCFG={pf:_,push:function(e){var t=e.shift();"function"==typeof _[t]?_[t].apply(_,e):(b[t]=e[0],R&&_.fillImgs({reselect:!0}))}};for(;y&&y.length;)e.picturefillCFG.push(y.shift());e.picturefill=ae,"object"==typeof module&&"object"==typeof module.exports?module.exports=ae:"function"==typeof define&&define.amd&&define("picturefill",function(){return ae}),_.supPicture||(r["image/webp"]=(re="image/webp",oe="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(ie=new e.Image).onerror=function(){r[re]=!1,ae()},ie.onload=function(){r[re]=1===ie.width,ae()},ie.src=oe,"pending"))}(window,document),function(){"use strict";if("undefined"!=typeof window&&window.addEventListener){var e,t,n,h=Object.create(null),v=function(){clearTimeout(t),t=setTimeout(e,100)},g=function(){},w=function(e){function t(e){var t;return void 0!==e.protocol?t=e:(t=document.createElement("a")).href=e,t.protocol.replace(/:/g,"")+t.host}var n,r,o;return window.XMLHttpRequest&&(n=new XMLHttpRequest,r=t(location),o=t(e),n=void 0===n.withCredentials&&""!==o&&o!==r?XDomainRequest||void 0:XMLHttpRequest),n},y="http://www.w3.org/1999/xlink";e=function(){var e,t,n,r,o,i,c,s,a,u,l=0;function d(){var e;0===(l-=1)&&(g(),window.addEventListener("resize",v,!1),window.addEventListener("orientationchange",v,!1),window.MutationObserver?((e=new MutationObserver(v)).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),g=function(){try{e.disconnect(),window.removeEventListener("resize",v,!1),window.removeEventListener("orientationchange",v,!1)}catch(e){}}):(document.documentElement.addEventListener("DOMSubtreeModified",v,!1),g=function(){document.documentElement.removeEventListener("DOMSubtreeModified",v,!1),window.removeEventListener("resize",v,!1),window.removeEventListener("orientationchange",v,!1)}))}function f(e){return function(){!0!==h[e.base]&&(e.useEl.setAttributeNS(y,"xlink:href","#"+e.hash),e.useEl.hasAttribute("href")&&e.useEl.setAttribute("href","#"+e.hash))}}function m(r){return function(){var e,t=document.body,n=document.createElement("x");r.onload=null,n.innerHTML=r.responseText,(e=n.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",t.insertBefore(e,t.firstChild)),d()}}function p(e){return function(){e.onerror=null,e.ontimeout=null,d()}}for(g(),a=document.getElementsByTagName("use"),o=0;o<a.length;o+=1){try{t=a[o].getBoundingClientRect()}catch(e){t=!1}e=(s=(r=a[o].getAttribute("href")||a[o].getAttributeNS(y,"href")||a[o].getAttribute("xlink:href"))&&r.split?r.split("#"):["",""])[0],n=s[1],i=t&&0===t.left&&0===t.right&&0===t.top&&0===t.bottom,t&&0===t.width&&0===t.height&&!i?(a[o].hasAttribute("href")&&a[o].setAttributeNS(y,"xlink:href",r),e.length&&(!0!==(u=h[e])&&setTimeout(f({useEl:a[o],base:e,hash:n}),0),void 0===u&&void 0!==(c=w(e))&&(u=new c,(h[e]=u).onload=m(u),u.onerror=p(u),u.ontimeout=p(u),u.open("GET",e),u.send(),l+=1))):i?e.length&&h[e]&&setTimeout(f({useEl:a[o],base:e,hash:n}),0):void 0===h[e]?h[e]=!0:h[e].onload&&(h[e].abort(),delete h[e].onload,h[e]=!0)}a="",l+=1,d()},n=function(){window.removeEventListener("load",n,!1),t=setTimeout(e,0)},"complete"!==document.readyState?window.addEventListener("load",n,!1):n()}}(),function(){"NodeList"in window&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)});window.util={KeyCode:{LEFT_ARROW:37,RIGHT_ARROW:39,ESC:27},getTemplateContent:function(e){if("content"in document.createElement("template"))return document.importNode(e.content,!0);for(var t=document.createDocumentFragment(),n=e.childNodes,r=0;r<n.length;r++)t.appendChild(n[r].cloneNode(!0));return t}}}(),window.removeDebounce=function(e){var t;t&&clearTimeout(t),t=setTimeout(e,500)},function(){var r=200,o=400,i=404,c=500,s=function(e,t){var n=new XMLHttpRequest;return n.addEventListener("load",function(){switch(n.status){case r:e(n.response);break;case o:t("Неверный запрос к серверу.");break;case i:t("Запрашиваемый ресурс не найден на сервере.");break;case c:t("Произошла внутренняя ошибка сервера.");break;default:t("Код ответа сервера: "+n.status+" "+n.statusText+".")}}),n.addEventListener("error",function(){t("Произошла ошибка соединения с сервером.")}),n.addEventListener("timeout",function(){t("Запрос к серверу не успел выполниться за отведённое время.")}),n};window.backend={download:function(e,t,n){var r=s(t,n);r.open("GET",e),r.send()},upload:function(e,t,n,r){var o=s(n,r);o.open("POST",t),o.send(e)}}}(),function(){var e=document.querySelector(".page-header__bar"),t=document.querySelector(".main-nav");if(e&&t){var n=e.querySelector(".menu-btn"),r=t.scrollHeight+"px";e.classList.add("page-header__bar--js"),n.classList.add("page-header__menu-btn--js"),t.classList.add("page-header__main-nav--js"),n.addEventListener("click",function(e){e.preventDefault(),t.style.height=0===t.offsetHeight?r:0}),window.addEventListener("resize",function(){t.removeAttribute("style")})}}(),function(){var r=document.querySelector(".popup"),o=document.querySelector(".overlay");if(r&&o){var i=r.querySelector(".popup__title"),c=r.querySelector(".popup__text"),s=r.querySelector(".popup__btn"),a=r.querySelector(".popup__close-btn"),u=function(e){e.keyCode===window.util.KeyCode.ESC&&(e.preventDefault(),l())},l=function(){o.hidden=!0,r.classList.remove("popup--shown"),a.removeEventListener("click",l),o.removeEventListener("click",l),document.removeEventListener("keydown",u)};r.hidden=!1,window.popup={open:function(e,t,n){i.textContent=e,c.textContent=t,s.textContent=n,a.addEventListener("click",l),o.addEventListener("click",l),document.addEventListener("keydown",u),r.classList.add("popup--shown"),o.hidden=!1},close:l}}}(),function(){var o=document.querySelector(".sedona-location");window.initMap=function(){if(o){var e={lat:34.869867,lng:-111.760635},t=o.querySelector("#map"),n={center:e,zoom:8,minZoom:4,disableDoubleClickZoom:!0,disableDefaultUI:!0,backgroundColor:"#fff"},r={position:e,map:new google.maps.Map(t,n),optimized:!1,icon:{url:"img/icon-map-marker.svg",scaledSize:new google.maps.Size(25,25)}};new google.maps.Marker(r);o.classList.add("sedona-location--js"),o.querySelector(".sedona-location__img").classList.add("sedona-location__img--js")}}}(),function(){var e=document.querySelector("#hotel"),r=document.querySelector(".hotels__container");if(e&&r){var t=window.util.getTemplateContent(e),i=t.querySelector(".hotel-card"),c=t.querySelector(".hotel-card__star"),o=function(e){var t=i.cloneNode(!0),n=t.querySelector(".hotel-card__photo-container"),r=n.querySelector(".hotel-card__photo"),o=t.querySelector(".hotel-card__description");return r.src="img/hotel-"+e.id+"-mobile@1x.jpg",r.srcset="img/hotel-"+e.id+"-mobile@2x.jpg 2x",r.alt="Отель "+e.title,n.querySelector("#source-jpg").srcset="img/hotel-"+e.id+"@1x.jpg 1x, img/hotel-"+e.id+"@2x.jpg 2x",n.querySelector("#source-webp-mobile").srcset="img/hotel-"+e.id+"-mobile@1x.webp 1x, img/hotel-"+e.id+"-mobile@2x.webp 2x",n.querySelector("#source-webp").srcset="img/hotel-"+e.id+"@1x.webp 1x, img/hotel-"+e.id+"@2x.webp 2x",o.querySelector(".hotel-card__title").textContent=e.title,o.querySelector(".hotel-card__category-transcription").textContent="Категория отеля: "+e.category+" звезды",o.querySelector(".hotel-card__category").appendChild(function(e){for(var t=document.createDocumentFragment(),n=0;n<e;n++)t.appendChild(c.cloneNode(!0));return t}(e.category)),o.querySelector(".hotel-card__rating").textContent="Рейтинг: "+e.rating,o.querySelector(".hotel-card__type").textContent=e.type,o.querySelector(".hotel-card__price").textContent="От "+e.cost+" ₽",t};window.renderContent=function(e){var t,n=e.length?function(e){for(var t=document.createDocumentFragment(),n=0;n<e.length;n++)t.appendChild(o(e[n]));return t}(e):((t=document.createElement("p")).textContent="Не удалось найти ни одного отеля. Измените критерии поиска.",t.classList.add("hotels__search-error"),t);r.innerHTML="",r.appendChild(n)}}}(),function(){var a=function(e,t,n){switch(n){case"by-increase":return e-t;case"by-decrease":return t-e;default:return 0}};window.sortHotels=function(e,t){switch(t.type){case"by-cost":c=e,s=t.order,c.sort(function(e,t){return a(e.cost,t.cost,s)});break;case"by-stars":o=e,i=t.order,o.sort(function(e,t){return a(e.category,t.category,i)});break;case"by-rating":n=e,r=t.order,n.sort(function(e,t){return a(e.rating,t.rating,r)})}var n,r,o,i,c,s;window.renderContent(e)}}(),function(){var s=document.querySelector(".sort-pane");if(s){var a=s.querySelector('output[name="search-results"]');window.showHotels=function(e,t){var n,r,o,i={type:s.querySelector(".sort-type__control--current").dataset.name,order:s.querySelector(".sort-order__control--current").dataset.name},c=(r=t,o=[],(n=e)&&n.forEach(function(e){var t=!0;for(var n in(-1===r.type.indexOf(e.type)||e.cost<r.costLimit.lower||e.cost>r.costLimit.upper)&&(t=!1),r.features)r.features[n]&&r.features[n]!==e.features[n]&&(t=!1);t&&o.push(e)}),a.textContent=o.length,o);window.sortHotels(c,i)}}}(),function(){var e=document.querySelector(".search-form");if(e){var n=e.querySelectorAll('input[type="checkbox"][name^="type-"]'),r=e.querySelectorAll('input[type="checkbox"][name^="infrastructure-"]'),o=e.querySelector("#lower-limit"),i=e.querySelector("#upper-limit");window.specifyConstraints=function(){var t={type:[],features:{},costLimit:{lower:o.value,upper:i.value}};return n.forEach(function(e){e.checked&&t.type.push(e.dataset.name)}),r.forEach(function(e){e.checked?t.features[e.dataset.name]=!0:t.features[e.dataset.name]=!1}),t}}}(),function(){var n=document.querySelector(".search-form__range");if(n){n.hidden=!1;var c=n.querySelector(".range__scale"),r={left:c.getBoundingClientRect().left,right:c.getBoundingClientRect().right},o=n.querySelector(".range__interval"),i=n.querySelector(".range__picker--lower-limit"),s=n.querySelector(".range__picker--upper-limit"),a=document.querySelector("#lower-limit"),u=document.querySelector("#upper-limit"),l=function(e){return e.getBoundingClientRect().left+e.offsetWidth/2},d=function(e,t,n){return e<t?t-r.left:n<e?n-r.left:e-r.left},f=function(){o.style.left=i.style.left,o.style.right=100-parseInt(s.style.left,10)+"%"},m=function(e,t,n){var r=Math.round(e/c.offsetWidth*100);n.value=50*r,t.style.left=r+"%",f()},p=function(e){var t=n.querySelector(".range__picker--current");t&&t.classList.remove("range__picker--current"),e.classList.add("range__picker--current"),e.focus()},h=function(e,t,n,r){if(e.keyCode===window.util.KeyCode.LEFT_ARROW||e.keyCode===window.util.KeyCode.RIGHT_ARROW){var o=function(e,t){var n=l(t);switch(e.keyCode){case window.util.KeyCode.LEFT_ARROW:n-=c.offsetWidth/100;break;case window.util.KeyCode.RIGHT_ARROW:n+=c.offsetWidth/100}return n}(e,n),i=d(o,t.left,t.right);p(n),m(i,n,r)}},e=function(e,t,n,r){parseInt(e.value,10)<=parseInt(n,10)&&(e.value=n),parseInt(e.value,10)>=parseInt(r,10)&&(e.value=r),t.style.left=parseInt(e.value,10)/50+"%",f(),p(t)};i.style.left="0%",s.style.left="100%",f(),i.addEventListener("mousedown",function(){var e=function(e){var t=d(e.clientX,r.left,l(s));m(t,i,a)},t=function(){document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t)};p(i),document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)}),i.addEventListener("touchstart",function(){var e=function(e){var t=d(e.touches[0].clientX,r.left,l(s));m(t,i,a)},t=function(){document.removeEventListener("touchmove",e),document.removeEventListener("touchend",t)};p(i),document.addEventListener("touchmove",e),document.addEventListener("touchend",t)}),i.addEventListener("keydown",function(e){var t={left:r.left,right:l(s)};h(e,t,i,a)}),s.addEventListener("mousedown",function(){var e=function(e){var t=d(e.clientX,l(i),r.right);m(t,s,u)},t=function(){document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t)};p(s),document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)}),s.addEventListener("touchstart",function(){var e=function(e){var t=d(e.touches[0].clientX,l(i),r.right);m(t,s,u)},t=function(){document.removeEventListener("touchmove",e),document.removeEventListener("touchend",t)};p(s),document.addEventListener("touchmove",e),document.addEventListener("touchend",t)}),s.addEventListener("keydown",function(e){var t={left:l(i),right:r.right};h(e,t,s,u)}),c.addEventListener("click",function(e){if(e.target===c||e.target===o){var t=o.getBoundingClientRect().left+o.offsetWidth/2;(e.clientX<l(i)||e.clientX<=t)&&(p(i),m(e.clientX-r.left,i,a)),(e.clientX>l(s)||e.clientX>t)&&(p(s),m(e.clientX-r.left,s,u))}}),a.addEventListener("change",function(){e(a,i,a.min,u.value)}),u.addEventListener("change",function(){e(u,s,a.value,u.max)})}}(),function(){var e=document.querySelector(".search-form"),t=document.querySelector(".sort-pane");if(e&&t){var n,r,o="data/hotels.json",i="Что-то пошло не так!",c="Не удалось загрузить список отелей. ",s="Ещё раз",a=e.querySelector(".search-form__btn"),u=t.querySelector(".sort-pane__sort-type"),l=u.querySelectorAll(".sort-type__control"),d=u.querySelector(".sort-type__control--current"),f=t.querySelector(".sort-pane__sort-order"),m=f.querySelectorAll(".sort-order__control"),p=f.querySelector(".sort-order__control--current"),h=document.querySelector(".popup__btn"),v=function(){r=window.specifyConstraints(),window.showHotels(n,r)},g=function(){window.popup.close(),setTimeout(function(){window.backend.download(o,w,y)},1e3),h.removeEventListener("click",g)},w=function(e){n=JSON.parse(e),v()},y=function(e){window.popup.open(i,c+e,s),h.addEventListener("click",g)},A=function(e){e.preventDefault(),e.target!==d&&(d.classList.remove("sort-type__control--current"),e.target.classList.add("sort-type__control--current"),d=e.target,window.removeDebounce(function(){window.showHotels(n,r)}))},E=function(e){e.preventDefault(),e.target!==p&&(p.classList.remove("sort-order__control--current"),e.target.classList.add("sort-order__control--current"),p=e.target,window.removeDebounce(function(){window.showHotels(n,r)}))};window.backend.download(o,w,y),a.addEventListener("click",function(e){e.preventDefault(),v()}),l.forEach(function(e){e.addEventListener("click",A)}),m.forEach(function(e){e.addEventListener("click",E)})}}(),function(){var e=document.querySelector(".feedback-form");if(e){var t=e.querySelectorAll(".form__field");e.querySelector(".feedback-form__btn").addEventListener("click",function(){t.forEach(function(e){e.validity.valid||e.classList.add("form__field--invalid")})}),t.forEach(function(e){e.addEventListener("input",function(){e.validity.patternMismatch?e.classList.add("form__field--invalid"):e.classList.remove("form__field--invalid")})})}}(),function(){var t=document.querySelector(".feedback-form");if(t){var n="https://echo.htmlacademy.ru",e={TITLE:"Ваш отзыв отправлен!",TEXT:"Спасибо за Ваше участие, Ваш отзыв уже поступил к нам. Мы обязательно учтём все Ваши замечания!",BTN_TEXT:"Ок"},r={TITLE:"Что-то пошло не так!",TEXT:"К сожалению, Ваш отзыв не был отправлен. ",BTN_TEXT:"Ещё раз"},o=t.querySelector(".feedback-form__btn"),i=document.querySelector(".popup__btn"),c=function(){window.popup.close(),i.removeEventListener("click",c)},s=function(){window.popup.close(),setTimeout(function(){window.backend.upload(new FormData(t),n,a,u)},1e3),i.removeEventListener("click",s)},a=function(){o.disabled=!1,window.popup.open(e.TITLE,e.TEXT,e.BTN_TEXT),t.reset(),i.addEventListener("click",c)},u=function(e){o.disabled=!1,window.popup.open(r.TITLE,r.TEXT+e,r.BTN_TEXT),i.addEventListener("click",s)};t.addEventListener("submit",function(e){e.preventDefault(),o.disabled=!0,window.backend.upload(new FormData(t),n,a,u)})}}();