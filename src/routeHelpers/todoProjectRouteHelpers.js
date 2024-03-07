import { createRoutes } from './routeFactory';
import { todoProjectsController as controller } from '../controllers/todoProjectsController';
import { projectParams as params } from '../parameters/projectParameters';

const routeHelpers = {};
createRoutes('todoProject', 'todoProjects', routeHelpers, controller, params);
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
