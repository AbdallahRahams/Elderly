(function($) {
    "use strict";

    /*=============================================
    	=    		 Preloader			      =
    =============================================*/
    function handlePreloader() {
        if ($('.loader-wrap').length) {
            $('.loader-wrap').delay(500).fadeOut(500);
        }
    }

    $(window).on('load', function() {
        $("#loading").fadeOut(500);
    });






    //===Header Sticky===
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $("#sticky-header").removeClass("sticky-menu");
            $('.scroll-to-target').removeClass('open');

        } else {
            $("#sticky-header").addClass("sticky-menu");
            $('.scroll-to-target').addClass('open');
        }
    });
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }

    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

        //Dropdown Button
        $('.main-header li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });

        //Disable dropdown parent link
        //$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
        //e.preventDefault();
        //});
    }

    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {

        var mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();
        $('.mobile-menu .navigation').append(mobileMenuContent);
        $('.sticky-header .navigation').append(mobileMenuContent);
        $('.mobile-menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
        });
        //Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function() {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
        });

    }


    $('.main-carousel').owlCarousel({
        loop: true,
        margin: 40,
        fluidSpeed: true,
        smartSpeed: 3000,
        responsiveClass: true,
        dots: false,

        navText: ["<i class='icon icon-arrow-left'></i>", "<i class='icon icon-arrow-right'></i>"],
        nav: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
            1920: {
                items: 1
            }
        }

    });
    $('.blog-carousel').owlCarousel({
        loop: true,
        margin: 30,
        fluidSpeed: true,
        smartSpeed: 3000,
        responsiveClass: true,
        dots: false,

        navText: ["<i class='icon icon-arrow-left'></i>", "<i class='icon icon-arrow-right'></i>"],
        nav: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1920: {
                items: 3
            }
        }

    });

    $('.service-carousel').owlCarousel({
        //center: true,
        loop: true,
        margin: 30,
        fluidSpeed: true,
        smartSpeed: 5000,
        responsiveClass: true,
        dots: false,
        navText: ["<span class='icon icon-arrow-left'></span>", "<span class='icon icon-arrow-right'></span>"],
        nav: true,
        autoplay: true,
        autoplaySpeed: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1920: {
                items: 3
            }
        }

    });

    $('.service-carousel-home-two').owlCarousel({
        //center: true,
        items: 1,
        margin: 0,
        loop: true,
        smartSpeed: 700,
        stagePadding: 100,
        nav: true,
        navText: ["<span class='icon icon-arrow-left'></span>", "<span class='icon icon-arrow-right'></span>"],
        dots: false,
        autoplay: 600,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
                margin: 15
            },
            530: {
                items: 1,
                stagePadding: 70,
                margin: 30
            },
            576: {
                items: 1,
                stagePadding: 110,
                margin: 30
            },
            768: {
                items: 2,
                stagePadding: 50,
                margin: 30
            },
            992: {
                items: 2,
                stagePadding: 110,
                margin: 30
            },
            1200: {
                items: 2,
                stagePadding: 200,
                margin: 30
            },
            1400: {
                items: 3,
                stagePadding: 130,
                margin: 30
            },
            1600: {
                items: 3,
                stagePadding: 260,
                margin: 30
            },
            1830: {
                items: 3,
                stagePadding: 375,
                margin: 30
            }
        }

    });




    $('.testimonial-one__carousel').owlCarousel({
        loop: true,
        margin: 35,
        fluidSpeed: true,
        smartSpeed: 3000,
        responsiveClass: true,
        dots: false,
        nav: true,
        autoplay: false,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        navText: ["<span class='icon icon-arrow-left'></span>", "<span class='icon icon-arrow-right'></span>"],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
                stagePadding: 3,
            },
            1000: {
                items: 3,
                stagePadding: 3,
            },
            1920: {
                items: 3,
                stagePadding: 3,
            }
        }



    });

    $('.testimonial-slide').owlCarousel({
        loop: true,
        margin: 35,
        fluidSpeed: true,
        smartSpeed: 3000,
        responsiveClass: true,
        dots: true,
        nav: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        navText: ["<span class='icon icon-arrow-left'></span>", "<span class='icon icon-arrow-right'></span>"],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
            1920: {
                items: 1
            }
        }

    });
    $('.team-carousel').owlCarousel({
        loop: true,
        margin: 30,
        fluidSpeed: true,
        smartSpeed: 3000,
        responsiveClass: true,
        dots: false,

        navText: ["<i class='icon icon-arrow-left'></i>", "<i class='icon icon-arrow-right'></i>"],
        nav: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            },
            1920: {
                items: 4
            }
        }


    });




})(jQuery);