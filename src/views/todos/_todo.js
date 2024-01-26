import { createButton } from '../helpers';
import { redirectTo, todosPath, editTodoPath, todoPath } from '../../router';

const todoPartial = (data) => {
  const todoParagraph = document.createElement('p');

  const titleDiv = document.createElement('div');
  titleDiv.textContent = data.todo.title;
  todoParagraph.appendChild(titleDiv);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.textContent = data.todo.description;
  todoParagraph.appendChild(descriptionDiv);

  const dueDateDiv = document.createElement('div');
  dueDateDiv.textContent = data.todo.dueDate;
  todoParagraph.appendChild(dueDateDiv);

  const priorityDiv = document.createElement('div');
  priorityDiv.textContent = data.todo.priority;
  todoParagraph.appendChild(priorityDiv);

  const checkListDiv = document.createElement('div');
  for (const [key, value] of Object.entries(data.todo.checkList)) {
    const checkListEntryDiv = document.createElement('div');
    checkListEntryDiv.textContent = `- ${key}: ${value}`;
    checkListDiv.appendChild(checkListEntryDiv);
  }

  todoParagraph.appendChild(checkListDiv);

  const projectDiv = document.createElement('div');

  projectDiv.textContent = data.project().name;
  todoParagraph.appendChild(projectDiv);

  const destroyTodo = () => {
    redirectTo('DELETE', todoPath, data);
  };

  const editTodo = () => {
    redirectTo('GET', editTodoPath, data);
  };

  const closeTodo = () => {
    redirectTo('GET', todosPath);
  };

  const deleteButton = createButton('button', 'DELETE', 'deleteButtonID');
  deleteButton.addEventListener('click', destroyTodo);
  todoParagraph.appendChild(deleteButton);

  const updateButton = createButton('button', 'EDIT', 'editButtonID');
  updateButton.addEventListener('click', editTodo);
  todoParagraph.appendChild(updateButton);

  const closeButton = createButton('button', 'CLOSE', 'closeButtonID');
  closeButton.addEventListener('click', closeTodo);
  todoParagraph.appendChild(closeButton);

  return todoParagraph;
};

export { todoPartial };
