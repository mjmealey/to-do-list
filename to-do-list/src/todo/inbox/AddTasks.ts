const AddTasksToInbox = () => {
  const addTask = document.getElementById("addTask") as HTMLButtonElement;
  const removeElements = (empty: string) => {
    addTask.style.display = empty;
    const noTasks = document.getElementById("noTasks") as HTMLParagraphElement;
    noTasks.style.display = empty;
  };

  const displayTaskAdd = () => {
    const taskBlock = document.createElement("div");
    taskBlock.id = "taskBlock";
    taskBlock.style.backgroundColor = "green";
    taskBlock.style.width = "50rem";
    taskBlock.style.padding = "20px";
    const toDos = document.getElementById("toDos") as HTMLDivElement;
    toDos.appendChild(taskBlock);

    const taskName = (label: string, input: string) => {
      const nameLabel = document.createElement(label) as HTMLElement;
      nameLabel.id = "nameLabel";
      nameLabel.setAttribute("for", "name");
      nameLabel.textContent = "Name:";
      taskBlock.appendChild(nameLabel);
      const nameInput = document.createElement(input) as HTMLElement;
      nameInput.id = "name";
      taskBlock.appendChild(nameInput);
    };

    const taskDescription = (label: string, input: string) => {
      const descriptionLabel = document.createElement(label) as HTMLElement;
      descriptionLabel.id = "descriptionLabel";
      descriptionLabel.setAttribute("for", "description");
      descriptionLabel.textContent = "Description:";
      taskBlock.appendChild(descriptionLabel);
      const descriptionInput = document.createElement(input) as HTMLElement;
      descriptionInput.id = "description";
      taskBlock.appendChild(descriptionInput);
    };

    return {
      taskName,
      taskDescription,
    };
  };

  const addTasks = () => {
    removeElements("none");
  };

  const createTaskForm = () => {
    const displayTask = displayTaskAdd()
    displayTask.taskName("label", "input")
    displayTask.taskDescription("label", "input")
  }


  addTask.addEventListener("click", () => {
    addTasks();
    createTaskForm()
  });
};

export default AddTasksToInbox;
