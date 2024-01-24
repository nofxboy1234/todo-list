import { createButton } from '../helpers';
import { redirectTo, routes } from '../../router';

const todosPath = routes.todosPath;
const newTodoPath = routes.newTodoPath;
const editTodoPath = routes.editTodoPath;
const todoPath = routes.todoPath;
const rootPath = routes.rootPath;

const render = (todos) => {
  const todoParagraph = document.createElement('p');
  todos.forEach((todo) => {
    const showTodo = () => {
      redirectTo('GET', todoPath, todo);
    };

    const destroyTodo = () => {
      redirectTo('DELETE', todoPath, todo);
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
