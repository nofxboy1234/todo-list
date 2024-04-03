import { events } from '../../models/project.mjs';
import { createForm } from './_form';

function createNewView() {
  const update = (eventName, data) => {
    if (eventName === events.createFailed) {
      const project = data;
      const rendered = render(project);
      if (rendered) {
        contentContainer.clear();
        contentContainer.appendChild(rendered.form);
        rendered.focus();
      }
    }
  };

  const render = (project) => {
    return createForm(project);
  };

  return { update, render };
}

export { createNewView };
