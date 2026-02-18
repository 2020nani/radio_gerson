self.addEventListener('fetch', event => {

  const url = event.request.url;

  
  if (
    url.includes('caster.fm') ||
    url.includes(':16050')
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
