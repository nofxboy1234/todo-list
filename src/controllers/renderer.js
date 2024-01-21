// import { render as renderShow } from '../views/todos/show';
// import { render as renderIndex } from '../views/todos/index';
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
    switch (path) {
      case 'todos/new':
        console.log('render todos/new');
        clearContent();
        const todo = todosController.getTodo();
        contentContainer.appendChild(renderNewTodo(todo));
        document.getElementById('titleID').focus();
        break;

      default:
        break;
    }
  }
};

export { render };
