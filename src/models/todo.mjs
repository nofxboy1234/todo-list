import { Model, createModelStatic } from './model.mjs';
import { createError } from '../errors/error.mjs';
import { taskStatic } from './task.mjs';
import { publish } from '../messageQueue/messageQueue.mjs';
import { projectStatic } from './project.mjs';

const events = {
  create: 'todoCreated',
  createFailed: 'todoCreateFailed',
  update: 'todoUpdated',
  updateFailed: 'todoUpdateFailed',
  destroy: 'todoDestroyed',
  destroyFailed: 'todoDestroyFailed',
};

function createTodoStatic() {
  let reviverModelInstance;

  const addMethodsBackToModelInstance = (modelInstance, value) => {
    Object.assign(modelInstance, value);
  };

  function reviver(key, value) {
    if (key === 'errors') {
      return createErrorCollection();
    }

    if (key === 'id') {
      reviverModelInstance = this;
    }

    if (value === reviverModelInstance) {
      const modelInstance = new Todo(
        value.title,
        value.description,
        value.dueDate,
        value.priority,
        value.projectID
      );
      addMethodsBackToModelInstance(modelInstance, value);

      return modelInstance;
    }

    return value;
  }

  const modelStatic = createModelStatic('todo');

  function load() {
    const data = localStorage.getItem('todos');
    if (data) {
      this.instances = JSON.parse(data, reviver);
      return true;
    } else {
      return false;
    }
  }

  return Object.assign({}, modelStatic, { load });
}

const todoStatic = createTodoStatic();

class Todo extends Model {
  constructor(
    title = '',
    description = '',
    dueDate = '',
    priority = 'low',
    projectID = 1
  ) {
    super();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectID = projectID;
  }

  save() {
    const success = super.save(todoStatic);
    if (success) {
      const data = JSON.stringify(projectStatic.instances);
      localStorage.setItem('todos', data);
      publish(events.create, this);
    } else {
      publish(events.createFailed, this);
    }

    return success;
  }

  update(data) {
    const resultsObject = super.update(data);
    if (resultsObject.success) {
      publish(events.update, this);
    } else {
      publish(events.updateFailed, resultsObject.validationInstance);
    }
  }

  destroy() {
    const success = super.destroy(todoStatic);
    if (success) {
      publish(events.destroy, this);
    } else {
      publish(events.destroyFailed, this);
    }
  }

  validate() {
    if (this.title === '') {
      const error = createError('Title cannot be blank');
      this.errors.add(error);
    }

    if (this.title.length < 2) {
      const error = createError('Title must be 2 or more characters');
      this.errors.add(error);
    }

    if (this.description === '') {
      const error = createError('Description cannot be blank');
      this.errors.add(error);
    }

    if (this.description.length < 2) {
      const error = createError('Description must be 2 or more characters');
      this.errors.add(error);
    }

    if (
      todoStatic
        .all()
        .find((todo) => todo.id != this.id && todo.title === this.title)
    ) {
      const error = createError('A todo already exists with this title');
      this.errors.add(error);
    }
  }

  tasks() {
    return taskStatic.all().filter((task) => task.todoID === this.id);
  }

  project() {
    return projectStatic.all().find((project) => project.id === this.projectID);
  }
}

export { events, todoStatic, Todo };
