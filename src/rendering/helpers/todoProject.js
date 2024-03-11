import { createPathHelpers } from '../../pathHelpers/factory';

import { indexView } from '../../views/todoProjects';
import { editView } from '../../views/todoProjects/edit';
import { newView } from '../../views/todoProjects/new';
import { showView } from '../../views/todoProjects/show';

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
    focusID: 'nameID',
  }),
  new_: createRenderer({
    view: newView,
    container: contentContainer,
    focusID: 'nameID',
  }),
  show: createRenderer({ view: showView, container: contentContainer }),
};

const nameInfo = createResourceNameInfo('todoProject', 'todoProjects');
const pathHelpers = createPathHelpers(nameInfo, helperTargets);

const todoProjectsView = pathHelpers.todoProjectsView;
const newTodoProjectView = pathHelpers.newTodoProjectView;
const editTodoProjectView = pathHelpers.editTodoProjectView;
const todoProjectView = pathHelpers.todoProjectView;

export {
  todoProjectsView,
  newTodoProjectView,
  editTodoProjectView,
  todoProjectView,
};
