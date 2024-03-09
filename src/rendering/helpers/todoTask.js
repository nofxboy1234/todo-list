import { createViewHelpers } from './factory';

import { indexView } from '../../views/tasks';
import { editView } from '../../views/tasks/edit';
import { newView } from '../../views/tasks/new';
import { showView } from '../../views/tasks/show';

import {
  contentContainer,
  projectContainer,
} from '../../views/layouts/application';

const views = {
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

const nameInfo = createResourceNameInfo('todoTask', 'todoTasks');
const viewHelpers = createViewHelpers(nameInfo, views);

const todoTasksView = viewHelpers.todoTasksView;
const newTodoTaskView = viewHelpers.newTodoTaskView;
const editTodoTaskView = viewHelpers.editTodoTaskView;
const todoTaskView = viewHelpers.todoTaskView;

export { todoTasksView, newTodoTaskView, editTodoTaskView, todoTaskView };
