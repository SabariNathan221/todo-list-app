function addTask() {
    let taskInput = document.getElementById("task");
    let taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskInput.value;

    li.onclick = function () {
        this.remove();
    };

    taskList.appendChild(li);
    taskInput.value = "";
}
