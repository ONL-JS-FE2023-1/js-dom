const p = new Promise(function(resolve, reject) { // status: pending
    setTimeout(() => {
        resolve('It time');
    }, 15000); // status: fulfilled
})