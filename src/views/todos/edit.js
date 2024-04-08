import { subscribe } from '../../messageQueue/messageQueue.mjs';
import { events } from '../../models/todo.mjs';
import { contentContainer } from '../layouts/contentContainer';
import { createForm } from './_form';

function createEditView() {
  const update = (eventName, data) => {
    if (eventName === events.updateFailed) {
      const todo = data;
      const rendered = render(todo);
      if (rendered) {
        contentContainer.clearDomElement();
        contentContainer.appendRender(rendered.form);
        rendered.focus();
      }
    }

  };

  const render = (todo) => {
    return createForm(todo);
  };

  const instance = { update, render };
  subscribe(events.updateFailed, instance);

  return instance;
}

const editView = createEditView();

export { editView };
