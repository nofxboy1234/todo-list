import { clearContainer } from '../helpers';
import { contentContainer } from '../layouts/application';
import { createForm } from './_form';

function createNewView() {
  const update = (eventName, data) => {};

  const render = (project) => {
    clearContainer(contentContainer);

    const form = createForm(project);

    return form;
  };

  return { update, render };
}

export { createNewView };
