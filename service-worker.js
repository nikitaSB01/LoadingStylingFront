importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

if (workbox) {
  console.log("Workbox загружен успешно");

  workbox.core.skipWaiting();
  workbox.core.clientsClaim();

  // Кэширование статических ресурсов
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

  // Кэширование данных с API (например, новостей)
  workbox.routing.registerRoute(
    ({ url }) => url.pathname === "/news", // Обработка запросов к /news
    new workbox.strategies.NetworkFirst({
      cacheName: "news-cache",
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200], // Кэшируем ответы с кодами 0 и 200
        }),
      ],
    })
  );

  console.log("Сервис-воркер: маршрут для кэширования /news зарегистрирован");

  // Кэширование изображений
  workbox.routing.registerRoute(
    ({ request }) => request.destination === "image",
    new workbox.strategies.CacheFirst({
      cacheName: "image-cache",
    })
  );

  // Кэширование стилей и шрифтов
  workbox.routing.registerRoute(
    ({ request }) =>
      request.destination === "style" || request.destination === "font",
    new workbox.strategies.CacheFirst({
      cacheName: "static-cache",
    })
  );
} else {
  console.log("Workbox не загружен");
}
