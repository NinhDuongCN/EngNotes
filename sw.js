const CACHE_NAME = 'engnotes-v1';
const APP_SHELL = [
    '/',
    '/index.html',
    '/irregular-verbs/',
    '/tenses/',
    '/assets/css/theme.css',
    '/assets/css/styles.css',
    '/assets/js/header.js',
    '/assets/js/footer.js',
    '/assets/js/script.js',
    '/manifest.webmanifest',
    '/favicon.svg',
    '/favicon_192.png',
    '/favicon_512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys
                    .filter((key) => key !== CACHE_NAME)
                    .map((key) => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;

            return fetch(event.request).then((networkResponse) => {
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
                    return networkResponse;
                }

                const responseClone = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
                return networkResponse;
            }).catch(() => {
                if (event.request.mode === 'navigate') {
                    return caches.match('/index.html');
                }
                return Response.error();
            });
        })
    );
});
