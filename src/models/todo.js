import { Project } from './project';
import { createModel as Model } from './model';

const instanceProperties = {
  project: function () {
    return (
      Project.find(this.data.projectID) || { data: { name: 'no project' } }
    );
  },
  destroyDependent: function () {
  },
};
const Todo = Object.assign({}, Model(instanceProperties));
const staticProperties = {};
Object.assign(Todo, staticProperties);

export { Todo };
