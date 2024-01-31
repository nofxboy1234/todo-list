import { render as showTodo } from './views/todos/show';
import { render as indexTodo } from './views/todos/index';
import { render as newTodo } from './views/todos/new';
import { render as editTodo } from './views/todos/edit';

import { render as showProject } from './views/projects/show';
import { render as indexProject } from './views/projects/index';
import { render as newProject } from './views/projects/new';
import { render as editProject } from './views/projects/edit';

import { contentContainer, projectIndex } from './views/layouts/application';
import { clearContent, clearProjectIndex } from './views/helpers';

let lastRenderedView = undefined;

const render = (path, data) => {
  let view;
  switch (path) {
    case 'todos/new':
      clearContent();
      view = newTodo(data);
      contentContainer.appendChild(view);
      document.getElementById('titleID').focus();
      lastRenderedView = view;
      break;
    case 'todos/index':
      clearContent();
      view = indexTodo(data);
      contentContainer.appendChild(view);
      lastRenderedView = view;
      break;
    case 'todos/show':
      clearContent();
      view = showTodo(data);
      contentContainer.appendChild(view);
      lastRenderedView = view;
      break;
    case 'todos/edit':
      clearContent();
      view = editTodo(data);
      contentContainer.appendChild(view);
      document.getElementById('titleID').focus();
      lastRenderedView = view;
      break;

    case 'projects/new':
      clearContent();
      view = newProject(data);
      contentContainer.appendChild(view);
      document.getElementById('nameID').focus();
      lastRenderedView = view;
      break;
    case 'projects/index':
      clearProjectIndex();
      view = indexProject(data);
      projectIndex.appendChild(view);
      break;
    case 'projects/show':
      clearContent();
      contentContainer.appendChild(showProject(data));
      lastRenderedView = view;
      break;
    case 'projects/edit':
      clearContent();
      view = editProject(data);
      contentContainer.appendChild(view);
      document.getElementById('nameID').focus();
      lastRenderedView = view;
      break;

    default:
      break;
  }
  // if (path.includes('/')) {
  // }
};

const renderLastView = () => {
  clearContent();
  contentContainer.appendChild(lastRenderedView);
};

export { render };
