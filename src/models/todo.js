import { Project } from './project';
import { createModel as Model } from './applicationRecord';

const Todo = Object.create(Model());
const TodoExtension = {
  project: function () {
    return Project.find(this.projectID);
  },
};
Object.assign(Todo, TodoExtension);

export { Todo };
