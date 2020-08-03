$(document).ready(function(){

    $("body").css("opacity", "1");

    //валидация номера
    $("input[type=tel]").mask("0(999) 99-99-99");

    $('.toBook-room').click( function () {
        $('.reserve-popup-bottom-text').addClass('active');
        $('.reserve-popup-bottom-form').addClass('disabled');
    })

    $('.reserve-popup-bottom-form').submit(function (e) {
        var form = this;
        e.preventDefault();
        setTimeout(function () {
            form.submit();
        }, 4000); // in milliseconds
    });

});



