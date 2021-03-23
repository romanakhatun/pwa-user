const cacheName = "v3";
const self = this;
const cacheAssets = [
  '/static/js/main.chunk.js',
  '/static/js/0.chunk.js',
  '/static/js/bundle.js',
  '/static/css/main.chunk.css',
  '/index.html',
  '/',
  '/src/pages/users',
  '/users',

];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        cache.addAll(cacheAssets)
      })
  )
});

self.addEventListener("fetch", e => {
  if (!navigator.onLine) {
    if (e.request.url === "http://localhost:3000/static/js/main.chunk.js") {
      e.waitUntil(
        self.registration.showNotification("Internet", {
          body: "internet not working",
        })
      )
    }
    e.respondWith(
      caches.match(e.request).then(res => {
        if (res) {
          return res;
        }
        const requestUrl = e.request.clone();
        fetch(requestUrl)
      })
    )
  }
});