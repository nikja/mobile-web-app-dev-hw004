self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                'index.html',
                'manifest.json',
                'css/styles.css',
                'js/pwa.js',
                'js/workers.js',
                'img/lblue.png',
                'img/lgold.png',
                'img/icon.png',
                'img/favicon.ico',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
