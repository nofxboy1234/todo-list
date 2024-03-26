import { createErrorCollection } from './errorCollection.mjs';

class Model {
  id = undefined;
  errors = createErrorCollection();

  static instances = [];

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
    const lastInstance = Model.last();
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
      this.id = Model.nextID();
      // const type = typeof this;
      Model.instances.push(this);
      return true;
    } else {
      return false;
    }
  }

  validate() {}
}

export { Model };
