const createParameters = (instanceProperties) => {
  const Parameters = {
    new: function (initialParams) {
      const instance = {
        clear: function () {
          this.data = {};
        },
        merge: function (params) {
          Object.assign(this, params);
        },
        reset: function () {
          this.merge(initialParams);
        },
      };
      instance.clear();
      instance.reset();
      instance.merge(instanceProperties);

      return instance;
    },
  };

  return Parameters;
};

export { createParameters };
