

function addTask() {
    let newTask = document.createElement("p");
    newTask.innerHTML = value;
    document.getElementById("incompleteTasks").appendChild(newTask);
  }
  
  window.onload = function() {
    document.getElementById("addTaskButton").addEventListener("click", addTask);
  };

function getValue() {
    let inputField = document.getElementById("taskName");
    let value = inputField.value;
}
