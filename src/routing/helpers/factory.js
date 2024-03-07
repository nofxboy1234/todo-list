import { editPath } from '../paths/edit';
import { indexPath } from '../paths';
import { newPath } from '../paths/new';
import { showPath } from '../paths/show';

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function createRouteHelpers(resourceNameInfo, controller, params) {
  const resourceSingular = resourceNameInfo.singular;
  const resourcePlural = resourceNameInfo.plural;
  const routeHelpers = {};

  const addToRouteHelpers = (name, path) => {
    routeHelpers[name] = path;
  };

  const createIndexRouteHelper = () => {
    const name = `${resourcePlural}Path`;
    const path = indexPath(controller, params);
    addToRouteHelpers(name, path);
  };

  const createEditRouteHelper = () => {
    const name = `edit${capitalize(resourceSingular)}Path`;
    const path = editPath(controller, params);
    addToRouteHelpers(name, path);
  };

  const createShowRouteHelper = () => {
    const name = `${resourceSingular}Path`;
    const path = showPath(controller, params);
    addToRouteHelpers(name, path);
  };

  const createNewRouteHelper = () => {
    const name = `new${capitalize(resourceSingular)}Path`;
    const path = newPath(controller, params);
    addToRouteHelpers(name, path);
  };

  createIndexRouteHelper();
  createEditRouteHelper();
  createShowRouteHelper();
  createNewRouteHelper();

  return routeHelpers;
}

export { createRouteHelpers };
