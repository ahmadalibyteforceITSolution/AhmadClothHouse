const CACHE_NAME = 'ahmad-cloth-v3';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map((key) => caches.delete(key)));
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - bypass service worker for dev / dynamic requests to prevent failed fetch errors
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Skip non-GET, cross-origin, extension, and dev server requests
  if (e.request.method !== 'GET') return;
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/@') || url.pathname.startsWith('/src') || url.pathname.startsWith('/node_modules')) return;

  // Cache static image & asset files only
  if (/\.(png|jpg|jpeg|svg|gif|webp|ico|css|js|json)$/i.test(url.pathname)) {
    e.respondWith(
      caches.match(e.request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(e.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, responseClone));
          }
          return networkResponse;
        }).catch(() => {
          return new Response('Asset offline', { status: 404 });
        });
      })
    );
  }
});
