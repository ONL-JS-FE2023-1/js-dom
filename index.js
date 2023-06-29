/*

1. Маємо елемент img
2. Маємо дві кнопки, які в атрибутах data-* містять посилання на певну картинку 
(адреса картинки)
3. Задача: За натиснення на кнопку img має показати ту картинку, 
адреса якої зберігалась у кнопці
*/

const [btn1, btn2] = document.querySelectorAll('button');

btn1.addEventListener('click', clickHandler);
btn2.addEventListener('click', clickHandler);

function clickHandler({target}) {
    const img = target.parentNode.children[0];
    img.setAttribute('src', target.dataset.src);
}