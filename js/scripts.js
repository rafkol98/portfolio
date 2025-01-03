/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

var typed = new Typed('#hello', {
    strings: [, "Hey 👋🏼, I am Rafael Kollyfas 👨🏻‍💻🧬🇨🇾"],
    typeSpeed: 50,
    // loop: true,
    // backSpeed: 100,
    // backDelay: 8000,
    cursorChar: ".",
    showCursor: false
});


document.getElementById("load-pdf-st-andrews").addEventListener("click", function () {
    window.open("./assets/pdf/Dissertation-st-andrews.pdf", "_blank");
});


document.getElementById("load-pdf-cambridge").addEventListener("click", function () {
    window.open("./assets/pdf/Flufftail.pdf", "_blank");
});

document.getElementById("load-pdf-cfg").addEventListener("click", function () {
    window.open("./assets/pdf/NLP_CFG.pdf", "_blank");
});
