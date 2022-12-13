$(document).ready(function () {
    $('.brands').owlCarousel({
        items:5,
        loop:true,
        autoplay:true,
        nav:false,
        dots:false,
        responsive : {
 
            480: {
           
                items:2,
            },
   
           768: {
            items:3,
          
            },
            992: {
                items:4,
                center:true
            },
    
        1200: {
            items:5,
            }
        }
    });
    $('.comments').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        nav:false,
        dots:true
    });
    $('.slider-active').slick({
        dots: false,
        arrows:false,
        speed: 500
      });

    $('html').smoothScroll(2000);
    $('.top').smoothScroll(2000);
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top > 300) {
            $('.top').fadeIn(500);
        } else {
            $('.top').fadeOut(500);
        }
    });
    $("body").niceScroll({
        cursorcolor: "#505cfd",
        zindex: "2000",
        cursorwidth: "14px",
        hidecursordelay:800, 
        scrollspeed: 90,
    });
    $('.testimonial').parallaxie({
        speed: 0.5,
	    offset: 50,
    });
   
    $('.count').rCounter();

 
});
jQuery(document).ready(function () {
	jQuery('header nav').meanmenu({
        meanMenuContainer: '.pmenu',
        
        meanScreenWidth: "991"
    });
});