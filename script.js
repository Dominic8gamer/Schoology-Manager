function addTask() {
    let newTask = document.createEleent("p");
    newTask.innerHTML = "New Task";
    document.getElementById("incompleteTasks").appendChild(newTask);
    console.log("")
}