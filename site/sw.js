/* Cache only this application's shell. Never prefetch, bulk-download or cache third-party map tiles. */
const VERSION = 'ollin-independent-03';
const BASE = new URL('./', self.location.href);
const CACHE = VERSION + ':' + BASE.pathname;
const FILES = ['index.html','styles.css','ollin-map.css','app.js','config.json','manifest.webmanifest','assets/ollin.svg'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES.map(f=>new URL(f,BASE).href)))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('ollin-independent-')&&k.endsWith(':'+BASE.pathname)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch', event => {
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==BASE.origin||!url.pathname.startsWith(BASE.pathname))return;
 const relative=url.pathname.slice(BASE.pathname.length);
 if(!FILES.includes(relative)&&!(event.request.mode==='navigate'&&(relative===''||relative==='index.html')))return;
 event.respondWith(fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(event.request,copy)));}return response;}).catch(async()=>{const cache=await caches.open(CACHE);const saved=await cache.match(event.request);if(saved)return saved;if(event.request.mode==='navigate')return (await cache.match(new URL('index.html',BASE).href))||Response.error();return Response.error();}));
});
