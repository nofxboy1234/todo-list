import { subscribe } from '../../messageQueue/messageQueue.mjs';
import { events } from '../../models/todo.mjs';
import { contentContainer } from '../layouts/contentContainer';
import { createForm } from './_form';

function createNewView() {
  const update = (eventName, data) => {
    if (eventName === events.createFailed) {
      const todo = data;
      const rendered = render(todo);
      if (rendered) {
        contentContainer.clear();
        contentContainer.appendChild(rendered.form);
        rendered.focus();
      }
    }
  };

  const render = (todo) => {
    return createForm(todo);
  };

  const instance = { update, render };
  subscribe(events.createFailed, instance);

  return instance;
}

const newView = createNewView();

export { newView };
