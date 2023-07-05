const p = fetch('./user.json')
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
})