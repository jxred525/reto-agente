const CACHE_NAME = 'reto-agente-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png' // Asegúrate de que el icono se llame así
];

// Instalar y guardar en caché
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Cargar desde caché cuando no haya internet
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});