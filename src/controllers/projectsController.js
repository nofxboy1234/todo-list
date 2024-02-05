import { Project } from '../models/project';
import { params } from '../parameters/projectParameters';
import { params as todoParams } from '../parameters/todoParameters';
import { createController } from './controller';
import { render } from '../renderer';

import { newTodoPath, editTodoPath, projectsPath, redirectTo } from '../router';

const Controller = createController('projects', Project, params);

const ProjectsController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(params);

    if (this.resourceSingular.save()) {
      redirectTo('GET', editTodoPath, todoParams);
      // if (todoParams.data.id) {
      // } else {
      //   redirectTo('GET', newTodoPath, todoParams);
      // }
      redirectTo('GET', projectsPath);
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
};
Object.assign(ProjectsController, instanceProperties);

export { ProjectsController };
