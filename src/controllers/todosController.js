import { Todo } from '../models/todo';
import { params } from '../parameters/todoParameters';
import { createController } from './controller';
import { render } from '../renderer';

import { todosPath, projectsPath, redirectTo } from '../router';

const permittedParams = [
  'title',
  'description',
  'dueDate',
  'priority',
  'checkList',
  'projectID',
];

const Controller = createController(
  'todo',
  'todos',
  Todo,
  params,
  permittedParams
);

const TodosController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(
      this.resourceSingularParams()
    );

    if (this.resourceSingular.save()) {
      redirectTo('GET', projectsPath);
      redirectTo('GET', todosPath);
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  update: function () {
    this.setResourceSingular();

    if (this.resourceSingular.update(this.resourceSingularParams())) {
      redirectTo('GET', projectsPath);
      redirectTo('GET', todosPath);
    } else {
      render(`${resourcePluralName}/edit`, this.resourceSingular);
    }
  },
};
Object.assign(TodosController, instanceProperties);

export { TodosController };
