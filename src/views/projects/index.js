import { createButton } from '../helpers';
import { redirectTo, projectPath, todosPath } from '../../router';

const render = (projects) => {
  const projectParagraph = document.createElement('p');
  projects.forEach((project) => {
    const destroyProject = () => {
      redirectTo('DELETE', projectPath, project);
    };

    const renderChildTodos = () => {
      const projectData = {
        data: {
          id: undefined,
          projectID: project.data.id,
        },
      };
      redirectTo('GET', todosPath, projectData);
    };

    const nameDiv = document.createElement('div');
    nameDiv.textContent = project.data.name;
    nameDiv.addEventListener('click', renderChildTodos);
    projectParagraph.appendChild(nameDiv);

    project.todos().forEach((todoInstance) => {
      const div = document.createElement('div');
      div.textContent = todoInstance.data.title;
      projectParagraph.appendChild(div);
    });

    const deleteButton = createButton('button', 'DELETE', 'deleteButtonID');
    deleteButton.addEventListener('click', destroyProject);
    projectParagraph.appendChild(deleteButton);
  });

  return projectParagraph;
};

export { render };
