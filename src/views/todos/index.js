import { createButton } from '../helpers';
import { redirectTo } from '../../router';

const render = (todos) => {
  const todoParagraph = document.createElement('p');
  todos.forEach((todo) => {
    const showTodo = () => {
      redirectTo('/todos', todo.id);
    };

    const destroyTodo = () => {
      redirectTo('/todos', todo.id, 'DELETE');
    };

    const titleDiv = document.createElement('div');
    titleDiv.textContent = todo.title;
    titleDiv.addEventListener('click', showTodo);
    todoParagraph.appendChild(titleDiv);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.textContent = todo.dueDate;
    todoParagraph.appendChild(dueDateDiv);

    const deleteButton = createButton('button', 'DELETE', 'deleteButtonID');
    deleteButton.addEventListener('click', destroyTodo);
    todoParagraph.appendChild(deleteButton);
  });

  return todoParagraph;
};

export { render };
