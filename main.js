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

prioritizeTask(2)

console.log(tasks)

