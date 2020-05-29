
$(function(){
    
    /* -------------------------------------------------------------------------- */
    /*                                   banner                                   */
    /* -------------------------------------------------------------------------- */
    
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
    $(this).css({"transform":"scale(1.1)"});
    $(this).css({"z-index":"3"});
});

$(".grid figure").mouseleave(function(){
    $(this).css({"background-position":"left top"});
    $(this).css({"transform":"scale(1)"});
    $(this).css({"z-index":"0"});
});

$(".grid figure").click(function(){

    var vinculo =  $(this).attr("vinculo");

    window.location = vinculo;
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
    topDistance: '20px',
    scrollSpeed: 2000,
    animation: 'fade',
    easingType: "easeOutQuint"

})

/* -------------------------------------------------------------------------- */
/*                                  CARGADOR                                  */
/* -------------------------------------------------------------------------- */

$("body").css({"overflow-y":"hidden"})

var cargarImg = $("img");
var cargarScript = $("script")
var cargarCss = $("link");
var cargarVideos = $("video");
var cargarAudio = $("audio");
var numItem = 0;
var valorPorcentaje = 0;
var incremento = 0;
var numeroCarga = 0;

var totalObjetos = [];

totalObjetos.push(cargarImg, cargarScript, cargarCss, cargarVideos, cargarAudio);

totalObjetos.forEach(funcionForeach);

                    function funcionForeach(item, index){

                        for (i = 0; i < item.length; i++){

                                numItem++;

                            valorPorcentaje = 100/numItem;
                            
                            
                        }

                        for (let i = 0; i < item.length; i++) {

                                preload(i, item);
                            
                        }
                        
                        
                    }
                    
                    function preload(i, item){

                        setTimeout(function(){
                            
                            $(item[i]).ready(function(){
        
        
                                numeroCarga++
        
                                incremento = Math.floor(numeroCarga * valorPorcentaje);
        
                                $("#porcentajeCargador").html(incremento+"%");
        
                                $("#rellenoCargador").css({"width":incremento+"%"});
        
                                if(incremento >= 100){
                                    $("#preloader").delay(450).fadeOut("slow");
        
                                    $("body").delay(450).css({"overflow-y": "scroll"});
                                }
                            })
    
                     }, i*100);                  
            }
            
/* -------------------------------------------------------------------------- */
/*                           DESLIZADOR DE ARTICULOS                          */
/* -------------------------------------------------------------------------- */

$(".deslizadorArticulos").jdSlider({

    wrap: '.slide-inner',
    slideShow: 3,
    slideToScroll: 1,
    isLoop: true,
    responsive: [{
        viewSize: 360,
        settings:{
            slideShow: 2,
            slideToScroll: 1
        }
    }]

});
                    
    
});