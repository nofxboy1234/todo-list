import { Model, createModelStatic } from './model.mjs';
import { createError } from '../errors/error.mjs';
import { publish } from '../messageQueue/messageQueue.mjs';
import { todoStatic } from './todo.mjs';

const events = {
  create: 'taskCreated',
  createFailed: 'taskCreateFailed',
  update: 'taskUpdated',
  updateFailed: 'taskUpdateFailed',
};

function createTaskStatic() {
  let reviverModelInstance;

  const addMethodsBackToModelInstance = (modelInstance, value) => {
    Object.assign(modelInstance, value);
  };

  const createModelInstance = (value) => {
    const className = Task;
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

  const modelStatic = createModelStatic('task');

  function load() {
    const data = localStorage.getItem('tasks');
    if (data) {
      this.instances = JSON.parse(data, reviver);
      return true;
    } else {
      return false;
    }
  }

  return Object.assign({}, modelStatic, { load });
}

const taskStatic = createTaskStatic();

class Task extends Model {
  constructor(description, todoID, complete = false) {
    super();
    this.description = description;
    this.complete = complete;
    this.todoID = todoID;
  }

  save() {
    const success = super.save(taskStatic);
    if (success) {
      const data = JSON.stringify(projectStatic.instances);
      localStorage.setItem('tasks', data);
      publish(events.create, this);
    } else {
      publish(events.createFailed, this);
    }

    return success;
  }

  update(data) {
    const success = super.update(data);
    if (success) {
      publish(events.update, this);
    } else {
      publish(events.updateFailed, this);
    }
  }

  validate() {
    if (this.description === '') {
      const error = createError('Description cannot be blank');
      this.errors.add(error);
    }

    if (this.description.length < 2) {
      const error = createError('Description must be 2 or more characters');
      this.errors.add(error);
    }
  }

  todo() {
    return todoStatic.all().find((todo) => todo.id === this.todoID);
  }
}

export { events, taskStatic, Task };
