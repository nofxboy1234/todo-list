import { Todo } from '../models/todo';
import { params } from '../parameters/todoParameters';
import { createController } from './controller';
import { popCachedView, render } from '../renderer';

import { todosPath, projectsPath, redirectTo, todoPath } from '../router';
import { getProjectForTodosIndex } from '../views/todos';
import { Project } from '../models/project';

const Controller = createController('todos', Todo, params);

const cleanData = (dataToClean) => {
  const paramsWithUpdatedData = Object.assign({}, dataToClean);
  dataToClean.reset();
  Object.assign(dataToClean, paramsWithUpdatedData);
};

const addExistingTasksToParams = (todo) => {
  const existingTasks = todo.tasks();
  let tempParams = params;

  if (!tempParams.data.tasks) {
    tempParams.data.tasks = [];
  }

  tempParams.data.tasks = tempParams.data.tasks.concat(existingTasks);
};

const addExistingProjectsToParams = () => {
  const existingProjects = Project.all();
  let tempParams = params;

  if (!tempParams.data.projects) {
    tempParams.data.projects = [];
  }

  tempParams.data.projects = existingProjects;
  // tempParams.data.projects = tempParams.data.projects.concat(existingProjects);
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
    cleanData(this.params);
    this.resourceSingular = this.resourceClass.new(this.params);

    if (this.resourceSingular.save()) {
      this.params.reset();
      // delete this.resourceSingular.data.tasks;
      // delete this.params.data.tasks;
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

    cleanData(this.params);
    if (this.resourceSingular.update(this.params)) {
      // delete this.resourceSingular.data.tasks;
      // delete this.params.data.tasks;
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
