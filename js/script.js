"use strict";!function(){var n=document.querySelector(".feedback-form");if(n){var r=200,i=400,o=500,s={SUCCESS:"Ваш отзыв отправлен!",ERROR:"Что-то пошло не так!"},c="Спасибо за Ваше участие, Ваш отзыв уже поступил к нам. Мы обязательно учтём все Ваши замечания!",a=n.querySelector(".feedback-form__btn"),u=document.querySelector(".overlay"),l=document.querySelector(".popup"),d=l.querySelector(".popup__title"),f=l.querySelector(".popup__text"),m=l.querySelector(".popup__btn"),p=function(e){27===e.keyCode&&(e.preventDefault(),v())},h=function(e,t){d.textContent=e,f.textContent=t,m.addEventListener("click",v),u.addEventListener("click",v),document.addEventListener("keydown",p),l.classList.add("popup--shown"),u.hidden=!1},v=function(){u.hidden=!0,l.classList.remove("popup--shown"),m.removeEventListener("click",v),u.removeEventListener("click",v),document.removeEventListener("keydown",p)},g=function(e){a.disabled=!1,h(s.ERROR,e)};l.hidden=!1,n.addEventListener("submit",function(e){var t=new XMLHttpRequest;t.addEventListener("load",function(){switch(t.status){case r:a.disabled=!1,h(s.SUCCESS,c),n.reset();break;case i:g("Неверный запрос");break;case o:g("Внутренняя ошибка сервера");break;default:g("Код ответа сервера: "+t.status+" "+t.statusText)}}),t.addEventListener("error",function(){g("Произошла ошибка соединения")}),t.addEventListener("timeout",function(){g("Запрос к серверу не успел выполниться за отведённое время")}),e.preventDefault(),a.disabled=!0,t.open("POST","https://echo.htmlacademy.ru"),t.send(new FormData(n))})}}(),function(){var e=document.querySelector(".feedback-form");if(e){var t=e.querySelectorAll(".form__field");e.querySelector(".feedback-form__btn").addEventListener("click",function(){t.forEach(function(e){e.validity.valid||e.classList.add("form__field--invalid")})}),t.forEach(function(e){e.addEventListener("input",function(){e.validity.patternMismatch?e.classList.add("form__field--invalid"):e.classList.remove("form__field--invalid")})})}}(),function(){var e,o=document.querySelector(".hotels__container");if(o){var t,n=200,r=400,i=404,s=500;"NodeList"in window&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)});var c=function(e){if("content"in document.createElement("template"))return document.importNode(e.content,!0);for(var t=document.createDocumentFragment(),n=e.childNodes,r=0;r<n.length;r++)t.appendChild(n[r].cloneNode(!0));return t}(document.querySelector("#hotel")),a=c.querySelector(".hotel-card"),u=c.querySelector(".hotel-card__star"),l=document.querySelector(".overlay"),d=document.querySelector(".popup"),f=d.querySelector(".popup__title"),m=d.querySelector(".popup__text"),p=d.querySelector(".popup__btn"),h=document.querySelector(".search-form"),v=h.querySelectorAll('input[type="checkbox"][name^="type-"]'),g=h.querySelectorAll('input[type="checkbox"][name^="infrastructure-"]'),A=h.querySelector("#lower-limit"),y=h.querySelector("#upper-limit"),w=h.querySelector(".search-form__btn"),E=document.querySelector('output[name="search-results"]'),S=function(e){var t=a.cloneNode(!0),n=t.querySelector(".hotel-card__photo-container"),r=n.querySelector(".hotel-card__photo"),i=t.querySelector(".hotel-card__description");return r.src="img/hotel-"+e.id+"-mobile@1x.jpg",r.srcset="img/hotel-"+e.id+"-mobile@2x.jpg 2x",r.alt="Отель "+e.title,n.querySelector("#source-jpg").srcset="img/hotel-"+e.id+"@1x.jpg 1x, img/hotel-"+e.id+"@2x.jpg 2x",n.querySelector("#source-webp-mobile").srcset="img/hotel-"+e.id+"-mobile@1x.webp 1x, img/hotel-"+e.id+"-mobile@2x.webp 2x",n.querySelector("#source-webp").srcset="img/hotel-"+e.id+"@1x.webp 1x, img/hotel-"+e.id+"@2x.webp 2x",i.querySelector(".hotel-card__title").textContent=e.title,i.querySelector(".hotel-card__category-transcription").textContent="Категория отеля: "+e.category+" звезды",i.querySelector(".hotel-card__category").appendChild(function(e){for(var t=document.createDocumentFragment(),n=0;n<e;n++)t.appendChild(u.cloneNode(!0));return t}(e.category)),i.querySelector(".hotel-card__rating").textContent="Рейтинг: "+e.rating,i.querySelector(".hotel-card__type").textContent=e.type,i.querySelector(".hotel-card__price").textContent="От "+e.cost+" ₽",t},L=function(e){27===e.keyCode&&(e.preventDefault(),_())},b=function(e){f.textContent="Что-то пошло не так!",m.textContent="Не удалось загрузить список отелей. "+e,p.addEventListener("click",_),l.addEventListener("click",_),document.addEventListener("keydown",L),d.classList.add("popup--shown"),l.hidden=!1},_=function(){l.hidden=!0,d.classList.remove("popup--shown"),p.removeEventListener("click",_),l.removeEventListener("click",_),document.removeEventListener("keydown",L)},x=function(){var r=[],i={type:[],features:{}};if(v.forEach(function(e){e.checked&&i.type.push(e.dataset.name)}),g.forEach(function(e){e.checked?i.features[e.dataset.name]=!0:i.features[e.dataset.name]=!1}),t&&t.forEach(function(e){var t=!0;for(var n in(-1===i.type.indexOf(e.type)||e.cost<A.value||e.cost>y.value)&&(t=!1),i.features)i.features[n]&&i.features[n]!==e.features[n]&&(t=!1);t&&r.push(e)}),E.textContent=r.length,function(e){for(var t=document.createDocumentFragment(),n=0;n<e.length;n++)t.appendChild(S(e[n]));o.innerHTML="",o.appendChild(t)}(r),!r.length){var e=document.createElement("p");e.textContent="Не удалось найти ни одного отеля. Измените критерии поиска.",e.classList.add("hotels__search-error"),o.appendChild(e)}};d.hidden=!1,(e=new XMLHttpRequest).addEventListener("load",function(){switch(e.status){case n:t=JSON.parse(e.response),x();break;case r:b("Неверный запрос.");break;case i:b("Запрашиваемый ресурс не найден.");break;case s:b("Внутренняя ошибка сервера.");break;default:b("Код ответа сервера: "+e.status+" "+e.statusText+".")}}),e.addEventListener("error",function(){b("Произошла ошибка соединения.")}),e.addEventListener("timeout",function(){b("Запрос к серверу не успел выполниться за отведённое время.")}),e.open("GET","data/hotels.json"),e.send(),w.addEventListener("click",function(e){e.preventDefault(),x()})}}(),function(){var i=document.querySelector(".sedona-location");window.initMap=function(){if(i){var e={lat:34.869867,lng:-111.760635},t=i.querySelector("#map"),n={center:e,zoom:8,minZoom:4,disableDoubleClickZoom:!0,disableDefaultUI:!0,backgroundColor:"#fff"},r={position:e,map:new google.maps.Map(t,n),optimized:!1,icon:{url:"img/icon-map-marker.svg",scaledSize:new google.maps.Size(25,25)}};new google.maps.Marker(r);i.classList.add("sedona-location--js"),i.querySelector(".sedona-location__img").classList.add("sedona-location__img--js")}}}(),function(){var e=document.querySelector(".page-header__bar");if(e){var t=e.querySelector(".menu-btn"),n=document.querySelector(".main-nav"),r=n.scrollHeight+"px";e.classList.add("page-header__bar--js"),t.classList.add("page-header__menu-btn--js"),n.classList.add("page-header__main-nav--js"),t.addEventListener("click",function(e){e.preventDefault(),n.style.height=0===n.offsetHeight?r:0}),window.addEventListener("resize",function(){n.removeAttribute("style")})}}(),function(e){var t,i,n,r,o,s,c,a=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(a)&&a.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(i=document.createElement("source"),n=function(e){var t,n,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=i.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout(function(){r.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},r=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},o=function(){clearTimeout(t),t=setTimeout(r,99)},s=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){o(),s&&s.addListener&&s.addListener(o)},i.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),o))}(window),function(e,o,u){var i,l,a;o.createElement("picture");var b={},s=!1,t=function(){},n=o.createElement("img"),d=n.getAttribute,f=n.setAttribute,m=n.removeAttribute,c=o.documentElement,r={},_={algorithm:""},p="data-pfsrc",h=p+"set",v=navigator.userAgent,x=/rident/.test(v)||/ecko/.test(v)&&v.match(/rv\:(\d+)/)&&35<RegExp.$1,q="currentSrc",g=/\s+\+?\d+(e\d+)?w/,A=/(\([^)]+\))?\s*(.+)/,y=e.picturefillCFG,w="font-size:100%!important;",E=!0,S={},L={},C=e.devicePixelRatio,k={px:1,in:96},T=o.createElement("a"),R=!1,z=/^[ \t\n\r\u000c]+/,M=/^[, \t\n\r\u000c]+/,D=/^[^ \t\n\r\u000c]+/,B=/[,]+$/,I=/^\d+$/,N=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,P=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},H=function(t){var n={};return function(e){return e in n||(n[e]=t(e)),n[e]}};function U(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var j,O,$,W,F,G,Q,X,V,J,K,Z,Y,ee,te,ne,re,ie,oe,se=(j=/^([\d\.]+)(em|vw|px)$/,O=H(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var n;if(!(e in S))if(S[e]=!1,t&&(n=e.match(j)))S[e]=n[1]*k[n[2]];else try{S[e]=new Function("e",O(e))(k)}catch(e){}return S[e]}),ce=function(e,t){return e.w?(e.cWidth=b.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ae=function(e){if(s){var t,n,r,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),r=(t=i.elements||b.qsa(i.context||o,i.reevaluate||i.reselect?b.sel:b.selShort)).length){for(b.setupRun(i),R=!0,n=0;n<r;n++)b.fillImg(t[n],i);b.teardownRun(i)}}};function ue(e,t){return e.res-t.res}function le(e,t){var n,r,i;if(e&&t)for(i=b.parseSet(t),e=b.makeUrl(e),n=0;n<i.length;n++)if(e===b.makeUrl(i[n].url)){r=i[n];break}return r}e.console&&console.warn,q in n||(q="src"),r["image/jpeg"]=!0,r["image/gif"]=!0,r["image/png"]=!0,r["image/svg+xml"]=o.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),b.ns=("pf"+(new Date).getTime()).substr(0,9),b.supSrcset="srcset"in n,b.supSizes="sizes"in n,b.supPicture=!!e.HTMLPictureElement,b.supSrcset&&b.supPicture&&!b.supSizes&&($=o.createElement("img"),n.srcset="data:,a",$.src="data:,a",b.supSrcset=n.complete===$.complete,b.supPicture=b.supSrcset&&b.supPicture),b.supSrcset&&!b.supSizes?(W="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",F=o.createElement("img"),G=function(){2===F.width&&(b.supSizes=!0),l=b.supSrcset&&!b.supSizes,s=!0,setTimeout(ae)},F.onload=G,F.onerror=G,F.setAttribute("sizes","9px"),F.srcset=W+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",F.src=W):s=!0,b.selShort="picture>img,img[srcset]",b.sel=b.selShort,b.cfg=_,b.DPR=C||1,b.u=k,b.types=r,b.setSize=t,b.makeUrl=H(function(e){return T.href=e,T.href}),b.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},b.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?b.matchesMedia=function(e){return!e||matchMedia(e).matches}:b.matchesMedia=b.mMQ,b.matchesMedia.apply(this,arguments)},b.mMQ=function(e){return!e||se(e)},b.calcLength=function(e){var t=se(e,!0)||!1;return t<0&&(t=!1),t},b.supportsType=function(e){return!e||r[e]},b.parseSize=H(function(e){var t=(e||"").match(A);return{media:t&&t[1],length:t&&t[2]}}),b.parseSet=function(e){return e.cands||(e.cands=function(r,d){function e(e){var t,n=e.exec(r.substring(s));if(n)return t=n[0],s+=t.length,t}var f,m,t,n,i,o=r.length,s=0,p=[];function c(){var e,t,n,r,i,o,s,c,a,u=!1,l={};for(r=0;r<m.length;r++)o=(i=m[r])[i.length-1],s=i.substring(0,i.length-1),c=parseInt(s,10),a=parseFloat(s),I.test(s)&&"w"===o?((e||t)&&(u=!0),0===c?u=!0:e=c):N.test(s)&&"x"===o?((e||t||n)&&(u=!0),a<0?u=!0:t=a):I.test(s)&&"h"===o?((n||t)&&(u=!0),0===c?u=!0:n=c):u=!0;u||(l.url=f,e&&(l.w=e),t&&(l.d=t),n&&(l.h=n),n||t||e||(l.d=1),1===l.d&&(d.has1x=!0),l.set=d,p.push(l))}function a(){for(e(z),t="",n="in descriptor";;){if(i=r.charAt(s),"in descriptor"===n)if(U(i))t&&(m.push(t),t="",n="after descriptor");else{if(","===i)return s+=1,t&&m.push(t),void c();if("("===i)t+=i,n="in parens";else{if(""===i)return t&&m.push(t),void c();t+=i}}else if("in parens"===n)if(")"===i)t+=i,n="in descriptor";else{if(""===i)return m.push(t),void c();t+=i}else if("after descriptor"===n)if(U(i));else{if(""===i)return void c();n="in descriptor",s-=1}s+=1}}for(;;){if(e(M),o<=s)return p;f=e(D),m=[],","===f.slice(-1)?(f=f.replace(B,""),c()):a()}}(e.srcset,e)),e.cands},b.getEmValue=function(){var e;if(!i&&(e=o.body)){var t=o.createElement("div"),n=c.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",c.style.cssText=w,e.style.cssText=w,e.appendChild(t),i=t.offsetWidth,e.removeChild(t),i=parseFloat(i,10),c.style.cssText=n,e.style.cssText=r}return i||16},b.calcListLength=function(e){if(!(e in L)||_.uT){var t=b.calcLength(function(e){var t,n,r,i,o,s,c,a=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(n=function(e){var t,n="",r=[],i=[],o=0,s=0,c=!1;function a(){n&&(r.push(n),n="")}function u(){r[0]&&(i.push(r),r=[])}for(;;){if(""===(t=e.charAt(s)))return a(),u(),i;if(c){if("*"===t&&"/"===e[s+1]){c=!1,s+=2,a();continue}s+=1}else{if(U(t)){if(e.charAt(s-1)&&U(e.charAt(s-1))||!n){s+=1;continue}if(0===o){a(),s+=1;continue}t=" "}else if("("===t)o+=1;else if(")"===t)o-=1;else{if(","===t){a(),u(),s+=1;continue}if("/"===t&&"*"===e.charAt(s+1)){c=!0,s+=2;continue}}n+=t,s+=1}}}(e)).length,t=0;t<r;t++)if(o=(i=n[t])[i.length-1],c=o,a.test(c)&&0<=parseFloat(c)||u.test(c)||"0"===c||"-0"===c||"+0"===c){if(s=o,i.pop(),0===i.length)return s;if(i=i.join(" "),b.matchesMedia(i))return s}return"100vw"}(e));L[e]=t||k.width}return L[e]},b.setRes=function(e){var t;if(e)for(var n=0,r=(t=b.parseSet(e)).length;n<r;n++)ce(t[n],e.sizes);return t},b.setRes.res=ce,b.applySetCandidate=function(e,t){if(e.length){var n,r,i,o,s,c,a,u,l,d,f,m,p,h,v,g,A,y,w,E,S=t[b.ns],L=b.DPR;if(c=S.curSrc||t[q],(a=S.curCan||(d=t,f=c,!(m=e[0].set)&&f&&(m=(m=d[b.ns].sets)&&m[m.length-1]),(p=le(f,m))&&(f=b.makeUrl(f),d[b.ns].curSrc=f,(d[b.ns].curCan=p).res||ce(p,p.set.sizes)),p))&&a.set===e[0].set&&((l=x&&!t.complete&&a.res-.1>L)||(a.cached=!0,a.res>=L&&(s=a))),!s)for(e.sort(ue),s=e[(o=e.length)-1],r=0;r<o;r++)if((n=e[r]).res>=L){s=e[i=r-1]&&(l||c!==b.makeUrl(n.url))&&(h=e[i].res,v=n.res,g=L,A=e[i].cached,E=w=y=void 0,"saveData"===_.algorithm?2.7<h?E=g+1:(w=(v-g)*(y=Math.pow(h-.6,1.5)),A&&(w+=.1*y),E=h+w):E=1<g?Math.sqrt(h*v):h,g<E)?e[i]:n;break}s&&(u=b.makeUrl(s.url),S.curSrc=u,S.curCan=s,u!==c&&b.setSrc(t,s),b.setSize(t))}},b.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},b.getSet=function(e){var t,n,r,i=!1,o=e[b.ns].sets;for(t=0;t<o.length&&!i;t++)if((n=o[t]).srcset&&b.matchesMedia(n.media)&&(r=b.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},b.parseSets=function(e,t,n){var r,i,o,s,c=t&&"PICTURE"===t.nodeName.toUpperCase(),a=e[b.ns];(a.src===u||n.src)&&(a.src=d.call(e,"src"),a.src?f.call(e,p,a.src):m.call(e,p)),(a.srcset===u||n.srcset||!b.supSrcset||e.srcset)&&(r=d.call(e,"srcset"),a.srcset=r,s=!0),a.sets=[],c&&(a.pic=!0,function(e,t){var n,r,i,o,s=e.getElementsByTagName("source");for(n=0,r=s.length;n<r;n++)(i=s[n])[b.ns]=!0,(o=i.getAttribute("srcset"))&&t.push({srcset:o,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}(t,a.sets)),a.srcset?(i={srcset:a.srcset,sizes:d.call(e,"sizes")},a.sets.push(i),(o=(l||a.src)&&g.test(a.srcset||""))||!a.src||le(a.src,i)||i.has1x||(i.srcset+=", "+a.src,i.cands.push({url:a.src,d:1,set:i}))):a.src&&a.sets.push({srcset:a.src,sizes:null}),a.curCan=null,a.curSrc=u,a.supported=!(c||i&&!b.supSrcset||o&&!b.supSizes),s&&b.supSrcset&&!a.supported&&(r?(f.call(e,h,r),e.srcset=""):m.call(e,h)),a.supported&&!a.srcset&&(!a.src&&e.src||e.src!==b.makeUrl(a.src))&&(null===a.src?e.removeAttribute("src"):e.src=a.src),a.parsed=!0},b.fillImg=function(e,t){var n,r,i,o,s,c=t.reselect||t.reevaluate;(e[b.ns]||(e[b.ns]={}),n=e[b.ns],c||n.evaled!==a)&&(n.parsed&&!t.reevaluate||b.parseSets(e,e.parentNode,t),n.supported?n.evaled=a:(r=e,o=b.getSet(r),s=!1,"pending"!==o&&(s=a,o&&(i=b.setRes(o),b.applySetCandidate(i,r))),r[b.ns].evaled=s))},b.setupRun=function(){R&&!E&&C===e.devicePixelRatio||(E=!1,C=e.devicePixelRatio,S={},L={},b.DPR=C||1,k.width=Math.max(e.innerWidth||0,c.clientWidth),k.height=Math.max(e.innerHeight||0,c.clientHeight),k.vw=k.width/100,k.vh=k.height/100,a=[k.height,k.width,C].join("-"),k.em=b.getEmValue(),k.rem=k.em)},b.supPicture?(ae=t,b.fillImg=t):(Y=e.attachEvent?/d$|^c/:/d$|^c|^i/,ee=function(){var e=o.readyState||"";te=setTimeout(ee,"loading"===e?200:999),o.body&&(b.fillImgs(),(Q=Q||Y.test(e))&&clearTimeout(te))},te=setTimeout(ee,o.body?9:99),ne=c.clientHeight,P(e,"resize",(X=function(){E=Math.max(e.innerWidth||0,c.clientWidth)!==k.width||c.clientHeight!==ne,ne=c.clientHeight,E&&b.fillImgs()},V=99,Z=function(){var e=new Date-K;e<V?J=setTimeout(Z,V-e):(J=null,X())},function(){K=new Date,J||(J=setTimeout(Z,V))})),P(o,"readystatechange",ee)),b.picturefill=ae,b.fillImgs=ae,b.teardownRun=t,ae._=b,e.picturefillCFG={pf:b,push:function(e){var t=e.shift();"function"==typeof b[t]?b[t].apply(b,e):(_[t]=e[0],R&&b.fillImgs({reselect:!0}))}};for(;y&&y.length;)e.picturefillCFG.push(y.shift());e.picturefill=ae,"object"==typeof module&&"object"==typeof module.exports?module.exports=ae:"function"==typeof define&&define.amd&&define("picturefill",function(){return ae}),b.supPicture||(r["image/webp"]=(re="image/webp",ie="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(oe=new e.Image).onerror=function(){r[re]=!1,ae()},oe.onload=function(){r[re]=1===oe.width,ae()},oe.src=ie,"pending"))}(window,document),function(){var n=document.querySelector(".search-form__range");if(n){n.hidden=!1;var i=n.querySelector(".range__scale"),o={left:i.getBoundingClientRect().left,right:i.getBoundingClientRect().right},e=n.querySelector(".range__interval"),s=n.querySelector(".range__picker--lower-limit"),c=n.querySelector(".range__picker--upper-limit"),a=s.offsetWidth/2,u=document.querySelector("#lower-limit"),l=document.querySelector("#upper-limit"),d=function(e){var t=n.querySelector(".range__picker--current");t&&t.classList.remove("range__picker--current"),e.classList.add("range__picker--current")},f=function(e,t,n){return e<t?t-o.left:n<e?n-o.left:e-o.left},m=function(){e.style.left=s.style.left,e.style.right=100-parseInt(c.style.left,10)+"%"},p=function(e,t,n){var r=Math.round(e/i.offsetWidth*100);n.value=50*r,t.style.left=r+"%",m()},t=function(e,t,n,r){parseInt(e.value,10)<=parseInt(n,10)&&(e.value=n),parseInt(e.value,10)>=parseInt(r,10)&&(e.value=r),t.style.left=parseInt(e.value,10)/50+"%",m(),d(t)};s.style.left="0%",c.style.left="100%",m(),s.addEventListener("mousedown",function(){var e=function(e){var t=o.left,n=c.getBoundingClientRect().left+a,r=f(e.clientX,t,n);p(r,s,u)},t=function(){document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t)};d(s),document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)}),s.addEventListener("touchstart",function(){var e=function(e){var t=o.left,n=c.getBoundingClientRect().left+a,r=f(e.touches[0].clientX,t,n);p(r,s,u)},t=function(){document.removeEventListener("touchmove",e),document.removeEventListener("touchend",t)};d(s),document.addEventListener("touchmove",e),document.addEventListener("touchend",t)}),c.addEventListener("mousedown",function(){var e=function(e){var t=s.getBoundingClientRect().right-a,n=o.right,r=f(e.clientX,t,n);p(r,c,l)},t=function(){document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t)};d(c),document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)}),c.addEventListener("touchstart",function(){var e=function(e){var t=s.getBoundingClientRect().right-a,n=o.right,r=f(e.touches[0].clientX,t,n);p(r,c,l)},t=function(){document.removeEventListener("touchmove",e),document.removeEventListener("touchend",t)};d(c),document.addEventListener("touchmove",e),document.addEventListener("touchend",t)}),u.addEventListener("change",function(){t(u,s,u.min,l.value)}),l.addEventListener("change",function(){t(l,c,u.value,l.max)})}}(),function(){if("undefined"!=typeof window&&window.addEventListener){var e,t,n,h=Object.create(null),v=function(){clearTimeout(t),t=setTimeout(e,100)},g=function(){},A=function(e){function t(e){var t;return void 0!==e.protocol?t=e:(t=document.createElement("a")).href=e,t.protocol.replace(/:/g,"")+t.host}var n,r,i;return window.XMLHttpRequest&&(n=new XMLHttpRequest,r=t(location),i=t(e),n=void 0===n.withCredentials&&""!==i&&i!==r?XDomainRequest||void 0:XMLHttpRequest),n},y="http://www.w3.org/1999/xlink";e=function(){var e,t,n,r,i,o,s,c,a,u,l=0;function d(){var e;0===(l-=1)&&(g(),window.addEventListener("resize",v,!1),window.addEventListener("orientationchange",v,!1),window.MutationObserver?((e=new MutationObserver(v)).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),g=function(){try{e.disconnect(),window.removeEventListener("resize",v,!1),window.removeEventListener("orientationchange",v,!1)}catch(e){}}):(document.documentElement.addEventListener("DOMSubtreeModified",v,!1),g=function(){document.documentElement.removeEventListener("DOMSubtreeModified",v,!1),window.removeEventListener("resize",v,!1),window.removeEventListener("orientationchange",v,!1)}))}function f(e){return function(){!0!==h[e.base]&&(e.useEl.setAttributeNS(y,"xlink:href","#"+e.hash),e.useEl.hasAttribute("href")&&e.useEl.setAttribute("href","#"+e.hash))}}function m(r){return function(){var e,t=document.body,n=document.createElement("x");r.onload=null,n.innerHTML=r.responseText,(e=n.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",t.insertBefore(e,t.firstChild)),d()}}function p(e){return function(){e.onerror=null,e.ontimeout=null,d()}}for(g(),a=document.getElementsByTagName("use"),i=0;i<a.length;i+=1){try{t=a[i].getBoundingClientRect()}catch(e){t=!1}e=(c=(r=a[i].getAttribute("href")||a[i].getAttributeNS(y,"href")||a[i].getAttribute("xlink:href"))&&r.split?r.split("#"):["",""])[0],n=c[1],o=t&&0===t.left&&0===t.right&&0===t.top&&0===t.bottom,t&&0===t.width&&0===t.height&&!o?(a[i].hasAttribute("href")&&a[i].setAttributeNS(y,"xlink:href",r),e.length&&(!0!==(u=h[e])&&setTimeout(f({useEl:a[i],base:e,hash:n}),0),void 0===u&&void 0!==(s=A(e))&&(u=new s,(h[e]=u).onload=m(u),u.onerror=p(u),u.ontimeout=p(u),u.open("GET",e),u.send(),l+=1))):o?e.length&&h[e]&&setTimeout(f({useEl:a[i],base:e,hash:n}),0):void 0===h[e]?h[e]=!0:h[e].onload&&(h[e].abort(),delete h[e].onload,h[e]=!0)}a="",l+=1,d()},n=function(){window.removeEventListener("load",n,!1),t=setTimeout(e,0)},"complete"!==document.readyState?window.addEventListener("load",n,!1):n()}}();