self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", () => {
    clients.claim();
});

self.addEventListener("fetch", (event) => {
    // No cache necesario, solo activar PWA
});

