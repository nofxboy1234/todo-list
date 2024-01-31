import { createButton } from '../helpers';
import { redirectTo, projectPath } from '../../router';
import { renderChildTodosOfProject } from '../helpers';

const render = (projects) => {
  const projectParagraph = document.createElement('p');
  projects.forEach((data) => {
    const showProject = () => {
      redirectTo('GET', projectPath, data);
    };

    const destroyProject = () => {
      redirectTo('DELETE', projectPath, data);
    };

    const renderChildTodos = () => {
      renderChildTodosOfProject(data);
    };

    const nameDiv = document.createElement('div');
    nameDiv.textContent = data.project.name;
    nameDiv.addEventListener('click', renderChildTodos);
    projectParagraph.appendChild(nameDiv);

    data.todos().forEach((todoInstance) => {
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
