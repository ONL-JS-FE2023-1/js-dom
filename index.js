// const telephone = {
//     name: 'Samsung',
//     avatar: './',
//     description: 'BlaBlaBla',
//     price: '100$'
// }

// console.log(`${telephone.name} коштує ${telephone.price}`);


// const telephoneArray = [
//     {
//         name: 'Samsung',
//         avatar: './',
//         description: 'BlaBlaBla',
//         price: '100$'
//     },
//     {
//         name: 'Nokia',
//         avatar: './',
//         description: 'BlaBlaBla',
//         price: '50$'
//     },
//     {
//         name: 'Huawei',
//         avatar: './',
//         description: 'BlaBlaBla',
//         price: '200$'
//     },
//     {
//         name: 'Iphone',
//         avatar: './',
//         description: 'BlaBlaBla',
//         price: '100500$'
//     }
// ]

// for(const tel of telephoneArray) {
//     console.log(`${tel.name} коштує ${tel.price}`);
// }





/////////////////////////////////////////////////////////////////

const root = document.querySelector('#root');

function createCard(user) {
    // 1 дія: створення article
    const article = document.createElement('article');
    article.classList.add('card-wrapper');

    // 2 дія: створення картинки
    const img = document.createElement('img');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);
    img.classList.add('card-image');

    // 3 дія: створення h2
    const h2 = document.createElement('h2');
    h2.append(user.name);
    h2.classList.add('username');

    // 4 дія: створення p
    const p = document.createElement('p');
    p.append(user.description);
    p.classList.add('description');

    // 5 дія: чіпляємо до article img, h2, p
    article.append(img, h2, p);

    // 6 дія: повертаємо створений article
    return article;
}

const cardArray = data.map((user) => createCard(user));

root.append(...cardArray);

/*

<article class="card-wrapper">
            <img src="https://www.ohchr.org/sites/default/files/styles/hero_image_2/public/2021-07/Ethiopia-UN0418425.jpg?itok=7wJB8CbZ"
                alt="John" class="card-image">
            <h2 class="username">John</h2>
            <p class="description">user 1</p>
</article>

*/