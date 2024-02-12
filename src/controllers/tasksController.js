import { Task } from '../models/task';
import { params } from '../parameters/taskParameters';
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
      // const createdTaskData = {
      //   data: {
      //     projectID: this.resourceSingular.data.id,
      //   },
      // };
      // todoParams.merge(createdTaskData);
      redirectTo('GET', editTodoPath, todoParams);
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  update: function () {
    this.setResourceSingular();

    if (this.resourceSingular.update(params)) {
      redirectTo('GET', editTodoPath, todoParams);
    } else {
      render(`${resourcePluralName}/edit`, this.resourceSingular);
    }
  },
  destroy: function () {
    this.setResourceSingular();
    this.resourceSingular.destroy();

    redirectTo('GET', editTodoPath, todoParams);
  },
};
Object.assign(TasksController, instanceProperties);

export { TasksController };
