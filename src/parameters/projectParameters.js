import { createParameters as Parameters } from './parameters';

const instanceProperties = {};
const ProjectParameters = Object.assign({}, Parameters(instanceProperties));
const staticProperties = {};
Object.assign(ProjectParameters, staticProperties);

const initialParams = {
  id: undefined,
  project: {
    name: '',
  },
};
const params = ProjectParameters.new(initialParams);

export { params };
