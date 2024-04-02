import { createForm } from './_form';

function createNewView() {
  const update = (eventName, data) => {};

  const render = (project) => {
    return createForm(project);
  };

  return { update, render };
}

export { createNewView };
