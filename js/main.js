$(document).ready(function () {

    var formSignIn = $('.form-sign-in');
    var mainNav = $('nav');
    var btnMobileMenu = $('#nav-toggle');
    var formBlock = $('.block-form');
    var socialBar = $('.social-bar');
    var phoneNumber = $('.phone-number');

    var mobileBreakpoint = 768;
    var tabletBreakpoint = 992;

    //open sub menu

    $('nav ul li > a:not(:only-child)').click(function(e) {
        $(this).toggleClass('open');
        $(this).siblings('.sub-menu').toggle();
        $('.sub-menu').not($(this).siblings()).hide();
        formSignIn.hide();
        phoneNumber.hide();
        e.stopPropagation();
    });
    $('html').click(function() {
        $('.sub-menu').hide();
        phoneNumber.show();
    });

    //open main menu on tablet and mobile

    btnMobileMenu.click(function(e) {
        $(this).toggleClass('active');
        mainNav.toggle();
        e.stopPropagation();
    });
    $('html').click(function() {
        if ($(window).width() <= tabletBreakpoint) {
            mainNav.hide();
            btnMobileMenu.removeClass('active');
        }
    });

    //open form-block
    $('.block-form .header-block').click(function () {
        formBlock.toggleClass('open');
    });

    //open sign-in form
    $('#signIn').click(function (e) {

        if ($(window).width() <= tabletBreakpoint && $(window).width() >= mobileBreakpoint) {
            mainNav.hide();
            btnMobileMenu.removeClass('active');
            formSignIn.toggle().removeClass('mobile-form-signin');
        }
         else if ($(window).width() <= mobileBreakpoint){
            formSignIn.addClass('mobile-form-signin').show();
            formBlock.hide();
            socialBar.hide();
            phoneNumber.hide();
            mainNav.hide();
            btnMobileMenu.removeClass('active');
        } else {
            formSignIn.toggle();
            $('.sub-menu').hide();
        }
        e.stopPropagation();

    });

    //close sign-in form when click outside form
    $(document).click( function(event){
        if( $(event.target).closest(".form-sign-in").length )
            return;
        formSignIn.hide();
        socialBar.show();
        phoneNumber.show();
        event.stopPropagation();
    });

    //default options after resize window
    $(window).resize(function() {
        // console.log('resize');
        formBlock.removeClass('open');
        formSignIn.hide();
        if ($(window).width() <= tabletBreakpoint && $(window).width() >= 768) {  //992-768
            mainNav.hide();
            formBlock.show();
            btnMobileMenu.removeClass('active');
            // phoneNumber.hide();
        }
        else if ($(window).width() <= mobileBreakpoint) {                          //0-768
            mainNav.hide();
            phoneNumber.show();
            socialBar.show();
            formSignIn.hide();
        }
        else {                                                          //992+
            mainNav.show();
            // phoneNumber.hide();
            return this;
        }
    });

    // vimeo video api

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

});