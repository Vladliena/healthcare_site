$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        items:3,
        loop:true,
        center:true,
        margin:65,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });
    $('.owl-carousel2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        items:3,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
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