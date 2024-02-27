import { createButton } from '../helpers';
import { redirectTo, projectPath, todosPath } from '../../router';
import { setProjectForTodosIndex } from '../todos';

const render = (projects) => {
  const projectsDiv = document.createElement('div');

  const header = document.createElement('h2');
  header.textContent = 'Projects:';
  projectsDiv.appendChild(header);

  projects.forEach((project) => {
    const destroyProject = () => {
      if (!window.confirm('Are you sure?')) {
        return;
      }

      redirectTo('DELETE', projectPath, project);
    };

    const renderChildTodos = () => {
      setProjectForTodosIndex(project);
      redirectTo('GET', todosPath);
    };

    const projectParagraph = document.createElement('p');
    const nameSpan = document.createElement('span');
    nameSpan.textContent = project.data.name;
    nameSpan.addEventListener('click', renderChildTodos);
    projectParagraph.appendChild(nameSpan);

    if (project.data.id != 1) {
      const destroyButton = createButton('button', 'DESTROY', 'deleteButtonID');
      destroyButton.addEventListener('click', destroyProject);
      projectParagraph.appendChild(destroyButton);
    }

    projectsDiv.appendChild(projectParagraph);
  });

  return projectsDiv;
};

export { render };
