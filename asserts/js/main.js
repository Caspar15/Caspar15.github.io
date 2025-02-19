// main.js
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

console.log("main.js loaded");

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
    console.log("Found loading overlay, will hide in 1s");
    setTimeout(() => {
      loadingOverlay.style.opacity = '0';
      console.log("Overlay opacity set to 0");
      setTimeout(() => {
        loadingOverlay.style.display = 'none';
        console.log("Overlay display set to none");
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

  // 綁定漢堡選單按鈕（使用 .hamburger 選取）
  const hamburgerBtn = document.querySelector('.hamburger');
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMenu);
  }

  // 綁定全局搜尋按鈕（使用 .search-toggle 選取）
  const searchToggleBtn = document.querySelector('.search-toggle');
  if (searchToggleBtn) {
    searchToggleBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleSearch();
    });
  }

  // 綁定暗黑模式切換按鈕（使用 id="darkModeToggle" 選取）
  const darkModeBtn = document.getElementById('darkModeToggle');
  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', toggleDarkMode);
  }

  // 綁定專案搜尋輸入框（id="searchBox"）
  const searchInput = document.getElementById('searchBox');
  if (searchInput) {
    searchInput.addEventListener('input', debouncedEnhancedSearch);
  }

  // 綁定全局搜尋輸入框（id="globalSearchInput"）
  const globalSearchInput = document.getElementById('globalSearchInput');
  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', globalSearch);
  }

  // 綁定分類過濾按鈕（採用 class "category-filter" 與 data-category）
  const categoryButtons = document.querySelectorAll('.category-filter');
  categoryButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // 防止預設連結行為
      const category = button.dataset.category;
      debouncedEnhancedFilterCategory(category);
    });
  });

  // 綁定「回到頂部」按鈕（id="backToTop"）
  const backToTopButton = document.getElementById('backToTop');
  if (backToTopButton) {
    backToTopButton.addEventListener('click', scrollToTop);
  }

  // 如果需要綁定其他事件，可在此添加...
});
