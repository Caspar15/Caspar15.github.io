// 入口檔案：初始化各模組與所有事件監聽

import { initializeTheme, toggleDarkMode } from './modules/theme.js';
import { toggleMenu, toggleView, scrollToTop } from './modules/navigation.js';
import {
  debouncedEnhancedSearch,
  debouncedEnhancedFilterCategory,
  toggleSearch,
  globalSearch
} from './modules/search.js';
import { initializeAnimations, createReadingProgress, handleScroll } from './modules/animations.js';
import { initializeChart } from './modules/chart.js';

document.addEventListener('DOMContentLoaded', () => {
  // 初始化主題、動畫、閱讀進度條與圖表
  initializeTheme();
  initializeAnimations();
  createReadingProgress();
  initializeChart();

  // 新增卡片過渡效果（以 CSS 控制）
  const style = document.createElement('style');
  style.textContent = `
    .card {
      transition: opacity 0.3s ease-in-out;
    }
  `;
  document.head.appendChild(style);

  // 如果存在 loading overlay，延遲隱藏
  const loadingOverlay = document.querySelector('.loading-overlay');
  if (loadingOverlay) {
    setTimeout(() => {
      loadingOverlay.style.opacity = '0';
      setTimeout(() => {
        loadingOverlay.style.display = 'none';
      }, 500);
    }, 1000);
  }

  // 為每個卡片加入 stagger 效果的 fade-in 動畫
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('fade-in', 'visible');
    }, index * 100);
  });

  // 監聽 scroll 事件，控制「回到頂部」按鈕的顯示與隱藏
  window.addEventListener('scroll', handleScroll);

  // 當點擊頁面其他區域時，關閉全局搜尋面板
  document.addEventListener('click', (event) => {
    const searchBar = document.querySelector('.global-search');
    const searchToggle = document.querySelector('.search-toggle');
    if (searchBar && searchToggle &&
      !searchBar.contains(event.target) &&
      !searchToggle.contains(event.target)) {
      searchBar.classList.remove('active');
    }
  });

  // 搜尋輸入框：加入 debounced 的搜尋功能
  const searchInput = document.getElementById('searchBox');
  if (searchInput) {
    searchInput.addEventListener('input', debouncedEnhancedSearch);
  }

  // 若存在全局搜尋的按鈕，點擊切換搜尋面板
  const searchToggleBtn = document.querySelector('.search-toggle');
  if (searchToggleBtn) {
    searchToggleBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleSearch();
    });
  }

  // 若存在暗黑模式切換按鈕，加入事件監聽
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }

  // 若存在導覽選單按鈕（例如漢堡選單），加入事件監聽
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  // 若存在檢視切換按鈕（例如切換 grid 與 list），加入事件監聽
  const viewButtons = document.querySelectorAll('.view-options button');
  viewButtons.forEach(button => {
    button.addEventListener('click', () => {
      const viewType = button.dataset.view; // 例如 data-view="grid" 或 "list"
      toggleView(viewType);
    });
  });

  // 若存在分類篩選按鈕，加入事件監聽（假設按鈕具有 data-category 屬性）
  const categoryButtons = document.querySelectorAll('.category-filter');
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category; // 例如 data-category="all" 或其他分類值
      debouncedEnhancedFilterCategory(category);
    });
  });

  // 若存在「回到頂部」按鈕，加入點擊事件
  const backToTopButton = document.getElementById('backToTop');
  if (backToTopButton) {
    backToTopButton.addEventListener('click', scrollToTop);
  }

  // 若存在全局搜尋用的輸入框（另一種情況），加入事件監聽
  const globalSearchInput = document.getElementById('globalSearchInput');
  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', globalSearch);
  }

  // 其他初始化程式碼可以依需求加入…
});
