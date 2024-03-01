import { Project } from '../models/project';
import { params } from '../parameters/projectParameters';
import { params as todoParams } from '../parameters/todoParameters';
import { createController } from './controller';
import { popCachedView, render } from '../renderer';

import { Todo } from '../models/todo';
import { projectsPath, redirectTo, todosPath } from '../routers/router';
import {
  getProjectForTodosIndex,
  setProjectForTodosIndex,
} from '../views/todos';

const Controller = createController('projects', Project, params);

const ProjectsController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    this.resourceSingular.data.validated = false;

    if (this.resourceSingular.save()) {
      params.reset();
      popCachedView();
      redirectTo('GET', projectsPath);
      redirectTo('GET', todosPath);
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  update: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    this.resourceSingular.data.validated = false;

    const validationInstance = Project.new(this.params);
    if (this.resourceSingular.update(validationInstance)) {
      params.reset();
      popCachedView();
      redirectTo('GET', projectsPath);
      redirectTo('GET', todosPath);
    } else {
      render(`${this.resourcePluralName}/edit`, validationInstance);
    }
  },
  destroy: function () {
    this.setResourceSingular();
    this.resourceSingular.destroy();

    redirectTo('GET', projectsPath);
  },
};
Object.assign(ProjectsController, instanceProperties);

export { ProjectsController };
