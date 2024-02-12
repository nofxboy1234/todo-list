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

const Controller = createController('tasks', Task, params);

const TasksController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(params);

    if (this.resourceSingular.save()) {
      const createdTaskData = {
        data: {
          projectID: this.resourceSingular.data.id,
        },
      };
      todoParams.merge(createdTaskData);
      redirectTo('GET', editTodoPath, todoParams);
      redirectTo('GET', projectsPath);
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  update: function () {
    this.setResourceSingular();

    if (this.resourceSingular.update(params)) {
      redirectTo('GET', editTodoPath, todoParams);
      redirectTo('GET', projectsPath);
    } else {
      render(`${resourcePluralName}/edit`, this.resourceSingular);
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
Object.assign(TasksController, instanceProperties);

export { TasksController as ProjectsController };
