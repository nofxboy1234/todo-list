import { createParameters as Parameters } from './parameters';

const instanceProperties = {};

const TodoParameters = Object.create(Parameters(instanceProperties));

const staticProperties = {};
Object.assign(Todo, staticProperties);

const params = TodoParameters.new({
  title: '',
  description: '',
  dueDate: '',
  priority: 'high',
  checkList: {},
  projectID: undefined,
});

export { params };
