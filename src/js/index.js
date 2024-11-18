document.addEventListener("DOMContentLoaded", function () {
  const refreshButton = document.getElementById("refreshButton");
  const newsContainer = document.getElementById("newsContainer");
  const errorContainer = document.getElementById("errorContainer");

  // Функция для загрузки новостей
  let isLoading = false; // Добавь флаг загрузки

  async function loadNews() {
    if (isLoading) return; // Если данные уже загружаются, не повторяем запрос

    console.log("Запрос к /news отправлен");

    isLoading = true; // Устанавливаем флаг загрузки
    newsContainer.innerHTML = "<div class='loading'></div>"; // Показываем индикатор загрузки
    errorContainer.style.display = "none"; // Скрываем ошибку

    try {
      const response = await fetch("http://localhost:3000/news");
      console.log("Ответ от /news", response); // Логируем ответ

      if (!response.ok) {
        throw new Error("Ошибка при получении данных");
      }

      const news = await response.json();
      console.log("Новости получены", news);

      if (news.length > 0) {
        newsContainer.innerHTML = news
          .map(
            (item) =>
              `<div class="news-item">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
              </div>`
          )
          .join("");
      } else {
        newsContainer.innerHTML = "<p>Нет новостей.</p>";
      }
    } catch (error) {
      console.log("Ошибка при загрузке новостей:", error); // Логируем ошибку
      newsContainer.innerHTML = ""; // Очищаем контейнер новостей
      errorContainer.style.display = "block"; // Показываем ошибку
    } finally {
      isLoading = false; // Сбрасываем флаг загрузки
    }
  }

  // Кнопка для обновления данных
  refreshButton.addEventListener("click", loadNews);

  // Загружаем новости при загрузке страницы
  loadNews();
});

/// Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("/service-worker.js");
      console.log("Service Worker зарегистрирован");
    } catch (e) {
      console.log("Ошибка регистрации Service Worker:", e);
    }
  });
}
