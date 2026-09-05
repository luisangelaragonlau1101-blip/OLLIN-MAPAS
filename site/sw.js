/* Shell only. Never bulk cache or prefetch third-party map tiles. */
const VERSION='ollin-visual-04-1';
const BASE=new URL('./',self.location.href),CACHE=VERSION+':'+BASE.pathname;
const FILES=['index.html','visual.css','visual.js','manifest.webmanifest','assets/ollin.svg'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES.map(f=>new URL(f,BASE).href))));});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('ollin-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==BASE.origin||!u.pathname.startsWith(BASE.pathname))return;const relative=u.pathname.slice(BASE.pathname.length),file=e.request.mode==='navigate'?'index.html':relative;if(!FILES.includes(file))return;e.respondWith(fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put(new URL(file,BASE).href,copy)));}return r;}).catch(async()=>await(await caches.open(CACHE)).match(new URL(file,BASE).href)||Response.error()));});
