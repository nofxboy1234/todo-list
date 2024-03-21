import { Project } from './project';
import { pathHelpers } from '../routing/helpers/todoProject';

const TodoProject = Object.create(Project);
const instanceProperties = {
  pathHelpers: pathHelpers,
};
Object.assign(TodoProject, instanceProperties);

export { TodoProject };
