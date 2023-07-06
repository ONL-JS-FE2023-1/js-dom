// https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=f7c576ba3699bdd0b98ddcf196639992&units=metric

/*

Задача: зробити погодний віджет

Алгоритм вирішення задачі:

+ 1. Зробити верстку елементів, які отримують від користувача дані про місто
+ 2. Отримати дані з апі і обробити їх (підготувати дані до запиту на сервер)
3. Зробити картки з погодою та відобразити їх

*/

const API_KEY = 'f7c576ba3699bdd0b98ddcf196639992';
const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';

const btn = document.querySelector('.btn');
btn.addEventListener('click', buttonClickHandler);

function buttonClickHandler({target}) {
    const selectValue = target.previousElementSibling.value;
    requestAPI(selectValue);
}

function requestAPI(city) {
    // робимо тут запит
    // готуємо URL
    const url = `${API_BASE}?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        displayWeather(data);
    })
}

function displayWeather(weatherData) {
    // 1. Ми повинні витягнути з того великого об'єкта необхідні нам дані
    // 2. Динамічно створюємо картку з погодою
    // 3. Додаємо цю створену картку з погодою до секції з класом wrapper
    console.log(weatherData)
}


/*

<!-- <article class="weather">
        <p>City: </p>
        <p>Temperature: </p>
        <p>Pressure: </p>
        <p>Weather description: </p>
        <p>Wind: </p>
    </article> -->

*/