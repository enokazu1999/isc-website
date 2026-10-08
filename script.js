// Mobile navigation
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

// Section tabs: results and gallery
document.querySelectorAll('[data-tabs]').forEach((group) => {
  const tabs = [...group.querySelectorAll('[data-tab]')];
  const panels = [...group.querySelectorAll('[data-panel]')];

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const selectedKey = tab.dataset.tab;

      tabs.forEach((item) => {
        const isActive = item === tab;
        item.classList.toggle('active', isActive);
        item.setAttribute('aria-selected', String(isActive));
      });

      panels.forEach((panel) => {
        const isActive = panel.dataset.panel === selectedKey;
        panel.classList.toggle('active', isActive);
        panel.hidden = !isActive;
      });
    });
  });
});

// Year selector highlight (archive content is not yet connected)
document.querySelectorAll('.year-selector button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.year-selector button').forEach((item) => {
      item.classList.remove('selected');
    });
    button.classList.add('selected');
  });
});
