const converterForm = document.querySelector('#temperatureConverterForm');

converterForm.addEventListener('submit', convertHandler);

function convertHandler(event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми (перезавантаження сторінки)

    // Отримуємо значення введеної температури
    const temperatureInput = Number(document.querySelector('#temperature').value);

    // Обчислюємо температуру в градусах Фаренгейта
    const fahrenheit = (temperatureInput * 9 / 5) + 32;


    // Виводимо результат конвертації
    document.querySelector('#result').innerHTML = `${temperatureInput} C = ${fahrenheit.toFixed(2)} F`;
}