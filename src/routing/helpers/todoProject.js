import { createRouteHelpers } from './factory';

import { todoProjectsController as controller } from '../controllers/todoProjectsController';
import { projectParams as params } from '../parameters/projectParameters';

import { createResourceNameInfo } from '../../resourceNames/resourceName';

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
