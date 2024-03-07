import { createRouteHelpers } from './factory';

import { controller } from '../../controllers/projects';
import { params } from '../../parameters/project';

import { createResourceNameInfo } from '../../resourceNameInfo/resourceNameInfo';

const nameInfo = createResourceNameInfo('project', 'projects');
const routeHelpers = createRouteHelpers(nameInfo, controller, params);

const projectsPath = routeHelpers.projectsPath;
const newProjectPath = routeHelpers.newProjectPath;
const editProjectPath = routeHelpers.editProjectPath;
const projectPath = routeHelpers.projectPath;

export { projectsPath, newProjectPath, editProjectPath, projectPath };
