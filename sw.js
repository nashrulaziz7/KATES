const CACHE_NAME = 'kates-offline-v1';
const urlsToCache = [
  './',
  './kalkulator_kamad.html',
  './LOGO.png',
  './JUDUL.png',
  './sedih.gif',
  './senyum.gif',
  './bahagia.gif'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

Setelah kode di atas ter-simpan di GitHub, Bapak/Ibu guru cukup membuka aplikasinya **sekali saja saat ada internet**, dan setelah itu aplikasi beserta seluruh gambar, animasi, dan nilainya akan bisa terus digunakan meskipun kuota habis atau sedang mode pesawat (Offline)! 🚀
