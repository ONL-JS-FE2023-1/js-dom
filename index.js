const div = document.querySelector('#root');
const buttons = document.querySelectorAll('button');

for(const btn of buttons) {
    btn.addEventListener('click', clickHandler);
}

function clickHandler({target}) {
    const {dataset: {color}} = target;
    const {parentNode} = target;
    parentNode.style.backgroundColor = color;
}

/*

1. Маємо div
2. Маємо 5 кнопок, на кожній з яких написаний колір
3. Задача:
За натисненням на кнопку фоновий оцього діва (рут) змінюється на відповідний колір, 
вказаний на кнопці

*/