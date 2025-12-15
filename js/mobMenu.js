document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("mobileMenu");
  const openBtn = document.querySelector(".humbrug");
  const closeBtn = document.getElementById("mobileMenuClose");
  const tabs = document.querySelectorAll(".mobile-tab");
  const panels = document.querySelectorAll(".mobile-menu-panel");

  openBtn.addEventListener("click", () => {
    menu.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("open");
    document.body.style.overflow = "";
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      panels.forEach((p) => {
        p.classList.toggle("active", p.dataset.panel === target);
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mobileBtn = document.querySelector(".search-mob-nav");
  const desktopBtn = document.getElementById("searchDesktopBtn");
  const overlay = document.getElementById("searchOverlay");
  const closeBtn = document.getElementById("searchOverlayClose");
  const input = document.getElementById("searchInput");

  function openSearch() {
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    setTimeout(() => input && input.focus(), 150);
  }

  function closeSearch() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    document.body.style.height = "";
  }

  if (mobileBtn) mobileBtn.addEventListener("click", openSearch);
  if (desktopBtn) desktopBtn.addEventListener("click", openSearch);
  if (closeBtn) closeBtn.addEventListener("click", closeSearch);
});
