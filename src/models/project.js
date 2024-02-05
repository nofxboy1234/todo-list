import { Todo } from './todo';
import { createModel as Model } from './model';

const instanceProperties = {
  todos: function () {
    return Todo.all().filter(
      (todo) => todo.data.projectID === this.data.id
    );
  },
};
const Project = Object.assign({}, Model(instanceProperties));
const staticProperties = {};
Object.assign(Project, staticProperties);

export { Project };
