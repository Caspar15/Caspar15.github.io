// 主題管理模組：切換暗/亮模式

export const THEME_KEY = 'github-theme-preference';

export const setTheme = (isDark) => {
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    document.body.classList.toggle('dark', isDark);
};

export const initializeTheme = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem(THEME_KEY);
    const isDark = storedTheme ? storedTheme === 'dark' : prefersDark;
    setTheme(isDark);
};

export const toggleDarkMode = () => {
    const isDark = document.body.classList.toggle('dark');
    setTheme(isDark);
};
