import { Project } from '../models/project';
import { params } from '../parameters/projectParameters';
import { createController } from './controller';
import { render } from '../renderer';

import { projectsPath, redirectTo } from '../router';
import { params as todoParams } from '../parameters/todoParameters';

const permittedParams = ['name'];

const Controller = createController(
  'project',
  'projects',
  Project,
  params,
  permittedParams
);

const ProjectsController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(
      this.resourceSingularParams()
    );

    if (this.resourceSingular.save()) {
      Object.assign(todoParams.todo, { newProjectID: Project.last().id });
      // todos/new and todos/edit use the same rendering
      render('todos/new', todoParams);
      redirectTo('GET', projectsPath);
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
};
Object.assign(ProjectsController, instanceProperties);

export { ProjectsController };
