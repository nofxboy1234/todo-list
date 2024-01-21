import { contentContainer } from '../layouts/application';
import { clearContent, createButton } from '../helpers';
import { redirectTo } from '../../helpers';

const render = (projects) => {
  clearContent();
  projects.forEach((project) => {
    const projectParagraph = document.createElement('p');

    const showProject = () => {
      redirectTo('/projects', project.id);
    };

    const destroyProject = () => {
      redirectTo('/projects', project.id, 'DELETE');
    };

    const nameDiv = document.createElement('div');
    nameDiv.textContent = project.title;
    nameDiv.addEventListener('click', showProject);
    projectParagraph.appendChild(nameDiv);

    const deleteButton = createButton('button', 'DELETE', 'deleteButtonID');
    deleteButton.addEventListener('click', destroyProject);
    projectParagraph.appendChild(deleteButton);

    contentContainer.appendChild(projectParagraph);
  });
};

export { render };
