import { createHelpers } from './createHelpers';

import { createIndexView } from '../views/projects/index';
import { createEditView } from '../views/projects/edit';
import { createNewView } from '../views/projects/new';
import { createShowView } from '../views/projects/show';

import {
  contentContainer,
  projectContainer,
} from '../../views/layouts/application';

import { createResourceNameInfo } from '../../resourceNameInfo/resourceNameInfo';

const indexView = createIndexView(projectContainer);
const editView = createEditView(contentContainer, 'nameID');
const newView = createNewView(contentContainer, 'nameID');
const showView = createShowView(contentContainer);

const helperTargets = {
  index: indexView,
  edit: editView,
  new_: newView,
  show: showView,
};

const nameInfo = createResourceNameInfo('project', 'projects');
const pathHelpers = createHelpers(nameInfo, helperTargets);

const projectsView = pathHelpers.projectsView;
const newProjectView = pathHelpers.newProjectView;
const editProjectView = pathHelpers.editProjectView;
const projectView = pathHelpers.projectView;

export { projectsView, newProjectView, editProjectView, projectView };
