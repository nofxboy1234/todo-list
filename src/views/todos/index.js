import { todoPartial } from './_todo';
import { contentContainer } from '../layouts/application';
import { clearContent } from '../domCommon';

const render = (todos) => {
  clearContent();
  todos.forEach((todo) => {
    const todoDiv = document.createElement('p');

    const titleDiv = document.createElement('div');
    titleDiv.textContent = todo.title;
    todoDiv.appendChild(titleDiv);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.textContent = todo.dueDate;
    todoDiv.appendChild(dueDateDiv);



    contentContainer.appendChild(todoDiv);
  });
};

export { render };
