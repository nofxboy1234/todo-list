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

let viewHistory = [];

const saveViewToHistory = (view, data) => {
  const historyEntry = { view, data };
  viewHistory.push(historyEntry);
};

// const resetViewHistory = (view, data) => {
//   const historyEntry = { view, data };
//   viewHistory = [historyEntry];
// };

const previousView = () => {
  viewHistory.pop();
  return viewHistory.at(-1);
};

const render = (path, data) => {
  let view;
  switch (path) {
    case 'todos/new':
      clearContent();
      view = newTodo;
      contentContainer.appendChild(view(data));
      document.getElementById('titleID').focus();
      saveViewToHistory(view, data);
      break;
    case 'todos/index':
      clearContent();
      view = indexTodo;
      contentContainer.appendChild(view(data));
      saveViewToHistory(view, data);
      break;
    case 'todos/show':
      clearContent();
      view = showTodo;
      contentContainer.appendChild(view(data));
      saveViewToHistory(view, data);
      break;
    case 'todos/edit':
      clearContent();
      view = editTodo;
      contentContainer.appendChild(view(data));
      document.getElementById('titleID').focus();
      saveViewToHistory(view, data);
      break;

    case 'projects/new':
      clearContent();
      view = newProject;
      contentContainer.appendChild(view(data));
      document.getElementById('nameID').focus();
      saveViewToHistory(view, data);
      break;
    case 'projects/index':
      clearProjectIndex();
      view = indexProject;
      projectIndex.appendChild(view(data));
      // resetViewHistory(view, data);
      break;
    case 'projects/show':
      clearContent();
      view = showProject;
      contentContainer.appendChild(view(data));
      saveViewToHistory(view, data);
      break;
    case 'projects/edit':
      clearContent();
      view = editProject;
      contentContainer.appendChild(view(data));
      document.getElementById('nameID').focus();
      saveViewToHistory(view, data);
      break;

    default:
      break;
  }
};

const renderPreviousView = () => {
  clearContent();
  const historyEntry = previousView();
  const view = historyEntry.view;
  const cachedData = historyEntry.data;
  contentContainer.appendChild(view(cachedData));
};

export { render, renderPreviousView, saveViewToHistory };
