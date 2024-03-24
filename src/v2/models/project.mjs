import { createErrorCollection } from './errorCollection.mjs';
import { createError } from './error.mjs';

const instances = [];

// "Class" methods
const Project = {
  all() {
    return instances;
  },
  first() {
    return instances.at(0);
  },
  last() {
    return instances.at(-1);
  },
};

function createProject(name) {
  let id;
  const errors = createErrorCollection();

  const lastID = () => {
    const lastInstance = Project.last();
    if (lastInstance) {
      return lastInstance.id;
    }

    return 0;
  };

  const nextID = () => {
    return lastID() + 1;
  };

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

  const validate = () => {
    errors.clear();
    if (name === '') {
      const error = createError('Name cannot be blank');
      errors.add(error);
    }

    if (name.length < 2) {
      const error = createError('Name must be 2 or more characters');
      errors.add(error);
    }

    if (instances.find((project) => project.name === name)) {
      const error = createError('A Project already exists with this name');
      errors.add(error);
    }
  };

  // const todos = () => todo.all().filter((todo) => todo.projectID === id);

  const instance = {
    get name() {
      return name;
    },
    set name(value) {
      name = value;
    },
    get id() {
      return id;
    },
    get errors() {
      return errors;
    },
    save,
    validate,
  };

  return instance;
}

export { Project, createProject };
