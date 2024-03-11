import { createPathHelpers } from '../../pathHelpers/factory';

import { controller } from '../../controllers/projects';
import { params } from '../../parameters/project';

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

const nameInfo = createResourceNameInfo('project', 'projects');
const pathHelpers = createPathHelpers(nameInfo, helperTargets);

const projectsPath = pathHelpers.projectsPath;
const newProjectPath = pathHelpers.newProjectPath;
const editProjectPath = pathHelpers.editProjectPath;
const projectPath = pathHelpers.projectPath;

export { projectsPath, newProjectPath, editProjectPath, projectPath };
