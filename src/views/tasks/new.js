import { subscribe } from '../../messageQueue/messageQueue.mjs';
import { events } from '../../models/task.mjs';
import { contentContainer } from '../layouts/contentContainer';
import { createForm } from './_form';

function createNewView() {
  const update = (eventName, data) => {
    if (eventName === events.createFailed) {
      const task = data;
      const rendered = render(task);
      if (rendered) {
        contentContainer.removeLastRenderFromCache();
        contentContainer.clearDomElement();
        contentContainer.appendRender(rendered.form);
        rendered.focus();
      }
    }
  };

  const render = (task) => {
    return createForm(task);
  };

  const instance = { update, render };
  subscribe(events.createFailed, instance);

  return instance;
}

const newView = createNewView();

export { newView };
