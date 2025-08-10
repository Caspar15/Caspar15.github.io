---
layout: default
title: My Journey
---

<!-- 1. 引入 Google Font & Stylesheet -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/journey.css">

<!-- 頁面 HTML 結構 -->
<div id="journey-page-wrapper">
  <div class="custom-timeline-container">
    <h1 class="timeline-title">My Professional Journey</h1>
    
    <div class="timeline-filters">
      <button class="active" data-filter="all">全部</button>
      <button data-filter="education">學業</button>
      <button data-filter="competition">競賽</button>
      <button data-filter="work">工作</button>
      <button data-filter="milestone">經歷</button>
    </div>

    <div class="custom-timeline">
      {% for event in site.data.timeline %}
        <div class="timeline-item" data-category="{{ event.type }}" data-index="{{ forloop.index }}">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span>{{ event.start_date.year }} - {{ event.group }}</span>
            <h3>{{ event.text.headline }}</h3>
            <p>{{ event.text.text }}</p>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<!-- 動畫、篩選、背景管理的 JavaScript -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Add class to body to trigger starry background
    document.body.classList.add('journey-background');

    // --- 互動功能腳本 ---
    const wrapper = document.getElementById('journey-page-wrapper');
    const timelineItems = wrapper.querySelectorAll('.timeline-item');
    const filterButtons = wrapper.querySelectorAll('.timeline-filters button');

    // --- Initial Animation Observer ---
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const item = entry.target;
          item.style.transitionDelay = `${(item.dataset.index % 10) * 100}ms`;
          item.classList.add('is-visible');
          observer.unobserve(item);
        }
      });
    }, { threshold: 0.1 });

    if (timelineItems.length > 0) {
        timelineItems.forEach(item => { observer.observe(item); });
    }

    // --- Filtering Logic with Animation ---
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
          button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            // Don't do anything if the filter is already active
            if (button.classList.contains('active')) {
                return;
            }
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // 1. Fade out all visible items
            timelineItems.forEach(item => {
                if (item.classList.contains('is-visible')) {
                    item.classList.add('is-filtering');
                }
            });

            // 2. After the fade-out transition, update visibility
            setTimeout(() => {
                timelineItems.forEach(item => {
                    const shouldBeVisible = filter === 'all' || item.dataset.category === filter;
                    
                    // Hide or show based on filter
                    if (shouldBeVisible) {
                        item.classList.remove('is-hidden');
                    } else {
                        item.classList.add('is-hidden');
                    }

                    // 3. Fade everything back in
                    // We remove the filtering class, so items that are not hidden will become visible
                    item.classList.remove('is-filtering');
                });
            }, 400); // This should match the CSS transition duration
          });
        });
    }

    // Cleanup function to remove the background class when leaving the page
    window.addEventListener('pagehide', function() {
        document.body.classList.remove('journey-background');
    });
  });
</script>