import { createButton } from '../helpers';
import { redirectTo, projectPath, todosPath } from '../../router';
import { params as projectParams } from '../../parameters/projectParameters';
import { cacheView, indexTodo } from '../../renderer';
import { Project } from '../../models/project';

const render = (projects) => {
  const projectParagraph = document.createElement('p');
  projects.forEach((project) => {
    const destroyProject = () => {
      redirectTo('DELETE', projectPath, project);
    };

    const renderChildTodos = () => {
      const projectData = {
        data: {
          id: project.data.id,
        },
      };
      projectParams.merge(projectData);
      const todos = project.todos();
      cacheView(indexTodo, todos, 'todo', project);

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
