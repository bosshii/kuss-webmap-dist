if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"c479eb2d6ef019fc0fe91ed6d9921b6f"},{url:"assets/index.5920c969.css",revision:null},{url:"assets/index.5e3c248d.js",revision:null},{url:"assets/Info.18836465.js",revision:null},{url:"assets/MapA.75071115.js",revision:null},{url:"assets/MapArena.8fc48bb1.js",revision:null},{url:"assets/MapB.19747087.js",revision:null},{url:"assets/MapC.d6512f2a.js",revision:null},{url:"assets/MapD.554e9f1a.js",revision:null},{url:"assets/MapE.8f94e0b5.js",revision:null},{url:"assets/MapHome.b4d9733e.js",revision:null},{url:"assets/MapMenu.3aa343f0.css",revision:null},{url:"assets/MapMenu.dd1b80ef.js",revision:null},{url:"assets/MapOthers.834a27d8.js",revision:null},{url:"assets/Navi.247f16c6.js",revision:null},{url:"assets/TopPage.a63e4ecb.js",revision:null},{url:"assets/TopPage.a885ba90.css",revision:null},{url:"assets/VCard.1de8492a.css",revision:null},{url:"assets/VCard.f8f89836.js",revision:null},{url:"assets/VMain.15974669.css",revision:null},{url:"assets/VMain.50847d0d.js",revision:null},{url:"assets/VSheet.47b60170.js",revision:null},{url:"assets/VSheet.d7fa3c0a.css",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"index.html",revision:"919d5d3d4419128b04da8f6932c61969"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"app-icons/android-chrome-192x192.png",revision:"64b0997a65364a401e9a4c9a07b3a9e0"},{url:"app-icons/android-chrome-512x512.png",revision:"e04cae7b14daab588168cc479d53c6cd"},{url:"manifest.webmanifest",revision:"4e443395734115932c4e3ea542dddf4b"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));