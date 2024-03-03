import { render as showProject } from '../views/projects/show';
import { render as indexProject } from '../views/projects/index';
import { render as newProject } from '../views/projects/new';
import { render as editProject } from '../views/projects/edit';

import { render as showTodo } from '../views/todos/show';
import { render as indexTodo } from '../views/todos/index';
import { render as newTodo } from '../views/todos/new';
import { render as editTodo } from '../views/todos/edit';

import { render as showTask } from '../views/tasks/show';
import { render as indexTask } from '../views/tasks/index';
import { render as newTask } from '../views/tasks/new';
import { render as editTask } from '../views/tasks/edit';

import { contentContainer, projectIndex } from '../views/layouts/application';
import { clearContent, clearProjectIndex } from '../views/helpers';

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
    case 'projects/new':
      renderView(newProject(data));
      document.getElementById('nameID').focus();
      break;
    case 'projects/index':
      clearProjectIndex();
      projectIndex.appendChild(indexProject(data));
      break;
    case 'projects/show':
      renderView(showProject(data));
      break;
    case 'projects/edit':
      renderView(editProject(data));
      document.getElementById('nameID').focus();
      break;

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

    case 'tasks/new':
      renderView(newTask(data));
      document.getElementById('descriptionID').focus();
      break;
    case 'tasks/index':
      renderView(indexTask(data));
      break;
    case 'tasks/show':
      renderView(showTask(data));
      break;
    case 'tasks/edit':
      renderView(editTask(data));
      document.getElementById('descriptionID').focus();
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
  showTask,
  indexTask,
  newTask,
  editTask,
};
