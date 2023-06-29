/*

Дан section на якій треба клацати мишею
Дан div, який має переміститись на точку, в яку клацнули мишею

*/

const field = document.querySelector('#game-field');
const box = document.querySelector('#box');

field.addEventListener('click', moveBox, {capture: true})

function moveBox(event) {
    event.stopPropagation();
    if(event.currentTarget === event.target) {
        // 1. Отримати box через івент ігрового поля
        const {target: {children: {box}}, clientX, clientY} = event;
        // 2. Двигаємо наш box
        box.style.top = `${clientY - (box.offsetHeight / 2)}px`;
        box.style.left = `${clientX - (box.offsetWidth / 2)}px`;
    }
}