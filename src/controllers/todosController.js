import { Todo } from '../models/todo';
import { params } from '../parameters/todoParameters';
import { createController } from './controller';
import { popCachedView, render } from '../renderer';

import { todosPath, projectsPath, redirectTo, todoPath } from '../router';
import { getProjectForTodosIndex } from '../views/todos';
import { Project } from '../models/project';

const Controller = createController('todos', Todo, params);

const addExistingTasksToParams = (todo) => {
  const existingTasks = [...todo.tasks()];
  params.data.tasks = existingTasks;
};

const addExistingProjectsToParams = () => {
  const existingProjects = [...Project.all()];
  existingProjects.forEach((project, index) => {
    project.data.projectInputValue = index.toString();
  });

  params.data.projects = existingProjects;
};

const TodosController = Object.create(Controller);
const instanceProperties = {
  new: function () {
    this.resourceSingular = this.resourceClass.new(params);

    addExistingTasksToParams(this.resourceSingular);
    addExistingProjectsToParams();

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

    addExistingTasksToParams(this.resourceSingular);
    addExistingProjectsToParams();

    render(`${this.resourcePluralName}/edit`, this.resourceSingular);
  },
  update: function () {
    this.setResourceSingular();

    this.resourceSingular.data.projectInputValue =
      this.params.data.projectInputValue;

    if (this.resourceSingular.update(this.params)) {
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
