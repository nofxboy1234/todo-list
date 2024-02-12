import { createButton } from '../helpers';
import { redirectTo, projectPath, todosPath, taskPath } from '../../router';
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

    const deleteButton = createButton('button', 'DELETE', 'deleteButtonID');
    deleteButton.addEventListener('click', destroyTask);
    taskParagraph.appendChild(deleteButton);
  });

  return taskParagraph;
};

export { render };
