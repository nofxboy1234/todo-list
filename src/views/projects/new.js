import { createForm } from './_form';

function createNewView() {
  const focusID = 'nameID';

  const update = (eventName, data) => {};

  const render = (project) => {
    const form = createForm(project);

    return form;
  };

  return { update, render, focusID };
}

export { createNewView };
