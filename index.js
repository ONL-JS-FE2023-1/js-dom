/*

Задвання: Створити конвертер валют, використовуючи форму

Декомпозиція.

1. Створити HTML-сторінку з формою, яка містить два поля вводу:
перше поле - введення суми в одній валюті,
друге поле - вибір валюти, в яку конвертуємо

2. Додати у форму кнопку "Конвенртувати"

3. Написати обробник, який буде викликатися при відправці форми

4. У обробнику отримати значення введеної суми та обраної валюти

5. Створити константи у яких зберігається актуальний курс валют

6. Обчислити конвертовану суму: введена сума * курс обміну

7. Вивести результат конвертації на сторінку

*/


const CURRENCY = {
    USD_TO_UAH: 36.6,
    EUR_TO_UAH: 40.50
}

const converterForm = document.querySelector('#currencyConverterForm');

converterForm.addEventListener('submit', convertHandler);

function convertHandler(event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми (перезавантаження)

    // Отримуємо значення введеної суми та обраної валюти
    const amount = Number(document.querySelector('#amount').value);
    const currency = document.querySelector('#currency').value;

    let convertedAmount;

    // обчислюємо конвертовану суму
    if(currency === 'USD') {
        convertedAmount = amount * CURRENCY.USD_TO_UAH
    } else if (currency === 'EUR') {
        convertedAmount = amount * CURRENCY.EUR_TO_UAH
    } else {
        throw new Error('Something problem....!')
    }

    // виводимо результат конвертації
    document.querySelector('#result').innerHTML = `${amount} ${currency} = ${convertedAmount.toFixed(2)} UAH`;
}