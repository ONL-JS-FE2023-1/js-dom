// https://klike.net/uploads/posts/2020-06/1591254385_5.jpg

function loadImage(src) {
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', 'Picture');

    return new Promise(function(resolve, reject) { // status: pending
        img.addEventListener('load', () => {
            clearTimeout(timeoutId)
            resolve(img); // status: fulfilled
        })
        img.addEventListener('error', () => {
            reject(new Error('Image cannot be loaded')); // status: rejected
        })

        const timeoutId = setTimeout(() => {
            reject(new Error('Час сплив!'))
        }, 40000);
    })
}

loadImage('https://klike.net/uploads/posts/2020-06/1591254385_5.jpg')
.then((img) => {
    document.body.append(img);
})
.catch((err) => {
    console.error(err);
})