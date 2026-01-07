const toggleTheme = document.querySelector("#toggle-theme");

toggleTheme.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  toggleTheme.textContent = document.documentElement.classList.contains("dark")
    ? "Light mode"
    : "Dark mode";
});
