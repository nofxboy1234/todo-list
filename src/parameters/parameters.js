const parameters = {
  init: function (initialParams) {
    this.initialParams = initialParams;
    this.reset();
  },
  data: {},
  clear: function () {
    this.data = {};
  },
  merge: function (params) {
    Object.assign(this.data, params.data);
  },
  reset: function () {
    this.clear();
    this.merge(this.initialParams);
  },
};

const createParameters = (initialParams) => {
  return Object.create(parameters).init(initialParams);
};

export { createParameters };
