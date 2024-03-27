import { Model, createModelStatic } from './model.mjs';
import { createError } from '../errors/error.mjs';

const taskStatic = createModelStatic('task');

class Task extends Model {
  constructor(description, todoID) {
    super();
    this.description = description;
    this.todoID = todoID;
  }

  save() {
    return super.save(taskStatic);
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

export { taskStatic, Task };

const task1 = new Task('task1 description', 1);
if (task1.save()) {
  console.log(`Saved ${task1.description} successfully`);
}
