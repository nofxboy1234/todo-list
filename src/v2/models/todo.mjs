import { createErrorCollection } from './errorCollection.mjs';
import { createError } from './error.mjs';

class Todo {
  static instances = [];

  id = undefined;
  errors = createErrorCollection();

  constructor(title, description, dueDate, priority, projectID) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectID = projectID;
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
      this.id = Todo.nextID();
      Todo.instances.push(this);
      return true;
    } else {
      return false;
    }
  }

  update(data) {
    Object.assign(this, data);
    return true;
  }

  destroy() {
    const index = Todo.instances.indexOf(this);
    Todo.instances.splice(index, 1);
  }

  validate() {
    this.errors.clear();
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

    if (Todo.all().find((todo) => todo.title === this.title)) {
      const error = createError('A todo already exists with this title');
      this.errors.add(error);
    }
  }

  tasks() {
    console.log('Return all tasks pointing to this todo');
    // return Todo.all().filter((todo) => todo.projectID === id);
  }
}

export { Todo };
