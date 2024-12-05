// Имитация API-запроса
async function fetchNews() {
    const backendData = document.getElementById('backend-data').textContent;
    return JSON.parse(backendData);
}

// Отображение новостей
async function displayNews() {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    // Получаем данные
    let news = await fetchNews();

    // Сортируем по дате
    news.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Создаем карточки
    news.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'news-card';

        articleDiv.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="news-image">
            <h3>${article.title}</h3>
            <p>${article.content}</p>
            <p class="news-date">🗓️ ${new Date(article.date).toLocaleDateString()}</p>
        `;

        newsContainer.appendChild(articleDiv);
    });
}

// Инициализация
displayNews();
