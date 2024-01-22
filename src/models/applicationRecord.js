const createModel = (instanceProperties) => {
  const Model = {
    modelInstances: [],
    new: function (params) {
      const modelInstances = () => {
        return this.modelInstances;
      };

      const lastID = () => {
        const modelInstance = this.last();
        if (modelInstance) {
          return modelInstance.id;
        } else {
          return 0;
        }
      };

      const nextID = () => {
        return lastID() + 1;
      };

      const instance = {
        ...params,
        save: function () {
          this.id = nextID();
          modelInstances().push(this);
          return true;
        },
        update: function (params) {
          Object.assign(this, params);
          return true;
        },
        destroy: function () {
          const removeIndex = modelInstances().indexOf(this);
          modelInstances().splice(removeIndex, 1);
        },
      };
      Object.assign(instance, instanceProperties);

      return instance;
    },
    all: function () {
      return this.modelInstances;
    },
    find: function (id) {
      return this.modelInstances.find(
        (modelInstance) => modelInstance.id === id
      );
    },
    last: function () {
      return this.modelInstances.at(-1);
    },
  };

  return Model;
};

export { createModel };
