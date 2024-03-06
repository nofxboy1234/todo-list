import { renderer } from './renderer';

const showRenderer = (resourceView) => {
  return Object.create(renderer).init(resourceView);
};

export { showRenderer };
