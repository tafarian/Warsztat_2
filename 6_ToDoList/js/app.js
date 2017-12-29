document.addEventListener("DOMContentLoaded", function () {
    var taskInput = document.querySelector("#taskInput");
    var taskButton = document.querySelector("#addTaskButton");
    var taskList = document.querySelector("#taskList");
    var removeTask = document.querySelector("#removeFinishedTasksButton");
    // console.log(taskInput, taskButton, taskList, removeTask);

    taskButton.addEventListener("click", function() {
        // console.log("klik");
        var newTask = document.createElement("li");
        taskList.appendChild(newTask);
    });

    removeTask.addEventListener("click", function() {
        var toDelete = document.querySelector("#taskList > li");
        toDelete.parentElement.removeChild(toDelete);

    });



});








