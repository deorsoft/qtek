(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

        


// Or with jQuery

$(document).ready(function(){
  $('.carousel').carousel( );
  
  // function para autoplay

  setInterval(function(){
    $('.carousel').carousel('next');
  }, 2000);

});

