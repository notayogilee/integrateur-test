$(function () {
    // toggle du btn active
    $('.slider-section__toggle-cta').click(function (e) {
        var choosenColor = $(this).data('filter-color');

        $('.slider-section__toggle-cta').each(function (e) {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        //toggle des sliders
        $('.slider-section__slider').each(function (e) {

            if ($(this).data('slider') === choosenColor) {
                $(this).addClass('selected');
            } else {
                $(this).removeClass('selected');
                $('.slick-slider').slick('unslick');
            }
        });
        setSlider();
        return false;
    });

    const setSlider = function () {
        // slider
        $(".selected").slick({
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: true
                    }
                }
            ]
        });
    }

    setSlider();

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
    return false;
});
