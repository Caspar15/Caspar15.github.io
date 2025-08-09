/**
 * assets/js/modules/progress.js
 * Handles the reading progress bar.
 */

export function initProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const progressBarContainer = document.getElementById('progress-bar-container');
  
  // On post pages, track the article content. On other pages, track the main content area.
  const contentElement = document.querySelector('.post-content') || document.querySelector('.repo-main') || document.querySelector('.main-content');

  if (!progressBar || !contentElement || !progressBarContainer) {
    return;
  }

  const updateProgressBar = () => {
    const elementRect = contentElement.getBoundingClientRect();
    const elementHeight = elementRect.height;
    const windowHeight = window.innerHeight;

    // The total scrollable distance for the element
    const scrollableDistance = elementHeight - windowHeight;

    // If the element is smaller than the viewport, hide the progress bar.
    if (scrollableDistance <= 0) {
      progressBarContainer.style.display = 'none';
      return;
    }
    
    // Ensure the bar is visible if content is scrollable
    progressBarContainer.style.display = 'block';

    // How far the top of the element is from the top of the viewport.
    // A negative value means we have started scrolling past it.
    const scrolled = -elementRect.top;

    if (scrolled < 0) {
      // We haven't reached the element yet.
      progressBar.style.width = '0%';
    } else if (scrolled > scrollableDistance) {
      // We have scrolled past the element.
      progressBar.style.width = '100%';
    } else {
      // We are currently scrolling through the element.
      const scrollPercent = (scrolled / scrollableDistance) * 100;
      progressBar.style.width = scrollPercent + '%';
    }
  };

  // Listen for scroll events to update the bar.
  window.addEventListener('scroll', updateProgressBar, { passive: true });
  
  // Also re-calculate on window resize and after all content (images) has loaded.
  window.addEventListener('resize', updateProgressBar);
  window.addEventListener('load', updateProgressBar);

  // Run once on DOM load to set the initial state, even if images are not ready.
  updateProgressBar();
}