/*

3 фази події

1. Фаза зануреня. Подія стається на рівні ОС, ОС передає її браузеру (Window),
-> document -> body -> ........ -> елемент, на якому сталася подія

2. Фаза цілі. Подія досягла елемента. Елемент - це таргет

3. Фаза сплиття. Подія починає спливати у зворотньому напрямку, 
тобто від елемента до браузера

*/

const btn = document.querySelector('button');
const div = document.querySelector('#root');

function eventHandler(event) {
    // console.dir(event.target); // елемент, на якому сталася подія
    // console.dir(event.currentTarget); // елемент, якому належав обробник

    if(event.currentTarget === document.body) {
        event.stopPropagation();
        console.log('Ніяких тобі кнопок!');
    }
}

btn.addEventListener('click', () => {
    console.log('hello, button');
})
// btn.addEventListener('click', eventHandler, {capture: true, once: true});
// div.addEventListener('click', eventHandler, {capture: true});
document.body.addEventListener('click', eventHandler, {capture: true});
// window.addEventListener('click', eventHandler, {capture: true});
