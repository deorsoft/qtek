(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

        


// Or with jQuery

$(document).ready(function(){
  $('.carousel').carousel();


  
  //Funcion para el Autoplay



/*   setInterval(function(){
    $('.carousel').carousel('next');
  }, 2000); */

  //Next Slide Function

  $('.next').click(function(){
    $('.carousel').carousel('next');
  });

  //Prev Slide Function

  $('.prev').click(function(){
    $('.carousel').carousel('prev');
  });
});



// Or with jQuery

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true,
  noWrap: true,
});
     
    
     
    
