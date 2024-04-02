import { clearContainer } from '../helpers';
import { contentContainer } from '../layouts/application';

function createNewView() {
  const update = (eventName, data) => { };

  const render = (task) => {
    clearContainer(contentContainer);

    const newTaskDiv = document.createElement('div');
    newTaskDiv.textContent = 'New Task Form';

    return newTaskDiv;
  };

  return { update, render };
}

export { createNewView };
