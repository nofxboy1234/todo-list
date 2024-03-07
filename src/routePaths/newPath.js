const path = {
  init: function (controller, params) {
    this.controller = controller;
    this.params = params;
  },
  get: function (resourceData) {
    this.params.reset();
    this.controller.new();
  },
  resolvedPath: function (resource) {
    return `/${resourcePlural}/new`;
  },
};

const newPath = (controller, params) => {
  return Object.create(path).init(controller, params);
};

export { newPath };
