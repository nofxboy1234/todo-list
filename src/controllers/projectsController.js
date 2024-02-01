import { Project } from '../models/project';
import { params } from '../parameters/projectParameters';
import { createController } from './controller';
import { render } from '../renderer';

import { editTodoPath, projectsPath, redirectTo } from '../router';

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
      redirectTo('GET', editTodoPath, this.resourceSingular)
      redirectTo('GET', projectsPath);
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
};
Object.assign(ProjectsController, instanceProperties);

export { ProjectsController };
