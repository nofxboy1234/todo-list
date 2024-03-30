import { Todo, todoStatic } from '../../models/todo.mjs';
import { clearContainer } from '../helpers';
import { contentContainer } from '../layouts/application';
import { createShowView } from './show';

function createEditView() {
  const createUpdateButton = (todo) => {
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.addEventListener('click', (event) => {
      updateTodo(todo);
      todoStatic.all();
      renderShowView(todo);
      event.stopPropagation();
    });
    return updateButton;
  };

  const updateTodo = (todo) => {
    const updateData = {
      title: `${todo.title} updated`,
      description: `${todo.description} updated`,
      dueDate: `${todo.dueDate} updated`,
      priority: `${todo.priority} updated`,
    };
    todo.update(updateData);
  };

  const renderShowView = (todo) => {
    const showView = createShowView();
    const render = showView.render(todo);
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

    const updateButton = createUpdateButton(todo);
    showTodoDiv.appendChild(updateButton);

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

  return { update: updateTodo, render };
}

export { createEditView };
