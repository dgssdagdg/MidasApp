if(!self.define){let i,s={};const e=(e,l)=>(e=new URL(e+".js",l).href,s[e]||new Promise((s=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=s,document.head.appendChild(i)}else i=e,importScripts(e),s()})).then((()=>{let i=s[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(l,n)=>{const p=i||("document"in self?document.currentScript.src:"")||location.href;if(s[p])return;let r={};const u=i=>e(i,p),d={module:{uri:p},exports:r,require:u};s[p]=Promise.all(l.map((i=>d[i]||u(i)))).then((i=>(n(...i),r)))}}define(["./workbox-5b385ed2"],(function(i){"use strict";i.setCacheNameDetails({prefix:"midas-app"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/MidasApp/css/177.59d2d5a8.css",revision:null},{url:"/MidasApp/css/329.e5d9f8f2.css",revision:null},{url:"/MidasApp/css/420.eee35e3a.css",revision:null},{url:"/MidasApp/css/623.76518101.css",revision:null},{url:"/MidasApp/css/624.249a7c63.css",revision:null},{url:"/MidasApp/css/685.44c4506c.css",revision:null},{url:"/MidasApp/css/909.ef5bae7e.css",revision:null},{url:"/MidasApp/css/app.540cf2c1.css",revision:null},{url:"/MidasApp/img/five-s-one.0b213e3d.png",revision:null},{url:"/MidasApp/img/five-s-two.48fe8d52.png",revision:null},{url:"/MidasApp/img/four-s-one.47ad246e.png",revision:null},{url:"/MidasApp/img/four-s-two.aad5ff6f.png",revision:null},{url:"/MidasApp/img/img-eight.99063869.jpg",revision:null},{url:"/MidasApp/img/img-eleven.6c7cd012.jpg",revision:null},{url:"/MidasApp/img/img-fifteen.9ad1b550.jpg",revision:null},{url:"/MidasApp/img/img-five.776debb3.jpg",revision:null},{url:"/MidasApp/img/img-four.c1e7f4f9.jpg",revision:null},{url:"/MidasApp/img/img-fourteen.81fe1186.jpg",revision:null},{url:"/MidasApp/img/img-nine.654aabf2.jpg",revision:null},{url:"/MidasApp/img/img-one.e5c0d510.png",revision:null},{url:"/MidasApp/img/img-one.f1638e20.jpg",revision:null},{url:"/MidasApp/img/img-red-bg.5e33748d.png",revision:null},{url:"/MidasApp/img/img-seven.2feaa430.jpg",revision:null},{url:"/MidasApp/img/img-seventeen.aee0f714.jpg",revision:null},{url:"/MidasApp/img/img-six.48e8cdd8.jpg",revision:null},{url:"/MidasApp/img/img-sixteen.82f2beb8.jpg",revision:null},{url:"/MidasApp/img/img-ten.1878db2b.jpg",revision:null},{url:"/MidasApp/img/img-therteenjpg.ca0494ff.png",revision:null},{url:"/MidasApp/img/img-three.d5bdcc98.jpg",revision:null},{url:"/MidasApp/img/img-twelf.c32daf6d.jpg",revision:null},{url:"/MidasApp/img/img-two.5615d613.jpg",revision:null},{url:"/MidasApp/img/img-two.fa806bf8.png",revision:null},{url:"/MidasApp/img/item-img.83eb6e11.png",revision:null},{url:"/MidasApp/img/one-s-one.537af7c8.png",revision:null},{url:"/MidasApp/img/one-s-two.40717f44.png",revision:null},{url:"/MidasApp/img/three-s-one.35feda8c.png",revision:null},{url:"/MidasApp/img/three-s-two.e5b0c84e.png",revision:null},{url:"/MidasApp/img/two-s-one.19c63489.png",revision:null},{url:"/MidasApp/img/two-s-two.cd67a8f0.png",revision:null},{url:"/MidasApp/img/wrapper-bg.63ba5692.png",revision:null},{url:"/MidasApp/index.html",revision:"37494a322406ee8ab1dda9a7d61f7db8"},{url:"/MidasApp/js/177.b45e51ad.js",revision:null},{url:"/MidasApp/js/329.9c34d72d.js",revision:null},{url:"/MidasApp/js/420.82edec2f.js",revision:null},{url:"/MidasApp/js/591.917408f2.js",revision:null},{url:"/MidasApp/js/623.0e34786f.js",revision:null},{url:"/MidasApp/js/624.8924c42e.js",revision:null},{url:"/MidasApp/js/685.03105599.js",revision:null},{url:"/MidasApp/js/859.789f6f75.js",revision:null},{url:"/MidasApp/js/909.eec85cbc.js",revision:null},{url:"/MidasApp/js/app.618c3260.js",revision:null},{url:"/MidasApp/js/chunk-vendors.f4881662.js",revision:null},{url:"/MidasApp/manifest.json",revision:"187444a7af874b2d934d22bf4250dd0c"},{url:"/MidasApp/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map