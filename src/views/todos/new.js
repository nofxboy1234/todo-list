import { form } from './_form';

const view = {
  render: function (todo) {
    return form(todo);
  },
};

const newView = () => {
  return Object.create(view);
};

export { newView };
