const timeoutID = setTimeout(func, 1000);
clearTimeout(timeoutID);

const intervalID = setInterval(function () {console.log('LOG 5')}, 2000);
clearInterval(intervalID);

function func() {
    console.log(2 + 2);
}

// func(); // 4

// let j = 1;
// for(let i = 0; i < 1000000000; i++) {
//     j *= 5;
// }