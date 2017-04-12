(function($) {
    $(function() {
        $('nav ul li > a:not(:only-child)').click(function(e) {
            $(this).toggleClass('open');
            $(this).siblings('.sub-menu').toggle();
            $('.sub-menu').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        $('html').click(function() {
            $('.sub-menu').hide();
        });
    });
    // document.querySelector('#nav-toggle').addEventListener('click', function() {
    //     this.classList.toggle('active');
    // });
    $('#nav-toggle').click(function() {
        $(this).toggleClass('active');
        $('nav').toggle();
    });

    $('.block-form .header-block').click(function () {
        $('.block-form').toggleClass('open');
    });



    // $('.link-sub-menu').click(function () {
    //     $('.sub-menu').toggle();
    // });

    $('#signIn').click(function () {

            if ($(window).width() <= '992' && $(window).width() >= '768') {
                $('nav').hide();
                $('#nav-toggle').removeClass('active');
                $('.form-sign-in').toggle();
            }
             else if ($(window).width() <= '768'){
                $('.form-sign-in').toggleClass('mobile-form-signin');
                $('.block-form').toggle();
                $('.social-bar').toggle();
                $('nav').hide();
                $('#nav-toggle').removeClass('active');
            } else {
                console.log('des');
                $('.form-sign-in').toggle();
            }

    });

    $(window).resize(function() {
        if ($(window).width() >= '992'){
            $('nav').show();
            return this;
        }
        else   {
            $('nav').hide();
            $('#nav-toggle').removeClass('active');

        }

    });





        $('.button-play-video').on('click', function(ev) {

            $("#video")[0].src += "&autoplay=1";
            ev.preventDefault();
            $('.button-play-video').hide();

        });





})(jQuery);


$('.slider-first-page').bxSlider({
    video: true,
    useCSS: false
});

$('.bxslider').bxSlider({
    video: true,
    useCSS: false
});