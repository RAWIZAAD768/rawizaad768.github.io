// register sw.js
navigator.serviceWorker.register('sw.js').then(registration => {
    registration.showNotification("WormGPT", {
        body: 'Siap siap jadi Hacker? kawan 😈',
        icon: 'https://rawizaad768.github.io/dataWeb/wormgpt.png',
        requireInteraction: true
    });
});
