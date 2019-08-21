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
    // $('.js-logo-slider-height').css('height', '200px');
    // $('.js-section2-height').css('height', '620px')
    // $('.js-section-dev-height').css('height', '300px')

    $('.prd-slider').owlCarousel({
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

    //    $('.js-fullheight').css('height', '400px');

});

// console.log('hello world');