import { subscribe } from '../../messageQueue/messageQueue.mjs';
import { events } from '../../models/project.mjs';
import { events as todoEvents } from '../../models/todo.mjs';
import { Todo } from '../../models/todo.mjs';
import { contentContainer } from '../layouts/application';
import { newView as todoNewView } from '../todos/new';
import { showView as todoShowView } from '../todos/show';
import { format } from '../../../node_modules/date-fns/format';

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
    const todayDate = format(new Date(), 'yyyy-MM-dd');
    const todo = new Todo('', '', todayDate, 'low', project.id);
    const render = todoNewView.render(todo);
    if (render) {
      contentContainer.clearDomElement();
      contentContainer.appendRender(render.form);
      render.focus();
    }
  };

  const destroyTodo = (todo) => {
    if (window.confirm('Are you sure?')) {
      todo.destroy();
    }
  };

  const showTodo = (todo) => {
    const render = todoShowView.render(todo);
    if (render) {
      contentContainer.clearDomElement();
      contentContainer.appendRender(render);
    }
  };

  const update = (eventName, data) => {
    if (eventName === events.create) {
      const project = data;
      const rendered = render(project);
      if (rendered) {
        contentContainer.removeLastRenderFromCache();
        contentContainer.clearDomElement();
        contentContainer.appendRender(rendered);
      }
    }

    if (eventName === todoEvents.create) {
      const todo = data;
      const project = todo.project();
      const rendered = render(project);
      if (rendered) {
        contentContainer.removeLastRenderFromCache();
        contentContainer.clearDomElement();
        contentContainer.appendRender(rendered);
      }
    }

    if (eventName === todoEvents.destroy) {
      const todo = data;
      const project = todo.project();
      const rendered = render(project);
      if (rendered) {
        contentContainer.clearDomElement();
        contentContainer.appendRender(rendered);
      }
    }

    if (eventName === todoEvents.destroyFailed) {
      const todo = data;
      const project = todo.project();
      const rendered = render(project);
      if (rendered) {
        contentContainer.clearDomElement();
        contentContainer.appendRender(rendered);
      }
    }
  };

  const render = (project) => {
    contentContainer.clearCache();

    const showProjectDiv = document.createElement('div');
    showProjectDiv.classList.add('project-show-view');

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
      let todoClass;
      switch (todo.priority) {
        case 'low':
          todoClass = 'todo-low-priority';
          break;
        case 'medium':
          todoClass = 'todo-medium-priority';
          break;
        case 'high':
          todoClass = 'todo-high-priority';
          break;
        default:
          break;
      }

      todoParagraph.classList.add('todo', 'clickable', todoClass);
      todoParagraph.addEventListener('click', (event) => {
        showTodo(todo);
        event.stopPropagation();
      });

      const titleDiv = document.createElement('div');
      titleDiv.textContent = todo.title;
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
  subscribe(events.create, instance);
  subscribe(todoEvents.create, instance);
  subscribe(todoEvents.destroy, instance);
  subscribe(todoEvents.destroyFailed, instance);

  return instance;
}

const showView = createShowView();

export { showView };
