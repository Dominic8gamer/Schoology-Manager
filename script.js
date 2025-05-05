let value = ""
let tooLong = false

function tooLongDisplay() {
  var x = document.getElementById("length");
  if (tooLong) {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function getValue() {
  let inputField = document.getElementById("taskName");
  value = inputField.value;
}

function handleDragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();
  const taskId = e.dataTransfer.getData('text/plain');
  const taskElement = document.getElementById(taskId);
  e.currentTarget.appendChild(taskElement);
}

function addTask() {
  if (!value.trim()) {
    tooLong = false;
    tooLongDisplay();
    return;
  }
  if (value.length >= 10) {
    tooLong = true;
    tooLongDisplay();
    return;
  }
  tooLong = false;
  tooLongDisplay();

  let newTask = document.createElement("p");
  newTask.innerHTML = value;
  newTask.draggable = true;
  newTask.id = "task-" + new Date().getTime();
  newTask.addEventListener('dragstart', handleDragStart);
  document.getElementById("incompleteTasks").appendChild(newTask);
  document.getElementById('taskName').value = "";
}

document.getElementById("taskName").addEventListener("input", function () {
  value = this.value;
  tooLong = value.length >= 10;
  tooLongDisplay();
});
  
  window.onload = function() {
    document.getElementById("addTaskButton").addEventListener("click", getValue);
    document.getElementById("addTaskButton").addEventListener("click", addTask);

    const containers = ['incompleteTasks', 'inprogressTasks', 'completedTasks'];
    containers.forEach(id => {
      const el = document.getElementById(id);
      el.addEventListener('dragover', handleDragOver);
      el.addEventListener('drop', handleDrop);
    });
  };