import { createPathHelpers } from '../../pathHelpers/factory';

import { indexView } from '../../views/todoTasks';
import { editView } from '../../views/todoTasks/edit';
import { newView } from '../../views/todoTasks/new';
import { showView } from '../../views/todoTasks/show';

import {
  contentContainer,
  projectContainer,
} from '../../views/layouts/application';

import { createResourceNameInfo } from '../../resourceNameInfo/resourceNameInfo';

import { createRenderer } from '../renderers/renderer';

const helperTargets = {
  index: createRenderer({ view: indexView, container: projectContainer }),
  edit: createRenderer({
    view: editView,
    container: contentContainer,
    focusID: 'descriptionID',
  }),
  new_: createRenderer({
    view: newView,
    container: contentContainer,
    focusID: 'descriptionID',
  }),
  show: createRenderer({ view: showView, container: contentContainer }),
};

const nameInfo = createResourceNameInfo('todoTask', 'todoTasks');
const pathHelpers = createPathHelpers(nameInfo, helperTargets);

const todoTasksView = pathHelpers.todoTasksView;
const newTodoTaskView = pathHelpers.newTodoTaskView;
const editTodoTaskView = pathHelpers.editTodoTaskView;
const todoTaskView = pathHelpers.todoTaskView;

export { todoTasksView, newTodoTaskView, editTodoTaskView, todoTaskView };
