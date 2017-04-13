(function($) {
    $(function() {
        $('nav ul li > a:not(:only-child)').click(function(e) {
            $(this).toggleClass('open');
            $(this).siblings('.sub-menu').toggle();
            $('.sub-menu').not($(this).siblings()).hide();
            $('.form-sign-in').hide();
            e.stopPropagation();
        });
        $('html').click(function() {
            $('.sub-menu').hide();
        });
    });

    $(function() {
        $('#nav-toggle').click(function(e) {
            $(this).toggleClass('active');
            $('nav').toggle();
            e.stopPropagation();
        });
        $('html').click(function() {
            if ($(window).width() <= '992') {
                $('nav').hide();
                $('#nav-toggle').removeClass('active');
            }
        });
    });

    $('.block-form .header-block').click(function () {
        $('.block-form').toggleClass('open');
    });

    $('#signIn').click(function () {

            if ($(window).width() <= '992' && $(window).width() >= '768') {
                $('nav').hide();
                $('#nav-toggle').removeClass('active');
                $('.form-sign-in').toggle().removeClass('mobile-form-signin');
            }
             else if ($(window).width() <= '768'){
                $('.form-sign-in').addClass('mobile-form-signin');
                $('.block-form').toggle();
                $('.social-bar').toggle();
                $('.phone-number').hide();
                $('nav').hide();
                $('#nav-toggle').removeClass('active');
            } else {
                console.log('des');
                $('.form-sign-in').toggle();
            }

    });

    $(window).resize(function() {
        console.log('resize');
        $('.block-form').removeClass('open');
        $('.form-sign-in').hide();
        if ($(window).width() <= '992' && $(window).width() >= '768') {  //992-768
            $('nav').hide();
            $('#nav-toggle').removeClass('active');
            $('.phone-number').hide();
        }
        else if ($(window).width() <= '768') {                          //0-768
            $('nav').hide();
            $('.phone-number').show();
            $('.social-bar').show();
            $('.form-sign-in').hide();
        }
        else {                                                          //992+
            $('nav').show();
            $('.phone-number').hide();
            return this;
        }

    });

    /************VideoVimeoApi**************/

    var iframeTop = $('#top-video');
    var playerTop = new Vimeo.Player(iframeTop);
    playerTop.setVolume(0);
    playerTop.play();
    playerTop.setLoop(true);

    var iframeBottom = $('#bottom-video');
    var playerBottom = new Vimeo.Player(iframeBottom);

    playerBottom.on('volumechange', function() {
        playerTop.setVolume(0);
    });

    $('#play-pause').click(function() {
        playerBottom.play();
        $(this).toggleClass('play');
        if ($(this).hasClass('play')) {
            //pause video
            playerBottom.pause();
        } else {
            //unpause video
            playerBottom.play();
            $(this).siblings(".overlay").hide();
            $(this).hide();
        }
    });

})(jQuery);