import { todoPartial } from './_todo';

const render = (todo) => {
  const headerDiv = document.createElement('h1');
  headerDiv.textContent = 'Edit Todo';
  document.body.appendChild(headerDiv);

  document.body.appendChild(todoPartial(todo));
};

export { render };
