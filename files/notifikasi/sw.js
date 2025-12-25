self.addEventListener('install', event => {
    console.log('Service Worker terpasang.');
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('Service Worker aktif.');
});
