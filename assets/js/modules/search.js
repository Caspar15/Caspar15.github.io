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

function displayResults(results) {
  const searchResultsContainer = document.getElementById('searchResults');
  const pageContent = document.getElementById('pageContent');

  if (!searchResultsContainer || !pageContent) {
    console.error('Search results container or page content not found');
    return;
  }

  const hasResults = results.length > 0;
  // Check if the main content is visible. Note the check for `display === ''` for initial state.
  const pageContentIsVisible = pageContent.style.display !== 'none';

  // Helper function to build and insert the results list
  const updateList = () => {
    searchResultsContainer.innerHTML = '';
    if (!hasResults) return;
    const ul = document.createElement('ul');
    ul.className = 'search-results-list';
    results.forEach(item => {
      const li = document.createElement('li');
      li.className = 'search-results-item';
      const a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.title;
      const p = document.createElement('p');
      p.textContent = item.content.substring(0, 150) + '...';
      li.appendChild(a);
      li.appendChild(p);
      ul.appendChild(li);
    });
    searchResultsContainer.appendChild(ul);
  };

  // We need to animate a transition if:
  // 1. We have results to show, but the page content is currently visible (initial search).
  // 2. We have no results, but the search results are currently visible (clearing the search).
  const needsAnimation = (hasResults && pageContentIsVisible) || (!hasResults && !pageContentIsVisible);

  if (needsAnimation) {
    const elementToShow = hasResults ? searchResultsContainer : pageContent;
    const elementToHide = hasResults ? pageContent : searchResultsContainer;

    elementToHide.classList.remove('fade-in');
    elementToHide.classList.add('fade-out');

    setTimeout(() => {
      elementToHide.style.display = 'none';
      elementToHide.classList.remove('fade-out');

      if (hasResults) {
        updateList();
      }

      elementToShow.style.display = 'block';
      void elementToShow.offsetHeight; // Force reflow
      elementToShow.classList.remove('fade-out');
      elementToShow.classList.add('fade-in');
    }, 300); // Match CSS transition duration
  } else if (hasResults) {
    // If no animation is needed, but we have results, just update the list.
    // This happens on subsequent keypresses when the search results are already visible.
    updateList();
  }
}


export function globalSearch() {
  const searchInput = document.getElementById('globalSearchInput');
  if (searchInput) {
    fetchSearchData();
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value;
      const results = performSearch(query);
      displayResults(results);
    });
  }
}
