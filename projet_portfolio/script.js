
//Navbar//
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset ||
    this.document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop) {
        navbar.style.top="-50px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
});



// TYPED //
var typed = new Typed('.typed', {
    strings: ['Bonjour à tous et à toutes, je me présente je m\'apelle Lucas', 
              'Attiré depuis toujours par le monde du digital et du web, j\'ai décidé de me former en tant que développeur. Ma curiosité et ma soif d\'apprendre m\'ont pousser a accentuer le cotes front-end du développement. Fort de mes expériences passés, je souhaite allez plus loin et me professionnalier en tant que développeur front'],
    typeSpeed: 20,
});

//Compteur live//

let compteur = 0;

$(window).scroll(function() {

    const top = $('.counter').offset().top - window.innerHeight;

    if(compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function() {
            let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum : $this.text()
            }).animate({
                countNum : countTo
            },
            {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
        compteur = 1;
    }
});


/*AOS*/
AOS.init();