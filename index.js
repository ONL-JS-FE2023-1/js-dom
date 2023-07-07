const API_KEY = 'f7c576ba3699bdd0b98ddcf196639992';
const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';

const btn = document.querySelector('.btn');
btn.addEventListener('click', buttonClickHandler);

function buttonClickHandler({ target }) {
    const selectValue = target.previousElementSibling.value;
    requestAPI(selectValue);
}

function requestAPI(city) {
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
    const { name, main: { temp, pressure }, weather: [{ description }], wind: { speed } } = weatherData; // weather need attention!

    const article = document.querySelector('#weather-box');
    article.style.display = 'unset';

    appendInfo('city', name);
    appendInfo('temp', temp);
    appendInfo('press', pressure);
    appendInfo('descr', description);
    appendInfo('wind', speed);
}

function appendInfo(id, info) {
    const element = document.querySelector(`#${id}`);
    element.textContent = info;
}