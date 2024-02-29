import { Project } from '../models/project';
import { params } from '../parameters/projectParameters';
import { params as todoParams } from '../parameters/todoParameters';
import { createController } from './controller';
import { popCachedView, render } from '../renderer';

import { Todo } from '../models/todo';
import { projectsPath, redirectTo, todosPath } from '../router';
import {
  getProjectForTodosIndex,
  setProjectForTodosIndex,
} from '../views/todos';

const setProjectInputValueOfTodo = (projectInputValue) => {
  todoParams.data.projectInputValue = projectInputValue;
};

const todosIndexProjectDestroyedFromStorage = () => {
  return !Project.all().includes(getProjectForTodosIndex());
};

const createProjectInTodoParams = (project) => {
  const projects = todoParams.data.projects;
  projects.push(project);
  const index = projects.length - 1;
  const projectInputValue = `undefined-${index}`;
  project.data.projectInputValue = projectInputValue;
  project.data.onTodoForm = true;

  return projectInputValue;
};

const updateProjectInTodoParams = (project) => {
  const projects = todoParams.data.projects;
  const indexOfProject = project.data.indexInProjects;
  const todoParamsProject = projects.at(indexOfProject);
  Object.assign(todoParamsProject.data, project.data);
};

const cloneResource = (resource) => {
  const clone = Object.assign({}, resource);
  clone.data = {};
  Object.assign(clone.data, resource.data);

  return clone;
};

const addAllProjectsToTodoParams = () => {
  const existingProjects = [];
  Project.all().forEach((storedProject, index) => {
    const clonedProject = cloneResource(storedProject);
    clonedProject.data.projectInputValue = index.toString();
    existingProjects.push(clonedProject);
  });
  todoParams.data.projects = existingProjects;
};

const Controller = createController('projects', Project, params);

const ProjectsController = Object.create(Controller);
const instanceProperties = {
  new: function () {
    this.resourceSingular = this.resourceClass.new(params);

    addAllProjectsToTodoParams();

    render(`${this.resourcePluralName}/new`, this.resourceSingular);
  },
  create: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    this.resourceSingular.data.validated = false;
    this.resourceSingular.validate();

    if (this.resourceSingular.errors.length === 0) {
      if (this.resourceSingular.data.viewToRender) {
        const viewToRender = Object.assign(
          {},
          this.resourceSingular.data.viewToRender
        );

        if (this.resourceSingular.save()) {
          const viewString = viewToRender.viewString;
          const viewData = viewToRender.viewData;

          redirectTo('GET', projectsPath);
          render(viewString, viewData);

          params.reset();
          popCachedView();
        } else {
          render(`${this.resourcePluralName}/new`, this.resourceSingular);
        }
      } else {
        const projectInputValue = createProjectInTodoParams(
          this.resourceSingular
        );
        setProjectInputValueOfTodo(projectInputValue);

        render('todos/edit', Todo.new(todoParams));

        params.reset();
        popCachedView();
      }
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  update: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    this.resourceSingular.data.validated = false;
    this.resourceSingular.validate();

    if (this.resourceSingular.errors.length === 0) {
      updateProjectInTodoParams(this.resourceSingular);
      params.reset();
      popCachedView();
      render('todos/edit', Todo.new(todoParams));
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  destroy: function () {
    this.setResourceSingular();
    this.resourceSingular.destroy();
    params.reset();
    redirectTo('GET', projectsPath);

    if (todosIndexProjectDestroyedFromStorage()) {
      setProjectForTodosIndex(Project.first());
      redirectTo('GET', todosPath);
    }
  },
};
Object.assign(ProjectsController, instanceProperties);

export { ProjectsController };
