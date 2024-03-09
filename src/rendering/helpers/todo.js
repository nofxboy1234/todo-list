import { createViewHelpers } from './factory';

import { indexView } from '../../views/todos';
import { editView } from '../../views/todos/edit';
import { newView } from '../../views/todos/new';
import { showView } from '../../views/todos/show';

import {
  contentContainer,
  projectContainer,
} from '../../views/layouts/application';

const views = {
  index: { view: indexView, container: projectContainer },
  edit: { view: editView, container: contentContainer, focusID: 'titleID' },
  new_: { view: newView, container: contentContainer, focusID: 'titleID' },
  show: { view: showView, container: contentContainer },
};

const nameInfo = createResourceNameInfo('todo', 'todos');
const viewHelpers = createViewHelpers(nameInfo, views);

const todosView = viewHelpers.todosView;
const newTodoView = viewHelpers.newTodoView;
const editTodoView = viewHelpers.editTodoView;
const todoView = viewHelpers.todoView;

export { todosView, newTodoView, editTodoView, todoView };
