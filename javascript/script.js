'use strict';

let numberOfFilms;

function start(){
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        
    },
    actors: {},
    genres: [],
    privat: false
};



// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;



function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
              b = prompt('На сколько оцените его?', '').trim();
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();

function detectFunctionLevel(){
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}
}
detectFunctionLevel();


function showMyDB(){
    if(!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
} 

showMyDB();

function writeYourGenres(){
    for(i =1; i<=3;i++){
        const genre = prompt(`Ваш любимый жанр по номеру ${i}`).trim();
        personalMovieDB.genres[i -1] = genre;
    }
}
writeYourGenres();

