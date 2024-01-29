import { Project } from '../models/project';
import { params } from '../parameters/projectParameters';
import { createController } from './controller';

const permittedParams = ['name'];

const ProjectsController = createController(
  'project',
  'projects',
  Project,
  params,
  permittedParams
);

const Controller = createController(
  'project',
  'projects',
  Project,
  params,
  permittedParams
);

const OtherController = {
  // new: Controller.new,
  ...Controller.new,
  create: function () {
    // Controller.resourceSingular;
  },
  ...Controller.index,
  ...Controller.show,
  ...Controller.edit,
  ...Controller.update,
  ...Controller.destroy,
};

export { ProjectsController };
