export function toggleMenu() {}
export function toggleView() {}
export function scrollToTop() {}

export function initializeNavigation() {
  console.log('navigation.js: initializeNavigation called.');

  const sidebarToggle = document.getElementById('sidebarToggle');
  const projectCategoriesSidebar = document.getElementById('projectCategoriesSidebar');
  const siteHeader = document.querySelector('.site-header');
  const siteNav = document.querySelector('.site-nav');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const primaryNavLinks = document.getElementById('primaryNavLinks');
  if (siteHeader) {
    siteHeader.classList.add('glass-nav');
  }

  const closeMobileMenu = () => {
    if (!siteNav || !mobileMenuToggle) return;
    siteNav.classList.remove('open');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    mobileMenuToggle.setAttribute('aria-label', '開啟主選單');
  };

  const toggleMobileMenu = () => {
    if (!siteNav || !mobileMenuToggle) return;
    const isOpen = siteNav.classList.toggle('open');
    mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    mobileMenuToggle.setAttribute('aria-label', isOpen ? '關閉主選單' : '開啟主選單');
  };

  if (mobileMenuToggle && siteNav && primaryNavLinks) {
    mobileMenuToggle.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleMobileMenu();
    });

    primaryNavLinks.addEventListener('click', (event) => {
      const link = event.target.closest('a.page-link');
      if (link && link.id !== 'about-dropdown-toggle') {
        closeMobileMenu();
      }
    });

    document.addEventListener('click', (event) => {
      if (siteNav.classList.contains('open') && !siteNav.contains(event.target)) {
        closeMobileMenu();
      }
    });
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
      if (e.key === 'Escape') {
        closeMobileMenu();
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
