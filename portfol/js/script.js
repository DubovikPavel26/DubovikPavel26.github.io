const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close'),
      link = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
} );


close.addEventListener('click', () => {
    menu.classList.remove('active');
} );

link.addEventListener('click', () => {
    menu.classList.remove('active');
} );

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll ('.skills__line-proc');

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
      });


      $(document).ready(function(){

   
        $('form').submit(function(e){
           e.preventDefault();
   
       
   
           $.ajax({
               type: "POST",
               url: "mailer/smart.php",
               data: $(this).serialize()
           }).done(function(){
               $(this).find("input").val("");
   
               $('form').trigger('reset');
           });
           return false;
        });
         });
   
