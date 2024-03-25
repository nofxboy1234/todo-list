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

  const save = () => {
    validate();
    if (errors.size() === 0) {
      id = nextID();
      instances.push(instance);
      return true;
    } else {
      return false;
    }
  };

  const instance = {
    id,
    errors,
    save,
    validate,
  };

  return instance;
}

export { createModelStatic, createModel };
