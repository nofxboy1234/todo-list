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

const isPersisted = (task) => {
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

    if (this.resourceSingular.errors.length === 0) {
      addTaskToTodoParams(this.resourceSingular);
      params.reset();
      popCachedView();
      redirectTo('GET', editTodoPath, Todo.new(todoParams));
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
      redirectTo('GET', editTodoPath, Todo.new(todoParams));
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
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
