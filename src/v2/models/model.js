const model = {
  instances: [],
  new: function (parameters) {
    // const lastID = () => {
    //   const instance = this.last();
    //   if (instance) {
    //     return instance.data.id;
    //   } else {
    //     return 0;
    //   }
    // };

    // const nextID = () => {
    //   return lastID() + 1;
    // };

    // const saveInstanceToStorage = (instance) => {
    //   this.instances.push(instance);
    // };

    // const updateInstanceInStorage = (instance, updatedData) => {
    //   Object.assign(instance.data, updatedData.data);
    // };

    // const removeInstanceFromStorage = (instance) => {
    //   const removeIndex = this.instances.indexOf(instance);
    //   this.instances.splice(removeIndex, 1);
    // };

    // const assignID = (instance) => {
    //   instance.data.id = nextID();
    // };

    // const dataKeyNotInInitialParametersKeys = (dataKey) => {
    //   const initialParametersKeys = Object.keys(parameters.initialParams.data);
    //   return !initialParametersKeys.includes(dataKey);
    // };

    // const removeDataKey = (data, key) => {
    //   delete data[key];
    // };

    const instance = {
      // errors: [],
      save: function () {
        if (!this.data.validated) {
          this.validate();
        }

        if (this.errors.length > 0) {
          return false;
        } else {
          assignID(this);
          this.saveDependent();
          this.updateParents();
          this.saveParents();
          this.linkToParents();
          this.cleanData();
          saveInstanceToStorage(this);
          return true;
        }
      },
      // update: function (validationInstance) {
      //   if (!validationInstance.data.validated) {
      //     validationInstance.validate();
      //   }

      //   if (validationInstance.errors.length > 0) {
      //     return false;
      //   } else {
      //     this.updateDependent();
      //     this.saveDependent();
      //     this.destroyDependent();
      //     this.updateParents();
      //     this.saveParents();
      //     this.linkToParents(validationInstance);
      //     updateInstanceInStorage(this, validationInstance);
      //     this.cleanData();
      //     return true;
      //   }
      // },
      // destroy: function () {
      //   this.destroyDependent();
      //   removeInstanceFromStorage(this);
      // },
      // saveDependent: function () {},
      // updateDependent: function () {},
      // destroyDependent: function () {},
      // saveParents: function () {},
      // updateParents: function () {},
      // linkToParents: function (updatedData) {},
      // validate: function () {},
    };
    Object.assign(instance.data, parameters.data);
    Object.assign(instance, this.instanceProperties);

    return instance;
  },
  // all: function () {
  //   return this.instances;
  // },
  // last: function () {
  //   return this.instances.at(-1);
  // },
  // first: function () {
  //   return this.instances.at(0);
  // },
};

// const instancesExcludingCallingInstance = (className, instanceToCheck) => {
//   return className
//     .all()
//     .filter((instance) => instance.data.id !== instanceToCheck.data.id);
// };

// const exists = (className, propertyToCheck, instanceToCheck) => {
//   let instances;
//   if (instanceToCheck.data.id) {
//     instances = instancesExcludingCallingInstance(className, instanceToCheck);
//   } else {
//     instances = className.all();
//   }

//   const found = instances.find((instance) => {
//     return (
//       instance.data[propertyToCheck] === instanceToCheck.data[propertyToCheck]
//     );
//   });
//   return found;
// };

// const createModel = (instanceProperties) => {
//   return Object.create(model).init(instanceProperties);
// };

export { createModel, exists };
