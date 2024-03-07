import { createRouteHelpers } from './factory';

import { todoTasksController as controller } from '../controllers/todoTasksController';
import { taskParams as params } from '../parameters/taskParameters';

import { createResourceNameInfo } from '../../resourceNames/resourceName';

const nameInfo = createResourceNameInfo('todoTask', 'todoTasks');
const routeHelpers = createRouteHelpers(nameInfo, controller, params);

const todoTasksPath = routeHelpers.todoTasksPath;
const newTodoTaskPath = routeHelpers.newTodoTaskPath;
const editTodoTaskPath = routeHelpers.editTodoTaskPath;
const todoTaskPath = routeHelpers.todoTaskPath;

export { todoTasksPath, newTodoTaskPath, editTodoTaskPath, todoTaskPath };
