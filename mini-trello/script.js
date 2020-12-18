// ------------ADD TASK BUTTON EVENTLISTENER------------
let myForm = document.getElementsByTagName("form")[0];
myForm.addEventListener("submit", createTask);

function createTask(e) {
  e.preventDefault();
  let taskValue = document.getElementById("task-value").value;
  if (taskValue) addTask(taskValue); //calling addTask function here
  document.getElementById("task-value").value = " ";
}
// ------------------------------------------------------
// ----------------ADD TASK-------------------
/*---------NOTES: 
<li class="task fill" draggable="true">
              <div class="task-content">Write the weekly note</div>
              <div class="trash">&times;</div>
            </li> */

function addTask(taskValue) {
  // <li class="task fill editMode" draggable="true">...</li>
  let task = document.createElement("li");
  task.classList.add("task");
  task.classList.add("fill");
  // task.classList.add("editMode");
  task.setAttribute("draggable", "true");
  // task.setAttribute("id", "editMode");
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);

  // <div class="task-content">taskValue</div>
  let taskContent = document.createElement("div");
  taskContent.classList.add("task-content");
  taskContent.innerText = taskValue;

  // <div class="trash"><i class='far fa-trash-alt'></i></div>
  let trash = document.createElement("div");
  trash.classList.add("trash");
  trash.innerHTML = "<i class='far fa-trash-alt'></i>";
  trash.addEventListener("click", removeTask);

  //<button class="edit-task-btn"><i class='far fa-edit'></i></button>
  let editTaskBtn = document.createElement("button");
  editTaskBtn.classList.add("edit-task-btn");
  editTaskBtn.innerHTML = "<i class='far fa-edit'></i>";
  editTaskBtn.addEventListener("click", editTask);

  task.appendChild(taskContent);
  task.appendChild(trash);
  task.appendChild(editTaskBtn);

  let tasks = document.getElementById("tasks-added");
  tasks.insertBefore(task, tasks.childNodes[0]);
}
//-----------------------------------------------------------
//-------------------EDIT TASK---------------------
//Edit an existing task

function editTask(event) {
  var taskContent = event.target.parentNode.parentNode.childNodes[0];
  console.log("taskContent");
  console.log(taskContent);

  let textValue = taskContent.innerText;
  // textValue replaced with an input box
  console.log("text is:", textValue);
  taskContent.innerHTML = `<input type="text" id="newInputValue"  />`;
  document.getElementById("newInputValue").value = textValue;

  taskContent.addEventListener("keyup", function (e) {
    if (e.key === "Enter" || e.keyCode === 13) {
      var editedTextValue = document.getElementById("newInputValue").value;
      console.log("editedTextValue");
      console.log(editedTextValue);
      taskContent.innerHTML = editedTextValue;
    }
  });
}

//-------------------------------------------------
// ----------------REMOVE TASK----------------------
/*--------NOTES:
 <ul class="tasks" id="tasks-added"> (parentNode)
<li class="task fill" draggable="true"> (parentNode)
  <div class="task-content">Write the weekly note</div> (child)
  <div class="trash">&times;</div> (Child)
</li>
</ul> */

function removeTask(event) {
  // event represents the remove button
  // Access the <ul> list by moving 2 levels up
  var tasks = event.target.parentNode.parentNode.parentNode;
  console.log(tasks);
  // Access the <li> element which is the direct parent
  var task = event.target.parentNode.parentNode;
  tasks.removeChild(task);
}
//-----------------------------------------------------------
//--------------------DRAG & DROP--------------------
// A global variable to store the selected task
var task;

function dragStart(event) {
  event.target.className += " hold";
  task = event.target;
  setTimeout(() => (event.target.className = "invisible"), 0);
}

function dragEnd(event) {
  event.target.className = "task fill";
}

function dragEnter(event) {
  event.preventDefault();
  if (event.target.className === "column dropzone") {
    event.target.className += " hovered";
  }
}

function dragOver(event) {
  event.preventDefault();
}

function dragLeave(event) {
  if (event.target.className === "column dropzone hovered") {
    event.target.className = "column dropzone";
  }
}

function dragDrop(event) {
  if (event.target.className === "column dropzone hovered") {
    event.target.className = "column dropzone";
  }
  // event represents the column
  // Add the task to the second element of the column which is the <ul> element (the first one is a <h1>)
  event.target.childNodes[3].append(task);
}

var dropzones = document.querySelectorAll(".dropzone");

for (let index = 0; index < dropzones.length; index++) {
  const dropzone = dropzones[index];
  console.log(dropzone);
  dropzone.addEventListener("dragenter", dragEnter);
  dropzone.addEventListener("dragover", dragOver);
  dropzone.addEventListener("dragleave", dragLeave);
  dropzone.addEventListener("drop", dragDrop);
}
