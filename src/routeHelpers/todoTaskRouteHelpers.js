import { createRoutes } from './routeFactory';
import { todoTasksController as controller } from '../controllers/todoTasksController';
import { taskParams as params } from '../parameters/taskParameters';

const routeHelpers = {};
createRoutes('todoTask', 'todoTasks', routeHelpers, controller, params);
const todoTasksPath = routeHelpers.todoTasksPath;
const newTodoTaskPath = routeHelpers.newTodoTaskPath;
const editTodoTaskPath = routeHelpers.editTodoTaskPath;
const todoTaskPath = routeHelpers.todoTaskPath;

export { todoTasksPath, newTodoTaskPath, editTodoTaskPath, todoTaskPath };
