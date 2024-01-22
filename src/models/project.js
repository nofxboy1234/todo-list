import { Todo } from './todo';
import { createModel as Model } from './applicationRecord';


const Project = Object.create(Model());
const ProjectExtension = {
  hello: () => {
    console.log('hello');
  },
};
Object.assign(Project, ProjectExtension);

export { Project };
