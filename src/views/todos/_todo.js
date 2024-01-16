import { redirectTo } from "../../helpers";

const todoPartial = (todo) => {
  const todoDiv = document.createElement('p');

  const titleDiv = document.createElement('div');
  titleDiv.textContent = todo.title;
  todoDiv.appendChild(titleDiv);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.textContent = todo.description;
  todoDiv.appendChild(descriptionDiv);

  const dueDateDiv = document.createElement('div');
  dueDateDiv.textContent = todo.dueDate;
  todoDiv.appendChild(dueDateDiv);

  const priorityDiv = document.createElement('div');
  priorityDiv.textContent = todo.priority;
  todoDiv.appendChild(priorityDiv);

  const checkListDiv = document.createElement('div');
  for (const [key, value] of Object.entries(todo.checkList)) {
    const checkListEntryDiv = document.createElement('div');
    checkListEntryDiv.textContent = `- ${key}: ${value}`;
    checkListDiv.appendChild(checkListEntryDiv);
  }

  todoDiv.appendChild(checkListDiv);

  const projectDiv = document.createElement('div');
  projectDiv.textContent = todo.project;
  todoDiv.appendChild(projectDiv);

  const destroyTodo = () => {
    // console.log('destroy');
    redirectTo('/todos', todo.id, 'DELETE');
  };

  const editTodo = () => {
    // console.log('destroy');
    redirectTo('/todos/edit', todo.id);
  };

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'DELETE';
  deleteButton.addEventListener('click', destroyTodo);
  todoDiv.appendChild(deleteButton);

  const updateButton = document.createElement('button');
  updateButton.textContent = 'EDIT';
  updateButton.addEventListener('click', editTodo);
  todoDiv.appendChild(updateButton);

  return todoDiv;
};

export { todoPartial };
