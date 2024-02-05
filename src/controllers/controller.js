import { render } from '../renderer';
import {
  redirectTo,
  rootPath,
  todosPath,
  newTodoPath,
  editTodoPath,
  todoPath,
  projectsPath,
  newProjectPath,
  editProjectPath,
  projectPath,
} from '../router';

const pathHelpers = () => {
  const helpers = {
    rootPath,
    todos: {
      resourcePluralPath: todosPath,
      newResourceSingularPath: newTodoPath,
      editResourceSingularPath: editTodoPath,
      resourceSingularPath: todoPath,
    },
    projects: {
      resourcePluralPath: projectsPath,
      newResourceSingularPath: newProjectPath,
      editResourceSingularPath: editProjectPath,
      resourceSingularPath: projectPath,
    },
  };

  return helpers;
};

const createController = (resourcePluralName, resourceClass, params) => {
  const ResourcePluralController = {
    resourcePluralName,
    resourceClass,
    params,
    resourceSingular: {},
    resourcePlural: {},
    setResourceSingular: function () {
      const id = params.data.id;
      const model = resourceClass.find(id);
      this.resourceSingular = model;
    },
    new: function () {
      this.resourceSingular = resourceClass.new(params);
      render(`${resourcePluralName}/new`, this.resourceSingular);
    },
    create: function () {
      this.resourceSingular = resourceClass.new(params);

      if (this.resourceSingular.save()) {
        redirectTo('GET', pathHelpers()[resourcePluralName].resourcePluralPath);
      } else {
        render(`${resourcePluralName}/new`, this.resourceSingular);
      }
    },
    index: function () {
      this.resourcePlural = resourceClass.all();
      render(`${resourcePluralName}/index`, this.resourcePlural);
    },
    show: function () {
      this.setResourceSingular();
      render(`${resourcePluralName}/show`, this.resourceSingular);
    },
    edit: function () {
      this.setResourceSingular();

      if (this.resourceSingular) {
        // E.g. If redirected to the todo edit view from another view (e.g. new project)
        // and the todo IS persisted.
        this.resourceSingular = resourceClass.new(params);
        // this.resourceSingular = Object.assign({});
        // Object.assign(this.resourceSingular.data, params.data);
      } else {
        // E.g. If redirected to the todo edit view from another view (e.g. new project)
        // and the todo IS NOT persisted.
        this.resourceSingular = resourceClass.new(params);
      }

      render(`${resourcePluralName}/edit`, this.resourceSingular);
    },
    update: function () {
      this.setResourceSingular();

      if (this.resourceSingular.update(params)) {
        redirectTo('GET', pathHelpers()[resourcePluralName].resourcePluralPath);
      } else {
        render(`${resourcePluralName}/edit`, this.resourceSingular);
      }
    },
    destroy: function () {
      this.setResourceSingular();
      this.resourceSingular.destroy();
      redirectTo('GET', pathHelpers()[resourcePluralName].resourcePluralPath);
    },
  };

  return ResourcePluralController;
};

export { createController };
