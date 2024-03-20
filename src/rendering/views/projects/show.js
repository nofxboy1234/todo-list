import { partial } from './_project';

const view = {
  render: function (project) {
    return partial(project);
  },
};

const createShowView = () => {
  return Object.create(view);
};

export { createShowView };
