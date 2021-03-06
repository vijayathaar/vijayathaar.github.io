/*!
 * Start Bootstrap - Creative v3.3.7+1 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
! function(a) {
    "use strict";
    a("a.page-scroll").bind("click", function(e) {
        var l = a(this);
        a("html, body").stop().animate({
            scrollTop: a(l.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"), e.preventDefault()
    }), a("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 51
    }), a(".navbar-collapse ul li a").click(function() {
        a(".navbar-toggle:visible").click()
    }), a("#mainNav").affix({
        offset: {
            top: 100
        }
    })
}(jQuery);
(function ($) {

    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */

    $(window).load(function () {
            $('.loader').fadeOut('2000');
            $('.page-loader').delay(500).fadeOut('slow');
    });

    


})(jQuery);