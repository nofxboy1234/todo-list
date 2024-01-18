import { redirectTo } from '../../helpers';
import { createButton } from '../helpers';

const projectPartial = (project) => {
  const projectParagraph = document.createElement('p');

  const nameDiv = document.createElement('div');
  nameDiv.textContent = project.title;
  projectParagraph.appendChild(nameDiv);

  const destroyProject = () => {
    redirectTo('/todos', project.id, 'DELETE');
  };

  const editProject = () => {
    redirectTo('/todos/edit', project.id);
  };

  const closeProject = () => {
    redirectTo('/todos');
  };

  const deleteButton = createButton('button', 'DELETE');
  deleteButton.addEventListener('click', destroyProject);
  projectParagraph.appendChild(deleteButton);

  const updateButton = createButton('button', 'EDIT')
  updateButton.addEventListener('click', editProject);
  projectParagraph.appendChild(updateButton);

  const closeButton = createButton('button', 'CLOSE')
  closeButton.addEventListener('click', closeProject);
  projectParagraph.appendChild(closeButton);


  return projectParagraph;
};

export { projectPartial };
