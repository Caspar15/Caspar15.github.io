/**
 * Scroll-triggered Animations using Intersection Observer
 * Location: /assets/js/modules/animations.js
 */

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  if (!animatedElements.length) {
    return; // No elements to animate
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // When the element is in view
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // No need to observe it anymore
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.1 // Trigger when at least 10% of the element is visible
  });

  // Start observing each element
  animatedElements.forEach(element => {
    observer.observe(element);
  });
});
