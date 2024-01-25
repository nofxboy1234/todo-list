import { Project } from '../models/project';
import { params } from './todoParameters';
import {
  projectsPath,
  newProjectPath,
  editProjectPath,
  projectPath,
} from '../router';
import {
  createController,
  resourceSingular as project,
  resourcePlural as projects,
} from './applicationController';

const pathHelpers = {
  resourcePluralPath: projectsPath,
  newResourceSingularPath: newProjectPath,
  editResourceSingularPath: editProjectPath,
  resourceSingularPath: projectPath,
};
const permittedParams = ['name'];

const ProjectsController = createController(
  'project',
  'projects',
  Project,
  params,
  pathHelpers,
  permittedParams
);

export { ProjectsController, project, projects };
