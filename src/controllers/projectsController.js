import { Project } from '../models/project';
import { params } from '../parameters/projectParameters';
import { params as todoParams } from '../parameters/todoParameters';
import { createController } from './controller';
import { render } from '../renderer';

import { editTodoPath, newTodoPath, projectsPath, redirectTo } from '../router';

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
      const temp = todoParams;
      redirectTo('GET', editTodoPath, todoParams);
      redirectTo('GET', projectsPath);
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
};
Object.assign(ProjectsController, instanceProperties);

export { ProjectsController };
