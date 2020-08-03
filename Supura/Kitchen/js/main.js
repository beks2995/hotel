$(document).ready(function(){
    $("body").css("opacity", "1");

    $('ul.contact-tabs__nav').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.contact-tabs').find('div.tab-content').removeClass('active').eq($(this).index()).addClass('active');
    });

    //открыть обратную форму
    $('.callback-link').click( function () {
        $('.callback-overlay').fadeIn();
        $('main').addClass('active');
        $('.header').addClass('disabled');
        $('.footer').addClass('disabled');
    })
    //закрыть обратную форму
    $('.close-callback-overlay').click( function () {
        $('.callback-overlay').fadeOut();
        $('main').removeClass('active');
        $('.header').removeClass('disabled');
        $('.footer').removeClass('disabled');
    })
    //открыть обратную форму header
    $('.contact-tabs__icon').click( function () {
        $('.callback-overlay-2').fadeIn();
        $('main').addClass('disabled');
        $('.header').addClass('disabled');
        $('.footer').addClass('disabled');
    })
    //закрыть обратную форму header
    $('.close-callback-overlay-header').click( function () {
        $('.callback-overlay-2').fadeOut();
        $('main').removeClass('disabled');
        $('.header').removeClass('disabled');
        $('.footer').removeClass('disabled');
    })

    $('.consult-social').click( function () {
        $('.social-link').toggleClass('active');
    })

    //валидация номера
    $("input[type=tel]").mask("0(999) 99-99-99");

    //О нашем отеле карусель
    $("#about-carousel").owlCarousel({
        nav: false,
        dots: false,
        items: 4,
        margin: 40
    });

    // Кастомка кнопок навигации карусели
    var owl = $('#about-carousel');
    owl.owlCarousel();
// Go to the next item
    $('.nxtBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.prvBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    $('.burger').click( function () {
        $('.burger').toggleClass('active');
        $('.header').toggleClass('active');
        $('.header .container .nav .contact-tabs').toggleClass('active');
        $('.header .container .nav .wrapper').toggleClass('active');
        $('.header .container .nav .menu').toggleClass('active');
        $('main').toggleClass('active');
    })

});



