const createParameters = (instanceProperties) => {
  const Parameters = {
    new: function (instanceKey, initialParams) {
      const assignInitialParams = () => {
        instance.merge(initialParams);
      };

      const instance = {
        require: function (requiredParam) {
          if (Object.keys(this).includes(requiredParam)) {
            return this;
          } else {
            console.error('Missing required parameter');
          }
        },
        permit: function (permittedParams) {
          Object.keys(this[instanceKey]).forEach((key) => {
            if (!permittedParams.includes(key)) {
              delete this[instanceKey][key];
            }
          });
          return this;
        },
        clear: function () {
          this.id = undefined;
          this[instanceKey] = {};
        },
        merge: function (params) {
          Object.assign(this, params);
        },
        reset: function () {
          this.clear();
          assignInitialParams();
        },
      };

      assignInitialParams();
      instance.merge(instanceProperties);

      return instance;
    },
  };

  return Parameters;
};

export { createParameters };
