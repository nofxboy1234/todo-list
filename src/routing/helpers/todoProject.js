import { createPathHelpers } from '../../pathHelpers/factory';

import { controller } from '../../controllers/todoProjects';
import { params } from '../../parameters/project';

import { createResourceNameInfo } from '../../resourceNameInfo/resourceNameInfo';

import { indexPath } from '../paths';
import { editPath } from '../paths/edit';
import { newPath } from '../paths/new';
import { showPath } from '../paths/show';

const helperTargets = {
  index: indexPath(controller, params),
  edit: editPath(controller, params),
  new_: newPath(controller, params),
  show: showPath(controller, params),
};

const nameInfo = createResourceNameInfo('todoProject', 'todoProjects');
const routeHelpers = createPathHelpers(nameInfo, helperTargets);

const todoProjectsPath = routeHelpers.todoProjectsPath;
const newTodoProjectPath = routeHelpers.newTodoProjectPath;
const editTodoProjectPath = routeHelpers.editTodoProjectPath;
const todoProjectPath = routeHelpers.todoProjectPath;

export {
  todoProjectsPath,
  newTodoProjectPath,
  editTodoProjectPath,
  todoProjectPath,
};
