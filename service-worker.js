if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let t={};const c=e=>n(e,s),f={module:{uri:s},exports:t,require:c};i[s]=Promise.all(o.map((e=>f[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-a3cf1d8c"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"bundle.js",revision:"260c2cfd4b1df55eface03554d5e9f2f"},{url:"icons8-favicon-48.png",revision:"130a72eb6e36c52447ec3d1af88e0908"},{url:"index.html",revision:"8a613f6a38e2924dfb126575f8f51a2d"},{url:"style.css",revision:"0b0686b275bb5cc41b74957ea04c4e5b"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map