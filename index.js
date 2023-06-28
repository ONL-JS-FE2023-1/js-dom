const button = document.querySelector('button');

function eventHandler({target}) {
    target.disabled = true;
}

button.addEventListener('click', eventHandler);