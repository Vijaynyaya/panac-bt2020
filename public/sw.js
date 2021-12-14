const cacheName = "quiz-sw-v1"
const filesToCache = [
  '/',
  '/index.html'
]

self.addEventListener("activate", e => {
  console.log("[SW](event) active", e)
});

self.addEventListener("install", e => {
  console.log("[SW](event) install", e)
  e.waitUntil(
    caches.open(cacheName)
      .then( cache => {
        console.log("[SW] caching app shell");
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('fetch', e => {
  console.log("[SW](event) fetch", e, e.request.url)
  e.respondWith(
    caches.match(e.request)
      .then( resp => {
        return resp || fetch(e.request);
      })
  )
})
