
  const topLinks = document.querySelectorAll('.nav-links .top-link');
  const mega = document.querySelector('.mega-container');
  const megaTabsGroups = document.querySelectorAll('.mega-tabs');
  const megaPanelsGroups = document.querySelectorAll('.mega-panels');

  let hideTimeout = null;

  function showMegaFor(menuKey) {
    mega.classList.add('open');

    // activate correct group
    megaTabsGroups.forEach(group => {
      group.classList.toggle('active-section', group.dataset.for === menuKey);
    });
    megaPanelsGroups.forEach(group => {
      group.classList.toggle('active-section', group.dataset.for === menuKey);
    });
  }

  // open on hover of top buttons
  topLinks.forEach(btn => {
    const key = btn.dataset.menu;

    btn.addEventListener('mouseenter', () => {
      clearTimeout(hideTimeout);
      showMegaFor(key);
    });
  });

  // keep open when mouse is inside header or mega
  const header = document.querySelector('.my-header');

  function startHide() {
    hideTimeout = setTimeout(() => {
      // only hide if mouse is not on header or mega
      if (!header.matches(':hover') && !mega.matches(':hover')) {
        mega.classList.remove('open');
      }
    }, 150);
  }

  header.addEventListener('mouseleave', startHide);
  mega.addEventListener('mouseleave', startHide);

  header.addEventListener('mouseenter', () => clearTimeout(hideTimeout));
  mega.addEventListener('mouseenter', () => clearTimeout(hideTimeout));

  // switch right panel when hovering left tabs
  megaTabsGroups.forEach(group => {
    group.addEventListener('mouseenter', () => clearTimeout(hideTimeout));

    group.querySelectorAll('.mega-tab').forEach(tab => {
      tab.addEventListener('mouseenter', () => {
        const targetId = tab.dataset.target;
        const panelsGroup = document.querySelector(
          `.mega-panels[data-for="${group.dataset.for}"]`
        );

        group.querySelectorAll('.mega-tab').forEach(t => t.classList.remove('active'));
        panelsGroup.querySelectorAll('.mega-panel').forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        panelsGroup.querySelector(`#${targetId}`).classList.add('active');
      });
    });
  });
