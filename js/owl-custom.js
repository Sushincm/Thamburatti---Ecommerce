$(document).ready(function () {
  $(".sb-banner-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",   // fade out effect
    smartSpeed: 550
  });
});
