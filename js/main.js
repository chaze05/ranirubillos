$(document).ready(function(){
    new Typed('#expertise', {
        strings: ['<strong>Front End Developer<strong> ', '<strong>Data Entry Specialist</strong> ', '<strong>Web Scraping Expert</strong> ', '<strong>Lead Generation Expert</strong> '],
        typeSpeed: 50,
        backSpeed: 40,
        smartBackspace: true,
        loop: true
      });

    
    // show menu
    $('.bar-container').on('click',function(){
        $('.menu-container').toggleClass('active');
    })


    //  skills animation
    function runSkills(){
        $('.progress-box').each(function(){
        var myWidth = $(this).data('value');
        $(this).find('.progress-bar').animate({'width':myWidth+"%"},2500);
        })
    }

    $('.skills-section .container').viewportChecker({
        callbackFunction:function(){
            alert('visible')
        }
    });

    // scroll reveal
    window.sr = ScrollReveal();
    sr.reveal('.skills-section', {duration:'1500',
    beforeReveal: function(){
            $('.progress-box').each(function(){
            var myWidth = $(this).data('value');
            $(this).find('.progress-bar').animate({'width':myWidth+"%"},2500);
            })
        }
    })
    sr.reveal('.about-section', {duration: '1500'})

    // loader
    setTimeout(function(){ 
        $('.page-overlay').css({
            opacity:'0',
            visibility:'hidden',
            zIndex:'0'
        });
    },500);
});