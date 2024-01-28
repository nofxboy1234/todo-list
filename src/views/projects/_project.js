import { createButton } from '../helpers';
import {
  redirectTo,
  projectsPath,
  editProjectPath,
  projectPath,
} from '../../router';

const projectPartial = (data) => {
  const projectParagraph = document.createElement('p');

  const nameDiv = document.createElement('div');
  nameDiv.textContent = data.project.name;
  projectParagraph.appendChild(nameDiv);

  const destroyProject = () => {
    redirectTo('DELETE', projectPath, data);
  };

  const editProject = () => {
    redirectTo('GET', editProjectPath, data);
  };

  const closeProject = () => {
    redirectTo('GET', projectsPath);
  };

  const deleteButton = createButton('button', 'DELETE', 'deleteButtonID');
  deleteButton.addEventListener('click', destroyProject);
  projectParagraph.appendChild(deleteButton);

  const updateButton = createButton('button', 'EDIT', 'editButtonID');
  updateButton.addEventListener('click', editProject);
  projectParagraph.appendChild(updateButton);

  const closeButton = createButton('button', 'CLOSE', 'closeButtonID');
  closeButton.addEventListener('click', closeProject);
  projectParagraph.appendChild(closeButton);

  return projectParagraph;
};

export { projectPartial };
