import { createButton } from '../helpers';
import { redirectTo, projectPath, todosPath } from '../../router';

const render = (projects) => {
  const projectParagraph = document.createElement('p');
  projects.forEach((projectInstance) => {
    const showProject = () => {
      redirectTo('GET', projectPath, projectInstance);
    };

    const destroyProject = () => {
      redirectTo('DELETE', projectPath, projectInstance);
    };

    const renderChildTodos = () => {
      redirectTo('GET', todosPath, {
        projectName: projectInstance.project.name,
      });
    };

    const nameDiv = document.createElement('div');
    nameDiv.textContent = projectInstance.project.name;
    nameDiv.addEventListener('click', renderChildTodos);
    projectParagraph.appendChild(nameDiv);

    projectInstance.todos().forEach((todoInstance) => {
      const div = document.createElement('div');
      div.textContent = todoInstance.todo.title;
      projectParagraph.appendChild(div);
    });

    const deleteButton = createButton('button', 'DELETE', 'deleteButtonID');
    deleteButton.addEventListener('click', destroyProject);
    projectParagraph.appendChild(deleteButton);
  });

  return projectParagraph;
};

export { render };
