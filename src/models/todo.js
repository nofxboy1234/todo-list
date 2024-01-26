import { Project } from './project';
import { createModel as Model } from './model';

const instanceProperties = {
  project: function () {
    return Project.find(this.projectID) || { name: 'no project' };
  },
};

// const Todo = Object.create(Model(instanceProperties));
const Todo = Object.assign({}, Model(instanceProperties));

const staticProperties = {
  hello: function () {
    console.log('hello');
  },
};
Object.assign(Todo, staticProperties);

export { Todo };
