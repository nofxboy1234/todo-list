import { formPartial } from './_form';
import { flexItemRight } from '../layouts/application';

const render = (todo) => {
  flexItemRight.appendChild(formPartial(todo));
};

export { render };
