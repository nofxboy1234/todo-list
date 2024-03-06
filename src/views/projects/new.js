import { form } from './_form';

const view = {
  render: function (project) {
    return form(project);
  },
};

const newView = () => {
  return Object.create(view);
};

export { newView };
