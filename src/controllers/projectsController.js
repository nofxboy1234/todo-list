import { Project } from '../models/project';
import { params } from '../parameters/projectParameters';
import { params as todoParams } from '../parameters/todoParameters';
import { createController } from './controller';
import { popCachedView, render } from '../renderer';

import { editTodoPath, redirectTo } from '../router';
import { Todo } from '../models/todo';

const createProjectInTodoParams = (task) => {
  const tempTodoParams = todoParams;
  tempTodoParams.data.projects.push(task);
};
const updateProjectInTodoParams = (task) => {
  const tempTodoParams = todoParams;
  const tasks = tempTodoParams.data.projects;
  const indexOfTask = task.data.indexInProjects;
  const todoParamsTask = tasks.at(indexOfTask);
  Object.assign(todoParamsTask.data, task.data);
};

const destroyProjectInTodoParams = (task) => {
  const tempTodoParams = todoParams;
  const tasks = tempTodoParams.data.projects;
  const indexOfTask = task.data.indexInProjects;
  tasks.splice(indexOfTask, 1);
};

const Controller = createController('projects', Project, params);

const ProjectsController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    this.resourceSingular.validate();

    if (this.resourceSingular.errors.length === 0) {
      createProjectInTodoParams(this.resourceSingular);
      params.reset();
      popCachedView();
      render('todos/edit', Todo.new(todoParams))
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  update: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    this.resourceSingular.validate();

    if (this.resourceSingular.errors.length === 0) {
      updateProjectInTodoParams(this.resourceSingular);
      params.reset();
      popCachedView();
      redirectTo('GET', editTodoPath, Todo.new(todoParams));
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  destroy: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    destroyProjectInTodoParams(this.resourceSingular);
    redirectTo('GET', editTodoPath, Todo.new(todoParams));
  },
};
Object.assign(ProjectsController, instanceProperties);

export { ProjectsController };
