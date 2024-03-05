import { render as showTodo } from '../views/todos/show';
import { render as indexTodo } from '../views/todos/index';
import { render as newTodo } from '../views/todos/new';
import { render as editTodo } from '../views/todos/edit';

import { contentContainer } from '../views/layouts/application';
import { edit, index, new_, show } from '../symbols/resourceSymbols';
import { renderView } from './renderer';

const render = (path, data) => {
  switch (path) {
    case new_ || 'todos/new':
      renderView(newTodo(data), contentContainer);
      document.getElementById('titleID').focus();
      break;
    case index || 'todos/index':
      renderView(indexTodo(data), contentContainer);
      break;
    case show || 'todos/show':
      renderView(showTodo(data), contentContainer);
      break;
    case edit || 'todos/edit':
      renderView(editTodo(data), contentContainer);
      document.getElementById('titleID').focus();
      break;
    default:
      break;
  }
};

export { render, showTodo, indexTodo, newTodo, editTodo };
