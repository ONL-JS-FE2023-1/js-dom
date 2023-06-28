/*

1. Маємо div
2. Маємо дві кнопки: на одній кнопці написано "Зробити червоним", на другій - "Зробити зеленим".
3. Задача: За натисненням на кнопку фоновий колір оцього діва змінюється на відповідний колір, вказаний на кнопці

*/

// const div = document.querySelector('.box');
// const [red, green] = document.querySelectorAll('.btn');

// console.log(div.classList);

// red.addEventListener('click', setRedColor);
// green.addEventListener('click', setGrenColor);

// function setRedColor(event) {
//     div.classList.toggle('red-little');
// }

// function setGrenColor(event) {
//     div.classList.toggle('green-big')
// }

// const themeToggle = document.querySelector('#themeToggle');
// // const body = document.querySelector('body');
// const body = document.body;

// themeToggle.addEventListener('click', toggleTheme);

// function toggleTheme() {
//     body.classList.toggle('dark-theme');
// }


const event = new Event('click');
// console.log(event);
console.log(event.composedPath());

const btn = document.querySelector('button');

btn.addEventListener('click', eventHandler);

function eventHandler(event) {
    // console.log(event);
    console.log(event.composedPath());
}

/*

3 фази події

1. Фаза зануреня. Подія стається на рівні ОС, ОС передає її браузеру (Window),
-> document -> body -> ........ -> елемент, на якому сталася подія

2. Фаза цілі. Подія досягла елемента. Елемент - це таргет

3. Фаза сплиття. Подія починає спливати у зворотньому напрямку, 
тобто від елемента до браузера

*/