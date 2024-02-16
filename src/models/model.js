const createModel = (instanceProperties) => {
  const Model = {
    instances: [],
    new: function (parameters) {
      const getInstances = () => {
        return this.instances;
      };

      const lastID = () => {
        const instance = this.last();
        if (instance) {
          return instance.data.id;
        } else {
          return 0;
        }
      };

      const nextID = () => {
        return lastID() + 1;
      };

      const saveInstanceToStorage = (instance) => {
        getInstances().push(instance);
        instance.updateDependent();
      };

      const updateInstanceInStorage = (instance) => {
        Object.assign(instance.data, params.data);
        instance.updateDependent();
      };

      const removeInstanceFromStorage = (instance) => {
        const removeIndex = getInstances().indexOf(instance);
        getInstances().splice(removeIndex, 1);
      };

      const assignID = (instance) => {
        instance.data.id = nextID();
      };

      const validateInstance = (instance) => {
        const validationInstance = Object.assign({}, instance);
        Object.assign(validationInstance.data, params.data);
        validationInstance.validate();

        return validationInstance;
      };

      const instance = {
        data: {},
        errors: [],
        save: function () {
          this.validate();

          if (this.errors.length > 0) {
            return false;
          } else {
            assignID(this);
            saveInstanceToStorage(this);
            return true;
          }
        },
        update: function (params) {
          const validationInstance = validateInstance(this);

          if (validationInstance.errors.length > 0) {
            return false;
          } else {
            updateInstanceInStorage(this);
            return true;
          }
        },
        destroy: function () {
          this.destroyDependent();
          removeInstanceFromStorage(this);
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
      return this.instances;
    },
    find: function (id) {
      return this.instances.find((instance) => instance.data.id === id);
    },
    last: function () {
      return this.instances.at(-1);
    },
    first: function () {
      return this.instances.at(0);
    },
  };

  return Model;
};

const exists = (className, propertyToCheck, instanceToCheck) => {
  const found = className.all().filter((instance) => {
    return (
      instance.data[propertyToCheck] === instanceToCheck.data[propertyToCheck]
    );
  });
  return found.length > 0 ? true : false;
};

export { createModel, exists };
