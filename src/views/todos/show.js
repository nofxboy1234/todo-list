import { todoPartial } from './_todo';

const render = (todo) => {
  
  document.body.appendChild(todoPartial(todo));
};

export { render };
