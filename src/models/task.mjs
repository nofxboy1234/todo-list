import { Model, createModelStatic } from './model.mjs';
import { createError } from '../errors/error.mjs';
import { publish } from '../messageQueue/messageQueue.mjs';
import { todoStatic } from './todo.mjs';

const events = {
  create: 'taskCreated',
  createFailed: 'taskCreateFailed',
};

const taskStatic = createModelStatic('task');

class Task extends Model {
  constructor(description, todoID) {
    super();
    this.description = description;
    this.todoID = todoID;
  }

  save() {
    const success = super.save(taskStatic);
    if (success) {
      publish(events.create, this);
    } else {
      publish(events.createFailed, this);
    }

    return success;
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

export { taskStatic, Task };
