$(document).ready(function () {
    /*
     * Plugin intialization
     */
    if ( $(window).width() > 599 ) {
        $('#pagepiling').pagepiling({
            direction: 'horizontal',
            menu: '#menu',
            anchors: ['home', 'studentOrgs', 'leadership', 'service', 'academic', 'athletics', 'cultural', 'fratAndSoro', 'lgbt', 'military', 'employment', 'performing', 'spiritual'],
            scrollingSpeed: 300,
            loopBottom: true,
            navigation: {
                'position': 'right',
                'tooltips': ['Pick One!', 'Student Organizations', 'Leadership', 'Service & Volunteerism', 'Academic & Professional', 'Athletics & Recreation', 'Cultural & Identity', 'Fraternity & Sorofity Life', 'LGBTQIA+ Programs', 'Military & Veterans', 'On-Campus Employment', 'Performing Arts', 'Spiritual']
            }
        });
    }

    $('.hamburger-menu').on('click', function() {
        $('.bar').toggleClass('animate');
        $('nav').toggleClass('nav--active');
    })

    $('a, nav').on('click', function() {
        $('nav').removeClass('nav--active');
        $('.bar').removeClass('animate');
    })
    


});
