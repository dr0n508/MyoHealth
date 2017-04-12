(function($) {
    $(function() {
        $('nav ul li > a:not(:only-child)').click(function(e) {
            $(this).siblings('.sub-menu').toggle();
            $('.sub-menu').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        $('html').click(function() {
            $('.sub-menu').hide();
        });
    });
    document.querySelector('#nav-toggle').addEventListener('click', function() {
        this.classList.toggle('active');
    });
    $('#nav-toggle').click(function() {
        $('nav').toggle();
    });

    $('.block-form .header-block').click(function () {
        $('.block-form').toggleClass('open');
    })



    // $('.link-sub-menu').click(function () {
    //     $('.sub-menu').toggle();
    // });

    $('#signIn').click(function () {
        $('.form-sign-in').toggle();
    })


})(jQuery);


$('.slider-first-page').bxSlider({
    mode: 'fade',

    // captions: true
});