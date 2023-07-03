// const regexp = /^Test$/;
///^[A-Za-z]{2,5}$/ // шукаємо слово з 2-5 (великих і маленьких)

// sunnyday@gmail.com
//   1       2     3

// /^[A-Za-z0-9\_\.]+\@[A-Za-z0-9]+\.[A-Za-z0-9]+$/

const testSTring = 'sunnyday23@gmail.com';

// Літеральне створення регулярних виразів
const reg1 = /^[A-Za-z0-9\_\.]+\@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
console.log(reg1);

// Створенння регулярних виразів за допомогою конструктора
const reg2 = new RegExp('^[A-Za-z]{2,5}$');
console.log(reg2);