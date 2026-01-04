const CACHE_NAME = "ultra-ai-v1";

const FILES_TO_CACHE = [
  "/Study_and_Help_with_Friends/",
  "/Study_and_Help_with_Friends/index.html",
  "/Study_and_Help_with_Friends/manifest.json",
  "/Study_and_Help_with_Friends/icon-192.png",
  "/Study_and_Help_with_Friends/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
