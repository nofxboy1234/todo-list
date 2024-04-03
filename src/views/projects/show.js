import { subscribe } from '../../messageQueue/messageQueue.mjs';
import { events as todoEvents } from '../../models/todo.mjs';
import { Todo } from '../../models/todo.mjs';
import { clearContainer } from '../helpers';
import { contentContainer } from '../layouts/application';
import { createNewView as createTodoNewView } from '../todos/new';
import { createShowView as createTodoShowView } from '../todos/show';

function createShowView() {
  const createNewTodoButton = (project) => {
    const newTodoButton = document.createElement('button');
    newTodoButton.textContent = 'New Todo';
    newTodoButton.addEventListener('click', (event) => {
      newTodo(project);
      event.stopPropagation();
    });

    return newTodoButton;
  };

  const createDestroyTodoButton = (todo) => {
    const destroyTodoButton = document.createElement('button');
    destroyTodoButton.textContent = 'Destroy';
    destroyTodoButton.addEventListener('click', (event) => {
      destroyTodo(todo);
      event.stopPropagation();
    });

    return destroyTodoButton;
  };

  const newTodo = (project) => {
    const todoNewView = createTodoNewView();
    const todo = new Todo('', '', '', 'low', project.id);
    const render = todoNewView.render(todo);
    if (render) {
      contentContainer.clear();
      contentContainer.appendChild(render.form);
      render.focus();
    }
  };

  const destroyTodo = (todo) => {
    todo.destroy();
  };

  const showTodo = (todo) => {
    const todoShowView = createTodoShowView();
    const render = todoShowView.render(todo);
    if (render) {
      contentContainer.clear();
      contentContainer.appendChild(render);
    }
  };

  const update = (eventName, data) => {
    if (eventName === todoEvents.create) {
      const todo = data;
      const project = todo.project();
      const rendered = render(project);
      if (rendered) {
        contentContainer.clear();
        contentContainer.appendChild(rendered);
      }
    }

    if (eventName === todoEvents.destroy) {
      const todo = data;
      const project = todo.project();
      const rendered = render(project);
      if (rendered) {
        contentContainer.clear();
        contentContainer.appendChild(rendered);
      }
    }
  };

  const render = (project) => {
    contentContainer.clearViewCache();
    const showProjectDiv = document.createElement('div');

    const header = document.createElement('h2');
    header.textContent = project.name;
    showProjectDiv.appendChild(header);

    const newTodoButton = createNewTodoButton(project);
    showProjectDiv.appendChild(newTodoButton);

    const todos = project.todos();
    if (todos.length === 0) {
      return showProjectDiv;
    }

    const todosDiv = document.createElement('div');
    todos.forEach((todo) => {
      const todoParagraph = document.createElement('p');

      const titleDiv = document.createElement('div');
      titleDiv.textContent = todo.title;
      titleDiv.addEventListener('click', (event) => {
        showTodo(todo);
        event.stopPropagation();
      });
      todoParagraph.appendChild(titleDiv);

      const dueDateDiv = document.createElement('div');
      dueDateDiv.textContent = todo.dueDate;
      todoParagraph.appendChild(dueDateDiv);

      const destroyTodoButton = createDestroyTodoButton(todo);
      todoParagraph.appendChild(destroyTodoButton);

      todosDiv.appendChild(todoParagraph);
    });

    showProjectDiv.appendChild(todosDiv);

    return showProjectDiv;
  };

  const instance = { update, render };
  subscribe(todoEvents.create, instance);
  subscribe(todoEvents.destroy, instance);

  return instance;
}

export { createShowView };
