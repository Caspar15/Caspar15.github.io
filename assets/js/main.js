import { initializeTheme, toggleDarkMode } from './modules/theme.js';
import { globalSearch } from './modules/search.js';
import { initializeNavigation } from './modules/navigation.js';
import { initMagicCube } from './modules/magic-cube.js';
import { initProgressBar } from './modules/progress.js';
import { initializeResume } from './modules/resume.js';

document.addEventListener('DOMContentLoaded', () => {
  initProgressBar();
  initializeTheme();
  initializeNavigation();

  const loadingOverlay = document.querySelector('.loading-overlay');
  if (loadingOverlay) {
    setTimeout(() => {
      loadingOverlay.style.opacity = '0';
      setTimeout(() => { loadingOverlay.style.display = 'none'; }, 500);
    }, 100);
  }

  const darkModeBtn = document.getElementById('darkModeToggle');
  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', toggleDarkMode);
  }

  if (document.getElementById('globalSearchInput')) {
    globalSearch();
  }

  // --- 專案篩選 ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.card-container .card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        projectCards.forEach(card => {
          const tags = card.getAttribute('data-tags') || '';
          card.style.display = (filter === 'all' || tags.includes(filter)) ? 'block' : 'none';
        });
      });
    });
  }

  // --- 回到頂端 ---
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      backToTopBtn.classList.toggle('visible', window.scrollY > 300);
    });
    backToTopBtn.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (document.getElementById('magic-cube-container')) {
    initMagicCube();
  }

  if (document.getElementById('resume-container')) {
    initializeResume();
  }
});
