const toggleTheme = document.querySelector("#toggle-theme");

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleTheme.textContent = "Light Mode";
  } else {
    toggleTheme.textContent = "Dark Mode";
  }
});
