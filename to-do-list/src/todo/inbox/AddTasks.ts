const AddTasksToInbox = () => {
    
  const addTask = document.getElementById("addTask") as HTMLButtonElement;
  const removeElements = (empty: string) => {
    addTask.style.display = empty;
    const noTasks = document.getElementById("noTasks") as HTMLParagraphElement;
    noTasks.style.display = empty;
  };

  const displayTaskAdd = (label: string) => {
    const taskBlock = document.createElement("div");
    taskBlock.id = "taskBlock";
    taskBlock.style.backgroundColor = "green";
    taskBlock.style.width = "50rem"
    taskBlock.style.padding = "20px"
    const toDos = document.getElementById("toDos") as HTMLDivElement
    toDos.appendChild(taskBlock);
    const nameLabel = document.createElement(label) as HTMLElement;
    nameLabel.innerText = "Name";
    nameLabel.id = "nameLabel"
    taskBlock.appendChild(nameLabel);
  };

  const addTasks = () => {
    removeElements("none");
  };

  addTask.addEventListener("click", () => {
    addTasks();
    displayTaskAdd("label")
  });
};

export default AddTasksToInbox;
