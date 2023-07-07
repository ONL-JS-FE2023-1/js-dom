const URL = 'https://randomuser.me/api/';

function loadDataWithoutAsync(url) { // варіант без async/await
    const p = fetch(url);

    const jsonUsers = p.then((response) => {
        return response.json();
    })

    jsonUsers.then((data) => {
        console.log(data)
    })
}

// loadDataWithoutAsync(URL);

// ASYNC / AWAIT

async function loadDataAsync(url) { // той самий код, але функція асинхронна
    const p = fetch(url);
    const response = await p;
    const data = await response.json();

    console.log(data);
}

loadDataAsync(URL);

// Правила async/await
/*
1. Ключове слово await буде працювати тільки в async функціях
2. Await - синтаксичний цукор над then
3. Await не перехоплює помилки, він просто повертає результат роботи промісу
*/