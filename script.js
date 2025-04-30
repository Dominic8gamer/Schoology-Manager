let value = ""
let childCounter = 1;

function getValue() {
  let inputField = document.getElementById("taskName");
  value = inputField.value;
}

function handleDragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
}

function addTask() {
    let newTask = document.createElement("p");
    newTask.innerHTML = value;
    newTask.draggable = true;
    newTask.id = "task-" + new Date().getTime();
    newTask.addEventListener('dragstart', handleDragStart);
    document.getElementById("incompleteTasks").appendChild(newTask);
    document.getElementById('taskName').value = ""
  }
  
  window.onload = function() {
    document.getElementById("addTaskButton").addEventListener("click", getValue);
    document.getElementById("addTaskButton").addEventListener("click", addTask);
  };