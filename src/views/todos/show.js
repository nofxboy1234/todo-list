import { Todo } from '../../models/todo.mjs';
import { clearContainer } from '../helpers';
import { contentContainer } from '../layouts/application';
import { createEditView } from './edit';

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

  const edit = (todo) => {
    const editView = createEditView();
    const render = editView.render(todo);
    if (render) {
      contentContainer.appendChild(render);
    }
  };

  const update = (eventName, data) => {};

  const render = (todo) => {
    clearContainer(contentContainer);

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

    const editButton = createEditButton(todo);
    showTodoDiv.appendChild(editButton);

    // const tasks = todo.tasks();
    // if (tasks.length === 0) {
    //   return showTodoDiv;
    // }
    // const tasksDiv = document.createElement('div');
    // tasks.forEach((todo) => {
    //   const todoDiv = document.createElement('div');
    //   todoDiv.textContent = todo.title;
    //   tasksDiv.appendChild(todoDiv);
    // });
    // showTodoDiv.appendChild(tasksDiv);
    return showTodoDiv;
  };

  return { update, render };
}

export { createShowView };
