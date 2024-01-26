const createParameters = (instanceProperties) => {
  const Parameters = {
    new: function (instanceKey, initialParams) {
      const instance = {
        ...initialParams,
        require: function (requiredParam) {
          if (Object.keys(this).includes(requiredParam)) {
            return this;
          } else {
            console.log('Missing required parameter');
          }
        },
        permit: function (...permittedParams) {
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
          // instanceParams() = {};
        },
        merge: function (params) {
          Object.assign(this, params);
        },
        reset: function () {
          this.clear();
          Object.assign(this[instanceKey], initialParams);
        },
      };
      Object.assign(instance, instanceProperties);

      return instance;
    },
  };

  return Parameters;
};

export { createParameters };
