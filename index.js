// Задача: є невеличка форма і нам потрібно її валідувати

/*

Використання промісу при валідації даних:
- Створити функцію, яка приймає дані для валідації
- Створити новий проміс, який виконує перевірку валідності даних
- Якщо дані валідні - резолвимо проміс
- Якщо дані невалідні - реджектимо проміс

*/


function validateData(data) {
    return new Promise((resolve, reject) => {
        // регулярка скопійована з ihateregex
        const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

        if(!data.name || data.name.trim().length === 0) {
            reject(new Error('Please enter a valid name!'));
        } else if(!data.email || !emailRegex.test(data.email)) {
            reject(new Error('Please enter a valid email!'));
        } else {
            resolve('Data is valid');
        }
    })
}

const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', submitHandler);

function submitHandler(event) {
    event.preventDefault();

    const nameInput = document.querySelector('#nameInput');
    const emailInput = document.querySelector('#emailInput');

    // Робимо div з повідомленням про помилку (на випадок помилки)
    const errorDiv = document.createElement('div');
    errorDiv.style.backgroundColor = 'red';
    errorDiv.style.color = 'white';
    errorDiv.setAttribute('id', 'errorDiv');

    // Створюємо об'єкт із даними, які ввів користувач
    const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim()
    }

    // Валідуємо дані
    validateData(formData)
    .then((message) => {
        console.log('Validation successfull: ', message);
        
        // Якщо в нас є div з повідомленням про помилку, то ми видаляємо його
        if(document.querySelector('#errorDiv') !== null) {
            document.querySelector('#errorDiv').remove();
        }

        // document.querySelector('#errorDiv')?.remove(); // варіант без if

        // на цьому моменті ми можемо зробити запит на сервер і передати туди дані, які ввів користувач

        document.querySelector('#myForm').reset();
    }, (error) => {
        console.error('Validation error: ', error.message);
        
        errorDiv.textContent = error.message;
        // Перевіряємо, чи є на сторінці елемент з id errorDiv
        // Якщо div з помилкою є - видаляємо його з верстки
        // Видалення з верстки нам потрібно для того, щоб оновити повідомлення про помилку
        if(document.querySelector('#errorDiv') !== null) {
            document.querySelector('#errorDiv').remove();
        }
        document.querySelector('#myForm').append(errorDiv);
    })
}