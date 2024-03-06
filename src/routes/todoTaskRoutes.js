import { createRoutes } from './routeFactory';
import { todoTasksController as controller } from '../controllers/todoTasksController';
import { taskParams as params } from '../parameters/taskParameters';

const routes = {};
createRoutes('todoTask', 'todoTasks', routes, controller, params);
const todoTasksPath = routes.todoTasksPath;
const newTodoTaskPath = routes.newTodoTaskPath;
const editTodoTaskPath = routes.editTodoTaskPath;
const todoTaskPath = routes.todoTaskPath;

export { todoTasksPath, newTodoTaskPath, editTodoTaskPath, todoTaskPath };
