const submit = document.querySelector("button");
const tasks = [];
const showTask = document.querySelector("#show-tasks");
const div = document.querySelector("#task-list");

function onSubmit(event) {
    event.preventDefault();
    let task = document.querySelector("#task-input").value;
    const priority = document.querySelector("#priority").value;

    if(task.trim() == "") {
        return console.log("Task must have a name");
    }
    
    tasks.push(
        {
            name: task,
            priority: priority,
            completed: false,
            deleted: false
        }
    );

    task.textContent = "";
}

function displayTasks(event) {
    event.preventDefault();
    div.textContent = "";
    tasks.forEach(element => {
        if (!element.deleted) {
            const par = document.createElement("p");
            const compButt = document.createElement("button");
            const delButt = document.createElement("button")
            compButt.textContent = "Complete";
            delButt.textContent = "Delete";
            par.textContent = "Task: " + element.name + "   || Priority: " + element.priority;
            document.querySelector("#task-list").appendChild(par);
            document.querySelector("#task-list").appendChild(compButt);
            document.querySelector("#task-list").appendChild(delButt);

            if (element.priority == "low") {
                par.classList.add("Low");
            }
            else if (element.priority == "medium") {
                par.classList.add("Medium");
            }
            else {
                par.classList.add("High");
            }
            compButt.addEventListener("click", function () {
                if (!element.completed) {
                    par.classList.add("Completed");
                    element.completed = true;
                }
                else {
                    par.classList.remove("Completed");
                    element.completed = false;
                }
            });

            delButt.addEventListener("click", function() {
                par.remove();
                compButt.remove();
                delButt.remove();
                element.deleted = true;
            });
        }
        
    });
}

submit.addEventListener("click", onSubmit);
showTask.addEventListener("click", displayTasks);