import { Project } from '../models/project';
import { params } from '../parameters/projectParameters';
import { params as todoParams } from '../parameters/todoParameters';
import { popCachedView, render } from '../renderers/renderer';
import { render as todoProjectRender } from '../renderers/todoProjectsRenderer';

import { Todo } from '../models/todo';
import { projectsPath, redirectTo, todosPath } from '../routers/router';
import { redirectTo as todoProjectsRedirectTo } from '../routers/todoProjectsRouter';
import {
  getProjectForTodosIndex,
  setProjectForTodosIndex,
} from '../views/todos';
import { edit, index, new_, show } from '../symbols/resourceSymbols';
import { todoProjectsPath } from '../routes/todoProjectRoutes';

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

const setTodoProject = (controller) => {
  const id = params.data.id;
  const instance = Project.find(id);
  controller.todoProject = instance;
};

const controller = {
  new: function () {
    this.todoProject = Project.new(params);
    todoProjectRender(new_, this.todoProject);
  },
  create: function () {
    this.todoProject = Project.new(params);
    this.todoProject.data.validated = false;

    if (!this.todoProject.data.validated) {
      this.todoProject.validate();
    }

    if (this.todoProject.errors.length === 0) {
      const projectInputValue = createProjectInTodoParams(
        this.todoProject
      );
      setProjectInputValueOfTodo(projectInputValue);
      params.reset();
      popCachedView();
      render('todos/edit', Todo.new(todoParams));
    } else {
      todoProjectRender(new_, this.todoProject);
    }
  },
  index: function () {
    this.todoProjects = Project.all();
    todoProjectRender(index, this.todoProjects);
  },
  show: function () {
    setTodoProject(this);
    todoProjectRender(show, this.todoProject);
  },
  edit: function () {
    this.todoProject = Project.new(params);
    todoProjectRender(edit, this.todoProject);
  },
  update: function () {
    this.todoProject = Project.new(params);
    this.todoProject.data.validated = false;

    if (!this.todoProject.data.validated) {
      this.todoProject.validate();
    }

    if (this.todoProject.errors.length === 0) {
      updateProjectInTodoParams(this.todoProject);
      params.reset();
      popCachedView();
      render('todos/edit', Todo.new(todoParams));
    } else {
      todoProjectRender(edit, this.todoProject);
    }
  },
  destroy: function () {
    setTodoProject(this);
    this.todoProject.destroy();
    params.reset();
    todoProjectsRedirectTo('GET', todoProjectsPath);

    if (todosIndexProjectDestroyedFromStorage()) {
      setProjectForTodosIndex(Project.first());
      redirectTo('GET', todosPath);
    }
  },
};

export { controller };
