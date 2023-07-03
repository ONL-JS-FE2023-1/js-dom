const form = document.querySelector('#form');
const root = document.querySelector('#root');

form.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();

    // +1. Отримати текст завдання, яке користувач ввів до інпуту
    // console.log(event.target[0].value);
    const {target, target: {textInput: {value}}} = event;

    // +2. Створити лішку із вказаним текстом завдання і заапендити лішку до списку
    const li = createElement('li', {classNames: ['item']}, value);
    root.append(li);

    // 3. Створити кнопку для видалення саме цієї лішки
    const deleteBtn = createElement('button', {classNames: ['deleteBtn']}, 'X');
    deleteBtn.addEventListener('click', deleteHandler);
    li.append(deleteBtn);

    target.reset();
}

function deleteHandler({target: {parentNode}}) {
    // 1. Отримати доступ до батьківської лішки
    // console.log(event.target.parentNode);

    // 2. Видалити батьківську лішку
    // Примітка. Батьківська лішка видалиться разом з кнопкою видалення
    parentNode.remove();
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