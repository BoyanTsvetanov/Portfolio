// utils/theme.js
export const getTheme = () =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

export const setTheme = (theme) => {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem("theme", theme);
};
