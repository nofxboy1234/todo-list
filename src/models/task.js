import { Todo } from './todo';
import { createModel as Model, exists } from './model';

const instanceProperties = {
  todo: function () {
    return Todo.find(this.data.todoID) || { data: { title: 'no todo' } };
  },
  validate: function () {
    if (this.data.description === '') {
      this.errors.push('Description cannot be blank');
    }
    if (this.data.description.length < 2) {
      this.errors.push('Description must be 2 or more characters');
    }
    if (exists(Task, 'description', this)) {
      this.errors.push('A Task already exists with this description');
    }
  },
};
const Task = Object.assign({}, Model(instanceProperties));
const staticProperties = {};
Object.assign(Task, staticProperties);

export { Task };
