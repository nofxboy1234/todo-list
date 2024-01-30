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

const createController = (
  resourceSingularName,
  resourcePluralName,
  resourceClass,
  params,
  permittedParams
) => {
  const ResourcePluralController = {
    resourceSingularName,
    resourcePluralName,
    resourceClass,
    params,
    permittedParams,
    resourceSingular: {},
    resourcePlural: {},
    setResourceSingular: function () {
      this.resourceSingular = resourceClass.find(params.id);
    },
    resourceSingularParams: function () {
      return params.require(resourceSingularName).permit(permittedParams);
    },
    new: function () {
      this.resourceSingular = this.resourceClass.new(
        this.resourceSingularParams()
      );
      render(`${resourcePluralName}/new`, this.resourceSingular);
    },
    create: function () {
      this.resourceSingular = this.resourceClass.new(
        this.resourceSingularParams()
      );

      if (this.resourceSingular.save()) {
        redirectTo('GET', pathHelpers()[resourcePluralName].resourcePluralPath);
      } else {
        render(`${resourcePluralName}/new`, this.resourceSingular);
      }
    },
    index: function () {
      this.resourcePlural = this.resourceClass.all();
      render(`${resourcePluralName}/index`, this.resourcePlural);
    },
    show: function () {
      this.setResourceSingular();
      render(`${resourcePluralName}/show`, this.resourceSingular);
    },
    edit: function () {
      this.setResourceSingular();
      render(`${resourcePluralName}/edit`, this.resourceSingular);
    },
    update: function () {
      this.setResourceSingular();

      if (this.resourceSingular.update(this.resourceSingularParams())) {
        redirectTo('GET', pathHelpers()[resourcePluralName].resourcePluralPath);
      } else {
        render(`${resourcePluralName}/edit`, this.resourceSingular);
      }
    },
    destroy: function () {
      this.setResourceSingular();
      this.resourceSingular.destroy();
      redirectTo(
        'GET',
        pathHelpers()[this.resourcePluralName].resourcePluralPath
      );
    },
  };

  return ResourcePluralController;
};

export { createController };
