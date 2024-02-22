const createModel = (instanceProperties) => {
  const Model = {
    instances: [],
    new: function (parameters) {
      const getInstances = () => {
        return this.instances;
      };

      const addToInstances = (instance) => {
        this.instances.push(instance);
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
        addToInstances(instance);
      };

      const updateInstanceInStorage = (instance, updatedData) => {
        Object.assign(instance.data, updatedData.data);
      };

      const removeInstanceFromStorage = (instance) => {
        const removeIndex = getInstances().indexOf(instance);
        getInstances().splice(removeIndex, 1);
      };

      const assignID = (instance) => {
        instance.data.id = nextID();
      };

      const validateInstance = (instance, updatedData) => {
        const validationInstance = Object.assign({}, instance);
        const validationInstanceData = Object.assign({}, instance.data);
        validationInstance.data = {};
        Object.assign(validationInstance.data, validationInstanceData);
        Object.assign(validationInstance.data, updatedData.data);
        validationInstance.validate();

        return validationInstance;
      };

      const dataKeyNotInInitialParametersKeys = (dataKey) => {
        const initialParametersKeys = Object.keys(
          parameters.initialParams.data
        );
        return !initialParametersKeys.includes(dataKey);
      };

      const removeDataKey = (data, key) => {
        delete data[key];
      };

      const instance = {
        data: {},
        errors: [],
        cleanData: function () {
          Object.keys(this.data).forEach((dataKey) => {
            if (dataKeyNotInInitialParametersKeys(dataKey)) {
              removeDataKey(this.data, dataKey);
            }
          });
        },
        save: function () {
          this.validate();

          if (this.errors.length > 0) {
            return false;
          } else {
            assignID(this);

            this.saveDependent();
            this.saveParents();
            this.linkToParents();

            this.cleanData();
            saveInstanceToStorage(this);

            return true;
          }
        },
        update: function (updatedData) {
          const validationInstance = validateInstance(this, updatedData);

          if (validationInstance.errors.length > 0) {
            return false;
          } else {
            this.saveDependent();
            this.saveParents();
            this.linkToParents(updatedData);

            updateInstanceInStorage(this, updatedData);
            this.cleanData();

            return true;
          }
        },
        destroy: function () {
          this.destroyDependent();
          removeInstanceFromStorage(this);
        },
        destroyDependent: function () {},
        saveDependent: function () {},
        saveParents: function () {},
        linkToParents: function (updatedData) {},
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
