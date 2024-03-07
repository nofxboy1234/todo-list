import { Todo } from '../models/todo';
import { Project } from '../models/project';
import { todoParams as params } from '../parameters/todoParameters';
import { todosPath, todoPath } from '../routers/todoRoutes';
import { projectsPath } from '../routes/projectRoutes';
import { redirectTo } from '../routers/router';
import { render, popCachedView } from '../renderers/renderer';
import { getProjectForTodosIndex } from '../views/todos';

import {
  todosView as index,
  newTodoView as new_,
  editTodoView as edit,
  todoView as show,
} from '../renderers/todoRenderers';

const cloneResource = (resource) => {
  const clone = Object.assign({}, resource);
  clone.data = {};
  Object.assign(clone.data, resource.data);
  return clone;
};

const addTodoTasksToParams = (todo) => {
  const existingTasks = [];

  todo.tasks().forEach((storedTask) => {
    existingTasks.push(cloneResource(storedTask));
  });

  params.data.tasks = existingTasks;
};

const createDestroyedTasksInParams = () => {
  params.data.destroyedTasks = [];
};

const addAllProjectsToParams = () => {
  const existingProjects = [];

  Project.all().forEach((storedProject, index) => {
    const clonedProject = cloneResource(storedProject);
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

const todosController = {
  new: function () {
    this.todo = Todo.new(params);
    addTodoTasksToParams(this.todo);
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
    const todos = project.todos();
    render(index, todos);
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

export { todosController };
