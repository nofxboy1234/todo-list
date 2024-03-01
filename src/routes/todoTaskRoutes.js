import { createRoutes } from "./routeFactory";

const routes = {};
createRoutes('todoTask', 'todoTasks', routes);
const todoTasksPath = routes.todoTasksPath;
const newTodoTaskPath = routes.newTodoTaskPath;
const editTodoTaskPath = routes.editTodoTaskPath;
const todoTaskPath = routes.todoTaskPath;

export { todoTasksPath, newTodoTaskPath, editTodoTaskPath, todoTaskPath };