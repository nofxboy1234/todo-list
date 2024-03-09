import { createViewHelpers } from './factory';

import { indexView } from '../../views/projects';
import { editView } from '../../views/projects/edit';
import { newView } from '../../views/projects/new';
import { showView } from '../../views/projects/show';

import {
  contentContainer,
  projectContainer,
} from '../../views/layouts/application';

const views = {
  index: { view: indexView, container: projectContainer },
  edit: { view: editView, container: contentContainer, focusID: 'nameID' },
  new_: { view: newView, container: contentContainer, focusID: 'nameID' },
  show: { view: showView, container: contentContainer },
};

const nameInfo = createResourceNameInfo('project', 'projects');
const viewHelpers = createViewHelpers(nameInfo, views);

const projectsView = viewHelpers.projectsView;
const newProjectView = viewHelpers.newProjectView;
const editProjectView = viewHelpers.editProjectView;
const projectView = viewHelpers.projectView;

export { projectsView, newProjectView, editProjectView, projectView };
