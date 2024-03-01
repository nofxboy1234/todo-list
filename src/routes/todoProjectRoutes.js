import { createRoutes } from './routeFactory';

const routes = {};
createRoutes('todoProject', 'todoProjects', routes);
const todoProjectsPath = routes.todoProjectsPath;
const newTodoProjectPath = routes.newTodoProjectPath;
const editTodoProjectPath = routes.editTodoProjectPath;
const todoProjectPath = routes.todoProjectPath;

export { todoProjectsPath, newTodoProjectPath, editTodoProjectPath, todoProjectPath };
