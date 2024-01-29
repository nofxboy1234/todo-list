import { render as showTodo } from './views/todos/show';
import { render as indexTodo } from './views/todos/index';
import { render as newTodo } from './views/todos/new';
import { render as editTodo } from './views/todos/edit';

import { render as showProject } from './views/projects/show';
import { render as indexProject } from './views/projects/index';
import { render as newProject } from './views/projects/new';
import { render as editProject } from './views/projects/edit';

import { contentContainer } from './views/layouts/application';
import { clearContent } from './views/helpers';

const render = (path, data) => {
  switch (path) {
    case 'todos/new':
      clearContent();
      contentContainer.appendChild(newTodo(data));
      document.getElementById('titleID').focus();
      break;
    case 'todos/index':
      clearContent();
      contentContainer.appendChild(indexTodo(data));
      break;
    case 'todos/show':
      clearContent();
      contentContainer.appendChild(showTodo(data));
      break;
    case 'todos/edit':
      clearContent();
      contentContainer.appendChild(editTodo(data));
      document.getElementById('titleID').focus();
      break;

    case 'projects/new':
      clearContent();
      contentContainer.appendChild(newProject(data));
      document.getElementById('nameID').focus();
      break;
    case 'projects/index':
      clearContent();
      contentContainer.appendChild(indexProject(data));
      break;
    case 'projects/show':
      clearContent();
      contentContainer.appendChild(showProject(data));
      break;
    case 'projects/edit':
      clearContent();
      contentContainer.appendChild(editProject(data));
      document.getElementById('nameID').focus();
      break;
    default:
      break;
  }
  // if (path.includes('/')) {
  // }
};

export { render };
