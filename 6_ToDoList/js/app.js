document.addEventListener("DOMContentLoaded", function () {
    var taskInput = document.querySelector("#taskInput");
    var taskButton = document.querySelector("#addTaskButton");
    var taskList = document.querySelector("#taskList");
    var removeTask = document.querySelector("#removeFinishedTasksButton");
    // console.log(taskInput, taskButton, taskList, removeTask);

    taskButton.addEventListener("click", function() {
        // console.log("klik");
        var text = taskInput.value;
        var newTask = document.createElement("li");
        var header = document.createElement("h1");
        var taskText = document.createTextNode(text);
        newTask.appendChild(taskText);
        var newButtonDel = document.createElement("BUTTON");
        var newButtonCom = document.createElement("BUTTON");
        newButtonDel.innerText = "Delete";
        newButtonCom.innerText = "Complete";
        taskList.appendChild(newTask);
        newTask.setAttribute("class", "unDone");
        newTask.appendChild(header);
        header.appendChild(taskText);
        newTask.appendChild(newButtonDel);
        newButtonDel.addEventListener("click", function() {
            newTask.parentElement.removeChild(newTask);
        });
        newTask.appendChild(newButtonCom);
        newButtonCom.addEventListener("click", function() {
            if (newTask.classList = "unDone") {
                newTask.setAttribute("class", "done");
            } else if (newTask.classList = "done") {
                newTask.setAttribute("class", "unDone");
            }
        });
        taskInput.value="";
    });

    removeTask.addEventListener("click", function() {
        var toDelete = document.querySelector("#taskList > li");
        toDelete.parentElement.removeChild(toDelete);

    });



});








