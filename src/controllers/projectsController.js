import { Project } from '../models/project';
import { params } from '../parameters/projectParameters';
import { createController } from './controller';
import { render } from '../renderer';
import { params as todoParams } from '../parameters/todoParameters';
import { projectsPath, redirectTo } from '../router';

const permittedParams = ['name'];

// const ProjectsController = createController(
//   'project',
//   'projects',
//   Project,
//   params,
//   permittedParams
// );

const Controller = createController(
  'project',
  'projects',
  Project,
  params,
  permittedParams
);

const NewProjectsController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(
      this.resourceSingularParams()
    );

    if (this.resourceSingular.save()) {
      // todos/new and todos/edit use the same rendering
      render('todos/new', todoParams);
      redirectTo('GET', projectsPath);
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
};
Object.assign(NewProjectsController, instanceProperties);

export { NewProjectsController as ProjectsController };
