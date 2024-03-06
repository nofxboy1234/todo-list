import { indexPath } from '../httpPaths/indexPath';
import { newPath } from '../httpPaths/newPath';

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
    [
      `edit${capitalize(resourceSingular)}Path`,
      {
        resolvedPath: function (resource) {
          return `/${resourcePlural}/${resource.data.id}/edit`;
        },
        controller,
        params,
      },
    ],
    [
      `${resourceSingular}Path`,
      {
        resolvedPath: function (resource) {
          return `/${resourcePlural}/${resource.data.id}`;
        },
        controller,
        params,
      },
    ],
  ]);
  Object.assign(routes, Object.fromEntries(entries));
}

export { createRoutes };
