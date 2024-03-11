import { createPathHelpers } from './factory';

import { indexView } from '../../views/todos';
import { editView } from '../../views/todos/edit';
import { newView } from '../../views/todos/new';
import { showView } from '../../views/todos/show';

import {
  contentContainer,
  projectContainer,
} from '../../views/layouts/application';

import { createResourceNameInfo } from '../../resourceNameInfo/resourceNameInfo';

import { createRenderer } from '../renderers/renderer';

const helperTargets = {
  index: createRenderer({ view: indexView, container: projectContainer }),
  edit: createRenderer({
    view: editView,
    container: contentContainer,
    focusID: 'titleID',
  }),
  new_: createRenderer({
    view: newView,
    container: contentContainer,
    focusID: 'titleID',
  }),
  show: createRenderer({ view: showView, container: contentContainer }),
};

const nameInfo = createResourceNameInfo('todo', 'todos');
const pathHelpers = createPathHelpers(nameInfo, helperTargets);

const todosView = pathHelpers.todosView;
const newTodoView = pathHelpers.newTodoView;
const editTodoView = pathHelpers.editTodoView;
const todoView = pathHelpers.todoView;

export { todosView, newTodoView, editTodoView, todoView };
