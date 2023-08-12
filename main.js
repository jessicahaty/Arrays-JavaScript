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

removeTask(2)

console.log(tasks)

