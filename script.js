let value = ""

function getValue() {
  let inputField = document.getElementById("taskName");
  value = inputField.value;
}

function addTask() {
    let newTask = document.createElement("p");
    newTask.innerHTML = value;
    document.getElementById("incompleteTasks").appendChild(newTask);
  }
  
  window.onload = function() {
    document.getElementById("addTaskButton").addEventListener("click", getValue);
    document.getElementById("addTaskButton").addEventListener("click", addTask);
  };


