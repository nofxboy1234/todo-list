import { createParameters as Parameters } from './parameters';

const instanceProperties = {};

// const TodoParameters = Object.create(Parameters(instanceProperties));
const TodoParameters = Object.assign({}, Parameters(instanceProperties));

const staticProperties = {};
Object.assign(TodoParameters, staticProperties);

const params = TodoParameters.new('todo', {
  id: undefined,
  todo: {
    title: '',
    description: '',
    dueDate: '',
    priority: 'high',
    checkList: {},
    projectID: undefined,
  },
});

export { params };
