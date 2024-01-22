import { Todo } from './todo';
import { lastID } from './applicationRecord';

const projects = [];

const nextID = () => {
  return lastID(Project) + 1;
};

const Project = {
  new: function (name) {
    return {
      name,
      save: function () {
        this.id = nextID();
        projects.push(this);
        return true;
      },
      update: function (name) {
        Object.assign(this, {
          name,
        });
        return true;
      },
      destroy: function () {
        const removeIndex = projects.indexOf(this);
        projects.splice(removeIndex, 1);
      },
      todos: function () {
        return Todo.all.filter((todo) => todo.projectID === this.id);
      },
    };
  },
  all: function () {
    return projects;
  },
  find: function (id) {
    return projects.find((project) => project.id === id);
  },
  last: function () {
    return projects.at(-1);
  },
};

export { Project };
