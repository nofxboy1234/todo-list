import { createForm } from './_form';

const view = {
  init: function (container, focusID) {
    this.container = container;
    this.focusID = focusID;
  },
  render: function (project) {
    return createForm(project);
  },
};

const createNewView = (container, focusID) => {
  return Object.create(view).init(container, focusID);
};

export { createNewView };
