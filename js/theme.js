(function () {
    "use strict";

    function back_to_top() {
        $('.back-to-top').hide();
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 400) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }

            return false;
        });
        $('.back-to-top a').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);

            return false;
        });
    }

    function makeTimer() {
        var endTime = new Date('31 April 2018 9:56:00 GMT+01:00');
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < '10') { hours = '0' + hours; }
		if (minutes < '10') { minutes = '0' + minutes; }
		if (seconds < '10') { seconds = '0' + seconds; }

        $('.days').html(days + '<span>D</span>');
        $('.hours').html(hours + '<span>H</span>');
        $('.minutes').html(minutes + '<span>M</span>');
        $('.seconds').html(seconds + '<span>S</span>');
    }

    $(document).ready(function () {
        back_to_top();

        // ===== Page Loader ======
        setTimeout(function () {
            $('#page-preloader').fadeOut();
        }, 2000);

        setInterval(function () { 
			makeTimer();
		}, 1000);
        
		// ===== Slideshow ======
        $('#tiva-slideshow').nivoSlider({
            effect: 'random',
            animSpeed: 1000,
            pauseTime: 5000,
            directionNav: true,
            controlNav: true,
            pauseOnHover: true
        });
		
		// ===== Show/Hide Menu ======
        $('ul.menu').on('click', '.more', function () {
            if ($(this).hasClass('hide')) {
                $(this).text('show more').removeClass('.hide');
            } else {
				$(this).text('hide').addClass('hide');
            }
            $(this).siblings('li.toggleable').slideToggle();
        });

		// ===== Carousel ======
        $('.category-product').owlCarousel({
            loop: true,
            autoplaytimeout: 6000,
            margin: 30,
            autoplay: true,
            dots: false,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
					navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
                },
                600: {
                    items: 3,
                    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
                },
                1000: {
                    items: 3,
                    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]

                }
            }
        });
		
        $('.category-product-index').owlCarousel({
            loop: true,
            autoplaytimeout: 6000,
            margin: 30,
            autoplay: true,
            dots: false,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
					navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
                },
                600: {
                    items: 3,
                    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
                },
                1000: {
                    items: 3,
                    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]

                }
            }
        });
		
        $('.testimonial-type-one').owlCarousel({
            loop: true,
            autoplaytimeout: 6000,
            margin: 30,
            autoplay: true,
            dots: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,

                }
            }
        });
		
        $('.testimonial-type-home3').owlCarousel({
            loop: true,
            autoplaytimeout: 6000,
            margin: 30,
            autoplay: true,
            dots: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 3
                }
            }
        });
		
        $('#manufacture').owlCarousel({
            loop: true,
            autoplaytimeout: 6000,
            margin: 30,
            autoplay: true,
            dots: false,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 3,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 6,

                }
            }
        });

        $('.category-product-item').owlCarousel({
            loop: true,
            autoplaytimeout: 6000,
            margin: 15,
            autoplay: false,
            dots: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 3
                }
            }
        });

        $('.featured').owlCarousel({
            loop: true,
            autoplaytimeout: 6000,
            margin: 30,
            autoplay: false,
            dots: false,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
					navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
                },
                600: {
                    items: 3,
					navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
                },
                1000: {
                    items: 5,
                    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
                }
            }
        });

        $('.testimonials').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            autoplaytimeout: 6000,
            autoplay: true,
            dots: true,
            autoplayHoverPause: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        $('.lookbook').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            autoplaytimeout: 6000,
            autoplay: true,
            dots: true,
            autoplayHoverPause: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
                },
                600: {
                    items: 1,
                    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
                },
                1000: {
                    items: 2,
                    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
                }
            }
        });

		// ===== Mobile Menu ======
        $('#mobile_mainmenu').on('click', function () {
            $('.mobile-top-menu').addClass('active-show');
        });
        $('.close').on('click', function () {
            $('.mobile-top-menu').removeClass('active-show');
        });

		// ===== Mobile Menu Right ======
        $('.mobile-menutop').on('click', function () {
            $('#mobile-pagemenu').addClass('active-pagemenu');
        });
        $('.close-box').on('click', function () {
            $('#mobile-pagemenu').removeClass('active-pagemenu');
        });

		// ===== Show/Hide Category ======
        $('#icon-menu').on('click', function () {
            $('.menu-banner').addClass('category-show');
        });
        $('.btnov-lines-large').on('click', function () {
            $('.menu-banner').removeClass('category-show');
        });

        $('#dropdownMenuButton').on('click', function () {
            $('.vertical-dropdown').addClass('open');
        });
        $('#nav_icon3').on('click', function () {
            $(this).toggleClass('open');
        })

       // ===== Map ======
        $('#click-map').on('click', function () {
            $('.block-map').toggleClass('closed');
        })

        $('.toggle-category').on('click', function () {
            $('ul').toggleClass('category-tab');
        })

        // ===== Filter ======
        $('.ml-3').on('click', function () {
            $('.flex-9').addClass('filter');
        })
        $('.hide-filter').on('click', function () {
            $('.flex-9').removeClass('filter');
        })

		// ===== Search ======
        $('.search').on('click', function () {
            $('#tiva-searchBox ').css({ 'opacity': 1, 'visibility': 'visible', 'right': 0 });
        })
        $('.tiva-seachBoxClose').on('click', function () {
            $('#tiva-searchBox ').css({ 'opacity': 0, 'visibility': 'hidden' });
        })

		// ===== Slider Range ======
        if ($('#price-filter').length) {
            $('#price-filter').slider({
                from: 0,
                to: 100,
                step: 1,
                smooth: true,
                round: 0,
                dimension: '&nbsp;$',
                skin: 'plastic'
            });
        }
		
		// ===== Slick ======
        if ($('#deal_of_day').length) {
            $('#deal_of_day').slick({
                autoplay: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
                autoplaySpeed: 1500,
                arrows: true,
                nextArrow: '<span class="left"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
                prevArrow: '<span class="right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
                datanav: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
    });
})()