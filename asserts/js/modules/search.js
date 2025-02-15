// 搜尋模組：包含全局搜尋、進階搜尋、分類篩選等功能

import { debounce } from './utils.js';

export const toggleSearch = () => {
    const searchBar = document.querySelector('.global-search');
    if (searchBar) {
        searchBar.classList.toggle('active');
        if (searchBar.classList.contains('active')) {
            const input = searchBar.querySelector('input');
            if (input) input.focus();
        }
    }
};

export const globalSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const resultsContainer = document.querySelector('.search-results');
    if (!resultsContainer) return;

    if (query.length < 2) {
        resultsContainer.innerHTML = '';
        return;
    }

    const results = [];
    // 搜尋專案卡片
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const titleElem = card.querySelector('h3');
        const descElem = card.querySelector('p');
        if (titleElem && descElem) {
            const title = titleElem.textContent;
            const description = descElem.textContent;
            if (title.toLowerCase().includes(query) || description.toLowerCase().includes(query)) {
                const linkElem = card.querySelector('a');
                if (linkElem) {
                    results.push({
                        type: '專案',
                        title: title,
                        link: linkElem.href
                    });
                }
            }
        }
    });

    // 搜尋文章
    const posts = document.querySelectorAll('.post-title');
    posts.forEach(post => {
        if (post.textContent.toLowerCase().includes(query)) {
            const closestLink = post.closest('a');
            if (closestLink) {
                results.push({
                    type: '文章',
                    title: post.textContent,
                    link: closestLink.href
                });
            }
        }
    });

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
};

export const enhancedSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const titleElem = card.querySelector('h3');
        const descElem = card.querySelector('p');
        if (!titleElem || !descElem) return;

        const title = titleElem.textContent.toLowerCase();
        const description = descElem.textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.tag'))
            .map(tag => tag.textContent.toLowerCase());

        const isVisible =
            title.includes(query) ||
            description.includes(query) ||
            tags.some(tag => tag.includes(query));

        card.style.opacity = '0';
        setTimeout(() => {
            card.style.display = isVisible ? 'block' : 'none';
            if (isVisible) {
                card.style.opacity = '1';
            }
        }, 300);
    });
};

export const enhancedFilterCategory = (category) => {
    const cards = document.querySelectorAll('.card');
    const container = document.querySelector('.card-container');
    if (container) container.style.opacity = '0';

    setTimeout(() => {
        cards.forEach(card => {
            const isVisible = card.dataset.category === category || category === 'all';
            card.style.display = isVisible ? 'block' : 'none';
        });
        if (container) container.style.opacity = '1';
    }, 300);
};

export const debouncedEnhancedSearch = debounce(enhancedSearch, 300);
export const debouncedEnhancedFilterCategory = debounce(enhancedFilterCategory, 300);
