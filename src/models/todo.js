import { Project } from './project';
import { createModel as Model } from './applicationRecord';

const instanceProperties = {
  project: function () {
    return Project.find(this.projectID);
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
