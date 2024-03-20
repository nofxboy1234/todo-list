import { createRendererHelpers } from '../../pathHelpers/factory';

import { controller } from '../../controllers/todoTasks';
import { params } from '../../parameters/task';

import { createResourceNameInfo } from '../../resourceNameInfo/resourceNameInfo';

import { indexPath } from '../paths/index';
import { editPath } from '../paths/edit';
import { newPath } from '../paths/new';
import { showPath } from '../paths/show';

const helperTargets = {
  index: indexPath(controller, params),
  edit: editPath(controller, params),
  new_: newPath(controller, params),
  show: showPath(controller, params),
};

const nameInfo = createResourceNameInfo('todoTask', 'todoTasks');
const routeHelpers = createRendererHelpers(nameInfo, helperTargets);

const todoTasksPath = routeHelpers.todoTasksPath;
const newTodoTaskPath = routeHelpers.newTodoTaskPath;
const editTodoTaskPath = routeHelpers.editTodoTaskPath;
const todoTaskPath = routeHelpers.todoTaskPath;

export { todoTasksPath, newTodoTaskPath, editTodoTaskPath, todoTaskPath };
