const path = {
  init: function (controller, params) {
    this.controller = controller;
    this.params = params;
  },
  get: function (resourceData) {
    params.merge(resourceData);
    controller.show();
  },
  patch: function (resourceData) {
    params.merge(resourceData);
    controller.update();
  },
  put: function (resourceData) {
    params.merge(resourceData);
    controller.update();
  },
  delete: function (resourceData) {
    params.merge(resourceData);
    controller.destroy();
  },
  resolvedPath: function (resource) {
    return `/${resourcePlural}/${resource.data.id}`;
  },
};

const showPath = (controller, params) => {
  return Object.create(path).init(controller, params);
};

export { showPath };
