import { formPartial } from './_form';
import { contentContainer } from '../layouts/application';
import { clearContent } from '../helpers';

const render = (project) => {
  clearContent();
  contentContainer.appendChild(formPartial(project));
  document.getElementById('nameID').focus()
};

export { render };
