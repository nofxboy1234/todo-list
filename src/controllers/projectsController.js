import { Project } from '../models/project';
import { params } from '../parameters/projectParameters';
import { params as todoParams } from '../parameters/todoParameters';
import { createController } from './controller';
import { render } from '../renderer';

import { editTodoPath, projectsPath, redirectTo } from '../router';

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
};
Object.assign(ProjectsController, instanceProperties);

export { ProjectsController };
