import { createViews } from './rendererFactory';

import { indexView } from '../views/projects';
import { editView } from '../views/projects/edit';
import { newView } from '../views/projects/new';
import { showView } from '../views/projects/show';

import { contentContainer, projectContainer } from '../views/layouts/application';

const resourceViews = {
  index: { view: indexView, container: projectContainer },
  edit: { view: editView, container: contentContainer, focusID: 'nameID' },
  new_: { view: newView, container: contentContainer, focusID: 'nameID' },
  show: { view: showView, container: contentContainer },
};

const viewHelpers = {};
createViews('todoProject', 'todoProjects', viewHelpers, resourceViews);
const todoProjectsView = viewHelpers.todoProjectsView;
const newTodoProjectView = viewHelpers.newTodoProjectView;
const editTodoProjectView = viewHelpers.editTodoProjectView;
const todoProjectView = viewHelpers.todoProjectView;

export {
  todoProjectsView,
  newTodoProjectView,
  editTodoProjectView,
  todoProjectView,
};
