document.addEventListener("DOMContentLoaded", function () {
  $(document).ready(function () {
    $(".sb-banner-carousel").owlCarousel({
      items: 1,
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      animateOut: "fadeOut", // fade out effect
      smartSpeed: 550,
    });
  });

  // Top categories carousel
  $(document).ready(function () {
    $(".sb-topcat-carousel").owlCarousel({
      loop: true,
      margin: 24,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 2 },
        550: { items: 2 },
        768: { items: 3 },
        992: { items: 4 },
      },
    });
  });

  // New arrivals carousel
  $(document).ready(function () {
    $(".sb-arrivals-carousel").owlCarousel({
      loop: true,
      margin: 24,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        992: { items: 3 },
        1200: { items: 4 },
      },
    });
  });

  //  Consulting section
  $(document).ready(function () {
    const $consultCarousel = $(".sb-consulting-carousel");

    $consultCarousel.owlCarousel({
      loop: true,
      margin: 24,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        992: { items: 4 },
      },
    });

    $(".sb-consulting__nav--next").on("click", function () {
      $consultCarousel.trigger("next.owl.carousel");
    });
    $(".sb-consulting__nav--prev").on("click", function () {
      $consultCarousel.trigger("prev.owl.carousel");
    });
  });

  // Discpover section

  $(document).ready(function () {
    $(".sb-discover-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        1200: { items: 5 },
      },
    });
  });

  $(document).ready(function () {
    $(".sb-reviews-carousel").owlCarousel({
      loop: true,
      margin: 24,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
      },
    });
  });
});
