const toggleButton = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

const isDarkTheme = localStorage.getItem("color-theme");

// on first render
if (!isDarkTheme) {
  darkMode().add();
} else {
  darkMode().remove();
}

toggleButton.addEventListener("click", toggleMode);

function toggleMode() {
  toggleButtons();

  toggleDarkClass();

  if (!isDarkTheme) {
    localStorageDarkTheme().set();
  } else {
    localStorageDarkTheme().remove();
  }
}

function darkMode() {
  return {
    add: () => {
      document.documentElement.classList.add("dark");
      themeToggleLightIcon.classList.remove("hidden");
    },
    remove: () => {
      themeToggleDarkIcon.classList.remove("hidden");
    },
  };
}

function toggleButtons() {
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");
}

function toggleDarkClass() {
  document.documentElement.classList.toggle("dark");
}

function localStorageDarkTheme() {
  return {
    set: () => localStorage.setItem("color-theme", "dark"),
    remove: () => localStorage.removeItem("color-theme"),
  };
}
