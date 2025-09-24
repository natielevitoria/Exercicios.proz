self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app-saudacao-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "icone-192.png",
        "icon-512.png",
        "img/manha.jpg",
        "img/tarde.png",
        "img/noite.jpg",
        "img/madrugada.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
