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


  const darkModeBtn = document.getElementById('darkModeToggle');
  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', toggleDarkMode);
  }

  if (document.getElementById('globalSearchInput')) {
    globalSearch();
  }

  // --- 專案分類與標籤篩選 ---
  const filterElements = document.querySelectorAll('.filter-btn, .filter-tab');
  const projectCards = document.querySelectorAll('.card-container .card');

  if (filterElements.length > 0 && projectCards.length > 0) {
    filterElements.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        
        // 同步相同 filter 的按鈕狀態
        const filter = button.getAttribute('data-filter');
        filterElements.forEach(btn => {
          if (btn.getAttribute('data-filter') === filter) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category') || '';
          const tags = card.getAttribute('data-tags') || '';
          
          let matches = false;
          if (filter === 'all') {
            matches = true;
          } else if (category === filter) {
            matches = true;
          } else if (tags.includes(filter)) {
            matches = true;
          }

          if (matches) {
            card.style.display = 'flex';
            card.style.opacity = '0';
            card.style.transform = 'translateY(12px)';
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else {
            card.style.display = 'none';
          }
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

  // --- 專案頁面 TOC 自動生成與程式碼複製 ---
  const tocNav = document.getElementById('projectTocNav');
  const tocCard = document.getElementById('projectTocCard');
  const articleContent = document.querySelector('.project-content-body');

  if (tocNav && articleContent) {
    const headings = articleContent.querySelectorAll('h2');
    if (headings.length >= 2) {
      headings.forEach((heading, idx) => {
        if (!heading.id) {
          heading.id = 'section-' + idx;
        }
        const link = document.createElement('a');
        link.href = '#' + heading.id;
        link.className = 'toc-link';
        link.textContent = heading.textContent.replace(/^[#\s]+/, '');
        tocNav.appendChild(link);
      });
    } else if (tocCard) {
      tocCard.style.display = 'none';
    }

    // 程式碼複製按鈕
    const preBlocks = articleContent.querySelectorAll('pre');
    preBlocks.forEach((pre) => {
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-code-btn';
      copyBtn.type = 'button';
      copyBtn.textContent = '複製';
      copyBtn.setAttribute('aria-label', '複製程式碼');
      copyBtn.addEventListener('click', async () => {
        const code = pre.querySelector('code')?.innerText || pre.innerText;
        try {
          await navigator.clipboard.writeText(code);
          copyBtn.textContent = '已複製！';
          copyBtn.classList.add('copied');
          setTimeout(() => {
            copyBtn.textContent = '複製';
            copyBtn.classList.remove('copied');
          }, 2000);
        } catch (err) {
          copyBtn.textContent = '複製失敗';
        }
      });
      pre.appendChild(copyBtn);
    });
  }
});
