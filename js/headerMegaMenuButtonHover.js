document.addEventListener("DOMContentLoaded", () => {
  const headerButtons = document.querySelectorAll(
    ".top-link.header-links[data-menu]"
  );
  const megaMenu = document.getElementById("megaMenu");
  const panels = megaMenu.querySelectorAll(".mega-panel");

  let currentMenu = null;
  let closeTimeout = null;

  function showMega(menu) {
    if (!menu) return;

    // activate correct panel
    panels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.menu === menu);
    });

    // highlight active button
    headerButtons.forEach((btn) => {
      btn.classList.toggle("is-open", btn.dataset.menu === menu);
    });

    currentMenu = menu;
    megaMenu.classList.add("open");
  }

  function hideMega() {
    currentMenu = null;
    megaMenu.classList.remove("open");
    headerButtons.forEach((btn) => btn.classList.remove("is-open"));
  }

  // Hover and click on header buttons
  headerButtons.forEach((btn) => {
    const menu = btn.dataset.menu;

    btn.addEventListener("mouseenter", () => {
      clearTimeout(closeTimeout);
      showMega(menu);
    });

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentMenu === menu) {
        hideMega();
      } else {
        showMega(menu);
      }
    });
  });

  // Keep open while mouse is over mega menu
  megaMenu.addEventListener("mouseenter", () => {
    clearTimeout(closeTimeout);
  });

  megaMenu.addEventListener("mouseleave", () => {
    closeTimeout = setTimeout(hideMega, 120);
  });

  // Close when mouse leaves header area (buttons)
  const navLinksWrapper = document.querySelector(".nav-links");
  if (navLinksWrapper) {
    navLinksWrapper.addEventListener("mouseleave", () => {
      closeTimeout = setTimeout(hideMega, 120);
    });
  }

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !megaMenu.contains(e.target) &&
      !Array.from(headerButtons).some((btn) => btn.contains(e.target))
    ) {
      hideMega();
    }
  });
});
