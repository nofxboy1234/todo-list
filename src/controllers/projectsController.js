import { Project } from '../models/project';
import { params } from '../parameters/projectParameters';
import {
  createController,
} from './controller';

const permittedParams = ['name'];

const ProjectsController = createController(
  'project',
  'projects',
  Project,
  params,
  permittedParams
);

export { ProjectsController };
