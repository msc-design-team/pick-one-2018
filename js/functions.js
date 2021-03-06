$(document).ready(function () {

    $('#pagepiling').pagepiling({
        direction: 'horizontal',
        menu: '#menu',
        anchors: ['home', 'studentOrgs', 'leadership', 'service', 'academic', 'athletics', 'cultural', 'fratAndSoro', 'lgbt', 'military', 'employment', 'performing', 'spiritual'],
        scrollingSpeed: 300,
        loopBottom: true,
        navigation: {
            'position': 'right',
            'tooltips': ['Pick One!', 'Student Organizations', 'Leadership', 'Service & Volunteerism', 'Academic & Professional', 'Athletics & Recreation', 'Cultural & Identity', 'Fraternity & Sorofity Life', 'LGBTQIA+ Programs', 'Military & Veterans', 'On-Campus Employment', 'Performing Arts', 'Spiritual']
        },
        onLeave: function (index, nextIndex, direction) {
        },
        afterRender: function () {
        },
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                // $('.social-media-wrapper').addClass('hide');
                // $('#pp-nav').addClass('hide');
                $('.pick-one-callout').addClass('hide');
            } else {
                // $('.social-media-wrapper').removeClass('hide');
                // $('#pp-nav').removeClass('hide');
                $('.pick-one-callout').removeClass('hide');
            }
        }
    });

    $('.hamburger-menu').on('click', function () {
        $('.bar').toggleClass('animate');
        $('nav').toggleClass('nav--active');
        $(this).toggleClass('nav--open');
    });

    $('a').on('click', function () {
        $('nav').removeClass('nav--active');
        $('.bar').removeClass('animate');
        $('.hamburger-menu').removeClass('nav--open');
    });

    $('.section__navigation__previous').hover(
        function () {
            $(this).addClass('bg-color-cycle');
        },
        function () {
            $(this).removeClass('bg-color-cycle');
        }
    );

    $('.section__navigation__next').hover(
        function () {
            $(this).addClass('bg-color-cycle');
        },
        function () {
            $(this).removeClass('bg-color-cycle');
        }
    );

    $('.list__item .list__title').hover(
        function () {
            $(this).children('.icon').addClass('icon--hover');
        },
        function () {
            $(this).children('.icon').removeClass('icon--hover');
        }
    );

    $('#pp-nav').hover(
        function () {
            $('.poster-img__wrapper').addClass('pp-nav-hover');
        },
        function () {
            $('.poster-img__wrapper').removeClass('pp-nav-hover');
        }
    );

    // Nav callout hovers //
    $('#callout-studentOrgs').hover(
        function () {
            $('.section-callout--studentorgs').addClass('reveal');
        },
        function () {
            $('.section-callout--studentorgs').removeClass('reveal');
        }
    );
    $('#callout-leadership').hover(
        function () {
            $('.section-callout--leadership').addClass('reveal');
        },
        function () {
            $('.section-callout--leadership').removeClass('reveal');
        }
    );
    $('#callout-service').hover(
        function () {
            $('.section-callout--service').addClass('reveal');
        },
        function () {
            $('.section-callout--service').removeClass('reveal');
        }
    );
    $('#callout-academic').hover(
        function () {
            $('.section-callout--academic').addClass('reveal');
        },
        function () {
            $('.section-callout--academic').removeClass('reveal');
        }
    );
    $('#callout-athletics').hover(
        function () {
            $('.section-callout--athletics').addClass('reveal');
        },
        function () {
            $('.section-callout--athletics').removeClass('reveal');
        }
    );
    $('#callout-cultural').hover(
        function () {
            $('.section-callout--cultural').addClass('reveal');
        },
        function () {
            $('.section-callout--cultural').removeClass('reveal');
        }
    );
    $('#callout-fratAndSoro').hover(
        function () {
            $('.section-callout--fratAndSoro').addClass('reveal');
        },
        function () {
            $('.section-callout--fratAndSoro').removeClass('reveal');
        }
    );
    $('#callout-lgbt').hover(
        function () {
            $('.section-callout--lgbt').addClass('reveal');
        },
        function () {
            $('.section-callout--lgbt').removeClass('reveal');
        }
    );
    $('#callout-military').hover(
        function () {
            $('.section-callout--military').addClass('reveal');
        },
        function () {
            $('.section-callout--military').removeClass('reveal');
        }
    );
    $('#callout-employment').hover(
        function () {
            $('.section-callout--employment').addClass('reveal');
        },
        function () {
            $('.section-callout--employment').removeClass('reveal');
        }
    );
    $('#callout-performing').hover(
        function () {
            $('.section-callout--performing').addClass('reveal');
        },
        function () {
            $('.section-callout--performing').removeClass('reveal');
        }
    );
    $('#callout-spiritual').hover(
        function () {
            $('.section-callout--spiritual').addClass('reveal');
        },
        function () {
            $('.section-callout--spiritual').removeClass('reveal');
        }
    );
});