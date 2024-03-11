import { Todo } from '../models/todo';
import { Project } from '../models/project';

import { params } from '../parameters/todo';

import { redirectTo } from '../routing/routers/router';
import { todosPath, todoPath } from '../routing/helpers/todo';
import { projectsPath } from '../routing/helpers/project';

import { render, popCachedView } from '../rendering/renderers/renderer';
import {
  todosView as index,
  newTodoView as new_,
  editTodoView as edit,
  todoView as show,
} from '../rendering/helpers/todo';

import { getProjectForTodosIndex } from '../views/todos';

const clone = (resource) => {
  const clone = Object.assign({}, resource);
  clone.data = {};
  Object.assign(clone.data, resource.data);
  return clone;
};

const addTodoTasksToParams = (todo) => {
  const existingTasks = [];

  todo.tasks().forEach((storedTask) => {
    existingTasks.push(clone(storedTask));
  });

  params.data.tasks = existingTasks;
};

const createDestroyedTasksInParams = () => {
  params.data.destroyedTasks = [];
};

const addAllProjectsToParams = () => {
  const existingProjects = [];

  Project.all().forEach((storedProject, index) => {
    const clonedProject = clone(storedProject);
    clonedProject.data.projectInputValue = index.toString();
    clonedProject.data.validated = true;
    existingProjects.push(clonedProject);
  });

  params.data.projects = existingProjects;
};

const setTodo = (controller) => {
  const id = params.data.id;
  const instance = Task.find(id);
  controller.todo = instance;
};

const controller = {
  new: function () {
    this.todo = Todo.new(params);
    // addTodoTasksToParams(this.todo);
    addAllProjectsToParams();
    createDestroyedTasksInParams();
    render(new_, this.todo);
  },
  create: function () {
    this.todo = Todo.new(params);
    this.todo.data.validated = false;

    if (this.todo.save()) {
      params.reset();
      popCachedView();
      redirectTo('GET', projectsPath);
      redirectTo('GET', todosPath);
    } else {
      render(new_, this.todo);
    }
  },
  index: function () {
    const project = getProjectForTodosIndex();
    this.todos = project.todos();
    render(index, this.todos);
  },
  show: function () {
    setTodo(this);
    render(show, this.todo);
  },
  edit: function () {
    this.todo = Todo.new(params);
    addTodoTasksToParams(this.todo);
    addAllProjectsToParams();
    createDestroyedTasksInParams();
    render(edit, this.todo);
  },
  update: function () {
    setTodo(this);
    this.todo.data.validated = false;
    this.todo.data.projectInputValue = params.data.projectInputValue;
    const validationInstance = Todo.new(params);

    if (this.todo.update(validationInstance)) {
      params.reset();
      popCachedView();
      redirectTo('GET', projectsPath);
      redirectTo('GET', todoPath, this.todo);
    } else {
      render(edit, validationInstance);
    }
  },
  destroy: function () {
    setTodo(this);
    this.todo.destroy();
    redirectTo('GET', projectsPath);
    redirectTo('GET', todosPath);
  },
};

export { controller };
