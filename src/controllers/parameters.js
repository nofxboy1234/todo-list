const createParameters = (instanceProperties) => {
  const Parameters = {
    new: function (params) {
      const instanceKey = () => {
        return Object.keys(params).at(1);
      };

      const instanceParams = () => {
        return params[instanceKey()];
      };

      const instance = {
        ...params,
        require: function (requiredParam) {
          if (Object.keys(params).includes(requiredParam)) {
            return this;
          } else {
            console.log('Missing required parameter');
          }
        },
        permit: function (...permittedParams) {
          Object.keys(instanceParams()).forEach((key) => {
            if (!permittedParams.includes(key)) {
              delete this[key];
            }
          });
          return this;
        },
        clear: function () {
          this[instanceKey()] = {};
        },
        merge: function (params) {
          // this.clear();
          Object.assign(this, params);
        },
        reset: function () {
          this.clear();
          Object.assign(this, instanceParams());
        },
      };
      Object.assign(instance, instanceProperties);

      return instance;
    },
  };

  return Parameters;
};

export { createParameters };