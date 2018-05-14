(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

        

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
 // var instances = M.Carousel.init(elems, options);
  var instance = M.Carousel.init({
    fullWidth: true,
    autoplay: true,
    numVisible: 3
  });
});

// Or with jQuery

$(document).ready(function(){
  $('.carousel').carousel();
});



// Or with jQuery

$('.carousel.carousel-slider').carousel({
  fullWidth: true
});
    
