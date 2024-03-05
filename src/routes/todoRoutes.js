import { createRoutes } from './routeFactory';
import { controller } from '../controllers/todosController';
import { params } from '../parameters/todoParameters';

const routes = {};
createRoutes('todo', 'todos', routes, controller, params);
const todosPath = routes.todosPath;
const newTodoPath = routes.newTodoPath;
const editTodoPath = routes.editTodoPath;
const todoPath = routes.todoPath;

export { todosPath, newTodoPath, editTodoPath, todoPath };
