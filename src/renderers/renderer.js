import { clearContainer } from '../views/helpers';

import {
  render as todosRender,
  showTodo,
  indexTodo,
  newTodo,
  editTodo,
} from './todosRenderer';
import {
  render as projectsRender,
  showProject,
  indexProject,
  newProject,
  editProject,
} from './projectsRenderer';
import {
  render as todoTasksRender,
  showTodoTask,
  indexTodoTask,
  newTodoTask,
  editTodoTask,
} from './todoTasksRenderer';
import {
  render as todoProjectsRender,
  showTodoProject,
  indexTodoProject,
  newTodoProject,
  editTodoProject,
} from './todoProjectsRenderer';

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

export {
  cacheView,
  popCachedView,
  renderCachedView,
  renderView,
  todosRender,
  projectsRender,
  todoTasksRender,
  todoProjectsRender,
  showTodo,
  indexTodo,
  newTodo,
  editTodo,
  showProject,
  indexProject,
  newProject,
  editProject,
  showTodoTask,
  indexTodoTask,
  newTodoTask,
  editTodoTask,
  showTodoProject,
  indexTodoProject,
  newTodoProject,
  editTodoProject,
};
