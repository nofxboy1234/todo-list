import { render as renderShowTodo } from '../views/todos/show';
import { render as renderIndexTodo } from '../views/todos/index';
import { render as renderNewTodo } from '../views/todos/new';
// import { render as renderEdit } from '../views/todos/edit';

// import { render as renderShow } from '../views/projects/show';
// import { render as renderIndex } from '../views/projects/index';
// import { render as renderNew } from '../views/projects/new';
// import { render as renderEdit } from '../views/projects/edit';

import { contentContainer } from '../views/layouts/application';
import { clearContent } from '../views/helpers';

import { TodosController as todosController } from './todosController';

const render = (path) => {
  if (path.includes('/')) {
    let todo;
    let todos;
    switch (path) {
      case 'todos/new':
        clearContent();
        todo = todosController.getTodo();
        contentContainer.appendChild(renderNewTodo(todo));
        document.getElementById('titleID').focus();
        break;
      case 'todos/index':
        clearContent();
        todos = todosController.getTodos();
        contentContainer.appendChild(renderIndexTodo(todos));
        break;
      case 'todos/show':
        clearContent();
        todo = todosController.getTodo();
        contentContainer.appendChild(renderShowTodo(todo));
        break;

      default:
        break;
    }
  }
};

export { render };
