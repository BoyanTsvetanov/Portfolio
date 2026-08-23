// utils/theme.js
export const getTheme = () => {
  const root = document.documentElement;
  if (root.classList.contains("about")) return "about";
  if (root.classList.contains("dark")) return "dark";
  return "light";
};

export const setTheme = (theme) => {
  const root = document.documentElement;

  // 1. Remove all existing theme classes
  root.classList.remove("dark", "about");

  // 2. Add the target theme class if it's not "light"
  if (theme === "dark" || theme === "about") {
    root.classList.add(theme);
  }

  // 3. Persist selection
  localStorage.setItem("theme", theme);
};
