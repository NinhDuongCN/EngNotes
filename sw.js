//const VERSION = '1.0.2608.24';
const CACHE_NAME = 'engnotes-v' +(Date.now());// + VERSION;
const APP_SHELL = [
    '/',
    '/index.html',
    '/about/',
    '/about/about.css'
    '/adjectives-adverbs/',
    '/articles/',
    '/be-going-to/',
    '/clauses/',
    '/cleft-sentences/',
    '/collocations/',
    '/comparisons/',
    '/complex-sentences/',
    '/compound-sentences/',
    '/conditionals/',
    '/idioms/',
    '/inversion/',
    '/irregular-verbs/',
    '/modal-verbs/',
    '/nouns/',
    '/passive-voice/',
    '/phrasal-verbs/',
    '/prepositions/',
    '/pronouns/',
    '/question-tags/',
    '/reported-speech/',
    '/simple-sentences/',
    '/tenses/',
    '/to-be/',
    '/used-to/',
    '/verbs/',
    '/words/',
    '/words/words.css',
    '/assets/css/theme.css',
    '/assets/css/styles.css',
    '/assets/js/header.js',
    '/assets/js/footer.js',
    '/assets/js/script.js',
    '/assets/fonts/Lexend-VariableFont_wght.ttf',
    '/assets/fonts/Montserrat-VariableFont_wght.ttf',
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
        caches.match(event.request).then(cached => {
            const networkFetch = fetch(event.request)
                .then(response => {
                    if (response && response.status === 200 && response.type === 'basic') {
                        const cloned = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, cloned));
                    }
                    return response;
                })
                .catch(() => {
                    if (event.request.mode === 'navigate') {
                        return caches.match('/index.html');
                    }
                });

            return cached || networkFetch;
        })
    );
});
