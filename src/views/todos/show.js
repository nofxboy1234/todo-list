import { subscribe } from '../../messageQueue/messageQueue.mjs';
import { Todo, events } from '../../models/todo.mjs';
import { clearContainer } from '../helpers';
import { contentContainer } from '../layouts/application';
import { editView } from './edit';

function createShowView() {
  const createEditButton = (todo) => {
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', (event) => {
      edit(todo);
      event.stopPropagation();
    });
    return editButton;
  };

  const createCloseButton = () => {
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', (event) => {
      contentContainer.clear();
      contentContainer.appendPrevious();
      event.stopPropagation();
    });
    return closeButton;
  };

  const edit = (todo) => {
    const render = editView.render(todo);
    if (render) {
      contentContainer.clear();
      contentContainer.appendChild(render.form);
      render.focus();
    }
  };

  const update = (eventName, data) => {
    if (eventName === events.update) {
      const todo = data;
      const rendered = render(todo);
      if (rendered) {
        contentContainer.clear();
        contentContainer.appendChild(rendered);
      }
    }
  };

  const render = (todo) => {
    const showTodoDiv = document.createElement('div');
    showTodoDiv.textContent = 'show todo view';

    const titleDiv = document.createElement('div');
    titleDiv.textContent = todo.title;
    showTodoDiv.appendChild(titleDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = todo.description;
    showTodoDiv.appendChild(descriptionDiv);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.textContent = todo.dueDate;
    showTodoDiv.appendChild(dueDateDiv);

    const priorityDiv = document.createElement('div');
    priorityDiv.textContent = todo.priority;
    showTodoDiv.appendChild(priorityDiv);

    const projectIDDiv = document.createElement('div');
    projectIDDiv.textContent = todo.projectID;
    showTodoDiv.appendChild(projectIDDiv);

    const tasksDiv = document.createElement('div');
    const tasks = todo.tasks();
    tasks.forEach((task) => {
      const taskDiv = document.createElement('div');
      taskDiv.textContent = task.description;
      tasksDiv.appendChild(taskDiv);
    });
    showTodoDiv.appendChild(tasksDiv);

    const editButton = createEditButton(todo);
    showTodoDiv.appendChild(editButton);

    const closeButton = createCloseButton();
    showTodoDiv.appendChild(closeButton);

    return showTodoDiv;
  };

  const instance = { update, render };
  subscribe(events.update, instance);

  return instance;
}

const showView = createShowView();

export { showView };
