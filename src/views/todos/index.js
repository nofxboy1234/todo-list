import { contentContainer } from '../layouts/application';
import { clearContent, createButton } from '../helpers';
import { redirectTo } from '../../helpers';

const render = (todos) => {
  clearContent();
  todos.forEach((todo) => {
    const todoParagraph = document.createElement('p');

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

    const deleteButton = createButton('button', 'DELETE');
    deleteButton.addEventListener('click', destroyTodo);
    todoParagraph.appendChild(deleteButton);

    contentContainer.appendChild(todoParagraph);
  });
};

export { render };
