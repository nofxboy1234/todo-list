import { Todo } from '../models/todo';
import { params } from '../parameters/todoParameters';
import { params as projectParams } from '../parameters/projectParameters';
import { createController } from './controller';
import { indexTodo, render, renderCachedView } from '../renderer';

import { todosPath, projectsPath, redirectTo } from '../router';
import { Project } from '../models/project';

const Controller = createController('todos', Todo, params);

const TodosController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(this.params);

    if (this.resourceSingular.save()) {
      redirectTo('GET', projectsPath);

      // updateCachedView(indexTodo, )
      renderCachedView(indexTodo);

      // render indexTodo for the last project that was displayed
      // with updated array of todos
      // Set these updated todos into cachedData: 

      // redirectTo('GET', todosPath, projectParams);
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  index: function () {
    const temp = projectParams;
    const project = Project.find(projectParams.data.id);
    // const project = Project.find(params.data.projectID);
    this.resourcePlural = project.todos();

    renderCachedView(indexTodo);
    // render(`${this.resourcePluralName}/index`, this.resourcePlural);
  },
  update: function () {
    this.setResourceSingular();

    if (this.resourceSingular.update(this.params)) {
      redirectTo('GET', projectsPath);
      renderCachedView(indexTodo);
      // redirectTo('GET', todosPath, projectParams);
    } else {
      render(`${this.resourcePluralName}/edit`, this.resourceSingular);
    }
  },
  destroy: function () {
    this.setResourceSingular();
    this.resourceSingular.destroy();

    redirectTo('GET', projectsPath);
    renderCachedView(indexTodo);
    // redirectTo('GET', todosPath, projectParams);
  },
};
Object.assign(TodosController, instanceProperties);

export { TodosController };
