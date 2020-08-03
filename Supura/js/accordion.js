
$(document).ready(function(){

    $('.accordion').click( function () {
        $('.accordion').addClass('active');
        $('.hidden-text').addClass('active');
        $('.panel').addClass('active');
    })

    $('.hidden-text').click( function () {
        $('.accordion').removeClass('active');
        $('.hidden-text').removeClass('active');
        $('.panel').removeClass('active');
    })

})
