import { formPartial } from './_form';
import { contentContainer } from '../layouts/application';

const render = (todo) => {
  contentContainer.appendChild(formPartial(todo));
};

export { render };
