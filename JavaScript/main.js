$(document).ready(function() {

    $(".nav-icon").click(function () {
        $(".full-nav").addClass("open");
    });

    $(".nav-close").click(function () {
        $(".full-nav").removeClass("open");
    });

    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        if (sc > 100) {
            $(".nav").addClass("sticky");
        } else {
            $(".nav").removeClass("sticky");
        }

    });


    $('.bxslider').bxSlider({
        mode: 'horizontal',
        moveSlides: 1,
        slideMargin: 40,
        infiniteLoop: true,
        minSlides: 1,
        maxSlides: 1,
        speed: 1200
    });


    if ($(".swiper-container").hasClass("team-member-slider")) {
        var swiper = new Swiper('.swiper-container', {
            sliderPerView: 3,
            allowTouchMove: true,
            loop: true,
            centeredSlides: true,
            slideToclickedslide: true,
            effect: "coverflow",
            grabcursor: true,
            autoplay: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            coverflow: {
                rotate: 0,
                scretch: 100,
                depth: 200,
                modifier: 1,
                slideShadows: false

            },
            breakpoints: {
                767: {
                    slidesPerView: 1,
                    centeredSlides: false,
                    effect: "slide",
                }
            }
        });
    }


    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});