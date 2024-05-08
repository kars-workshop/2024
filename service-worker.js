"use strict";var precacheConfig=[["/404.html","75493e6d0301f598b674b3a62aa85e05"],["/about/index.html","fea6a46576747b503c672cdd367dfb56"],["/assets/img/anelli.jpg","989e779a355a35a5c410eab4c8c6806f"],["/assets/img/bari_home.png","52669af838e19d0ce6b7dac16c12187b"],["/assets/img/bari_skyline.jpg","e30cb83edf14c77b1ff16abecbb3944a"],["/assets/img/basile.png","dd74bbc2d9e84673b21b5d6b85d2ca23"],["/assets/img/dinoia.png","9b41f49ba7e8bcfb3cce327999883d50"],["/assets/img/donini.png","4d0f0e41fbc6aee9ffd8d773de7edef3"],["/assets/img/musto.jpg","e6fcf79c46a1010e4188b75047ab4319"],["/assets/img/narducci.jpg","7d054446128a5ee8aacfa1719d6ee03e"],["/assets/svg/amsf.svg","f377674da2d68bfd2eca84c215a0cd6d"],["/cfp/index.html","e4dbb32fd3ea53526483076c6dbf3d2e"],["/configuration.html","b89949fa8fad539df7f24ab7918a6bc4"],["/creating-themes.html","0bdab206166ea79c303d8453956d2a0a"],["/custom-color-scheme.html","d2c9014cf61eb771f243240c2302af5e"],["/custom-css.html","090787c3f9421f6f77a3b34b451e71ff"],["/custom-heading-background.html","42e586b4995230ea53d83683034bedb9"],["/custom-heading-image.html","7fc5ccf362cd4c7edb31ec9dca4e45fa"],["/custom-html-markups.html","d9087b547dd54be89b607402d8f4796e"],["/customizing-styles.html","5043ae97997f453b00e0b50113f990a1"],["/deployment-methods.html","3adc15169e24054ef4e51270820bc6d2"],["/external-link-post.html","cb8e55d36ec1eef37e1e7796c9527a55"],["/favicon.png","d435839668ce305697de770de68ae816"],["/getting-started.html","a9033456d66c0fd31b939ccd651b0124"],["/github-pages-setup.html","ef630241d7cd42cb6b2ac8900da5581d"],["/index.html","da66b927d8448ff01c5999817597efc2"],["/jekyll-theme-compatibility.html","99e83aeea8ee1e835903f62797a42602"],["/markdown-features-test.html","96f99408c1c3f3e555476c52ff4c6470"],["/markup-example.html","c272f79670145077586b6d38c2d58bff"],["/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/multiple-themes-support.html","180e3cd360d09392b127cc4a60552221"],["/news/index.html","d5fd3188babc5e6454ce13ac81f1b85e"],["/open-graph.html","3f85188537ead535aa37eeb6eb46405f"],["/program/index.html","b8a6cfadca2911836803110ced15badc"],["/svg-post-title.html","0cd7b19990eabec0febea7dd223029e4"],["/syntax-highlighting.html","e956518fcc79be75276ef1681ad29fa7"],["/theme-curtana.html","fd91198b048e31086479f8e646e5a86b"],["/themes.html","7b2a9e93d3c33c7f40ad0604c105b470"],["/upgrading-from-v1-to-v2.html","346ad0d270832f14da5d2615eaca993d"],["/upgrading-guide-v1.1.0.html","d73928698bbdc8080eb47d91fcc9960a"],["/welcome.html","1ce004da18db352e3650422f28ade361"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some((function(e){return a.match(e)}))},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then((function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(a,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(a){return Promise.all(a.map((function(a){if(!t.has(a.url))return e.delete(a)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";!(t=urlsToCacheKeys.has(a))&&n&&(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(a)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return fetch(e.request)})))}}));