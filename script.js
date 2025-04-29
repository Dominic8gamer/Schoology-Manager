function addTask() {
    let newTask = document.createElement("p");
    newTask.innerHTML = "New Task";
    document.getElementById("incompleteTasks").appendChild(newTask);
  }
  
  window.onload = function() {
    document.getElementById("addTaskButton").addEventListener("click", addTask);
  };