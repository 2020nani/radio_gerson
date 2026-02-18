self.addEventListener('install',e=>{e.waitUntil(caches.open('radio').then(c=>c.addAll(['index.html','style.css','script.js','programacao.html'])))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
