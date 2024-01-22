const createParameters = (instanceProperties) => {
  const Parameters = {
    new: function (params) {
      const instance = {
        ...params,
        require: function (requiredParam) {
          if (this[requiredParam]) {
            return this;
          } else {
            console.log('Missing required parameter');
          }
        },
        permit: function (...permittedParams) {
          permittedParams.forEach((permittedParam) => {
            //
          })
        },
      };
      Object.assign(instance, instanceProperties);

      return instance;
    },
  };

  return Parameters;
};

export { createParameters };
