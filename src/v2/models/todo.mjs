import { Model, createModelStatic } from './model.mjs';
import { createError } from '../errors/error.mjs';

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
    console.log('Return all tasks pointing to this todo');
    // return Todo.all().filter((todo) => todo.projectID === id);
  }
}

export { todoStatic, Todo };

// const todo1 = new Todo('todo1', 'todo1 description', '2024-03-27', 'high', 1);
// if (todo1.save()) {
//   console.log(`Saved ${todo1.name} successfully`);
// }

// const updateData = {
//   title: 'todo1 updated',
//   description: 'todo1 description updated',
//   dueDate: '2024-03-28',
//   priority: 'low',
//   projectID: 2,
// };
// todo1.update(updateData);

// console.log(todoStatic.all());
// console.log(todoStatic.first());
// console.log(todoStatic.last());
// console.log(todoStatic.lastID());
// console.log(todoStatic.nextID());


// todo1.destroy();

// console.log(todoStatic.all());
// console.log(todoStatic.first());
// console.log(todoStatic.last());
// console.log(todoStatic.lastID());
// console.log(todoStatic.nextID());
