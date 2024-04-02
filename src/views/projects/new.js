import { createForm } from './_form';

function createNewView() {
  const update = (eventName, data) => {};

  const render = (project) => {
    const form = createForm(project);

    return form;
  };

  return { update, render };
}

export { createNewView };
