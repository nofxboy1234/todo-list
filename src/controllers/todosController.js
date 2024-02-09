import { Todo } from '../models/todo';
import { params } from '../parameters/todoParameters';
import { createController } from './controller';
import {
  cachedViewDataSource,
  indexTodo,
  render,
  renderCachedView,
  updateCachedView,
} from '../renderer';

import { todosPath, projectsPath, redirectTo } from '../router';

const Controller = createController('todos', Todo, params);

const TodosController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(this.params);

    if (this.resourceSingular.save()) {
      redirectTo('GET', projectsPath);
      redirectTo('GET', todosPath);
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  index: function () {
    const project = cachedViewDataSource(indexTodo);
    const todos = project.todos();
    updateCachedView(indexTodo, todos);
    renderCachedView(indexTodo);
  },
  update: function () {
    this.setResourceSingular();

    if (this.resourceSingular.update(this.params)) {
      redirectTo('GET', projectsPath);
      redirectTo('GET', todosPath);
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
