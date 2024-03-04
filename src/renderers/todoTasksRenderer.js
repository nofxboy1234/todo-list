import { render as showTodoTask } from '../views/tasks/show';
import { render as indexTodoTask } from '../views/tasks/index';
import { render as newTodoTask } from '../views/tasks/new';
import { render as editTodoTask } from '../views/tasks/edit';

import { contentContainer } from '../views/layouts/application';
import { clearContent } from '../views/helpers';
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

const renderView = (view) => {
  clearContent();
  contentContainer.appendChild(view);
};

const render = (path, data) => {
  switch (path) {
    case new_ || 'tasks/new':
      renderView(newTodoTask(data));
      document.getElementById('descriptionID').focus();
      break;
    case index || 'tasks/index':
      renderView(indexTodoTask(data));
      break;
    case show || 'tasks/show':
      renderView(showTodoTask(data));
      break;
    case edit || 'tasks/edit':
      renderView(editTodoTask(data));
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
  showTodoTask,
  indexTodoTask,
  newTodoTask,
  editTodoTask,
};
