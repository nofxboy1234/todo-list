import { Project } from './project';
import { createModel as Model } from './model';
import { Task } from './task';

const instanceProperties = {
  project: function () {
    return (
      Project.find(this.data.projectID) || { data: { name: 'no project' } }
    );
  },
  tasks: function () {
    return Task.all().filter((task) => task.data.todoID === this.data.id);
  },
  destroyDependent: function () {
    this.tasks().forEach((task) => {
      task.destroy();
    });
  },
  updateDependent: function () {
    this.data.tasks.forEach((task) => {
      const updatedData = {
        data: {
          todoID: this.data.id,
        },
      };
      task.update(updatedData);
    });
  },
};
const Todo = Object.assign({}, Model(instanceProperties));
const staticProperties = {};
Object.assign(Todo, staticProperties);

export { Todo };
