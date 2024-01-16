import { contentContainer } from '../layouts/application';
import { clearContent } from '../domCommon';
import { todoPartial } from './_todo';
import { router } from '../../router';

const render = (todo) => {
  if (!todo) return;

  clearContent();
  contentContainer.appendChild(todoPartial(todo));
};

export { render };
