/**
 * 首頁的 GitHub 公開 repo 數。
 * 未認證的 API 每小時 60 次，所以結果快取 1 小時；
 * 被限流或失敗時顯示破折號，不顯示錯誤字串。
 */
document.addEventListener('DOMContentLoaded', () => {
  const repoCountEl = document.getElementById('github-repo-count');
  if (!repoCountEl) return;

  const username = 'Caspar15';
  const CACHE_KEY = 'gh_stats_caspar15';
  const CACHE_TTL = 60 * 60 * 1000;

  let cached = null;
  try {
    cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
  } catch {
    cached = null;
  }

  if (cached && Date.now() - cached.ts < CACHE_TTL) {
    repoCountEl.textContent = cached.repos;
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then(res => {
      if (!res.ok) throw new Error(res.status === 403 ? 'rate_limited' : res.statusText);
      return res.json();
    })
    .then(data => {
      const repos = data.public_repos ?? '—';
      repoCountEl.textContent = repos;
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ repos, ts: Date.now() }));
      } catch {
        /* 無痕模式或封鎖站台資料時會丟錯，忽略即可 */
      }
    })
    .catch(() => {
      repoCountEl.textContent = '—';
    });
});
