import { Project } from '../models/project';
import { params } from '../parameters/projectParameters';
import { createController } from './controller';
import { render } from '../renderer';
import { params as todoParams } from '../parameters/todoParameters';

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
  project: Controller.resourceSingular,
  projectParams: Controller.resourceSingularParams,
  // new: Controller.new,
  ...Controller.new,
  create: function () {
    this.project = Project.new(this.projectParams());

    if (this.project.save()) {
      // todos/new and todos/edit render the same form
      render('todos/new', todoParams);
    } else {
      render('projects/new', this.project);
    }
  },
  ...Controller.index,
  ...Controller.show,
  ...Controller.edit,
  ...Controller.update,
  ...Controller.destroy,
};

export { ProjectsController };
