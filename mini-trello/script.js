//------- ADD-TASK CLICK-LISTENER
document.getElementById("add-task").addEventListener("click", function () {
  let taskValue = document.getElementById("task-value").value;
  if (taskValue) addTask(taskValue); //calling addTask function here
  document.getElementById("task-value").value = " ";
});

/* <li class="task fill" draggable="true">
              <div class="task-content">Write the weekly note</div>
              <div class="trash">&times;</div>
            </li> */

function addTask(taskValue) {
  let task = document.createElement("li");
  task.classList.add("task");
  task.classList.add("fill");
  task.setAttribute("attribute", "true");
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);

  let taskContent = document.createElement("div");
  taskContent.classList.add("task-content");
  taskContent.innerText = taskValue;

  let trash = document.createElement("div");
  trash.classList.add("trash");
  trash.innerHTML = "&times;";
  trash.addEventListener("click", removeTask);

  task.appendChild(taskContent);
  task.appendChild(trash);

  let tasks = document.getElementById("tasks-added");
  tasks.insertBefore(task, task.childNodes[0]);
}
