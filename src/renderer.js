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

const cache = {};
const resourcePluralViews = [indexTodo, indexProject];

const cacheView = (view, dataToCache, resourceSingularName, dataSource) => {
  let modelClass;
  switch (resourceSingularName) {
    case 'todo':
      modelClass = Todo;
      break;
    case 'project':
      modelClass = Project;
      break;

    default:
      break;
  }

  const dataToCopy = { cachedData: dataToCache, modelClass, dataSource };
  const viewData = Object.assign({}, dataToCopy);
  cache[view] = viewData;
};

const updateCachedView = (view, dataToCopy) => {
  let cachedData = cache[view].cachedData;
  // let {cachedData} = cache[view];
  if (isIndexView(view)) {
    cachedData = [...dataToCopy];
  } else {
    Object.assign(cachedData, dataToCopy);
  }
};

const cachedViewDataSource = (view) => {
  const {dataSource} = cache[view];
  return dataSource;
};

const isIndexView = (view) => {
  return resourcePluralViews.includes(view);
};

const removeViewFromCache = (view) => {
  delete cache[view];
};

const renderCachedView = (view) => {
  const { cachedData, modelClass } = cache[view];

  let dataForView;
  if (isIndexView(view)) {
    dataForView = cachedData;
  } else {
    const persisted = cachedData.data.id ? true : false;
    if (persisted) {
      dataForView = modelClass.find(cachedData.data.id);
    } else {
      dataForView = modelClass.new(cachedData);
    }
    removeViewFromCache(view);
  }

  renderView(view, dataForView);
};

const renderView = (view, data) => {
  clearContent();
  const renderedView = view(data);
  contentContainer.appendChild(renderedView);
};

const render = (path, data) => {
  switch (path) {
    case 'todos/new':
      renderView(newTodo, data);
      document.getElementById('titleID').focus();
      break;
    case 'todos/index':
      renderView(indexTodo, data);
      break;
    case 'todos/show':
      renderView(showTodo, data);
      break;
    case 'todos/edit':
      renderView(editTodo, data);
      document.getElementById('titleID').focus();
      break;

    case 'projects/new':
      renderView(newProject, data);
      document.getElementById('nameID').focus();
      break;
    case 'projects/index':
      clearProjectIndex();
      const renderedView = indexProject(data);
      projectIndex.appendChild(renderedView);
      break;
    case 'projects/show':
      renderView(showProject, data);
      break;
    case 'projects/edit':
      renderView(editProject, data);
      document.getElementById('nameID').focus();
      break;

    default:
      break;
  }
};

export {
  render,
  cacheView,
  renderCachedView,
  showTodo,
  indexTodo,
  newTodo,
  editTodo,
  showProject,
  indexProject,
  newProject,
  editProject,
  updateCachedView,
  cachedViewDataSource
};
