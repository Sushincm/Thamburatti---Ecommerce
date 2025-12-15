// js/gsapSectionAnimation.js

document.addEventListener("DOMContentLoaded", () => {
  // 1) Safety checks
  if (typeof gsap === "undefined") {
    console.error("GSAP is not loaded.");
    return;
  }
  if (typeof ScrollTrigger === "undefined") {
    console.error("ScrollTrigger is not loaded.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // 2) Optional Lenis init (remove if you already init Lenis elsewhere)
  let lenis;
  if (typeof Lenis !== "undefined") {
    lenis = new Lenis({ autoRaf: true });

    lenis.on("scroll", (e) => {
      // console.log(e); // debug if needed
    });
  }

  // 3) Get DOM elements for this section
  const section  = document.getElementById("innovation");
  if (!section) {
    console.warn("#innovation section not found on page.");
    return;
  }

  const bgEl    = section.querySelector(".innovation-bg-image");
  const titleEl = document.getElementById("innovation-slide-title");
  const textEl  = document.getElementById("innovation-slide-text");
  const imgEl   = document.getElementById("innovation-slide-img");
  const indexEl = document.getElementById("innovation-slide-index");

  if (!bgEl || !titleEl || !textEl || !imgEl || !indexEl) {
    console.error("One or more innovation section elements are missing.");
    return;
  }

  // 4) Slides data (can later come from backend)
  const slides = [
    {
      title: "Nature‑Inspired Living",
      img: "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg",
      bg:  "https://images.pexels.com/photos/4846434/pexels-photo-4846434.jpeg",
      text: "Warm wood interiors open directly into lush green gardens for a calm retreat."
    },
    {
      title: "Evening Courtyard Glow",
      img: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg",
      bg:  "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg",
      text: "Soft lighting and timber screens create a cozy resort‑like ambience at dusk."
    },
    {
      title: "Open Lounge Experience",
      img: "https://images.pexels.com/photos/37347/office-freelancer-computer-business-37347.jpeg",
      bg:  "https://images.pexels.com/photos/37347/office-freelancer-computer-business-37347.jpeg",
      text: "Wide openings and long sofas invite relaxed gatherings and quiet work sessions."
    },
    {
      title: "Panoramic Glass Facade",
      img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      bg:  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      text: "Floor‑to‑ceiling glazing frames the landscape while flooding rooms with daylight."
    }
  ];

  // 5) Set initial state
  bgEl.style.backgroundImage = `url(${slides[0].bg})`;
  indexEl.textContent = "01";
  titleEl.textContent = slides[0].title;
  textEl.textContent  = slides[0].text;
  imgEl.src           = slides[0].img;

  // Make sure image initially sits below mask
  gsap.set(imgEl, { y: "100%" });

  // 6) ScrollTrigger timeline for pin + slides
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=" + (slides.length * 100) + "%", // 1 viewport per slide
      scrub: true,
      pin: true,
      // markers: true, // uncomment for debugging
    }
  });

  slides.forEach((slide, i) => {
    const dur = 1 / slides.length;

    tl.to({}, {
      duration: dur,
      onStart: () => {
        // Update index, text, images
        indexEl.textContent = String(i + 1).padStart(2, "0");
        titleEl.textContent = slide.title;
        textEl.textContent  = slide.text;
        bgEl.style.backgroundImage = `url(${slide.bg})`;
        imgEl.src = slide.img;

        // Reveal animation (bottom -> top)
        gsap.fromTo(
          imgEl,
          { y: "100%" },
          { y: "0%", duration: 0.6, ease: "power2.out" }
        );
      }
    });
  });
});
