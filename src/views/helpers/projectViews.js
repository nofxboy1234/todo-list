import { createViews } from './viewFactory';

import { indexView } from '../projects';
import { editView } from '../projects/edit';
import { newView } from '../projects/new';
import { showView } from '../projects/show';

import { contentContainer, projectContainer } from '../layouts/application';

const resourceViews = {
  index: { view: indexView, container: projectContainer },
  edit: { view: editView, container: contentContainer, focusID: 'nameID' },
  new_: { view: newView, container: contentContainer, focusID: 'nameID' },
  show: { view: showView, container: contentContainer },
};

const views = {};
createViews('project', 'projects', views, resourceViews);
const projectsView = views.projectsView;
const newProjectView = views.newProjectView;
const editProjectView = views.editProjectView;
const projectView = views.projectView;

export { projectsView, newProjectView, editProjectView, projectView };
