import { createButton } from '../helpers';
import { redirectTo, projectPath, todosPath } from '../../router';
import { setProjectForTodosIndex } from '../todos';

const render = (projects) => {
  const projectParagraph = document.createElement('p');
  projects.forEach((project) => {
    const destroyProject = () => {
      redirectTo('DELETE', projectPath, project);
    };

    const renderChildTodos = () => {
      setProjectForTodosIndex(project);
      redirectTo('GET', todosPath);
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

    if (project.data.id != 1) {
      const deleteButton = createButton('button', 'DELETE', 'deleteButtonID');
      deleteButton.addEventListener('click', destroyProject);
      projectParagraph.appendChild(deleteButton);
    }
  });

  return projectParagraph;
};

export { render };
