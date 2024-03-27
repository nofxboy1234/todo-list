import { form } from './_form';

const view = {
  render: function (task) {
    return form(task);
  },
};

const newView = () => {
  return Object.create(view);
};

export { newView };
