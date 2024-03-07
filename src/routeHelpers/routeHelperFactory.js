import { editPath } from '../routePaths/editPath';
import { indexPath } from '../routePaths/indexPath';
import { newPath } from '../routePaths/newPath';
import { resourcePath } from '../routePaths/resourcePath';

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function createRoutes(
  resourceSingular,
  resourcePlural,
  routeHelpers,
  controller,
  params
) {
  const entries = new Map([
    [`${resourcePlural}Path`, indexPath(controller, params)],
    [`new${capitalize(resourceSingular)}Path`, newPath(controller, params)],
    [`edit${capitalize(resourceSingular)}Path`, editPath(controller, params)],
    [`${resourceSingular}Path`, resourcePath(controller, params)],
  ]);
  Object.assign(routeHelpers, Object.fromEntries(entries));
}

export { createRoutes };
