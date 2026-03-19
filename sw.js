const CACHE_NAME = 'mazinger-pwa-v1';
const ASSETS = [
  'index.html',
  'index.css',
  'audio_manager.js',
  'assets/favicon.jpeg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
