import { createParameters as Parameters } from './parameters';

const instanceProperties = { instanceName: 'taskParameters' };
const TaskParameters = Object.assign({}, Parameters(instanceProperties));
const staticProperties = {};
Object.assign(TaskParameters, staticProperties);

const initialParams = {
  data: {
    id: undefined,
    description: '',
    complete: false,
    todoID: undefined,
  },
};
const taskParams = TaskParameters.new(initialParams);

export { taskParams };
