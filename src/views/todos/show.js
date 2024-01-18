import { contentContainer } from '../layouts/application';
import { clearContent } from '../helpers';
import { todoPartial } from './_todo';

const render = (todo) => {
  if (!todo) return;

  clearContent();
  contentContainer.appendChild(todoPartial(todo));
};

export { render };
