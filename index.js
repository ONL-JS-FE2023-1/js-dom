const collection = document.getElementsByClassName('paragraph');

for(let p of collection) {
    p.style.color = 'green';
}

const btns = document.getElementsByTagName('button');

const arr = [...btns];

function hello() {
    console.log('Hello, user');
}

// btns[0]
// btns[1]
// btns[2]

for (const btn of btns) {
    btn.addEventListener('click', hello);
}