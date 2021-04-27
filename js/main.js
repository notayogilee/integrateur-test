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
    $('[data-mobile-menuburger-toggler]').click(function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.header-mobile__menu').slideDown();
        } else {
            $('.header-mobile__menu').slideUp();
            // ferme dropdown si ouvert et enleve tous les class ajoute
            $('.dropdown').slideUp();
            $('.header-mobile__link').removeClass('header-mobile__link--opened');
            $('.dropdown-item').removeClass('active');
            $('[data-menu-dropdown]').parent().find('.dropdown').removeClass('dropdown--opened');
            $('.header-mobile__has-dropdown').removeClass('active');
            $('.financement').css({ 'border-top': 'none' });
        }
    })

    // toggle le sous menu
    $('[ data-menu-dropdown]').click(function () {
        $(this).parent().toggleClass('active');
        if ($(this).parent().hasClass('active')) {
            $('.dropdown').slideDown();
            $(this).parent().find('.dropdown').addClass('dropdown--opened');
            $(this).addClass('header-mobile__link--opened')
            $('.financement').css({ 'border-top': '1px solid #000' });

        } else {
            $('.dropdown').slideUp();
            $('[data-menu-dropdown]').parent().find('.dropdown').removeClass('dropdown--opened');
            $('[data-menu-dropdown]').removeClass('header-mobile__link--opened');
            $('.financement').css({ 'border-top': 'none' });
            $('.dropdown-item').removeClass('active');
        }
    });

    // onclick links
    $('.dropdown-item').click(function () {
        $('.dropdown-item').removeClass('active');
        $(this).addClass('active');
    });

    // desktop
    $('[data-desktop-dropdown]').click(function () {
        if ($(this).find('.desktop-dropdown').hasClass('active')) {
            $(this).find('.desktop-dropdown').slideUp();
            $(this).find('.desktop-dropdown').removeClass('active');
            $(this).find('>:first-child').removeAttr('style');
        } else {
            $(this).find('.desktop-dropdown').slideDown();
            $(this).find('.desktop-dropdown').addClass('active');
            $(this).find('>:first-child').css({ 'color': '#47C671 ' });
        }
    })
});
