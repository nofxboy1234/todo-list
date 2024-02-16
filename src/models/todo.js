import { Project } from './project';
import { createModel as Model, exists } from './model';
import { Task } from './task';

const isPersistedTask = (task) => {
  return task.data.id ? true : false;
};

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
      if (!isPersistedTask(task)) {
        task.save();
        task.update(updatedData);
      }
    });
  },
  validate: function () {
    if (this.data.title === '') {
      this.errors.push('Title cannot be blank');
    }
    if (this.data.title.length < 2) {
      this.errors.push('Title must be 2 or more characters');
    }
    if (this.data.description === '') {
      this.errors.push('Description cannot be blank');
    }
    if (this.data.description.length < 2) {
      this.errors.push('Description must be 2 or more characters');
    }
    if (this.data.dueDate === '') {
      this.errors.push('Date cannot be blank');
    }
    if (!this.data.id) {
      if (exists(Todo, 'title', this)) {
        this.errors.push('A Todo already exists with this title');
      }
    }
  },
};
const Todo = Object.assign({}, Model(instanceProperties));
const staticProperties = {};
Object.assign(Todo, staticProperties);

export { Todo };
