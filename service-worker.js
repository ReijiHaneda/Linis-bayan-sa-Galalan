
const cacheName = 'linis-bayan-v1';
const assets = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    'https://via.placeholder.com/1920x1080',
    'https://images.pexels.com/photos/1144687/pexels-photo-1144687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://via.placeholder.com/300','https://i.imgur.com/0Eim0Ss.jpeg','https://i.imgur.com/VEYKNK1.jpeg','https://i.imgur.com/k5Xef0T.jpeg','https://i.imgur.com/oJvgNCQ.jpeg','https://i.imgur.com/yi2W2Qd.jpeg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(assets);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        }).catch(() => {
            return new Response('You are offline, and the requested content is not cached.');
        })
    );
});
