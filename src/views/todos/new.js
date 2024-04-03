import { createForm } from './_form';

function createNewView() {
  const update = (eventName, data) => {};

  const render = (todo) => {
    return createForm(todo);
  };

  return { update, render };
}

export { createNewView };
