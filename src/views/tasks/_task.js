import { createButton } from '../helpers';
import { redirectTo } from '../../routers/router';

import { todoTaskPath, editTodoTaskPath } from '../../routes/todoTaskRoutes';

const Partial = (task) => {
  const taskParagraph = document.createElement('p');

  const descriptionDiv = document.createElement('div');
  descriptionDiv.textContent = task.data.description;
  taskParagraph.appendChild(descriptionDiv);

  const destroyTask = () => {
    redirectTo('DELETE', todoTaskPath, task);
  };

  const editTask = () => {
    redirectTo('GET', editTodoTaskPath, task);
  };

  const closeTask = () => {
    redirectTo('GET', todoTaskPath);
  };

  const destroyButton = createButton('button', 'DESTROY', 'deleteButtonID');
  destroyButton.addEventListener('click', destroyTask);
  taskParagraph.appendChild(destroyButton);

  const updateButton = createButton('button', 'EDIT', 'editButtonID');
  updateButton.addEventListener('click', editTask);
  taskParagraph.appendChild(updateButton);

  const closeButton = createButton('button', 'CLOSE', 'closeButtonID');
  closeButton.addEventListener('click', closeTask);
  taskParagraph.appendChild(closeButton);

  return taskParagraph;
};

export { Partial };
