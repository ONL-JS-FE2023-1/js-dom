const form = document.querySelector('#form');
const root = document.querySelector('#root');

form.addEventListener('submit', addTask);

function addTask(event) {
    console.log(event);
    event.preventDefault();

    // +1. Отримати текст завдання, яке користувач ввів до інпуту
    // console.log(event.target[0].value);
    const {target, target: {textInput: {value}}} = event;

    // +2. Створити лішку із вказаним текстом завдання і заапендити лішку до списку
    const li = createElement('li', {classNames: ['item']}, value);
    root.append(li);

    target.reset();
}






















/**
 * 
 * @param {String} tagName - тег елемента, який потрібно створити
 * @param {Object} options
 * @param {String[]} optins.classNames - список класів 
 * @param  {Node} children - список дочірніх вузлів
 * @returns {HTMLElement} - створений елемент
 */
function createElement(tagName, { classNames }, ...children) {
    const elem = document.createElement(tagName);
    elem.classList.add(...classNames);
    elem.append(...children);

    return elem;
}