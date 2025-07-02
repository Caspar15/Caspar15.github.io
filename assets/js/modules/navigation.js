export function toggleMenu() {}
export function toggleView() {}
export function scrollToTop() {}

export function initializeNavigation() {
  console.log('navigation.js: initializeNavigation called.');

  const sidebarToggle = document.getElementById('sidebarToggle');
  const projectCategoriesSidebar = document.getElementById('projectCategoriesSidebar');
  const siteHeader = document.querySelector('.site-header'); // 獲取 header 元素

  if (sidebarToggle && projectCategoriesSidebar && siteHeader) {
    console.log('navigation.js: All navigation elements found.');

    sidebarToggle.addEventListener('click', () => {
      console.log('navigation.js: Sidebar toggle button clicked.');
      if (projectCategoriesSidebar.classList.contains('active')) {
        projectCategoriesSidebar.classList.remove('active');
        siteHeader.classList.remove('sidebar-active');
      } else {
        projectCategoriesSidebar.classList.add('active');
        siteHeader.classList.add('sidebar-active');
      }
    });
  } else {
    console.log('navigation.js: One or more navigation elements NOT found.');
    if (!sidebarToggle) console.log('navigation.js: sidebarToggle not found.');
    if (!projectCategoriesSidebar) console.log('navigation.js: projectCategoriesSidebar not found.');
    if (!siteHeader) console.log('navigation.js: siteHeader not found.');
  }
}