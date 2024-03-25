import { createError } from './error.mjs';
import { createModel, createModelStatic } from './model.mjs';

function createTaskStatic() {
  const modelStatic = createModelStatic();

  const overridesStatic = {};

  const instanceStatic = {};

  return Object.assign({}, modelStatic, overridesStatic, instanceStatic);
}

// "Class"
const Task = createTaskStatic();

function createTask(description) {
  const model = createModel();

  const overrides = {
    save(modelStatic = Task) {
      model.save(modelStatic);
    },
    validate() {
      model.errors.clear();
      if (description === '') {
        const error = createError('Description cannot be blank');
        model.errors.add(error);
      }

      if (description.length < 2) {
        const error = createError('Description must be 2 or more characters');
        model.errors.add(error);
      }
    },
  };

  let todoID;

  const instance = {
    get description() {
      return description;
    },
    set description(value) {
      description = value;
    },
    get todoID() {
      return todoID;
    },
  };

  return Object.assign({}, model, overrides, instance);
}

export { Task, createTask };
