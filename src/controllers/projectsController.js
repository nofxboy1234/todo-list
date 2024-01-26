import { Project } from '../models/project';
import { params } from '../parameters/projectParameters';
import {
  createController,
  resourceSingular as project,
  resourcePlural as projects,
} from './applicationController';

const permittedParams = ['name'];

const ProjectsController = createController(
  'project',
  'projects',
  Project,
  params,
  permittedParams
);

export {
  ProjectsController,
  project,
  projects,
};
