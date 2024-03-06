import { createViews } from './viewFactory';

import { indexView } from '../todos';
import { editView } from '../todos/edit';
import { newView } from '../todos/new';
import { showView } from '../todos/show';

import { contentContainer, projectContainer } from '../layouts/application';

const resourceViews = {
  index: { view: indexView, container: projectContainer },
  edit: { view: editView, container: contentContainer, focusID: 'titleID' },
  new_: { view: newView, container: contentContainer, focusID: 'titleID' },
  show: { view: showView, container: contentContainer },
};

const views = {};
createViews('todo', 'todos', views, resourceViews);
const todosView = views.todosView;
const newTodoView = views.newTodoView;
const editTodoView = views.editTodoView;
const todoView = views.todoView;

export { todosView, newTodoView, editTodoView, todoView };
