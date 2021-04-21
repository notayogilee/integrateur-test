$(function () {
    // toggle du btn active
    $('[data-filter-color]').click(function () {
        var choosenColor = $(this).data('filter-color');

        $('[data-filter-color]').each(function (e) {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        //toggle des sliders
        $('[data-slider]').each(function (e) {
            if ($(this).data('slider') = choosenColor) {
                $(this).addClass('active');
                $(this).slick('setPosition');
            } else {
                $(this).removeClass('active');
            }
        });
        return false;
    });
});

$(document).ready(function () {
    // slider
    // let slideWrapper = $(".slider-section__slider selected");

    $('.selected').slick({
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplayspeed: 3000
    });

    // toggle menu mobile
    $('[ data-mobile-menuburger-open]').click(function () {
        $('.header-mobile__menu').css("display", "block");
    });

    $('[ data-mobile-menuburger-close]').click(function () {
        $('.header-mobile__menu').css("display", "none");
    });

    // toggle le sous menu
    $('[ data-menu-dropdown]').click(function () {
        if ($(this).find('.dropdown').hasClass('dropdown--opened')) {
            $(this).find('.dropdown').removeClass('dropdown--opened');
            $(this).find('.header-mobile__link').removeClass('header-mobile__link--opened');
        } else {
            $(this).find('.dropdown').addClass('dropdown--opened');
            $(this).find('.header-mobile__link').addClass('header-mobile__link--opened');
        }
    });

});