function createRoutes(resourceSingular, resourcePlural, routes) {
  const entries = new Map([
    [
      `${resourcePlural}Path`,
      function () {
        return `/${resourcePlural}`;
      },
    ],
    [
      `new${capitalize(resourceSingular)}Path`,
      function () {
        return `/${resourcePlural}/new`;
      },
    ],
    [
      `edit${capitalize(resourceSingular)}Path`,
      function (resource) {
        return `/${resourcePlural}/${resource.data.id}/edit`;
      },
    ],
    [
      `${resourceSingular}Path`,
      function (resource) {
        return `/${resourcePlural}/${resource.data.id}`;
      },
    ],
  ]);
  Object.assign(routes, Object.fromEntries(entries));
}

export { createRoutes };
