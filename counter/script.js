const countEl = document.querySelector("#count");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const resetBtn = document.querySelector("#reset");

// ambil data tersimpan
let count = Number(localStorage.getItem("count")) || 0;
countEl.textContent = count;

plusBtn.addEventListener("click", () => {
  count++;
  update();
});

minusBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    update();
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  update();
});

function update() {
  countEl.textContent = count;
  countEl.classList.add("scale-110");

  setTimeout(() => {
    countEl.classList.remove("scale-110");
  }, 150);

  localStorage.setItem("count", count);
}
