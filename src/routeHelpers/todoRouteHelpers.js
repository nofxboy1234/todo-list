import { createRoutes } from './routeFactory';
import { todosController as controller } from '../controllers/todosController';
import { todoParams as params } from '../parameters/todoParameters';

const routeHelpers = {};
createRoutes('todo', 'todos', routeHelpers, controller, params);
const todosPath = routeHelpers.todosPath;
const newTodoPath = routeHelpers.newTodoPath;
const editTodoPath = routeHelpers.editTodoPath;
const todoPath = routeHelpers.todoPath;

export { todosPath, newTodoPath, editTodoPath, todoPath };
