import { createRouteHelpers } from './factory';

import { controller } from '../../controllers/todos';
import { params } from '../../parameters/todo';

import { createResourceNameInfo } from '../../resourceNames/resourceName';


const nameInfo = createResourceNameInfo('todo', 'todos');
const routeHelpers = createRouteHelpers(nameInfo, controller, params);

const todosPath = routeHelpers.todosPath;
const newTodoPath = routeHelpers.newTodoPath;
const editTodoPath = routeHelpers.editTodoPath;
const todoPath = routeHelpers.todoPath;

export { todosPath, newTodoPath, editTodoPath, todoPath };
