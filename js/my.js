//-----------------------------------
//services section
//-----------------------------------

$(function () {
    new WOW().init();
});

//--------work-----------

$(function () {
    $(".img-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options

        gallery: {
            enabled: true
        }
    });
});

$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 3
            }

        }

    });
});
$(function () {
    $("#customer").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true

    });
});
$(function () {
    $('.counter').counterUp({
        delay: 8,
        time: 1500
    });

});

$(function () {
    $(".clients").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 5
            },
            992: {
                items: 6
            }
        }
    });
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            $('nav').removeClass("visco-top-nav");
            $('#back-top').fadeOut();
        } else {
            $('nav').addClass("visco-top-nav");
            $('#back-top').fadeIn();
        }

    });


});

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});
