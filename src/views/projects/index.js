import { createButton } from '../helpers';
import { redirectTo, projectPath } from '../../router';

const render = (projects) => {
  const projectParagraph = document.createElement('p');
  projects.forEach((data) => {
    const showProject = () => {
      redirectTo('GET', projectPath, data);
    };

    const destroyProject = () => {
      redirectTo('DELETE', projectPath, data);
    };

    const nameDiv = document.createElement('div');
    nameDiv.textContent = data.project.name;
    nameDiv.addEventListener('click', showProject);
    projectParagraph.appendChild(nameDiv);

    const deleteButton = createButton('button', 'DELETE', 'deleteButtonID');
    deleteButton.addEventListener('click', destroyProject);
    projectParagraph.appendChild(deleteButton);
  });

  return projectParagraph;
};

export { render };
