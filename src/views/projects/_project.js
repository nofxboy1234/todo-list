import { createButton } from '../helpers';
import {
  redirectTo,
  projectsPath,
  editProjectPath,
  projectPath,
} from '../../routers/router';

const Partial = (project) => {
  const projectParagraph = document.createElement('p');

  const nameDiv = document.createElement('div');
  nameDiv.textContent = project.data.name;
  projectParagraph.appendChild(nameDiv);

  const destroyProject = () => {
    redirectTo('DELETE', projectPath, project);
  };

  const editProject = () => {
    redirectTo('GET', editProjectPath, project);
  };

  const closeProject = () => {
    redirectTo('GET', projectsPath);
  };

  const destroyButton = createButton('button', 'DESTROY', 'deleteButtonID');
  destroyButton.addEventListener('click', destroyProject);
  projectParagraph.appendChild(destroyButton);

  const updateButton = createButton('button', 'EDIT', 'editButtonID');
  updateButton.addEventListener('click', editProject);
  projectParagraph.appendChild(updateButton);

  const closeButton = createButton('button', 'CLOSE', 'closeButtonID');
  closeButton.addEventListener('click', closeProject);
  projectParagraph.appendChild(closeButton);

  return projectParagraph;
};

export { Partial };
