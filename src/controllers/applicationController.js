import { render } from './renderer';
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

let resourceSingular;
let resourcePlural;

const createController = (
  resourceSingularName,
  resourcePluralName,
  resourceClass,
  params,
  permittedParams
) => {
  const setResourceSingular = () => {
    resourceSingular = resourceClass.find(params.id);
  };
  const resourceSingularParams = () => {
    return params.require(resourceSingularName).permit(permittedParams);
  };

  const ResourcePluralController = {
    new: function () {
      resourceSingular = resourceClass.new(resourceSingularParams());
      render(`${resourcePluralName}/new`);
    },
    create: function () {
      resourceSingular = resourceClass.new(resourceSingularParams());

      if (resourceSingular.save()) {
        redirectTo('GET', pathHelpers()[resourcePluralName].resourcePluralPath);
      } else {
        render(`${resourcePluralName}/new`);
      }
    },
    index: function () {
      resourcePlural = resourceClass.all();
      render(`${resourcePluralName}/index`);
    },
    show: function () {
      setResourceSingular();
      render(`${resourcePluralName}/show`);
    },
    edit: function () {
      setResourceSingular();
      render(`${resourcePluralName}/edit`);
    },
    update: function () {
      setResourceSingular();

      if (resourceSingular.update(resourceSingularParams())) {
        redirectTo('GET', pathHelpers()[resourcePluralName].resourcePluralPath);
      } else {
        render(`${resourcePluralName}/edit`);
      }
    },
    destroy: function () {
      setResourceSingular();
      resourceSingular.destroy();
      redirectTo('GET', pathHelpers()[resourcePluralName].resourcePluralPath);
    },
  };

  return ResourcePluralController;
};

export { createController, resourceSingular, resourcePlural };
