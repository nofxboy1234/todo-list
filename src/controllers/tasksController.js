import { Task } from '../models/task';
import { params } from '../parameters/taskParameters';
import { params as todoParams } from '../parameters/todoParameters';
import { createController } from './controller';
import { popCachedView, render } from '../renderer';

import { editTodoPath, projectsPath, redirectTo, todosPath } from '../router';
import {
  getProjectForTodosIndex,
  setProjectForTodosIndex,
} from '../views/todos';
import { Todo } from '../models/todo';

const Controller = createController('tasks', Task, params);

const addTaskToTodoParams = (task) => {
  todoParams.data.tasks.push(task);
};

const isPersisted = (params) => {
  return params.data.id ? true : false;
};

const updateDependentOfTodo = () => {
  const todo = Todo.new(todoParams);
  todo.updateDependent();
};

const TasksController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(this.params);

    this.resourceSingular.validate();

    // if (this.resourceSingular.save()) {
    if (this.resourceSingular.errors.length === 0) {
      addTaskToTodoParams(this.resourceSingular);
      popCachedView();
      redirectTo('GET', editTodoPath, Todo.new(todoParams));
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  update: function () {
    this.setResourceSingular();

    if (this.resourceSingular.update(this.params)) {
      popCachedView();
      redirectTo('GET', editTodoPath, Todo.new(todoParams));
    } else {
      render(`${this.resourcePluralName}/edit`, this.resourceSingular);
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
