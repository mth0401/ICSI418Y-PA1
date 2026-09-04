const submit = document.querySelector("button");
const tasks = [];
function onSubmit(event) {
    event.preventDefault();
    const task = document.querySelector("#task-input").value;
    const priority = document.querySelector("#priority").value;
    const div = document.querySelector("#task-list");
    const par = document.createElement("p");

    if(task.trim() == "") {
        return console.log("Task must have a name");
    }
    else {
        par.textContent = form;
        div.appendChild(par);
    }

    if (priority == "low") {
        par.classList.add("Low");
    }
    else if (priority == "medium") {
        par.classList.add("Medium");
    }
    else {
        par.classList.add("High");
    }

    tasks.push(
        {
            name: task,
            priority: priority,
            completed: par.classList.contains("Completed")
        }
    );
}

function onTaskCLick() {

}


submit.addEventListener("click", onSubmit);