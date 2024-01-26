import { Todo } from './todo';
import { createModel as Model } from './model';

const instanceProperties = {
  todos: function () {
    return Todo.all.filter((todo) => todo.projectID === this.id);
  },
};

// const Project = Object.create(Model(instanceProperties));
const Project = Object.assign({}, Model(instanceProperties));

const staticProperties = {};
Object.assign(Project, staticProperties);

export { Project };
