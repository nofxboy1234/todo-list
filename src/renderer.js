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
import { Todo } from './models/todo';
import { Project } from './models/project';

const cache = [];

const cacheView = (view) => {
  cache.push(view);
};

const popCachedView = () => {
  return cache.pop();
};

const renderCachedView = () => {
  const view = popCachedView();
  renderView(view);
};

const renderView = (view) => {
  clearContent();
  contentContainer.appendChild(view);
};

const render = (path, data) => {
  switch (path) {
    case 'todos/new':
      renderView(newTodo(data));
      document.getElementById('titleID').focus();
      break;
    case 'todos/index':
      renderView(indexTodo(data));
      break;
    case 'todos/show':
      renderView(showTodo(data));
      break;
    case 'todos/edit':
      renderView(editTodo(data));
      document.getElementById('titleID').focus();
      break;

    case 'projects/new':
      renderView(newProject(data));
      document.getElementById('nameID').focus();
      break;
    case 'projects/index':
      clearProjectIndex();
      const renderedView = indexProject(data);
      projectIndex.appendChild(renderedView);
      break;
    case 'projects/show':
      renderView(showProject(data));
      break;
    case 'projects/edit':
      renderView(editProject(data));
      document.getElementById('nameID').focus();
      break;

    default:
      break;
  }
};

export {
  render,
  cacheView,
  popCachedView,
  renderCachedView,
  showTodo,
  indexTodo,
  newTodo,
  editTodo,
  showProject,
  indexProject,
  newProject,
  editProject,
};
