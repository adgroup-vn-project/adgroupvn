$(document).ready(function () {
    $('.logo-slider').owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        dots: false,
        dotsEach: true,
        dotsData: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,


    });

    $('.js-fullheight').css('height', '400px');

    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    dots: false,
        dotsEach: true,
        dotsData: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})


});

