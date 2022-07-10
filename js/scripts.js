$(document).ready(function(){

    $('.owl-carousel-1').owlCarousel({
        loop:true,
        center:true,
        margin:65,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('.owl-carousel-2').owlCarousel({
        center:true,
        autoplay: true,
        autoplaySpeed: 6000,
        loop: true,
        margin:65,
        nav: false,
        dots: false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});

$( function() {
    $( "#speed" ).selectmenu();

    $( "#files" ).selectmenu();

    $( "#number" )
        .selectmenu()
        .selectmenu( "menuWidget" )
        .addClass( "overflow" );

    $( "#salutation" ).selectmenu();
} );

//menu toggle
(function($){
    $('.nav-toggle').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
    })
})(jQuery);