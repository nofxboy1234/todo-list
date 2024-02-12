import { createParameters as Parameters } from './parameters';

const instanceProperties = {};
const TaskParameters = Object.assign({}, Parameters(instanceProperties));
const staticProperties = {};
Object.assign(TaskParameters, staticProperties);

const initialParams = {
  data: {
    id: undefined,
    description: '',
    complete: false,
  },
};
const params = TaskParameters.new(initialParams);

export { params };
