$(document).ready(function () {
  // Banner Carousel
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

  // Top categories carousel
  $(".sb-topcat-carousel").owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
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

  // New arrivals carousel
  $(".sb-arrivals-carousel").owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 },
    },
  });

  // Consulting section
  const $consultCarousel = $(".sb-consulting-carousel");
  $consultCarousel.owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
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

  // Discover section
  $(".sb-discover-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
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

  // Reviews section
  $(".sb-reviews-carousel").owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
    },
  });
});
