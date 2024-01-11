import { todoPartial } from './_todo';

const render = (todos) => {
  todos.forEach((todo) => document.body.appendChild(todoPartial(todo)));
};

export { render };
