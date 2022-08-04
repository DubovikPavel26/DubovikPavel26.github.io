"use strict";

// ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ

alert('Hello');

const resault = confirm("Are you here?");

const answer = prompt("Вам есть 18?", "");

const answers = [];

answers[0] = prompt("Как ваше имя?", "");
answers[1] = prompt("Как ваша фамилия?", "");
answers[2] = prompt("Как ваше отчество?", "");


// ИНТЕРПОЛЯЦИЯ

const category = "toys";
console.log(`i like${category}`); 




// ОПЕРАТОРЫ

let inkr = 10;
    decr = 10;
console.log(++inkr);
console.log(--decr);

console.log(2*4 ==8);
console.log(2*4 ==='8');

// && оператор и
// ||  оператор или

const isCheked = true,
      isClose = true;

console.log(isCheked && isClose);

// ! оператор отрицания, ставится перед переменной и меняет на противоположное значение




// УСЛОВИЯ

if (4 == 4) {
    console.log('ok');
} else {
    console.log('no');
}

const num = 50;

if (num < 49) {
    console.log('error');
} else if (num > 100) {
    console.log('no');
} else {
    console.log('ok');
}

(num === 50) ? console.log('ok') : console.log('error');
// тернарный оператор. если верно выполняем после ?, если неверно то после :

const nas = 40;
switch (nas) {
    case 49: 
        console.log('неверно');
        break;
    case 50: 
        console.log('верно');
        break;
    default:
        console.log('если ничего не подошло');
        break;
}
// сокращенная запись условий
