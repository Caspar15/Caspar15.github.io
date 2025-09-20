export function toggleMenu() {}
export function toggleView() {}
export function scrollToTop() {}

export function initializeNavigation() {
  console.log('navigation.js: initializeNavigation called.');

  const sidebarToggle = document.getElementById('sidebarToggle');
  const projectCategoriesSidebar = document.getElementById('projectCategoriesSidebar');
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    siteHeader.classList.add('glass-nav');
  }

  if (sidebarToggle && projectCategoriesSidebar && siteHeader) {
    console.log('navigation.js: All navigation elements found.');

    const closeSidebar = () => {
      projectCategoriesSidebar.classList.remove('active');
      siteHeader.classList.remove('sidebar-active');
    };

    const openSidebar = () => {
      projectCategoriesSidebar.classList.add('active');
      siteHeader.classList.add('sidebar-active');
    };

    sidebarToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent the click from bubbling up to the document
      console.log('navigation.js: Sidebar toggle button clicked.');
      if (projectCategoriesSidebar.classList.contains('active')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });

    // Add a listener to the document to close the sidebar when clicking outside
    document.addEventListener('click', (event) => {
      if (projectCategoriesSidebar.classList.contains('active')) {
        const isClickInsideSidebar = projectCategoriesSidebar.contains(event.target);
        if (!isClickInsideSidebar) {
          console.log('navigation.js: Clicked outside, closing sidebar.');
          closeSidebar();
        }
      }
    });

    // Prevent clicks inside the sidebar from closing it
    projectCategoriesSidebar.addEventListener('click', (e) => {
      e.stopPropagation();
    });

  } else {
    console.log('navigation.js: One or more navigation elements NOT found.');
    if (!sidebarToggle) console.log('navigation.js: sidebarToggle not found.');
    if (!projectCategoriesSidebar) console.log('navigation.js: projectCategoriesSidebar not found.');
    if (!siteHeader) console.log('navigation.js: siteHeader not found.');
  }

  // --- Dropdown Menu Logic ---
  const dropdownToggle = document.getElementById('about-dropdown-toggle');
  if (dropdownToggle) {
    const dropdown = dropdownToggle.closest('.nav-item.dropdown');

    dropdownToggle.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const isOpen = dropdown.classList.toggle('open');
      dropdownToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (event) => {
      if (dropdown.classList.contains('open') && !dropdown.contains(event.target)) {
        dropdown.classList.remove('open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
        dropdownToggle.focus();
      }
    });
  }

  // Elevate header shadow on scroll
  const headerEl = document.querySelector('.site-header');
  if (headerEl) {
    const onScroll = () => {
      if (window.scrollY > 8) headerEl.classList.add('is-scrolled');
      else headerEl.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
}
