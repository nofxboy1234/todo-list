import { Partial } from './_task';

const view = {
  render: function (task) {
    return Partial(task);
  },
};

const showView = () => {
  return Object.create(view);
};

export { showView };
