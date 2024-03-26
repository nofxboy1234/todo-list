import { createErrorCollection } from './errorCollection.mjs';
import { createError } from './error.mjs';

class Task {
  static instances = [];

  id = undefined;
  errors = createErrorCollection();

  constructor(description, todoID) {
    this.description = description;
    this.todoID = todoID;
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
      this.id = Task.nextID();
      Task.instances.push(this);
      return true;
    } else {
      return false;
    }
  }

  validate() {
    this.errors.clear();
    if (this.description === '') {
      const error = createError('Description cannot be blank');
      this.errors.add(error);
    }

    if (this.description.length < 2) {
      const error = createError('Description must be 2 or more characters');
      this.errors.add(error);
    }
  }
}

export { Task };
