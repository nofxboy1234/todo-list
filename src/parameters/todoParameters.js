import { createParameters as Parameters } from './parameters';

const instanceProperties = { instanceName: 'todoParameters' };
const TodoParameters = Object.assign({}, Parameters(instanceProperties));
const staticProperties = {};
Object.assign(TodoParameters, staticProperties);

const initialParams = {
  data: {
    id: undefined,
    title: '',
    description: '',
    dueDate: '',
    priority: 'high',
    projectID: 1,
  },
};
const todoParams = TodoParameters.new(initialParams);

export { todoParams };
