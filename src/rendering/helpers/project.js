import { createPathHelpers } from '../../pathHelpers/factory';

import { indexView } from '../../views/projects';
import { editView } from '../../views/projects/edit';
import { newView } from '../../views/projects/new';
import { showView } from '../../views/projects/show';

import {
  contentContainer,
  projectContainer,
} from '../../views/layouts/application';

import { createResourceNameInfo } from '../../resourceNameInfo/resourceNameInfo';

import { createRenderer } from '../renderers/renderer';

const helperTargets = {
  index: createRenderer({
    view: indexView,
    container: projectContainer,
  }),
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

const nameInfo = createResourceNameInfo('project', 'projects');
const pathHelpers = createPathHelpers(nameInfo, helperTargets);

const projectsView = pathHelpers.projectsView;
const newProjectView = pathHelpers.newProjectView;
const editProjectView = pathHelpers.editProjectView;
const projectView = pathHelpers.projectView;

export { projectsView, newProjectView, editProjectView, projectView };
