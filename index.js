// console.log(this);

// alert(); // window.alert();

console.dir(document);

function getAlert(event) {
    const btn = event.target;
    btn.style.display = 'none';
}

function consoleHello(event) {
    console.log('Hello');
}

const buttonElement = document.getElementById('btn');
const secondButton = document.getElementById('second-btn');

console.log(buttonElement);
console.dir(buttonElement);

buttonElement.addEventListener('click', getAlert);
secondButton.addEventListener('mouseover', consoleHello);