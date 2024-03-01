import { createRoutes } from './routeFactory';

const routes = {};
createRoutes('todo', 'todos', routes);
const todosPath = routes.todosPath;
const newTodoPath = routes.newTodoPath;
const editTodoPath = routes.editTodoPath;
const todoPath = routes.todoPath;

export { todosPath, newTodoPath, editTodoPath, todoPath };
