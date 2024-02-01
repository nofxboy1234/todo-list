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

const staticProperties = {
  findByName: function (name) {
    return this.instances.find((instance) => instance.project.name === name);
  },
};
Object.assign(Project, staticProperties);

export { Project };
