import { Model, createModelStatic } from './model.mjs';
import { createError } from '../errors/error.mjs';
import { taskStatic } from './task.mjs';
import { publish } from '../messageQueue/messageQueue.mjs';
import { projectStatic } from './project.mjs';

const events = {
  create: 'todoCreated',
  update: 'todoUpdated',
  destroy: 'todoDestroyed',
};

const todoStatic = createModelStatic('todo');

class Todo extends Model {
  constructor(title, description, dueDate, priority, projectID) {
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
      publish(events.create, this);
    }

    return success;
  }

  update(data) {
    super.update(data);
    publish(events.update, this);
  }

  destroy() {
    super.destroy(todoStatic);
    publish(events.destroy, this);
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

    if (todoStatic.all().find((todo) => todo.title === this.title)) {
      const error = createError('A todo already exists with this title');
      this.errors.add(error);
    }
  }

  tasks() {
    return taskStatic.all().filter((task) => task.todoID === this.id);
  }

  project() {
    // look through all projects and find project with id === projectID
    return projectStatic.all().find((project) => project.id === this.projectID);
  }
}

export { todoStatic, Todo };
