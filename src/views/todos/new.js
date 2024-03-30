import { clearContainer } from '../helpers';
import { contentContainer } from '../layouts/application';

const createNewView = () => {
  const update = (eventName, data) => {};

  const render = (todo) => {
    clearContainer(contentContainer);

    const newTodoDiv = document.createElement('div');
    newTodoDiv.textContent = 'New Todo Form';

    return newTodoDiv;
  };

  return { update, render };
};

export { createNewView };
