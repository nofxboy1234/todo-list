import { Todo } from './todo';
import { createModel as Model } from './applicationRecord';

const Project = Object.create(Model());
const ProjectExtension = {
  todos: function () {
    return Todo.all.filter((todo) => todo.projectID === this.id);
  },
};
Object.assign(Project, ProjectExtension);

export { Project };
