// 1. Створити новий елемент
const div = document.createElement('div');

// 2. Приєднати новий елемент до будь-якого існуючого на сторінці батьківського елементу
const body = document.body;
body.append(div);
div.append('Hello DOM');

// Задача: Створити картинку і вставити її в div

const img = document.createElement('img');
img.setAttribute('src', './images/golden-retriever-puppy.jpg');
img.setAttribute('alt', 'Dog');
img.classList.add('picture');
div.append(img);