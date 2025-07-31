/**
 * GitHub API Integration
 * Location: /assets/js/modules/github.js
 */

document.addEventListener('DOMContentLoaded', () => {
  const repoCountElement = document.getElementById('github-repo-count');
  const gistsCountElement = document.getElementById('github-gists-count');

  if (!repoCountElement || !gistsCountElement) {
    return; // Exit if any of the elements don't exist
  }

  const username = 'Caspar15'; // Your GitHub username
  const apiUrl = `https://api.github.com/users/${username}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      // Update Repo Count
      if (data.public_repos !== undefined) {
        repoCountElement.textContent = data.public_repos;
      } else {
        repoCountElement.textContent = 'N/A';
      }

      // Update Gists Count
      if (data.public_gists !== undefined) {
        gistsCountElement.textContent = data.public_gists;
      } else {
        gistsCountElement.textContent = 'N/A';
      }
    })
    .catch(error => {
      console.error('Error fetching GitHub data:', error);
      // Display an error message on all related cards
      repoCountElement.textContent = 'Error';
      gistsCountElement.textContent = 'Error';
    });
});
