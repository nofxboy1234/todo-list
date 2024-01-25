import { createButton } from '../helpers';
import {
  redirectTo,
  todosPath,
  newTodoPath,
  editTodoPath,
  todoPath,
  rootPath,
} from '../../router';

const render = (todos) => {
  const todoParagraph = document.createElement('p');
  todos.forEach((data) => {
    const showTodo = () => {
      redirectTo('GET', todoPath, data);
    };

    const destroyTodo = () => {
      redirectTo('DELETE', todoPath, data);
    };

    const titleDiv = document.createElement('div');
    titleDiv.textContent = data.todo.title;
    titleDiv.addEventListener('click', showTodo);
    todoParagraph.appendChild(titleDiv);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.textContent = data.todo.dueDate;
    todoParagraph.appendChild(dueDateDiv);

    const deleteButton = createButton('button', 'DELETE', 'deleteButtonID');
    deleteButton.addEventListener('click', destroyTodo);
    todoParagraph.appendChild(deleteButton);
  });

  return todoParagraph;
};

export { render };
