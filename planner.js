// Academic planner: add, complete, delete and save tasks in localStorage.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("task-form");
  if (!form) return;

  const taskInput = document.getElementById("task-input");
  const dateInput = document.getElementById("task-date");
  const taskList = document.getElementById("task-list");
  const taskCount = document.getElementById("task-count");
  const completedCount = document.getElementById("completed-count");
  const emptyMessage = document.getElementById("empty-message");
  const STORAGE_KEY = "gloryStudentPlannerTasks";

  let tasks = [];
  try {
    tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    if (!Array.isArray(tasks)) tasks = [];
  } catch (error) {
    tasks = [];
  }

  function saveTasks() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      // Storage may be blocked or full. The planner still works until the page is closed.
    }
  }

  function formatDate(value) {
    const date = new Date(value + "T00:00:00");
    if (isNaN(date.getTime())) return value;
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }

  function renderTasks(focusId) {
    taskList.innerHTML = "";
    const completed = tasks.filter(task => task.completed).length;
    taskCount.textContent = `${tasks.length} ${tasks.length === 1 ? "task" : "tasks"}`;
    completedCount.textContent = `${completed} completed`;
    emptyMessage.hidden = tasks.length > 0;

    tasks.forEach(task => {
      const item = document.createElement("li");
      item.className = `task-item${task.completed ? " completed" : ""}`;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.id = `task-${task.id}`;
      checkbox.setAttribute("aria-label", `Mark ${task.title} as completed`);
      checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        saveTasks();
        renderTasks(task.id);
      });

      const label = document.createElement("label");
      label.htmlFor = checkbox.id;
      label.textContent = task.title;

      item.appendChild(checkbox);
      item.appendChild(label);

      if (task.dueDate) {
        const date = document.createElement("span");
        date.className = "task-date";
        date.textContent = `Due: ${formatDate(task.dueDate)}`;
        item.appendChild(date);
      }

      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "delete-task";
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("aria-label", `Delete ${task.title}`);
      deleteButton.addEventListener("click", () => {
        tasks = tasks.filter(savedTask => savedTask.id !== task.id);
        saveTasks();
        renderTasks();
        taskInput.focus();
      });

      item.appendChild(deleteButton);
      taskList.appendChild(item);
    });

    if (focusId) {
      const toFocus = document.getElementById(`task-${focusId}`);
      if (toFocus) toFocus.focus();
