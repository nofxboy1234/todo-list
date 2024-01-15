import { todoPartial } from './_todo';
import { contentContainer } from '../layouts/application';
import { clearContent } from '../domCommon';

const render = (todos) => {
  clearContent();
  todos.forEach((todo) => contentContainer.appendChild(todoPartial(todo)));
};

export { render };
