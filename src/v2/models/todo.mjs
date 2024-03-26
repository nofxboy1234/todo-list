import { createError } from './error.mjs';
import { Model } from './model.mjs';

class Todo extends Model {
  constructor(title, description, dueDate, priority, projectID) {
    super();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectID = projectID;
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
      const error = createError('A Todo already exists with this title');
      this.errors.add(error);
    }
  }

  tasks() {
    console.log('Return all tasks pointing to this todo');
  }
}

export { Todo };
