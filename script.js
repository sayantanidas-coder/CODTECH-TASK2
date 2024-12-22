(() => {
  const input = document.querySelector(".todo-input");
  const addButton = document.querySelector(".add-button");
  const todosHtml = document.querySelector(".todos");
  const emptyImage = document.querySelector(".empty-image");
  const deleteAllButton = document.querySelector(".delete-all");
  const filters = document.querySelectorAll(".filter");
  let todosJson = JSON.parse(localStorage.getItem("todos")) || [];
  let filter = "";

  // Initialize
  const showTodos = () => {
    if (!todosJson.length) {
      todosHtml.innerHTML = "";
      emptyImage.style.display = "block";
      return;
    }
    todosHtml.innerHTML = todosJson
      .filter((todo) => !filter || todo.status === filter)
      .map((todo, index) => `
        <li class="todo">
          <label>
            <input type="checkbox" ${todo.status === "completed" ? "checked" : ""} data-index="${index}">
            <span class="${todo.status === "completed" ? "checked" : ""}">${todo.name}</span>
          </label>
          <button class="delete-btn" data-index="${index}">
            <i class="fa fa-times"></i>
          </button>
        </li>
      `).join("");
    emptyImage.style.display = "none";
    addEventListeners();
  };

  const addEventListeners = () => {
    todosHtml.querySelectorAll("input[type='checkbox']").forEach((input) =>
      input.addEventListener("change", updateStatus)
    );
    todosHtml.querySelectorAll(".delete-btn").forEach((btn) =>
      btn.addEventListener("click", removeTodo)
    );
  };

  const updateStatus = (e) => {
    const index = e.target.dataset.index;
    todosJson[index].status = e.target.checked ? "completed" : "pending";
    localStorage.setItem("todos", JSON.stringify(todosJson));
    showTodos();
  };

  const addTodo = () => {
    const todoName = input.value.trim();
    if (!todoName) {
      alert("Please enter a task!");
      return;
    }
    todosJson.push({ name: todoName, status: "pending" });
    localStorage.setItem("todos", JSON.stringify(todosJson));
    input.value = "";
    showTodos();
  };

  const removeTodo = (e) => {
    const index = e.target.closest(".delete-btn").dataset.index;
    todosJson.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todosJson));
    showTodos();
  };

  const clearTodos = () => {
    if (!todosJson.length) {
      alert("No tasks to delete!");
      return;
    }
    if (confirm("Are you sure you want to delete all tasks?")) {
      todosJson = [];
      localStorage.setItem("todos", JSON.stringify(todosJson));
      showTodos();
    }
  };

  addButton.addEventListener("click", addTodo);
  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") addTodo();
  });
  deleteAllButton.addEventListener("click", clearTodos);
  filters.forEach((filterBtn) =>
    filterBtn.addEventListener("click", () => {
      filters.forEach((btn) => btn.classList.remove("active"));
      filter = filter === filterBtn.dataset.filter ? "" : filterBtn.dataset.filter;
      filterBtn.classList.toggle("active");
      showTodos();
    })
  );

  showTodos();
})();
