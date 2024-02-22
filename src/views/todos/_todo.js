import { createButton } from '../helpers';
import { redirectTo, editTodoPath, todoPath, todosPath } from '../../router';
import {
  cacheView,
  showTodo,
} from '../../renderer';

const Partial = (todo) => {
  const todoParagraph = document.createElement('p');

  const titleDiv = document.createElement('div');
  titleDiv.textContent = todo.data.title;
  todoParagraph.appendChild(titleDiv);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.textContent = todo.data.description;
  todoParagraph.appendChild(descriptionDiv);

  const dueDateDiv = document.createElement('div');
  dueDateDiv.textContent = todo.data.dueDate;
  todoParagraph.appendChild(dueDateDiv);

  const priorityDiv = document.createElement('div');
  priorityDiv.textContent = todo.data.priority;
  todoParagraph.appendChild(priorityDiv);


  const projectDiv = document.createElement('div');

  const projectInstance = todo.project();
  projectDiv.textContent = projectInstance.data.name;
  todoParagraph.appendChild(projectDiv);

  const destroyTodo = () => {
    redirectTo('DELETE', todoPath, todo);
  };

  const editTodo = () => {
    cacheView(showTodo(todo));
    redirectTo('GET', editTodoPath, todo);
  };

  const closeTodo = () => {
    redirectTo('GET', todosPath);
  };

  const destroyButton = createButton('button', 'DESTROY', 'deleteButtonID');
  destroyButton.addEventListener('click', destroyTodo);
  todoParagraph.appendChild(destroyButton);

  const updateButton = createButton('button', 'EDIT', 'editButtonID');
  updateButton.addEventListener('click', editTodo);
  todoParagraph.appendChild(updateButton);

  const closeButton = createButton('button', 'CLOSE', 'closeButtonID');
  closeButton.addEventListener('click', closeTodo);
  todoParagraph.appendChild(closeButton);

  return todoParagraph;
};

export { Partial };
