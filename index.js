const root = document.querySelector('#root');

// 1. Рефактор коду
// 2. Створення placeholde'ra для картинки
// 3. Поки наша картинка вантажиться, ми показуємо placeholder, коли картинка завантажиться
// -> змінюємо наш placeholder на завантажену картинку користувача

function createCard(user) {
    // 1 дія: створення картинки
    const img = document.createElement('img');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);
    img.classList.add('card-image');

    // 2 дія: створення h2
    const h2 = createElement('h2', {classNames: ['username']}, user.name);

    // 3 дія: створення p
    const p = createElement('p', {classNames: ['description']}, user.description);

    // 4 дія: створення article, повертаємо створений article, чіпляємо до article img, h2, p
    return createElement('article', {classNames: ['card-wrapper']}, img, h2, p);
}


// Задача: у вас немає оцього об'єкту task
// Але у вас є data.json
// Зробити запит до data.json -> відмалювати картки для юзерів

const cardArray = data.map((user) => createCard(user)); // 1

root.append(...cardArray); // 2

/*

<article class="card-wrapper">
            <img src="https://www.ohchr.org/sites/default/files/styles/hero_image_2/public/2021-07/Ethiopia-UN0418425.jpg?itok=7wJB8CbZ"
                alt="John" class="card-image">
            <h2 class="username">John</h2>
            <p class="description">user 1</p>
</article>

*/

/**
 * 
 * @param {String} tagName - тег елемента, який потрібно створити
 * @param {Object} options
 * @param {String[]} optins.classNames - список класів 
 * @param  {Node} children - список дочірніх вузлів
 * @returns {HTMLElement} - створений елемент
 */

function createElement(tagName, {classNames}, ...children) {
    const elem = document.createElement(tagName);
    elem.classList.add(...classNames);
    elem.append(...children);

    return elem;
}