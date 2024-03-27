import { Model, createModelStatic } from './model.mjs';
import { createError } from '../errors/error.mjs';
import { taskStatic } from './task.mjs';

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
    return super.save(todoStatic);
  }

  destroy() {
    super.destroy(todoStatic);
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
}

export { todoStatic, Todo };
