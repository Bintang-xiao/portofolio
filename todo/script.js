const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#todo-list");

function saveTodos() {
  const todos = [];

  document.querySelectorAll("#todo-list li span").forEach((item) => {
    todos.push({
      text: item.textContent,
      completed: item.classList.contains("completed"),
    });
  });

  localStorage.setItem("myTodos", JSON.stringify(todos));
}

addBtn.addEventListener("click", () => {
  const text = input.value;

  if (text === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  span.addEventListener("click", () => {
    span.classList.toggle("completed");
    saveTodos();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete❌";

  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTodos();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn); // jika li ditambkan, tombon delete akan ikut ditambahkan
  list.appendChild(li);

  input.value = ""; // untuk mengosogkan kembali isi input setelah todo ditambahkan.
  saveTodos();
});

const savedTodos = JSON.parse(localStorage.getItem("myTodos")) || [];

savedTodos.forEach((todo) => {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = todo.text;
  if (todo.completed) span.classList.add("completed");

  span.addEventListener("click", () => {
    span.classList.toggle("completed");
    saveTodos();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete❌";

  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTodos();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});
