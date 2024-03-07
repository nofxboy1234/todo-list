import { createRoutes } from './routeFactory';
import { projectsController as controller } from '../controllers/projectsController';
import { projectParams as params } from '../parameters/projectParameters';

const routeHelpers = {};
createRoutes('project', 'projects', routeHelpers, controller, params);
const projectsPath = routeHelpers.projectsPath;
const newProjectPath = routeHelpers.newProjectPath;
const editProjectPath = routeHelpers.editProjectPath;
const projectPath = routeHelpers.projectPath;

export { projectsPath, newProjectPath, editProjectPath, projectPath };
