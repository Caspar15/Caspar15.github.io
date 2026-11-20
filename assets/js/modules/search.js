let searchData = [];

async function fetchSearchData() {
  try {
    const response = await fetch('/search.json');
    searchData = await response.json();
  } catch (error) {
    console.error('Error fetching search data:', error);
  }
}

function performSearch(query) {
  if (!query) {
    return [];
  }
  const lowerCaseQuery = query.toLowerCase();
  return searchData.filter(item => {
    const title = item.title ? item.title.toLowerCase() : '';
    const content = item.content ? item.content.toLowerCase() : '';
    return title.includes(lowerCaseQuery) || content.includes(lowerCaseQuery);
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function displayResults(results, query) {
  const searchResultsContainer = document.getElementById('searchResults');
  const pageContent = document.getElementById('pageContent');

  if (!searchResultsContainer || !pageContent) {
    console.error('Search results container or page content not found');
    return;
  }

  const isSearching = Boolean(query && query.trim());
  const pageContentIsVisible = pageContent.style.display !== 'none';

  const renderContent = () => {
    searchResultsContainer.innerHTML = '';
    if (!isSearching) return;

    if (results.length === 0) {
      const emptyDiv = document.createElement('div');
      emptyDiv.className = 'search-empty-state';
      emptyDiv.innerHTML = `
        <div class="search-empty-icon">🔍</div>
        <p class="search-empty-title">找不到與「<strong>${escapeHtml(query.trim())}</strong>」相符的內容</p>
        <p class="search-empty-hint">請嘗試其他關鍵字，例如：LLM、ICACT、Trend Micro、Python 或 履歷</p>
      `;
      searchResultsContainer.appendChild(emptyDiv);
      return;
    }

    const header = document.createElement('div');
    header.className = 'search-results-header';
    header.innerHTML = `<p class="search-summary">找到 <strong>${results.length}</strong> 筆與「<strong>${escapeHtml(query.trim())}</strong>」相關的結果：</p>`;
    searchResultsContainer.appendChild(header);

    const ul = document.createElement('ul');
    ul.className = 'search-results-list';
    results.forEach(item => {
      const li = document.createElement('li');
      li.className = 'search-results-item';
      const catBadge = item.category ? `<span class="search-item-badge">${escapeHtml(item.category)}</span>` : '';
      const a = document.createElement('a');
      a.href = item.url;
      a.innerHTML = `${catBadge} ${escapeHtml(item.title)}`;
      const p = document.createElement('p');
      p.textContent = (item.content || '').substring(0, 160) + '...';
      li.appendChild(a);
      li.appendChild(p);
      ul.appendChild(li);
    });
    searchResultsContainer.appendChild(ul);
  };

  const needsAnimation = (isSearching && pageContentIsVisible) || (!isSearching && !pageContentIsVisible);

  if (needsAnimation) {
    const elementToShow = isSearching ? searchResultsContainer : pageContent;
    const elementToHide = isSearching ? pageContent : searchResultsContainer;

    elementToHide.classList.remove('fade-in');
    elementToHide.classList.add('fade-out');

    setTimeout(() => {
      elementToHide.style.display = 'none';
      elementToHide.classList.remove('fade-out');

      if (isSearching) {
        renderContent();
      }

      elementToShow.style.display = 'block';
      void elementToShow.offsetHeight; // Force reflow
      elementToShow.classList.remove('fade-out');
      elementToShow.classList.add('fade-in');
    }, 200);
  } else if (isSearching) {
    renderContent();
  }
}

export function globalSearch() {
  const searchInput = document.getElementById('globalSearchInput');
  if (searchInput) {
    fetchSearchData();
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value;
      const results = performSearch(query.trim());
      displayResults(results, query);
    });

    // Press Escape to clear search and restore page
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        displayResults([], '');
        searchInput.blur();
      }
    });
  }
}
