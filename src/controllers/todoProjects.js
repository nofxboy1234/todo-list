import { Project } from '../models/project';
import { Todo } from '../models/todo';
import { projectParams as params } from '../parameters/projectParameters';
import { todoParams } from '../parameters/todoParameters';
import { popCachedView, render } from '../renderers/renderer';

import {
  todoProjectsView as index,
  newTodoProjectView as new_,
  editTodoProjectView as edit,
  todoProjectView as show,
} from '../views/helpers/todoProjectViews';
import { editTodoView as editTodo } from '../views/helpers/todoViews';

const setProjectInputValueOfTodo = (projectInputValue) => {
  todoParams.data.projectInputValue = projectInputValue;
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
    render(new_, this.todoProject);
  },
  create: function () {
    this.todoProject = Project.new(params);
    this.todoProject.data.validated = false;

    if (!this.todoProject.data.validated) {
      this.todoProject.validate();
    }

    if (this.todoProject.errors.length === 0) {
      const projectInputValue = createProjectInTodoParams(this.todoProject);
      setProjectInputValueOfTodo(projectInputValue);
      params.reset();
      popCachedView();
      render(editTodo, Todo.new(todoParams));
    } else {
      render(new_, this.todoProject);
    }
  },
  index: function () {
    this.todoProjects = Project.all();
    render(index, this.todoProjects);
  },
  show: function () {
    setTodoProject(this);
    render(show, this.todoProject);
  },
  edit: function () {
    this.todoProject = Project.new(params);
    render(edit, this.todoProject);
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
      render(editTodo, Todo.new(todoParams));
    } else {
      render(edit, this.todoProject);
    }
  },
};

export { controller };
