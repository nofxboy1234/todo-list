import { createParameters as Parameters } from './parameters';

const instanceProperties = { instanceName: 'projectParameters' };
const ProjectParameters = Object.assign({}, Parameters(instanceProperties));
const staticProperties = {};
Object.assign(ProjectParameters, staticProperties);

const initialParams = {
  data: {
    id: undefined,
    name: '',
  },
};
const params = ProjectParameters.new(initialParams);

export { params };
