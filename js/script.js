/* -------------------------------------------------------------------------- */
/*                                   banner                                   */
/* -------------------------------------------------------------------------- */

$(function(){

    $(".fade-slider").jdSlider({

        isSliding: false,
        isAuto: true,
        isLoop: true,
        isDrag: false,
        interval: 5000,
        isCursor: false,
        speed: 3000

    });

    var alturaBanner = $(".fade-slider").height();

    $(".bannerEstatico").css({"height":alturaBanner+"px"})

/* -------------------------------------------------------------------------- */
/*                             animaciones scroll                             */
/* -------------------------------------------------------------------------- */

$(window).scroll(function(){

    var posY = window.pageYOffset;

    if(posY >= alturaBanner){

        $("header").css({background:"rgba(255, 255, 255)"});

        $("header .logotipo").css({"filter":"invert(100%)"});

        $("header .fa-search").css({"filter":"invert(100%)"});

        $("header .fa-bars").css({"filter":"invert(100%)"});

    }else{
        $("header").css({background:"rgba(0, 0, 0, .6  )"});

        $("header .logotipo").css({"filter":"invert(0)"});

        $("header .fa-search").css({"filter":"invert(0)"});

        $("header .fa-bars").css({"filter":"invert(0%)"});
    }
});

/* -------------------------------------------------------------------------- */
/*                                   Navbar                                   */
/* -------------------------------------------------------------------------- */

$(".fa-bars").click(function(){

    $(".menu").fadeIn("fast");

});

$(".btnClose").click(function(){

    $(".menu").slideUp("fast");

});

/* -------------------------------------------------------------------------- */
/*                             Animacion del grid                             */
/* -------------------------------------------------------------------------- */

$(".grid figure").mouseover(function(){

    $(this).css({"background-position":"right bottom"});
});

$(".grid figure").mouseleave(function(){
    $(this).css({"background-position":"left top"});
})

/* -------------------------------------------------------------------------- */
/*                                 pagination                                 */
/* -------------------------------------------------------------------------- */

$(".pagination").twbsPagination({
    totalPages: 10,
    visiblePage: 4,
    first: "Primero",
    last: "Último",
    prev: '<i class="fas fa-arrow-left"></i>',
    next: '<i class="fas fa-arrow-right"></i>'

});

/* -------------------------------------------------------------------------- */
/*                                 scrollorama                                */
/* -------------------------------------------------------------------------- */

var controller = $.superscrollorama();

controller.addTween(".contenidoInicio .container", TweenMax.from(

    $(".contenidoInicio .container"), .3, {css:{opacity: 0}}

    ));

/* -------------------------------------------------------------------------- */
/*                                  scrollUP                                  */
/* -------------------------------------------------------------------------- */

$.scrollUp({
    scrollText:"",
    topDistance: '100',
    scrollSpeed: 2000,
    animation: 'fade',
    easingType: "easeOutQuint"

})
    
});