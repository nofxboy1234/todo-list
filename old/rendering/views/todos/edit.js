import { form } from './_form';

const view = {
  render: function (todo) {
    return form(todo);
  },
};

const editView = () => {
  return Object.create(view);
};

export { editView };
