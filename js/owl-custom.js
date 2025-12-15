$(document).ready(function () {
  const $bannerCarousel = $(".banner-carousel");
  const $progressInner = $(".banner-progress-inner");

  const slideTime = 7000; // slower overall: 7 seconds per slide

  let progressWidth = 0;
  let progressTimer;

  function startProgress() {
    resetProgress();
    progressTimer = setInterval(() => {
      progressWidth += 100 / (slideTime / 100);
      if (progressWidth >= 100) {
        progressWidth = 100;
        $bannerCarousel.trigger("next.owl.carousel");
        resetProgress();
      }
      $progressInner.css("width", progressWidth + "%");
    }, 100);
  }

  function resetProgress() {
    clearInterval(progressTimer);
    progressWidth = 0;
    $progressInner.css("width", "0%");
  }

  $bannerCarousel.owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    dots: false,
    animateOut: 'fadeOut',
    nav: true,
    navText: [
      '<i class="ri-arrow-left-s-line"></i>',
      '<i class="ri-arrow-right-s-line"></i>',
    ],

    // slower slide animation:
    smartSpeed: 900, 
    autoplaySpeed: 900, 
    dragEndSpeed: 900, 

    onInitialized: startProgress,
    onTranslated: startProgress,
  });
});

// Latest Arrivals cards
$(".latest-arrivals-carousel").owlCarousel({
  loop: true,
  margin: 24,
  nav: true,
  autoplay: true,
  dots: false,
  navText: [
    '<i class="ri-arrow-left-s-line"></i>',
    '<i class="ri-arrow-right-s-line"></i>',
  ],
  responsive: {
    0: { items: 2 },
    576: { items: 2 },
    768: { items: 3 },
    992: { items: 5 },
  },
});

$(".spotlight-carousel").owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  animateIn: "slideInDown",
  animateOut: "slideOutUp",
});

// Swiper Carousels
// Spot section
const spotlightSwiper = new Swiper(".spotlight-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 700,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },


  direction: "vertical",
  pagination: {
    el: ".spotlight-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      direction: "horizontal",
      pagination: false,
    },
    992: {
      direction: "vertical",
      pagination: {
        el: ".spotlight-pagination",
        clickable: true,
      },
    },
  },
});

// collection-swiper-wrapper
$(function () {
  var $carousel = $(".collection-carousel");
  var totalSlides = $carousel.find(".collection-slide").length;

  $(".collection-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: { items: 2 },
      576: { items: 2 }, 
      992: { items: 4 }, 
    },
  });

  $(".collection-next").on("click", function () {
    $carousel.trigger("next.owl.carousel");
  });

  $(".collection-prev").on("click", function () {
    $carousel.trigger("prev.owl.carousel");
  });

  function updateBottomBar(event) {
    var idx = event.item.index - event.relatedTarget._clones.length / 2;
    if (idx < 0) idx = 0;
    if (idx >= totalSlides) idx = totalSlides - 1;

    var segment = 100 / totalSlides;
    var $active = $(".collection-bottom-active");
    $active.css("transform", "translateX(" + segment * idx + "%)");
    $active.css("width", segment + "%");
  }

  $carousel.on("changed.owl.carousel", updateBottomBar);
  updateBottomBar({
    item: { index: 0 },
    relatedTarget: { _clones: [] },
  });

  $(".collection-dot").on("click", function () {
    var index = parseInt($(this).data("index"), 10);
    $carousel.trigger("to.owl.carousel", [index, 300, true]);
  });
});

// Mobile version category
$(function () {
  $(".bossify-category-carousel").owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 3,
      },
      576: {
        items: 3,
      },
      992: {
        items: 3,
      },
    },
  });
});

// testimonial
$(".video-testimonial-carousel").owlCarousel({
  loop: true,
  margin: 24,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: true,
  nav: false,
  responsive: {
    0: { items: 2 }, 
    600: { items: 3 },
    992: { items: 4 }, 
  },
});

// Modal + YouTube handling
const vtModalEl = document.getElementById("vtModal");
const vtVideoFrame = document.getElementById("vtVideoFrame");
const vtModal = new bootstrap.Modal(vtModalEl); 

document
  .querySelectorAll(".video-testimonial-carousel .vt-card")
  .forEach((card) => {
    card.addEventListener("click", () => {
      const baseUrl = card.dataset.video; 
      vtVideoFrame.src = baseUrl + "?autoplay=1";
      vtModal.show();
    });
  });


vtModalEl.addEventListener("hide.bs.modal", () => {
  vtVideoFrame.src = "";
});

vtModalEl.addEventListener("hidden.bs.modal", () => {
  document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
  document.body.classList.remove("modal-open");
  document.body.style.removeProperty("padding-right");
});
