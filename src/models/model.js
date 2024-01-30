const createModel = (resourceSingularName, instanceProperties) => {
  const getResourceSingularName = () => {
    return resourceSingularName;
  };

  const Model = {
    instances: [],
    new: function (params) {
      const getInstances = () => {
        return this.instances;
      };

      const lastID = () => {
        const instance = this.last();
        if (instance) {
          return instance.id;
        } else {
          return 0;
        }
      };

      const nextID = () => {
        return lastID() + 1;
      };

      const instance = {
        save: function () {
          this.id = nextID();
          getInstances().push(this);
          return true;
        },
        update: function (params) {
          Object.assign(this, params);
          return true;
        },
        destroy: function () {
          const removeIndex = getInstances().indexOf(this);
          getInstances().splice(removeIndex, 1);
        },
      };
      instance['id'] = params.id;
      instance[getResourceSingularName()] = params[getResourceSingularName()];
      Object.assign(instance, instanceProperties);

      return instance;
    },
    all: function () {
      return this.instances;
    },
    find: function (id) {
      return this.instances.find((instance) => instance.id === id);
    },
    last: function () {
      return this.instances.at(-1);
    },
    first: function() {
      return this.instances.at(0);
    }
  };

  return Model;
};

export { createModel };
