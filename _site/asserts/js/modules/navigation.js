// 導覽與頁面視圖模組

export const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    if (menu) {
        menu.classList.toggle('active');
    }
};

export const toggleView = (viewType) => {
    const container = document.querySelector('.card-container');
    const buttons = document.querySelectorAll('.view-options button');
    if (!container) return;

    container.classList.remove('grid-view', 'list-view');
    container.classList.add(`${viewType}-view`);

    buttons.forEach(button => {
        button.classList.toggle('active', button.textContent.toLowerCase().includes(viewType));
    });
};

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
