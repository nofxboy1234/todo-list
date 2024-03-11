import { form } from './_form';

const view = {
  render: function (task) {
    return form(task);
  },
};

const editView = () => {
  return Object.create(view);
};

export { editView };
