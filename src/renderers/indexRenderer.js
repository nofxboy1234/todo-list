import { renderer } from './renderer';

const indexRenderer = (resourceView) => {
  return Object.create(renderer).init(resourceView);
};

export { indexRenderer };
