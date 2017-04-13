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
        console.log('dddddd');
        $('.block-form').removeClass('open');
        // $('.form-sign-in').hide();
        if ($(window).width() >= '992'){
            $('nav').show();
            return this;
        }
        else   {
            $('nav').hide();
            $('#nav-toggle').removeClass('active');

        }

    });





        // $('.button-play-video').on('click', function(ev) {
        //
        //     $("#video")[0].src += "&autoplay=1";
        //     ev.preventDefault();
        //     $('.button-play-video').hide();
        //
        // });






        /************video**************/

            //load video muted
        var video = $("#myvideo");
            video.vimeo("play");
            video.vimeo("setVolume", 0);
            video.vimeo("loop");


        var video2 = $("#bottom-video");
        // video2.vimeo("play");
        //     video2.vimeo("setVolume", 0);
        //     video2.vimeo("loop");




    //toggle play/pause
    $('#play-pause').click(function() {
        console.log('click');
        $(this).toggleClass('play');
        if ($(this).hasClass('play')) {
            //pause video
            video2.vimeo("pause");
            // $(this).css('background', 'url("http://unclebarts.co.uk/wp-content/themes/bungabunga_bootstrap/img/video-controls/play.png") no-repeat');
        } else {
            //unpause video
            video2.vimeo("play");
            console.log('dn');
            $(this).siblings(".overlay").hide();
            // $(this).next(".overlay").hide();
            // $('.overlay')
            $('.button-play-video').hide();
            // $(this).css('background', 'url("http://unclebarts.co.uk/wp-content/themes/bungabunga_bootstrap/img/video-controls/pause.png") no-repeat');
        }
    });

    //toggle mute/unmute
    $('#mute-unmute').click(function() {
        $(this).toggleClass('mute');
        if ($(this).hasClass('mute')) {
            //unmute video
            video2.vimeo("setVolume", 1);
            $(this).css('background', 'url("http://unclebarts.co.uk/wp-content/themes/bungabunga_bootstrap/img/video-controls/volume.png") no-repeat');

        } else {
            //mute video
            video2.vimeo("setVolume", 0);
            $(this).css('background', 'url("http://unclebarts.co.uk/wp-content/themes/bungabunga_bootstrap/img/video-controls/mute.png") no-repeat');
        }
    });


        /*********************/





})(jQuery);

//
// $('.slider-first-page').bxSlider({
//     video: true,
//     useCSS: false
// });
//
// $('.bxslider').bxSlider({
//     video: true,
//     useCSS: false
// });