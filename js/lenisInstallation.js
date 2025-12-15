document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis({
    autoRaf: true,
    smooth: true,
  });
  
  const section = document.querySelector("#featured-products");
  if (!section) return;

  const bg = section.querySelector(".fp-bg");
  const titleEl = document.getElementById("fp-title");
  const descEl = document.getElementById("fp-desc");
  const indexEl = document.getElementById("fp-index");
  const tagEl = document.getElementById("fp-tag");

  const imgCurrent = document.getElementById("fp-image-current");
  const imgNext = document.getElementById("fp-image-next");
  const linkEl = document.getElementById("fp-link");

  const swiperEl = section.querySelector(".fp-swiper");

  const swiper = new Swiper(swiperEl, {
    loop: true,
    speed: 900, // smooth slide speed
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".fp-next",
      prevEl: ".fp-prev",
    },
    // pagination removed
    effect: "slide",
  });

  function updateFromSlide(swiperInstance, animate = true) {
    const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
    if (!activeSlide) return;

    const title = activeSlide.getAttribute("data-title");
    const desc = activeSlide.getAttribute("data-desc");
    const img = activeSlide.getAttribute("data-img");
    const bgImg = activeSlide.getAttribute("data-bg");
    const tag = activeSlide.getAttribute("data-tag");
    const link = activeSlide.getAttribute("data-link") || "#";
    const realIndex = swiperInstance.realIndex || 0;

    // preload next image
    const preload = new Image();
    preload.src = img;

    if (!animate) {
      // first load, no animation
      imgCurrent.src = img;
      bg.style.backgroundImage = `url(${bgImg})`;
      titleEl.textContent = title;
      descEl.textContent = desc;
      indexEl.textContent = String(realIndex + 1).padStart(2, "0");
      tagEl.textContent = tag;
      linkEl.href = link;

      gsap.set(imgCurrent, { opacity: 1, yPercent: 0 });
      gsap.set(imgNext, { opacity: 0, yPercent: 0 });
      return;
    }

    const tl = gsap.timeline();

    // soften text change only (card stays in place)
    tl.to(
      [titleEl, descEl, indexEl, tagEl],
      {
        autoAlpha: 0,
        y: 6,
        duration: 0.45,
        ease: "power3.inOut",
      },
      0
    );

    // set next image + background
    tl.add(() => {
      imgNext.src = img;
      bg.style.backgroundImage = `url(${bgImg})`;
    });

    // buttery crossfade images
    tl.fromTo(
      imgNext,
      { opacity: 0, yPercent: 6 },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.9,
        ease: "power3.out",
      },
      0
    );

    tl.to(
      imgCurrent,
      {
        opacity: 0,
        yPercent: -6,
        duration: 0.9,
        ease: "power3.out",
      },
      0
    );

    // after crossfade, make next the new current
    tl.add(() => {
      imgCurrent.src = imgNext.src;
      gsap.set(imgCurrent, { opacity: 1, yPercent: 0 });
      gsap.set(imgNext, { opacity: 0, yPercent: 0 });
    });

    // update text/meta/link and fade them back in
    tl.add(() => {
      titleEl.textContent = title;
      descEl.textContent = desc;
      indexEl.textContent = String(realIndex + 1).padStart(2, "0");
      tagEl.textContent = tag;
      linkEl.href = link;
    });

    tl.to(
      [titleEl, descEl, indexEl, tagEl],
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
      },
      "-=0.4"
    );
  }

  // initial content (no animation)
  swiper.on("init", (sw) => {
    updateFromSlide(sw, false);
  });

  // on autoplay/nav change
  swiper.on("slideChange", (sw) => {
    updateFromSlide(sw, true);
  });

  swiper.init && swiper.init();
});
