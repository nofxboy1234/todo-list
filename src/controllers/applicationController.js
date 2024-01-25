import { render } from './renderer';
import { redirectTo, rootPath } from '../router';

let resourceSingular;
let resourcePlural;

const createController = (
  resourceSingularName,
  resourcePluralName,
  resourceClass,
  params,
  pathHelpers,
  ...permittedParams
) => {
  const setResourceSingular = () => {
    resourceSingular = resourceClass.find(params.id);
  };
  const resourceSingularParams = () => {
    return params.require(resourceSingularName).permit(...permittedParams);
  };

  const ResourcePluralController = {
    new: function () {
      resourceSingular = resourceClass.new(resourceSingularParams());
      render(`${resourcePluralName}/new`);
    },
    create: function () {
      resourceSingular = resourceClass.new(resourceSingularParams());

      if (resourceSingular.save()) {
        redirectTo('GET', pathHelpers.resourcePluralPath);
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
        redirectTo('GET', pathHelpers.resourcePluralPath);
      } else {
        render(`${resourcePluralName}/edit`);
      }
    },
    destroy: function () {
      setResourceSingular();
      resourceSingular.destroy();
      redirectTo('GET', pathHelpers.resourcePluralPath);
    },
  };

  return ResourcePluralController;
};

export { createController, resourceSingular, resourcePlural };
