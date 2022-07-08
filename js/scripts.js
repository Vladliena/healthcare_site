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