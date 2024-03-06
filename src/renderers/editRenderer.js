import { renderer } from './renderer';

const editRenderer = (resourceView) => {
  return Object.create(renderer).init(resourceView);
};

export { editRenderer };
