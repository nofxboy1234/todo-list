import { createError } from '../errors/error.mjs';
import { createErrorCollection } from '../errors/errorCollection.mjs';
import { Project } from './project.mjs';
// import { Todo } from './todo.mjs';
// import { Task } from './task.mjs';

function createModelStatic(modelName) {
  let reviverModelInstance;

  const getClassOfModelInstance = (value) => {
    switch (value.class) {
      case 'Project':
        return Project;
        break;
      case 'Todo':
        return Todo;
        break;
      case 'Task':
        return Task;
        break;

      default:
        break;
    }
  };

  const addMethodsBackToModelInstance = (modelInstance, value) => {
    Object.assign(modelInstance, value);
  };

  const createModelInstance = (value) => {
    const className = getClassOfModelInstance(value);
    const modelInstance = new className(value.name);

    return modelInstance;
  };

  function reviver(key, value) {
    if (key === 'errors') {
      return createErrorCollection();
    }

    if (key === 'id') {
      reviverModelInstance = this;
    }

    if (value === reviverModelInstance) {
      const modelInstance = createModelInstance(value);
      addMethodsBackToModelInstance(modelInstance, value);

      return modelInstance;
    }

    return value;
  }

  const instance = {
    name: `${modelName}Static`,
    instances: [],
    all() {
      return this.instances;
    },
    first() {
      return this.instances.at(0);
    },
    last() {
      return this.instances.at(-1);
    },
    lastID() {
      const lastInstance = this.last();
      if (lastInstance) {
        return lastInstance.id;
      }

      return 0;
    },
    nextID() {
      return this.lastID() + 1;
    },
    find(callback) {
      return this.instances.find(callback);
    },
    load() {
      const data = localStorage.getItem('projects');
      if (data) {
        this.instances = JSON.parse(data, reviver);
        return true;
      } else {
        return false;
      }
    },
  };

  return instance;
}

class Model {
  id = undefined;
  errors = createErrorCollection();

  save(modelStatic) {
    this.validate();
    if (this.errors.size() === 0) {
      this.id = modelStatic.nextID();
      modelStatic.instances.push(this);
      return true;
    } else {
      return false;
    }
  }

  update(data) {
    const validationInstance = Object.create(this);
    Object.assign(validationInstance, data);
    validationInstance.validate();

    if (validationInstance.errors.size() === 0) {
      Object.assign(this, data);
      return { success: true };
    } else {
      return { success: false, validationInstance };
    }
  }

  destroy(modelStatic) {
    const index = modelStatic.instances.indexOf(this);
    if (index >= 0) {
      modelStatic.instances.splice(index, 1);
      return true;
    } else {
      const error = createError(
        'Instance was not destroyed because it was not found in storage'
      );
      this.errors.add(error);
      return false;
    }
  }

  validate() {}
}

export { createModelStatic, Model };
