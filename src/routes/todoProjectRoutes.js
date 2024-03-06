import { createRoutes } from './routeFactory';
import { todoProjectsController as controller } from '../controllers/todoProjectsController';
import { projectParams as params } from '../parameters/projectParameters';

const routes = {};
createRoutes('todoProject', 'todoProjects', routes, controller, params);
const todoProjectsPath = routes.todoProjectsPath;
const newTodoProjectPath = routes.newTodoProjectPath;
const editTodoProjectPath = routes.editTodoProjectPath;
const todoProjectPath = routes.todoProjectPath;

export {
  todoProjectsPath,
  newTodoProjectPath,
  editTodoProjectPath,
  todoProjectPath,
};
