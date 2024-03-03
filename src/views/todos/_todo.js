import { createButton } from '../helpers';
import { redirectTo, editTodoPath, todoPath, todosPath } from '../../routers/router';
import { cacheView } from '../../renderers/renderer';

const Partial = (todo) => {
  const todoParagraph = document.createElement('p');

  const titleDiv = document.createElement('div');
  const titleLabelSpan = document.createElement('span');
  titleLabelSpan.textContent = 'Title: ';
  titleDiv.appendChild(titleLabelSpan);
  const titleValueSpan = document.createElement('span');
  titleValueSpan.textContent = todo.data.title;
  titleDiv.appendChild(titleValueSpan);
  todoParagraph.appendChild(titleDiv);

  const descriptionDiv = document.createElement('div');
  const descriptionLabelSpan = document.createElement('span');
  descriptionLabelSpan.textContent = 'Description: ';
  descriptionDiv.appendChild(descriptionLabelSpan);
  const descriptionValueSpan = document.createElement('span');
  descriptionValueSpan.textContent = todo.data.description;
  descriptionDiv.appendChild(descriptionValueSpan);
  todoParagraph.appendChild(descriptionDiv);

  const dueDateDiv = document.createElement('div');
  const dueDateLabelSpan = document.createElement('span');
  dueDateLabelSpan.textContent = 'Due Date: ';
  dueDateDiv.appendChild(dueDateLabelSpan);
  const dueDateValueSpan = document.createElement('span');
  dueDateValueSpan.textContent = todo.data.dueDate;
  dueDateDiv.appendChild(dueDateValueSpan);
  todoParagraph.appendChild(dueDateDiv);

  const priorityDiv = document.createElement('div');
  const priorityLabelSpan = document.createElement('span');
  priorityLabelSpan.textContent = 'Priority: ';
  priorityDiv.appendChild(priorityLabelSpan);
  const priorityValueSpan = document.createElement('span');
  priorityValueSpan.textContent = todo.data.priority;
  priorityDiv.appendChild(priorityValueSpan);
  todoParagraph.appendChild(priorityDiv);

  const projectDiv = document.createElement('div');
  const projectLabelSpan = document.createElement('span');
  projectLabelSpan.textContent = 'Project: ';
  projectDiv.appendChild(projectLabelSpan);
  const projectValueSpan = document.createElement('span');
  const projectInstance = todo.project();
  projectValueSpan.textContent = projectInstance.data.name;
  projectDiv.appendChild(projectValueSpan);
  todoParagraph.appendChild(projectDiv);

  const destroyTodo = () => {
    if (!window.confirm('Are you sure?')) {
      return;
    }

    redirectTo('DELETE', todoPath, todo);
  };

  const editTodo = () => {
    cacheView(showTodo(todo));
    redirectTo('GET', editTodoPath, todo);
  };

  const closeTodo = () => {
    redirectTo('GET', todosPath);
  };

  const destroyButton = createButton('button', 'Destroy', 'deleteButtonID');
  destroyButton.addEventListener('click', destroyTodo);
  todoParagraph.appendChild(destroyButton);

  const updateButton = createButton('button', 'Edit', 'editButtonID');
  updateButton.addEventListener('click', editTodo);
  todoParagraph.appendChild(updateButton);

  const closeButton = createButton('button', 'Close', 'closeButtonID');
  closeButton.addEventListener('click', closeTodo);
  todoParagraph.appendChild(closeButton);

  return todoParagraph;
};

export { Partial };
