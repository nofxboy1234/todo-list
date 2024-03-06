import { createRoutes } from './routeFactory';
import { projectsController as controller } from '../controllers/projectsController';
import { projectParams as params } from '../parameters/projectParameters';

const routes = {};
createRoutes('project', 'projects', routes, controller, params);
const projectsPath = routes.projectsPath;
const newProjectPath = routes.newProjectPath;
const editProjectPath = routes.editProjectPath;
const projectPath = routes.projectPath;

export { projectsPath, newProjectPath, editProjectPath, projectPath };
