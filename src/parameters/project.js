import { createParameters } from './parameters';

const initialParams = {
  data: {
    id: undefined,
    name: '',
  },
};
const params = createParameters(initialParams);

export { params };
