import { form } from './_form';

const view = {
  render: function (project) {
    return form(project);
  },
};

const editView = () => {
  return Object.create(view);
};

export { editView };
