export function initializeTheme() {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  let currentTheme = localStorage.getItem("theme");

  // 如果沒有儲存的主題，則根據系統偏好設定，否則預設為淺色
  if (currentTheme === null) {
    currentTheme = prefersDarkScheme.matches ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
  }

  if (currentTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

export function toggleDarkMode() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}
