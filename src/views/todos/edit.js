import { subscribe } from '../../messageQueue/messageQueue.mjs';
import { events } from '../../models/todo.mjs';
import { events as taskEvents } from '../../models/task.mjs';
import { contentContainer } from '../layouts/contentContainer';
import { createForm } from './_form';

function createEditView() {
  const update = (eventName, data) => {
    if (eventName === events.updateFailed) {
      const todo = data;
      const rendered = render(todo);
      if (rendered) {
        contentContainer.clear();
        contentContainer.appendChild(rendered.form);
        rendered.focus();
      }
    }

    if (eventName === taskEvents.create) {
      const task = data;
      const rendered = render(task.todo());
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
  subscribe(events.updateFailed, instance);
  subscribe(taskEvents.create, instance);

  return instance;
}

const editView = createEditView();

export { editView };
