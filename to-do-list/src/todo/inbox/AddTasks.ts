export const AddTasksToInbox = () => {
    const addTask = document.getElementById("addTask") as HTMLButtonElement
    const removeElements = (empty: string) => {
        addTask.style.display = empty 
        const noTasks = document.getElementById("noTasks") as HTMLParagraphElement
        noTasks.style.display = empty
    }

    const displayTaskAdd = (label: string) => {
       const taskBlock = document.createElement("div")
       taskBlock.id = "taskBlock" 
       taskBlock.style.backgroundColor = "green"
       document.body.appendChild(taskBlock)
       const nameOfTask = document.createElement(label) as HTMLElement
       nameOfTask.innerText = "Name"
       taskBlock.appendChild(nameOfTask)
    }


    addTask.addEventListener("click", () => {
        removeElements("none")
    })
}