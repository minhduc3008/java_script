let btnAddTaskEl = document.querySelector("button");
let taskNameEL = document.querySelector("#content");
let tasks = getTaskFromLocalStorage();
renderTasks(tasks);

btnAddTaskEl.addEventListener("click", function () {
  if (!taskNameEL.value) {
    alert("Vui lòng nhập tên công việc!");
    return false;
  }

  let taskID = this.getAttribute("id");
  let tasks = getTaskFromLocalStorage();
  let task = { name: taskNameEL.value };

  if (taskID === 0 || taskID) {
    tasks[taskID] = task;
    this.removeAttribute("id");
  } else {
    tasks.push(task);
  }

  taskNameEL.value = "";

  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasks(tasks);
});

function editTask(id) {
  let tasks = getTaskFromLocalStorage();
  if (tasks.length > 0) {
    taskNameEL.value = tasks[id].name;
    btnAddTaskEl.setAttribute("id", id);
  }
}

function deleteTask(id) {
  if (confirm("bạn có muốn xóa task ko?")) {
    let tasks = getTaskFromLocalStorage();
    tasks.splice(id, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks(getTaskFromLocalStorage());
  }
}

function renderTasks(tasks = []) {
  let content = "<ul>";

  tasks.forEach((task, index) => {
    content += `<li>
          <div class="task-name">${task.name}</div>
          <a href="#" onclick="editTask(${index})">Sửa</a>
          <a href="#" onclick="deleteTask(${index})">Xóa</a>
        </li>`;
  });

  content += "</ul>";

  document.querySelector("#result").innerHTML = content;
}

function getTaskFromLocalStorage() {
  return localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
}