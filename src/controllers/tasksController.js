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
import { Todo } from '../models/todo';

const Controller = createController('tasks', Task, params);

const TasksController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(params);

    if (this.resourceSingular.save()) {
      todoParams.data.tasks.push(this.resourceSingular);
      const todoPersisted = todoParams.data.id ? true : false;
      if (todoPersisted) {
        const todo = Todo.new(todoParams);
        todo.updateDependent();
      }

      redirectTo('GET', editTodoPath, Todo.new(todoParams));
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  update: function () {
    this.setResourceSingular();

    if (this.resourceSingular.update(params)) {
      redirectTo('GET', editTodoPath, Todo.new(todoParams));
    } else {
      render(`${resourcePluralName}/edit`, this.resourceSingular);
    }
  },
  destroy: function () {
    this.setResourceSingular();
    this.resourceSingular.destroy();

    redirectTo('GET', editTodoPath, Todo.new(todoParams));
  },
};
Object.assign(TasksController, instanceProperties);

export { TasksController };
