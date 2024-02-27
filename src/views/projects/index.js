import { createButton } from '../helpers';
import { redirectTo, projectPath, todosPath } from '../../router';
import { setProjectForTodosIndex } from '../todos';

const render = (projects) => {
  const projectsDiv = document.createElement('div');

  const header = document.createElement('h2');
  header.textContent = 'Projects';
  projectsDiv.appendChild(header);

  projects.forEach((project) => {
    const destroyProject = () => {
      redirectTo('DELETE', projectPath, project);
    };

    const renderChildTodos = () => {
      setProjectForTodosIndex(project);
      redirectTo('GET', todosPath);
    };

    const projectDiv = document.createElement('div');

    const nameSpan = document.createElement('span');
    nameSpan.textContent = project.data.name;
    nameSpan.addEventListener('click', renderChildTodos);
    projectDiv.appendChild(nameSpan);

    // project.todos().forEach((todoInstance) => {
    //   const div = document.createElement('div');
    //   div.textContent = todoInstance.data.title;
    //   projectParagraph.appendChild(div);
    // });

    if (project.data.id != 1) {
      const destroyButton = createButton('button', 'DESTROY', 'deleteButtonID');
      destroyButton.addEventListener('click', destroyProject);
      projectDiv.appendChild(destroyButton);
    }

    projectsDiv.appendChild(projectDiv);

  });

  return projectsDiv;
};

export { render };
