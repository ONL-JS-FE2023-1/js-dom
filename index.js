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

    // 4. Створити кнопку для редагування саме цієї лішки
    const editBtn = createElement('button', {classNames: ['editBtn']}, 'Edit');
    editBtn.addEventListener('click', editHandler);
    li.append(editBtn);

    target.reset();
}

function deleteHandler({target: {parentNode}}) {
    // 1. Отримати доступ до батьківської лішки
    // console.log(event.target.parentNode);

    // 2. Видалити батьківську лішку
    // Примітка. Батьківська лішка видалиться разом з кнопкою видалення
    parentNode.remove();
}

function editHandler({target, target: {parentNode}}) {
    const editInput = createElement('input', {classNames: []});
    editInput.setAttribute('placeholder', 'enter new text');
    target.removeEventListener('click', editHandler); // видаляємо старий обробник, щоб повісити новий
    target.textContent = 'Save'; // перейменовуємо кнопку edit => save
    target.addEventListener('click', saveHandler); // реєструємо новий обробник
    parentNode.append(editInput);
    editInput.focus();
}

function saveHandler({target, target: {parentNode, nextSibling}}) {
    // оператор опціональної послідовності, задля уникнення помилки
    // при перемиканні режимів (повторному) - сіблінгів не буде


    // 1. Зберегти значення з інпуту редагування
    const editValue = nextSibling?.value;
    // прокидуємо значення з інпута редагування лішці
    parentNode.childNodes[0].nodeValue = editValue;

    target.textContent = 'Edit';
    target.nextSibling?.remove(); // видаляємо інпут редагування
    target.addEventListener('click', editHandler);
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