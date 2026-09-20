/**
 * 互動式履歷：每個 experience-item 的標題可以收合 / 展開。
 * 預設全部展開，收合只是給想快速掃過標題的人用的。
 */
export function initializeResume() {
  const headings = document.querySelectorAll('#resume-container .experience-item h3');

  headings.forEach(heading => {
    const item = heading.parentElement;
    // 沒有細節內容的項目（例如只有一行標題的活動）不需要收合
    if (!item.querySelector('.experience-details')) {
      heading.style.cursor = 'default';
      heading.classList.add('no-toggle');
      return;
    }

    heading.setAttribute('role', 'button');
    heading.setAttribute('tabindex', '0');
    heading.setAttribute('aria-expanded', 'true');

    const toggle = () => {
      const collapsed = item.classList.toggle('collapsed');
      heading.setAttribute('aria-expanded', String(!collapsed));
    };

    heading.addEventListener('click', toggle);
    heading.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle();
      }
    });
  });
}
