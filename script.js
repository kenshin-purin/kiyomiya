$(function() {
    setTimeout(function() {
    $('.start_title').fadeIn(1000);
    },200);

    setTimeout(function() {
        $('.start').fadeOut(600);
    },2500); 
});

// hamu_btn
$(".hamu_btn").click(function () {
    $(this).toggleClass('active');
    $(".header_nav").toggleClass('panelactive');
});


$(".header_nav a").click(function () {

    $(".hamu_btn").removeClass('active');
    $(".header_nav").removeClass('panelactive');
});


$(window).scroll(function () {
    console.log('scroll')
    $(".fadein").each(function () {
        var targetElement =   $(this).offset().top;
        var scroll =$(window).scrollTop();
        var windowHeight =$(window).height();
        if (scroll > targetElement - windowHeight + 150) {
            $(this).addClass('scrollin')
        };
    });

    $(".clear").each(function () {
        var targetElement =   $(this).offset().top;
        var scroll =$(window).scrollTop();
        var windowHeight =$(window).height();
        if (scroll > targetElement - windowHeight + 150) {
            $(this).addClass('scroll_clear')
        };
    });
});


