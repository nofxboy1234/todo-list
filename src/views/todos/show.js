import { Partial } from './_todo';

const view = {
  render: function (todo) {
    return Partial(todo);
  },
};

const showView = () => {
  return Object.create(view);
};

export { showView };
