self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("palette-cache-v1").then((cache) => {
      return cache.addAll([
        "./bright_spring_palette.html",
        "./manifest.json",
        "./icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
