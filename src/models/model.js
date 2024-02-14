const createModel = (instanceProperties) => {
  const Model = {
    models: [],
    new: function (parameters) {
      const getModels = () => {
        return this.models;
      };

      const lastID = () => {
        const model = this.last();
        if (model) {
          return model.data.id;
        } else {
          return 0;
        }
      };

      const nextID = () => {
        return lastID() + 1;
      };

      const instance = {
        data: {},
        errors: [],
        save: function () {
          this.validate();

          if (this.errors.length > 0) {
            return false;
          } else {
            this.data.id = nextID();
            getModels().push(this);
            this.updateDependent();
            return true;
          }
        },
        update: function (params) {
          const validationInstance = Object.assign({}, this);
          Object.assign(validationInstance.data, params.data)
          validationInstance.validate();

          if (validationInstance.errors.length > 0) {
            return false;
          } else {
            Object.assign(this.data, params.data);
            return true;
          }
        },
        destroy: function () {
          this.destroyDependent();
          const removeIndex = getModels().indexOf(this);
          getModels().splice(removeIndex, 1);
        },
        destroyDependent: function () {},
        updateDependent: function () {},
        validate: function () {},
      };
      Object.assign(instance.data, parameters.data);
      Object.assign(instance, instanceProperties);

      return instance;
    },
    all: function () {
      return this.models;
    },
    find: function (id) {
      return this.models.find((instance) => instance.data.id === id);
    },
    last: function () {
      return this.models.at(-1);
    },
    first: function () {
      return this.models.at(0);
    },
  };

  return Model;
};

const exists = (className, propertyToCheck, instanceToCheck) => {
  const found = className.all().filter((instance) => {
    instance[propertyToCheck] === instanceToCheck.data[propertyToCheck];
  });
  return found.length > 0 ? true : false;
};

export { createModel, exists };
