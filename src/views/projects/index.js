import { createButton } from '../helpers';
import { redirectTo, projectPath } from '../../router';
import { Todo } from '../../models/todo';
import { render as mainRender } from '../../renderer';

const render = (projects) => {
  const projectParagraph = document.createElement('p');
  projects.forEach((data) => {
    const showProject = () => {
      redirectTo('GET', projectPath, data);
    };

    const destroyProject = () => {
      redirectTo('DELETE', projectPath, data);
    };

    const indexTodosUnderProject = () => {
      const projectInstance = data;
      const todos = Todo.allTodosBelongingTo(projectInstance);
      mainRender('todos/index', todos)
    };

    const nameDiv = document.createElement('div');
    nameDiv.textContent = data.project.name;
    nameDiv.addEventListener('click', indexTodosUnderProject);
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
