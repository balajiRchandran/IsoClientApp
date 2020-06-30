 window.sliderFunctions = {
    startSlider: function () {
        var owl = $('.owl-carousel2');
         owl.owlCarousel({
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    mouseDrag: false,
                    nav: true,
                    navElement: 'span',
                    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"]
                },
                600: {
                    items: 2,
                    mouseDrag: false,
                    nav: true,
                    navElement: 'span',
                    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"]
                },
                1000: {
                    items: 3,
                    nav: true,
                    mouseDrag: false,
                    navElement: 'span',
                    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
                    loop: false
                }
            }
        });
        var owl1 = $('.owl-carousel1');
         owl1.owlCarousel({
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    mouseDrag: false,
                    nav: true,
                    navElement: 'span',
                    navText:["<div class='nav-btn1 prev-slide'></div>","<div class='nav-btn1 next-slide'></div>"],
                    loop: false
                },
                600: {
                    items: 3,
                    mouseDrag: false,
                    nav: true,
                    navElement: 'span',
                    navText:["<div class='nav-btn1 prev-slide'></div>","<div class='nav-btn1 next-slide'></div>"],
                    loop: false
                },
                1000: {
                    items: 4,
                    nav: true,
                    mouseDrag: false,
                    navElement: 'span',
                    navText:["<div class='nav-btn1 prev-slide'></div>","<div class='nav-btn1 next-slide'></div>"],
                    loop: false
                }
            }
        });
    }
}