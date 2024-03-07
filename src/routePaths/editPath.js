const path = {
  init: function (controller, params) {
    this.controller = controller;
    this.params = params;
  },
  get: function (resourceData) {
    params.reset();
    params.merge(resourceData);
    controller.edit();
  },
  resolvedPath: function (resource) {
    return `/${resourcePlural}/${resource.data.id}/edit`;
  },
};

const editPath = (controller, params) => {
  return Object.create(path).init(controller, params);
};

export { editPath };
