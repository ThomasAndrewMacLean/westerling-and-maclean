if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,a,n)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return c;case"module":return r;default:return e(s)}})).then(e=>{const s=n(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-6f0d2936"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"K3AcJsDCPFO1bc76M9B2j"},{url:"/_next/static/K3AcJsDCPFO1bc76M9B2j/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/K3AcJsDCPFO1bc76M9B2j/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/K3AcJsDCPFO1bc76M9B2j/pages/_app.js",revision:"8b6f78c3350829304797d040eb698285"},{url:"/_next/static/K3AcJsDCPFO1bc76M9B2j/pages/_error.js",revision:"7bc246c3cb897214a9526113ef8121a8"},{url:"/_next/static/K3AcJsDCPFO1bc76M9B2j/pages/index.js",revision:"1e5314bb98b1441770f9597cc16d7241"},{url:"/_next/static/chunks/703a5e5f6b7a371f71a3bc823f0f8488346a011a.109679a5ac96a559521c.js",revision:"13fc2031a023b397c74db8dc621187ad"},{url:"/_next/static/chunks/749eaa4fdb134bfdb2d83f80f7b2639b2f9595e8.6a623ea602be9cdcbf8d.js",revision:"6502e3574c40cb7de95dc58513d1d5fd"},{url:"/_next/static/chunks/commons.0e6377a04c1a082135bd.js",revision:"462d49842664059b1fc2cb7f9d8feed8"},{url:"/_next/static/chunks/framework.98c1b221acb34aa9927b.js",revision:"0b711c3e02b0095b778e8d3a6cd216d2"},{url:"/_next/static/css/cda30b23c654b16ea5be.css",revision:"1b8f76a54b886de75f153a256b2dad15"},{url:"/_next/static/runtime/main-3da95c4755897692fc2b.js",revision:"b810a20f572d9d9288a3eff226f72052"},{url:"/_next/static/runtime/polyfills-46da4f2048713e1867e0.js",revision:"50c98066e4986fe6947aef57aa85d918"},{url:"/_next/static/runtime/webpack-91b117697e716c22a78b.js",revision:"40b4095b5b68a142c856f388ccb756f2"},{url:"/android-chrome-192x192.png",revision:"c87b3ef459c3d9e2ca89a7ce214ea64d"},{url:"/android-chrome-512x512.png",revision:"efa98c7406efc5721bade2c73ffb7ec5"},{url:"/apple-touch-icon.png",revision:"875608d0dc40d89e9b48b94e82489103"},{url:"/favicon-16x16.png",revision:"c86804fcb5629d4b5d5e8099439d9b7f"},{url:"/favicon-32x32.png",revision:"0cbcefe245f1bdfed30f1b48f8351ce6"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
