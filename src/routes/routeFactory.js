import { editPath } from '../httpPaths/editPath';
import { indexPath } from '../httpPaths/indexPath';
import { newPath } from '../httpPaths/newPath';
import { resourcePath } from '../httpPaths/resourcePath';

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function createRoutes(
  resourceSingular,
  resourcePlural,
  routes,
  controller,
  params
) {
  const entries = new Map([
    [`${resourcePlural}Path`, indexPath(controller, params)],
    [`new${capitalize(resourceSingular)}Path`, newPath(controller, params)],
    [`edit${capitalize(resourceSingular)}Path`, editPath(controller, params)],
    [`${resourceSingular}Path`, resourcePath(controller, params)],
  ]);
  Object.assign(routes, Object.fromEntries(entries));
}

export { createRoutes };
