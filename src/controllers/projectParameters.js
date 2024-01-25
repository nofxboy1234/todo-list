import { createParameters as Parameters } from './parameters';

const instanceProperties = {};

// const TodoParameters = Object.create(Parameters(instanceProperties));
const ProjectParameters = Object.assign({}, Parameters(instanceProperties));

const staticProperties = {};
Object.assign(ProjectParameters, staticProperties);

const params = ProjectParameters.new({
  id: undefined,
  project: {
    name: '',
  },
});

export { params };
