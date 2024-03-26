import { createErrorCollection } from './errorCollection.mjs';
import { createError } from './error.mjs';

class Project {
  static instances = [];

  id = undefined;
  errors = createErrorCollection();

  constructor(name) {
    this.name = name;
  }

  static all() {
    return this.instances;
  }

  static first() {
    return this.instances.at(0);
  }

  static last() {
    return this.instances.at(-1);
  }

  static lastID() {
    const lastInstance = this.last();
    if (lastInstance) {
      return lastInstance.id;
    }

    return 0;
  }

  static nextID() {
    return this.lastID() + 1;
  }

  save() {
    this.validate();
    if (this.errors.size() === 0) {
      this.id = Project.nextID();
      Project.instances.push(this);
      return true;
    } else {
      return false;
    }
  }

  validate() {
    this.errors.clear();
    if (this.name === '') {
      const error = createError('Name cannot be blank');
      this.errors.add(error);
    }

    if (this.name.length < 2) {
      const error = createError('Name must be 2 or more characters');
      this.errors.add(error);
    }

    if (Project.all().find((project) => project.name === this.name)) {
      const error = createError('A project already exists with this name');
      this.errors.add(error);
    }
  }

  todos() {
    console.log('Return all todos pointing to this project');
    // return Todo.all().filter((todo) => todo.projectID === id);
  }
}

export { Project };
