$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    new WOW().init();

    $(window).scroll(function () {
        $(this).scrollTop() >= 500 ? $(".arr-top").fadeIn(500) : $(".arr-top").fadeOut(500);
    });


    $(".arr-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });

    ///////// **main Slider** /////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        speed: 500,
        // autoplay: {
        //     delay: 5000,
        // },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
    });
    ///////// **bestSeller Slider** /////////
    var bestSellerswiper = new Swiper('.bestSeller .swiper-container', {
        spaceBetween: 18,
        loop: true,
        pagination: {
            el: '.bestSeller .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.bestSeller .swiper-button-next',
            prevEl: '.bestSeller .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 2,
            },
            480: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
            1500: {
                slidesPerView: 6,
            },
        },
    });
    ///////// **offers Slider** /////////
    var offersswiper = new Swiper('.offers .swiper-container', {
        spaceBetween: 18,
        loop: true,
        pagination: {
            el: '.offers .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.offers .swiper-button-next',
            prevEl: '.offers .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 2,
            },
            480: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
            1500: {
                slidesPerView: 6,
            },
        },
    });
    ///////// **new Slider** /////////
    var newswiper = new Swiper('.new .swiper-container', {
        spaceBetween: 18,
        loop: true,
        pagination: {
            el: '.new .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.new .swiper-button-next',
            prevEl: '.new .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 2,
            },
            480: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
            1500: {
                slidesPerView: 6,
            },
        },
    });
    ///////// **feat Slider** /////////
    if ($(window).width() <= 991) {
        $(".feats .col-md-3").unwrap();
        $(".feats .feat").unwrap();
        $(".feats .feat").addClass("swiper-slide");
        $(".feats .feat").wrapAll("<div class='swiper-wrapper'></div>");
        $(".feats").addClass("swiper-container");

        var features = new Swiper('.feats.swiper-container', {
            spaceBetween: 18,
            loop: true,
            pagination: {
                el: '.feats .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
            },
        });
    }
    ///////// **footer ** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }

    ///////// **menu** /////////
    $(".span-btn").click(function () {
        $(".sub-ul").slideToggle(400)
        $(".mo-overlay").fadeToggle(400)
        $("body").toggleClass("overflow");
        if ($(window).width() <= 991) {
            $(".mo-overlay").hide()
            $("body").addClass("overflow");
        }
    })
    $(".mo-overlay").click(function () {
        $(".sub-ul").slideUp(400)
        $(".mo-overlay").fadeOut(400)
        $("body").removeClass("overflow");
    })
    if ($(window).width() <= 991) {
        $(".sub2-ul").unwrap();
        $(".sub2-ul").addClass("mo-panel");
        $(".sub2-cont .sub-a").addClass("mo-accordion");

        $('.menu-btn').click(function () {
            $("nav").fadeIn(300);
            $(".nav-cont").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.nav-cont').click(function (e) {
            e.stopPropagation();
        });
        $('.menu-close').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }
    ///////// **search** /////////
    if ($(window).width() <= 991) {
        $(".mo-search-icon").click(function () {
            $(".search-form").fadeIn(400);
            $("body").addClass("overflow");
            $(".search-cont").addClass("open");
            $('.search-input').focus();
        })
        $('.search-form').click(function () {
            $("body").removeClass("overflow");
            $(".search-form").fadeOut(500);
            $(".search-cont").removeClass("open");
            $('.search-input').focusOut();
        });
        $('.search-cont').click(function (e) {
            e.stopPropagation();
        });
    }
    ///////// **acc ** /////////
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings().css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings().css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings().css('padding-top', "0");
    })
});