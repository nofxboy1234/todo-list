import { render as showTodo } from './views/todos/show';
import { render as indexTodo } from './views/todos/index';
import { render as newTodo } from './views/todos/new';
import { render as editTodo } from './views/todos/edit';

import { contentContainer } from './views/layouts/application';
import { clearContent } from './views/helpers';

import { todo, todos } from './controllers/todosController';

const render = (path) => {
  if (path.includes('/')) {
    switch (path) {
      case 'todos/new':
        clearContent();
        contentContainer.appendChild(newTodo(todo));
        document.getElementById('titleID').focus();
        break;
      case 'todos/index':
        clearContent();
        contentContainer.appendChild(indexTodo(todos));
        break;
      case 'todos/show':
        clearContent();
        contentContainer.appendChild(showTodo(todo));
        break;
      case 'todos/edit':
        clearContent();
        contentContainer.appendChild(editTodo(todo));
        break;

      default:
        break;
    }
  }
};

export { render };
