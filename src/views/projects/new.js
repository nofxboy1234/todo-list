import { subscribe } from '../../messageQueue/messageQueue.mjs';
import { events } from '../../models/project.mjs';
import { contentContainer } from '../layouts/contentContainer';
import { createForm } from './_form';

function createNewView() {
  const update = (eventName, data) => {
    if (eventName === events.createFailed) {
      const project = data;
      const rendered = render(project);
      if (rendered) {
        contentContainer.removeLastRenderFromCache();
        contentContainer.clearDomElement();
        contentContainer.appendRender(rendered.form);
        rendered.focus();
      }
    }
  };

  const render = (project) => {
    return createForm(project);
  };

  const instance = { update, render };
  subscribe(events.createFailed, instance);

  return instance;
}

const newView = createNewView();

export { newView };
