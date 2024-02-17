import { Task } from '../models/task';
import { params } from '../parameters/taskParameters';
import { params as todoParams } from '../parameters/todoParameters';
import { createController } from './controller';
import { popCachedView, render } from '../renderer';

import { editTodoPath, redirectTo } from '../router';
import { Todo } from '../models/todo';

const createTaskInTodoParams = (task) => {
  const tempTodoParams = todoParams;
  tempTodoParams.data.tasks.push(task);
};
const updateTaskInTodoParams = (task) => {
  const tempTodoParams = todoParams;
  const tasks = tempTodoParams.data.tasks;
  const indexOfTask = task.data.indexInTasks;
  const todoParamsTask = tasks.at(indexOfTask);
  Object.assign(todoParamsTask.data, task.data);
};

const destroyTaskInTodoParams = (task) => {
  const tempTodoParams = todoParams;
  const tasks = tempTodoParams.data.tasks;
  const indexOfTask = task.data.indexInTasks;
  tasks.splice(indexOfTask, 1);
};

const Controller = createController('tasks', Task, params);

const TasksController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    this.resourceSingular.validate();

    if (this.resourceSingular.errors.length === 0) {
      createTaskInTodoParams(this.resourceSingular);
      params.reset();
      popCachedView();
      render('todos/edit', Todo.new(todoParams));
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  update: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    this.resourceSingular.validate();

    if (this.resourceSingular.errors.length === 0) {
      updateTaskInTodoParams(this.resourceSingular);
      params.reset();
      popCachedView();
      render('todos/edit', Todo.new(todoParams));
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  destroy: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    destroyTaskInTodoParams(this.resourceSingular);
    redirectTo('GET', editTodoPath, Todo.new(todoParams));
  },
};
Object.assign(TasksController, instanceProperties);

export { TasksController };
