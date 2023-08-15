let tasks = ["Revisar relatório", "Enviar e-mails", "Preparar reunião"]

function addTask (taskName) {
    tasks.push(taskName)
}

addTask("Codar")

function removeTask(i) {
    if (i >= 0 && i < tasks.length) {
        tasks.splice(i, 1)
    }
}

function prioritizeTask(i) {
    const taskToPrioritize = tasks[i]
    tasks.splice(i, 1)
    tasks.unshift(taskToPrioritize)
}

function completeTask(i) {
    tasks[i] = "✔ " + tasks[i]
}

function getCompletedTasks(tasksList) {
    const completedTasks = tasksList.filter(function(taskName) {
        return taskName.startsWith("✔");
        });
    return completedTasks;
}

completeTask(1)

const completedTasks = getCompletedTasks(tasks)

console.log(completedTasks)

function updateTask (i, nome) {
    tasks[i] = nome
}

updateTask(0, "Ajudar Jr")

console.log(tasks)



