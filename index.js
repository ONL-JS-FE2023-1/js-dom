// console.log(this);

// alert(); // window.alert();

console.dir(document);

function getAlert() {
    alert('Hello, user!')
}

const buttonElement = document.getElementById('btn');

console.log(buttonElement);
console.dir(buttonElement);

buttonElement.addEventListener('click', getAlert);