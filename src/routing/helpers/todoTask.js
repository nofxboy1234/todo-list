import { createRouteHelpers } from './factory';

import { controller } from '../../controllers/todoTasks';
import { params } from '../../parameters/task';

import { createResourceNameInfo } from '../../resourceNameInfo/resourceNameInfo';

const nameInfo = createResourceNameInfo('todoTask', 'todoTasks');
const routeHelpers = createRouteHelpers(nameInfo, controller, params);

const todoTasksPath = routeHelpers.todoTasksPath;
const newTodoTaskPath = routeHelpers.newTodoTaskPath;
const editTodoTaskPath = routeHelpers.editTodoTaskPath;
const todoTaskPath = routeHelpers.todoTaskPath;

export { todoTasksPath, newTodoTaskPath, editTodoTaskPath, todoTaskPath };
