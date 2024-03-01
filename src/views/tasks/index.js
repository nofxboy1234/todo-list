import { createButton } from '../helpers';
import { redirectTo, projectPath, todosPath, taskPath } from '../../routers/router';
import { setProjectForTodosIndex } from '../todos';

const render = (tasks) => {
  const taskParagraph = document.createElement('p');
  tasks.forEach((task) => {
    const destroyTask = () => {
      redirectTo('DELETE', taskPath, task);
    };

    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = task.data.description;
    taskParagraph.appendChild(descriptionDiv);

    const destroyButton = createButton('button', 'DESTROY', 'deleteButtonID');
    destroyButton.addEventListener('click', destroyTask);
    taskParagraph.appendChild(destroyButton);
  });

  return taskParagraph;
};

export { render };
