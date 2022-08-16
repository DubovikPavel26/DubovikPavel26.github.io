// "use strict";

// // ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ //////////////////////////////////////////////////////////////////////////////////////////////////////////

// alert('Hello');

// const resault = confirm("Are you here?");

// const answer = prompt("Вам есть 18?", "");

// const answers = [];

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[2] = prompt("Как ваше отчество?", "");


// // ИНТЕРПОЛЯЦИЯ /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const category = "toys";
// console.log(`i like${category}`); 




// // ОПЕРАТОРЫ ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let inkr = 10;
//     decr = 10;
// console.log(++inkr);
// console.log(--decr);

// console.log(2*4 ==8);
// console.log(2*4 ==='8');

// // && оператор и
// // ||  оператор или

// const isCheked = true,
//       isClose = true;

// console.log(isCheked && isClose);

// // ! оператор отрицания, ставится перед переменной и меняет на противоположное значение




// // УСЛОВИЯ //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// if (4 == 4) {
//     console.log('ok');
// } else {
//     console.log('no');
// }

// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('no');
// } else {
//     console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('error');
// // тернарный оператор. если верно выполняем после ?, если неверно то после :

// const nas = 40;
// switch (nas) {
//     case 49: 
//         console.log('неверно');
//         break;
//     case 50: 
//         console.log('верно');
//         break;
//     default:
//         console.log('если ничего не подошло');
//         break;
// }
// // сокращенная запись условий




// // ЛОГИЧЕСКИЕ ОПЕРАТОРЫ ////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log('сыт');
// }

// // оператор && останавливается возвращает первую неправду или если правдв то последнее значение(если сравниваются чила и строки)

// const a = 3;
// const b = 4;
// const c = 6;

// if (a || b || c ) {
//     console.log('ок');
// } else {
//     console.log('нет');
// }

// const Hamburger = 3;
// const Fries = 4;
// const Cola = 3;
// const Nagets = 5;

// if (Hamburger ===3 && Cola ===3 || Fries === 4 && Nagets === 5){
//     console.log('ок');
// } else {
//     console.log('нет');
// }




// // ЗАДАЧИ ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Что в результате?
// console.log( NaN || 2 || undefined ); // 2
 
// console.log( NaN && 2 && undefined );// NaN
 
// console.log( 1 && 2 && 3 );//3
 
// console.log( !1 && 2 || !3 );// false
 
// console.log( 25 || null && !3 );//25
 
// console.log( NaN || null || !3 || undefined || 5);//5
 
// console.log( NaN || null && !3 && undefined || 5);//5
 
// console.log( 5 === 5 && 3 > 1 || 5);// true




// ЦИКЛЫ ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let num = 50;
// while (num < 55) {
//     console.log (num);
//     num++;
// }
// // 1 способ/////////////////
// do {
//     console.log (num);
//     num++;
// }
// while (num < 55);
// // 2 способ //////////////////
// for (let i = 1; i < 8; i++) {
//     console.log (i);
// }
// // 3 способ //////////////////

// for (let i = 0; i < 3; i++) {
//     console.log (i);
//     for (let j = 0; j < 3; j++) {
//         console.log (j);
//     }
// }
// вложенность циклов ///////////

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);
// Задача на звезды //////////////////


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = result[i]
// }

// ФУНКЦИИ ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\\

// function a() {
//     console.log("Hello");
// }
// a();

// function calk(a, b){
//     return(a + b);
// }

// console.log(calk(4, 5));

// function a() {
//     console.log('hello');
// }

// a();
// // 1 спсоб задания фунуции/////////

// const a = function(){
//     console.log('hello');
// };

// a();
// // 2 спсоб /////////////////////////

// const calk = (a, b) => a + b;

// for (i = 2; i < 10; i++){
//   if (i % 2 !== 0){
//     continue;
//   }
//   console.log(i);
// }

// function min(a, b){
//   if (a > b){
//     return b
//   } else {
//     return a
//   }
// }