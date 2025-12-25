self.addEventListener('install', event => {
    console.log('Service Worker terpasang.');
    self.skipWaiting(); // aktif segera
});

self.addEventListener('activate', event => {
    console.log('Service Worker aktif.');
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://rawizaad768.github.io/dataWeb')
    );
});
