import { createParameters } from './parameters';

const initialParams = {
  data: {
    id: undefined,
    description: '',
    complete: false,
    todoID: undefined,
  },
};
const params = createParameters(initialParams);

export { params };
