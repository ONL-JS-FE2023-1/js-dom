const p = new Promise(executor);

function executor(resolve, reject) {
    // задача:
    // згенерувати випадкове ціле число в діапазоеі від 0 до 15
    const number = Math.floor(Math.random() * 15);

    // якщо число кратне 2 -> резолвимо проміс та повертаємо це значення
    // якщо число не кратне 2 -> реджектимо проміс та повертаємо помилку

    if(number % 2 === 0) {
        resolve(number);
    } else {
        const err = new RangeError(`Error happenned: ${number}!`);
        reject(err);
        // reject(new RangeError('Error happenned!'));
    }
}

p.then((data) => {console.log(data)}, (err) => {console.log(err)})
