!function(){var e={25:function(){document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("refreshButton"),n=document.getElementById("newsContainer"),t=document.getElementById("errorContainer");let o=!1;async function r(){if(!o){console.log("Запрос к /news отправлен"),o=!0,n.innerHTML="<div class='loading'></div>",t.style.display="none";try{const e=await fetch("http://localhost:3000/news");if(console.log("Ответ от /news",e),!e.ok)throw new Error("Ошибка при получении данных");const t=await e.json();console.log("Новости получены",t),t.length>0?n.innerHTML=t.map((e=>`<div class="news-item">\n                <h3>${e.title}</h3>\n                <p>${e.description}</p>\n              </div>`)).join(""):n.innerHTML="<p>Нет новостей.</p>"}catch(e){console.log("Ошибка при загрузке новостей:",e),n.innerHTML="",t.style.display="block"}finally{o=!1}}}e.addEventListener("click",r),r()})),"serviceWorker"in navigator&&window.addEventListener("load",(async()=>{try{await navigator.serviceWorker.register("/service-worker.js"),console.log("Service Worker зарегистрирован")}catch(e){console.log("Ошибка регистрации Service Worker:",e)}}))}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){"use strict";t(25)}()}();
//# sourceMappingURL=bundle.js.map