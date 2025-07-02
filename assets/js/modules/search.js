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

  // Determine which element should be visible after the update
  const elementToShow = hasResults ? searchResultsContainer : pageContent;
  const elementToHide = hasResults ? pageContent : searchResultsContainer;

  // If the element to show is already visible and we are just updating its content,
  // we need to re-trigger the animation.
  if (elementToShow.style.display !== 'none') {
    elementToShow.classList.remove('fade-in');
    elementToShow.classList.add('fade-out');
  }

  // Hide the element that should not be visible
  if (elementToHide.style.display !== 'none') {
    elementToHide.classList.remove('fade-in');
    elementToHide.classList.add('fade-out');
  }

  setTimeout(() => {
    // After fade-out, set display to none for the hidden element
    elementToHide.style.display = 'none';
    elementToHide.classList.remove('fade-out');

    // Clear previous results if showing search results
    if (hasResults) {
      searchResultsContainer.innerHTML = '';
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
    }

    // Show the target element and fade it in
    elementToShow.style.display = 'block';
    void elementToShow.offsetHeight; // Force reflow to re-trigger animation
    elementToShow.classList.remove('fade-out'); // Ensure fade-out is removed before fade-in
    elementToShow.classList.add('fade-in');
  }, 300); // Match CSS transition duration
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
