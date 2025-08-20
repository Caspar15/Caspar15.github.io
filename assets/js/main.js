import { initializeTheme, toggleDarkMode } from './modules/theme.js';
import { globalSearch } from './modules/search.js';
import { initializeChart } from './modules/chart.js';
import { initializeNavigation } from './modules/navigation.js';
import { initMagicCube } from './modules/magic-cube.js';
import { initLLMInterface } from './modules/llm-interface.js'; // 引入新的 AI 介面模組
import { initProgressBar } from './modules/progress.js'; // 引入進度條模組
import { initializeResume } from './modules/resume.js'; // 引入互動式履歷模組

document.addEventListener('DOMContentLoaded', () => {
  // 初始化進度條
  initProgressBar();

  // 初始化 AI 聊天介面
  initLLMInterface();
  console.log('main.js: DOMContentLoaded fired.');

  const loadingOverlay = document.querySelector('.loading-overlay');
  if (loadingOverlay) {
    console.log('main.js: Loading overlay found.');
    setTimeout(() => {
      loadingOverlay.style.opacity = '0';
      console.log('main.js: Loading overlay opacity set to 0.');
      setTimeout(() => {
        loadingOverlay.style.display = 'none';
        console.log('main.js: Loading overlay display set to none.');
      }, 500);
    }, 100);
  } else {
    console.log('main.js: Loading overlay NOT found.');
  }

  // 初始化主題 (深色模式)
  console.log('main.js: Initializing theme.');
  initializeTheme();

  // 綁定暗黑模式切換按鈕
  const darkModeBtn = document.getElementById('darkModeToggle');
  if (darkModeBtn) {
    console.log('main.js: Dark mode toggle button found.');
    darkModeBtn.addEventListener('click', toggleDarkMode);
  } else {
    console.log('main.js: Dark mode toggle button NOT found.');
  }

  // 綁定全局搜尋輸入框
  const globalSearchInput = document.getElementById('globalSearchInput');
  if (globalSearchInput) {
    console.log('main.js: Global search input found.');
    globalSearch();
  } else {
    console.log('main.js: Global search input NOT found.');
  }

  // 初始化圓餅圖
  console.log('main.js: Initializing chart.');
  initializeChart();

  // 初始化導覽列
  console.log('main.js: Initializing navigation.');
  initializeNavigation();

  // --- 專案篩選邏輯 ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.card-container .card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    console.log('main.js: Project filter buttons and cards found.');
    filterButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault(); // 阻止預設的跳轉行為
        console.log('main.js: Filter button clicked:', button.getAttribute('data-filter'));
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        projectCards.forEach(card => {
          const tags = card.getAttribute('data-tags') || '';
          if (filter === 'all' || tags.includes(filter)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  } else {
    console.log('main.js: Project filter buttons or cards NOT found.');
  }

  // --- Back to Top Button Logic ---
  const backToTopBtn = document.getElementById('backToTopBtn');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Initialize Magic Cube
  initMagicCube();

  // Initialize Interactive Resume if on the right page
  if (document.getElementById('resume-container')) {
    initializeResume();
  }
});