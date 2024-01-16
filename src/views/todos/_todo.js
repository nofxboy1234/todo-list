import { router } from '../../router';

const redirectTo = (path, ...params) => router.redirectTo(path, ...params);

const todoPartial = (todo) => {
  // if (!todo) return;

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

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'DELETE';
  deleteButton.addEventListener('click', destroyTodo);
  todoDiv.appendChild(deleteButton);

  return todoDiv;
};

export { todoPartial };
