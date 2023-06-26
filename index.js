// console.log(this);

// alert(); // window.alert();

console.dir(document);

function getAlert(event) {
    const btn = event.target;
    // btn.style.display = 'none';
    console.log('Hi from get Alert')
    btn.removeEventListener('click', getAlert);
}

function consoleHello(event) {
    console.log('Hello');
}

const buttonElement = document.getElementById('btn');
const secondButton = document.getElementById('second-btn');
const form = document.getElementById('name-form');

console.log(buttonElement);
console.dir(buttonElement);

buttonElement.addEventListener('click', getAlert);
secondButton.addEventListener('mouseover', consoleHello);
form.addEventListener('submit', consoleForm);

function consoleForm(event) {
    event.preventDefault();
    const form = event.target;
    const value = form[0].value;
    console.log(`Hello, ${value ? value : 'Anonym'}`);
}

// buttonElement.addEventListener('click', (event) => {  // <<<---- BAD PRACTICE
//     console.log('hi from callback');
// })