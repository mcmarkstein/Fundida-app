
const CACHE_NAME = 'fundida-app-cache-v1';
const urlsToCache = [
  './',
  './index.html'
];

// Instalar el service worker y cachear el contenido básico
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Responder con recursos en cache si no hay internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
