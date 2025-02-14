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

// Global search functionality
function toggleSearch() {
  const searchBar = document.querySelector('.global-search');
  searchBar.classList.toggle('active');
  if (searchBar.classList.contains('active')) {
    searchBar.querySelector('input').focus();
  }
}

function globalSearch(event) {
  const query = event.target.value.toLowerCase();
  const resultsContainer = document.querySelector('.search-results');

  if (query.length < 2) {
    resultsContainer.innerHTML = '';
    return;
  }

  // 搜尋所有可搜尋的內容
  const cards = document.querySelectorAll('.card');
  const posts = document.querySelectorAll('.post-title');
  let results = [];

  // 搜尋專案卡片
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent;
    const description = card.querySelector('p').textContent;
    if (title.toLowerCase().includes(query) || description.toLowerCase().includes(query)) {
      results.push({
        type: '專案',
        title: title,
        link: card.querySelector('a').href
      });
    }
  });

  // 搜尋文章
  posts.forEach(post => {
    if (post.textContent.toLowerCase().includes(query)) {
      results.push({
        type: '文章',
        title: post.textContent,
        link: post.closest('a').href
      });
    }
  });

  // 顯示結果
  resultsContainer.innerHTML = results.length > 0
    ? results.map(result => `
        <div class="search-item">
          <a href="${result.link}">
            <span class="search-type">${result.type}</span>
            <span class="search-title">${result.title}</span>
          </a>
        </div>
      `).join('')
    : '<div class="no-results">沒有找到相關結果</div>';
}

// View toggle functionality
function toggleView(viewType) {
  const container = document.querySelector('.card-container');
  const buttons = document.querySelectorAll('.view-options button');

  // 更新容器類別
  container.classList.remove('grid-view', 'list-view');
  container.classList.add(`${viewType}-view`);

  // 更新按鈕狀態
  buttons.forEach(button => {
    button.classList.toggle('active', button.textContent.toLowerCase().includes(viewType));
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

// Back to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show/hide back to top button based on scroll position
function handleScroll() {
  const backToTopButton = document.getElementById('backToTop');
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
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

  // 關閉 loading overlay
  const loadingOverlay = document.querySelector('.loading-overlay');
  if (loadingOverlay) {
    loadingOverlay.style.opacity = '0';
    setTimeout(() => {
      loadingOverlay.style.display = 'none';
    }, 500);
  }

  // 添加滾動事件監聽
  window.addEventListener('scroll', handleScroll);

  // 初始化外部點擊關閉全局搜尋
  document.addEventListener('click', (event) => {
    const searchBar = document.querySelector('.global-search');
    const searchToggle = document.querySelector('.search-toggle');

    if (!searchBar.contains(event.target) && !searchToggle.contains(event.target)) {
      searchBar.classList.remove('active');
    }
  });
});