$(document).ready(function() {
    new Typed('#expertise', {
        strings: ['<strong>Front End Developer<strong> ', '<strong>Data Entry Specialist</strong> ', '<strong>Wordpress Developer</strong> ', '<strong>Web Scraping Expert</strong> ', '<strong>Lead Generation Expert</strong> '],
        typeSpeed: 50,
        backSpeed: 40,
        smartBackspace: true,
        loop: true
    });


    // show menu
    $('.bar-container').on('click', function() {
        $('.menu-container').toggleClass('active');
    })
    //  skills animation
    // function runSkills() {
    //     $('.progress-box').each(function() {
    //         var myWidth = $(this).data('value');
    //         $(this).find('.progress-bar').animate({ 'width': myWidth + "%" }, 2500).find();

    //     })
    // }

    $('.skills-section .container').viewportChecker({
        callbackFunction: function() {
            alert('visible')
        }
    });

    // scroll reveal
    window.sr = ScrollReveal();
    sr.reveal('.section-header', { duration: '1000', mobile: true })
    sr.reveal('.skills-animation', {
        duration: '1500',
        mobile: true,
        beforeReveal: function() {
            $('.progress-box').each(function() {
                var myWidth = $(this).data('value');
                $(this).find('.progress-bar').animate({ 'width': myWidth + "%" }, 3500).text(myWidth + "%" );
            })
        }
    })
    sr.reveal('.skills-delivered', {
        duration: '1500',
        mobile: true,
        beforeReveal: function() {
            $('.number').each(function() {
                $(this).prop('counter', 0).animate({
                    counter: $(this).data('value')
                }, {
                    duration: 4500,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                })

            })
        }
    })
    sr.reveal('.profile-info', { duration: '1500', mobile: true })
    sr.reveal('.myinterests', { duration: '1500', mobile: true })
    sr.reveal('li:nth-child(odd) .exp-box', { mobile: true, origin: 'right', distance: '-555px', duration: '1500' })
    sr.reveal('li:nth-child(even) .exp-box', { mobile: true, origin: 'left', distance: '-555px', duration: '1500' })

    // loader
    setTimeout(function() {
        $('.page-overlay').css({
            opacity: '0',
            visibility: 'hidden',
            zIndex: '0'
        });
    }, 500);

    $(".profileList a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 300, function () {
                window.location.hash = hash;
            });
        }
        $('.menu-container').toggleClass('active');
    });
    
});