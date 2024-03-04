import { render as showTodoProject } from '../views/projects/show';
import { render as indexTodoProject } from '../views/projects/index';
import { render as newTodoProject } from '../views/projects/new';
import { render as editTodoProject } from '../views/projects/edit';

import { contentContainer, menuContainer, projectIndex } from '../views/layouts/application';
import { clearContainer } from '../views/helpers';
import { edit, index, new_, show } from '../symbols/resourceSymbols';

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

const renderView = (view, container) => {
  clearContainer(container);
  container.appendChild(view);
};

const render = (path, data) => {
  switch (path) {
    case new_ || 'projects/new':
      renderView(newTodoProject(data), contentContainer);
      document.getElementById('nameID').focus();
      break;
    case index || 'projects/index':
      renderView(indexTodoProject(data), projectIndex);
      break;
    case show || 'projects/show':
      renderView(showTodoProject(data), contentContainer);
      break;
    case edit || 'projects/edit':
      renderView(editTodoProject(data), contentContainer);
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
  showTodoProject,
  indexTodoProject,
  newTodoProject,
  editTodoProject,
};
