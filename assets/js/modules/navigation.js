export function toggleMenu() {}
export function toggleView() {}
export function scrollToTop() {}

export function initializeNavigation() {
  console.log('navigation.js: initializeNavigation called.');

  const sidebarToggle = document.getElementById('sidebarToggle');
  const projectCategoriesSidebar = document.getElementById('projectCategoriesSidebar');
  const siteHeader = document.querySelector('.site-header');

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
}