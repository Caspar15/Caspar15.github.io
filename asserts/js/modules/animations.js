// 動畫與閱讀進度條模組

export const initializeAnimations = () => {
    const elements = document.querySelectorAll('.card, .stat-card, .section-header');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
};

export const createReadingProgress = () => {
    const progress = document.createElement('div');
    progress.className = 'reading-progress';
    const bar = document.createElement('div');
    bar.className = 'reading-progress-bar';
    progress.appendChild(bar);
    document.body.appendChild(progress);

    window.addEventListener('scroll', () => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / docHeight) * 100;
        bar.style.width = `${scrolled}%`;
    });
};

export const handleScroll = () => {
    const backToTopButton = document.getElementById('backToTop');
    if (!backToTopButton) return;
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
};
