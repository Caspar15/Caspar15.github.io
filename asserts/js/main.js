// Theme management
const THEME_KEY = 'github-theme-preference';

function setTheme(isDark) {
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
  document.body.classList.toggle('dark', isDark);
}

function initializeTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem(THEME_KEY);
  const isDark = storedTheme ? storedTheme === 'dark' : prefersDark;
  setTheme(isDark);
}

function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark');
  setTheme(isDark);
}

// Navigation
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

// Search functionality
function searchArticles() {
  const query = document.getElementById('searchBox').value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    const isVisible = title.includes(query) || description.includes(query);

    card.style.display = isVisible ? 'block' : 'none';
  });
}

// Category filtering with animation
function filterCategory(category) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const isVisible = card.dataset.category === category || category === 'all';
    card.style.opacity = '0';

    setTimeout(() => {
      card.style.display = isVisible ? 'block' : 'none';
      if (isVisible) {
        card.style.opacity = '1';
      }
    }, 300);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();

  // Add smooth transitions for cards
  const style = document.createElement('style');
  style.textContent = `
    .card {
      transition: opacity 0.3s ease-in-out;
    }
  `;
  document.head.appendChild(style);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();

  // Add smooth transitions for cards
  const style = document.createElement('style');
  style.textContent = `
    .card {
      transition: opacity 0.3s ease-in-out;
    }
  `;
  document.head.appendChild(style);

  // 关闭 loading overlay
  const loadingOverlay = document.querySelector('.loading-overlay');
  if (loadingOverlay) {
    loadingOverlay.style.opacity = '0';
    setTimeout(() => {
      loadingOverlay.style.display = 'none';
    }, 500);
  }
});