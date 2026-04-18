/**
 * GitHub API Integration
 * Fetches public repo and gist counts for Caspar15.
 * Falls back gracefully when rate-limited (60 req/hr unauthenticated).
 */

document.addEventListener('DOMContentLoaded', () => {
  const repoCountEl  = document.getElementById('github-repo-count');
  const gistsCountEl = document.getElementById('github-gists-count');

  if (!repoCountEl && !gistsCountEl) return;

  const username = 'Caspar15';

  // Check localStorage cache (TTL: 1 hour) to avoid hitting rate limit
  const CACHE_KEY = 'gh_stats_caspar15';
  const CACHE_TTL = 60 * 60 * 1000; // 1 hour in ms

  const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
  if (cached && Date.now() - cached.ts < CACHE_TTL) {
    applyStats(cached.repos, cached.gists);
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then(res => {
      if (res.status === 403) throw new Error('rate_limited');
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then(data => {
      const repos  = data.public_repos ?? '—';
      const gists  = data.public_gists ?? '—';
      applyStats(repos, gists);
      // Cache the result
      localStorage.setItem(CACHE_KEY, JSON.stringify({ repos, gists, ts: Date.now() }));
    })
    .catch(err => {
      console.warn('[github.js]', err.message === 'rate_limited'
        ? 'GitHub API rate limit reached. Using fallback values.'
        : `GitHub API error: ${err.message}`
      );
      // Show fallback dashes instead of "Error"
      applyStats('—', '—');
    });

  function applyStats(repos, gists) {
    if (repoCountEl)  repoCountEl.textContent  = repos;
    if (gistsCountEl) gistsCountEl.textContent = gists;
  }
});
