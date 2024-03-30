import { clearContainer } from '../helpers';
import { contentContainer } from '../layouts/application';

function createNewView() {
  const update = (eventName, data) => { };

  const render = (project) => {
    clearContainer(contentContainer);

    const newProjectDiv = document.createElement('div');
    newProjectDiv.textContent = 'New Project Form';

    return newProjectDiv;
  };

  return { update, render };
}

export { createNewView };
