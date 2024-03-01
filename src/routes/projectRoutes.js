import { createRoutes } from './routeFactory';

const routes = {};
createRoutes('project', 'projects', routes);
const projectsPath = routes.projectsPath;
const newProjectPath = routes.newProjectPath;
const editProjectPath = routes.editProjectPath;
const projectPath = routes.projectPath;

export { projectsPath, newProjectPath, editProjectPath, projectPath };
