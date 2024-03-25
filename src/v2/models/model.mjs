import { createErrorCollection } from './errorCollection.mjs';

function createModelStatic() {
  // private "Class" variable
  const instances = [];

  // "Class" methods
  const all = () => {
    return instances;
  };
  const first = () => {
    return instances.at(0);
  };
  const last = () => {
    return instances.at(-1);
  };
  const lastID = () => {
    const lastInstance = last();
    if (lastInstance) {
      return lastInstance.id;
    }

    return 0;
  };
  const nextID = () => {
    return lastID() + 1;
  };
  const addToInstances = (instance) => {
    instances.push(instance);
  };

  const instance = {
    all,
    first,
    last,
    lastID,
    nextID,
    addToInstances,
  };

  return instance;
}

function createModel() {
  let id;
  const errors = createErrorCollection();

  const save = (modelStatic) => {
    if (!modelStatic) {
      console.log(
        'Please override "save()" and specify a "modelStatic" argument'
      );
      return false;
    }

    validate();
    if (errors.size() === 0) {
      id = nextID();
      modelStatic.addToInstances(instance);
      return true;
    } else {
      return false;
    }
  };

  const validate = () => {
    console.log('Please override "validate()"');
  };

  const instance = {
    id,
    errors,
    save,
    validate,
  };

  return instance;
}

// export { createModelStatic, createModel };

const modelStatic = createModelStatic();
modelStatic.nextID();
