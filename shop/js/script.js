let buttonPlus = document.querySelector('.plus');
let buttonMinus = document.querySelector('.minus')
let number = document.querySelector('.content__reviews__buy__number');

let menu = document.querySelector('.menu')
let menuItem = document.querySelectorAll('.menu_item')
let hamburger = document.querySelector('.hamburger')
let menuClose = document.querySelector('.menu__close')

let oneElementCorusel = document.getElementById('1')
let twoElementCorusel = document.getElementById('2')
let threeElementCorusel = document.getElementById('3')
let foreElementCorusel = document.getElementById('4')
let fiveElementCorusel = document.getElementById('5')
let contentPhoto =  document.querySelector('.content__photo')


oneElementCorusel.onclick = function(){
    contentPhoto.innerHTML = `<img src="img/one.png" alt="photo">`
}

twoElementCorusel.onclick = function(){
    contentPhoto.innerHTML = `<img src="img/two.png" alt="photo">`
}

threeElementCorusel.onclick = function(){
    contentPhoto.innerHTML = `<img src="img/three.png" alt="photo">`
}

foreElementCorusel.onclick = function(){
    contentPhoto.innerHTML = `<img src="img/fore.png" alt="photo">`
}

fiveElementCorusel.onclick = function(){
    contentPhoto.innerHTML = `<img src="img/five.png" alt="photo">`
}


let product = 1;


buttonPlus.addEventListener('click', () =>{
    product+=1;
    number.innerHTML = `${product}`

})

buttonMinus.addEventListener('click', () =>{
    if(product <=  0){
        return
    }
    product-=1;
    number.innerHTML = `${product}`

})

$(document).ready(function(){
    $(".content__reviews__buy__click").on('click', function(){
        $(".overlay, .modal").fadeIn();
    });
    $(".modal__close").on('click', function(){
        $(".overlay, .modal").fadeOut();
    })



});




    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('menu__active');
    });

    menuClose.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.remove('menu__active');
    });



