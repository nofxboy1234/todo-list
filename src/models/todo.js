import { Project } from './project';
import { createModel as Model } from './model';

const instanceProperties = {
  project: function () {
    return (
      Project.find(this.todo.projectID) || { project: { name: 'no project' } }
    );
  },
};

const Todo = Object.assign({}, Model('todo', instanceProperties));

const staticProperties = {
  childrenOfProject: function (projectInstance) {
    return projectInstance.todos();
  },
};
Object.assign(Todo, staticProperties);

export { Todo };
