import { createPathHelpers } from '../../pathHelpers/factory';

import { controller } from '../../controllers/todos';
import { params } from '../../parameters/todo';

import { createResourceNameInfo } from '../../resourceNameInfo/resourceNameInfo';

import { indexPath } from '../paths';
import { editPath } from '../paths/edit';
import { newPath } from '../paths/new';
import { showPath } from '../paths/show';

const helperTargets = {
  index: indexPath(controller, params),
  edit: editPath(controller, params),
  new_: newPath(controller, params),
  show: showPath(controller, params),
};

const nameInfo = createResourceNameInfo('todo', 'todos');
const routeHelpers = createPathHelpers(nameInfo, helperTargets);

const todosPath = routeHelpers.todosPath;
const newTodoPath = routeHelpers.newTodoPath;
const editTodoPath = routeHelpers.editTodoPath;
const todoPath = routeHelpers.todoPath;

export { todosPath, newTodoPath, editTodoPath, todoPath };
