const button = document.querySelector("button");
const text = document.querySelector("#text");

button.addEventListener("click", () => {
  text.textContent = "Sedang belajar dan berkembang";
  text.classList.toggle("active");
});
