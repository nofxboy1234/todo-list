import { Todo } from './todo';
import { createModel as Model } from './model';

const instanceProperties = {
  todo: function () {
    return Todo.find(this.data.todoID) || { data: { title: 'no todo' } };
  },
  destroyDependent: function () {},
};
const Task = Object.assign({}, Model(instanceProperties));
const staticProperties = {};
Object.assign(Task, staticProperties);

export { Task };
