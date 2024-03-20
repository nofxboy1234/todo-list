import { Partial } from './_project';

const view = {
  render: function (project) {
    return Partial(project);
  },
};

const showView = () => {
  return Object.create(view);
};

export { showView };
