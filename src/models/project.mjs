import { Model, createModelStatic } from './model.mjs';
import { createError } from '../errors/error.mjs';
import { todoStatic } from './todo.mjs';
import { publish } from '../messageQueue/messageQueue.mjs';

const events = {
  create: 'projectCreated',
  createFailed: 'projectCreateFailed',
};

const projectStatic = createModelStatic('project');

class Project extends Model {
  constructor(name) {
    super();
    this.name = name;
  }

  save() {
    const success = super.save(projectStatic);
    if (success) {
      localStorage.setItem('projects', JSON.stringify(projectStatic.instances));
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
