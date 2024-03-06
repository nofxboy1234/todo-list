const path = {
  init: function (controller, params) {
    this.controller = controller;
    this.params = params;
  },
  get: function (resourceData) {
    this.params.merge(resourceData);
    this.controller.index();
  },
  post: function (resourceData) {
    this.params.merge(resourceData);
    this.controller.create();
  },
  resolvedPath: function () {
    return `/${resourcePlural}`;
  },
};

const indexPath = (controller, params) => {
  return Object.create(path).init(controller, params);
};

export { indexPath };
