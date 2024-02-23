import { Todo } from '../models/todo';
import { params } from '../parameters/todoParameters';
import { createController } from './controller';
import { popCachedView, render } from '../renderer';

import { todosPath, projectsPath, redirectTo, todoPath } from '../router';
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

const addAllProjectsToParams = () => {
  const existingProjects = [];
  Project.all().forEach((storedProject, index) => {
    const clonedProject = cloneResource(storedProject);
    clonedProject.data.projectInputValue = index.toString();
    existingProjects.push(clonedProject);
  });
  params.data.projects = existingProjects;
};

const Controller = createController('todos', Todo, params);
const TodosController = Object.create(Controller);
const instanceProperties = {
  new: function () {
    this.resourceSingular = this.resourceClass.new(params);

    addTodoTasksToParams(this.resourceSingular);
    addAllProjectsToParams();

    render(`${this.resourcePluralName}/new`, this.resourceSingular);
  },
  create: function () {
    this.resourceSingular = this.resourceClass.new(this.params);

    if (this.resourceSingular.save()) {
      this.params.reset();
      popCachedView();
      redirectTo('GET', projectsPath);
      redirectTo('GET', todosPath);
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  index: function () {
    const project = getProjectForTodosIndex();
    const todos = project.todos();
    render('todos/index', todos);
  },
  edit: function () {
    this.resourceSingular = this.resourceClass.new(params);

    addTodoTasksToParams(this.resourceSingular);
    addAllProjectsToParams();

    render(`${this.resourcePluralName}/edit`, this.resourceSingular);
  },
  update: function () {
    this.setResourceSingular();

    this.resourceSingular.data.projectInputValue =
      this.params.data.projectInputValue;

    const validationInstance = Todo.new(this.params);
    if (this.resourceSingular.update(validationInstance)) {
      this.params.reset();
      popCachedView();
      redirectTo('GET', projectsPath);
      redirectTo('GET', todoPath, this.resourceSingular);
    } else {
      render(`${this.resourcePluralName}/edit`, this.resourceSingular);
    }
  },
  destroy: function () {
    this.setResourceSingular();
    this.resourceSingular.destroy();

    redirectTo('GET', projectsPath);
    redirectTo('GET', todosPath);
  },
};
Object.assign(TodosController, instanceProperties);

export { TodosController };
