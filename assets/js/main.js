(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

   
  // owlCarousel
  $(".hero-slider").owlCarousel({
    loop: true, 
    items: 1,
    smartSpeed: 500,
    autoplay: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false, 
  });



 
})(jQuery);
