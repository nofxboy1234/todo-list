import { createViews } from './viewFactory';

import { indexView } from '../tasks';
import { editView } from '../tasks/edit';
import { newView } from '../tasks/new';
import { showView } from '../tasks/show';

import { contentContainer, projectContainer } from '../layouts/application';

const resourceViews = {
  index: { view: indexView, container: projectContainer },
  edit: {
    view: editView,
    container: contentContainer,
    focusID: 'descriptionID',
  },
  new_: {
    view: newView,
    container: contentContainer,
    focusID: 'descriptionID',
  },
  show: { view: showView, container: contentContainer },
};

const views = {};
createViews('todoTask', 'todoTasks', views, resourceViews);
const todoTasksView = views.todoTasksView;
const newTodoTaskView = views.newTodoTaskView;
const editTodoTaskView = views.editTodoTaskView;
const todoTaskView = views.todoTaskView;

export { todoTasksView, newTodoTaskView, editTodoTaskView, todoTaskView };
