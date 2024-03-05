import { params } from '../parameters/todoParameters';
import { Todo } from '../models/todo';
import { render, popCachedView } from '../renderers/todosRenderer';
import { edit, index, new_, show } from '../symbols/resourceSymbols';

import { todosPath, todoPath } from '../routes/todoRoutes';
import { projectsPath } from '../routes/projectRoutes';
import { redirectTo } from '../routers/todosRouter';
import { redirectTo as projectsRedirectTo } from '../routers/projectsRouter';
import { getProjectForTodosIndex } from '../views/todos';
import { Project } from '../models/project';

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
  controller.todoTask = instance;
};

const controller = {
  new: function () {
    this.todo = Todo.new(params);

    addTodoTasksToParams(this.todo);
    addAllProjectsToParams();
    createDestroyedTasksInParams();

    render(new_, this.todo);
  },
  create: function () {
    this.todo = Todo.new(this.params);
    this.todo.data.validated = false;

    if (this.todo.save()) {
      this.params.reset();
      popCachedView();
      projectsRedirectTo('GET', projectsPath);
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

    this.todo.data.projectInputValue = this.params.data.projectInputValue;

    const validationInstance = Todo.new(this.params);
    if (this.todo.update(validationInstance)) {
      this.params.reset();
      popCachedView();
      projectsRedirectTo('GET', projectsPath);
      redirectTo('GET', todoPath, this.todo);
    } else {
      render(edit, validationInstance);
    }
  },
  destroy: function () {
    setTodo(this);
    this.todo.destroy();

    projectsRedirectTo('GET', projectsPath);
    redirectTo('GET', todosPath);
  },
};

export { controller };
