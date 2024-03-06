import { renderer } from './renderer';

const newRenderer = (resourceView) => {
  return Object.create(renderer).init(resourceView);
};

export { newRenderer };
