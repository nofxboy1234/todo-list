import { formPartial } from './_form';
import { contentContainer } from '../layouts/application';

const render = (todo, todosController) => {
  contentContainer.appendChild(formPartial(todo, todosController));
};

export { render };
