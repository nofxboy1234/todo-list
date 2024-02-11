import { Project } from '../models/project';
import { params } from '../parameters/projectParameters';
import { params as todoParams } from '../parameters/todoParameters';
import { createController } from './controller';
import { render } from '../renderer';

import { editTodoPath, projectsPath, redirectTo, todosPath } from '../router';
import {
  getProjectForTodosIndex,
  setProjectForTodosIndex,
} from '../views/todos';

const Controller = createController('projects', Project, params);

const ProjectsController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(params);

    if (this.resourceSingular.save()) {
      const createdProjectData = {
        data: {
          projectID: this.resourceSingular.data.id,
        },
      };
      todoParams.merge(createdProjectData);
      redirectTo('GET', editTodoPath, todoParams);
      redirectTo('GET', projectsPath);
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  destroy: function () {
    this.setResourceSingular();
    this.resourceSingular.destroy();
    redirectTo('GET', projectsPath);

    if (!Project.all().includes(getProjectForTodosIndex())) {
      setProjectForTodosIndex(Project.first());
      redirectTo('GET', todosPath);
    }
  },
};
Object.assign(ProjectsController, instanceProperties);

export { ProjectsController };
