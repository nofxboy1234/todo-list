import { createViews } from './viewFactory';

import { indexView } from '../projects';
import { editView } from '../projects/edit';
import { newView } from '../projects/new';
import { showView } from '../projects/show';

import { contentContainer, projectContainer } from '../layouts/application';

const resourceViews = {
  index: { view: indexView, container: projectContainer },
  edit: { view: editView, container: contentContainer, focusID: 'nameID' },
  new_: { view: newView, container: contentContainer, focusID: 'nameID' },
  show: { view: showView, container: contentContainer },
};

const views = {};
createViews('todoProject', 'todoProjects', views, resourceViews);
const todoProjectsView = views.todoProjectsView;
const newTodoProjectView = views.newTodoProjectView;
const editTodoProjectView = views.editTodoProjectView;
const todoProjectView = views.todoProjectView;

export {
  todoProjectsView,
  newTodoProjectView,
  editTodoProjectView,
  todoProjectView,
};
