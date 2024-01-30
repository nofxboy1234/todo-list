import { Todo } from './todo';
import { createModel as Model } from './model';

const instanceProperties = {
  todos: function () {
    return Todo.all().filter(
      (todoInstance) => todoInstance.todo.projectID === this.id
    );
  },
};

const Project = Object.assign({}, Model('project', instanceProperties));

const staticProperties = {};
Object.assign(Project, staticProperties);

export { Project };
