import { formPartial } from './_form';
import { contentContainer } from '../layouts/application';
import { clearContent } from '../helpers';

const render = (todo) => {
  clearContent();
  contentContainer.appendChild(formPartial(todo));
  document.getElementById('titleID').focus();
};

export { render };
