import { Model, createModelStatic } from './model.mjs';
import { createError } from '../errors/error.mjs';
import { todoStatic } from './todo.mjs';
import { publish } from '../messageQueue/messageQueue.mjs';
import { createErrorCollection } from '../errors/errorCollection.mjs';

const events = {
  create: 'projectCreated',
  createFailed: 'projectCreateFailed',
};

function createProjectStatic() {
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
      const modelInstance = new Project(value.name);
      addMethodsBackToModelInstance(modelInstance, value);

      return modelInstance;
    }

    return value;
  }

  const modelStatic = createModelStatic('project');

  function load() {
    const data = localStorage.getItem('projects');
    if (data) {
      this.instances = JSON.parse(data, reviver);
      return true;
    } else {
      return false;
    }
  }

  return Object.assign({}, modelStatic, { load });
}

const projectStatic = createProjectStatic();

class Project extends Model {
  constructor(name) {
    super();
    this.name = name;
  }

  save() {
    const success = super.save(projectStatic);
    if (success) {
      const data = JSON.stringify(projectStatic.instances);
      localStorage.setItem('projects', data);
      publish(events.create, this);
    } else {
      publish(events.createFailed, this);
    }

    return success;
  }

  validate() {
    if (this.name === '') {
      const error = createError('Name cannot be blank');
      this.errors.add(error);
    }

    if (this.name.length < 2) {
      const error = createError('Name must be 2 or more characters');
      this.errors.add(error);
    }

    if (projectStatic.all().find((project) => project.name === this.name)) {
      const error = createError('A project already exists with this name');
      this.errors.add(error);
    }
  }

  todos() {
    return todoStatic.all().filter((todo) => todo.projectID === this.id);
  }
}

export { events, projectStatic, Project };
