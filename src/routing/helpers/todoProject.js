import { createRouteHelpers } from './factory';

import { controller } from '../../controllers/todoProjects';
import { params } from '../../parameters/project';

import { createResourceNameInfo } from '../../resourceNameInfo/resourceNameInfo';

const nameInfo = createResourceNameInfo('todoProject', 'todoProjects');
const routeHelpers = createRouteHelpers(nameInfo, controller, params);

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
