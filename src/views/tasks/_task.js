import { createButton } from '../helpers';
import {
  redirectTo,
  projectsPath,
  editProjectPath,
  projectPath,
  taskPath,
  editTaskPath,
  tasksPath,
} from '../../routers/router';

const Partial = (task) => {
  const taskParagraph = document.createElement('p');

  const descriptionDiv = document.createElement('div');
  descriptionDiv.textContent = task.data.description;
  taskParagraph.appendChild(descriptionDiv);

  const destroyTask = () => {
    redirectTo('DELETE', taskPath, task);
  };

  const editTask = () => {
    redirectTo('GET', editTaskPath, task);
  };

  const closeTask = () => {
    redirectTo('GET', tasksPath);
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
