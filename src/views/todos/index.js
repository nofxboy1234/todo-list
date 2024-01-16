import { contentContainer } from '../layouts/application';
import { clearContent } from '../domCommon';

import { router } from '../../router';

const redirectTo = (path, ...params) => router.redirectTo(path, ...params);

const render = (todos) => {
  clearContent();
  todos.forEach((todo) => {
    const todoDiv = document.createElement('p');

    const showTodo = () => {
      redirectTo('/todos', todo.id);
    };

    const destroyTodo = () => {
      // console.log('destroy');
      redirectTo('/todos', todo.id, 'DELETE');
    };

    const titleDiv = document.createElement('div');
    titleDiv.textContent = todo.title;
    titleDiv.addEventListener('click', showTodo);
    todoDiv.appendChild(titleDiv);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.textContent = todo.dueDate;
    todoDiv.appendChild(dueDateDiv);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.addEventListener('click', destroyTodo);
    todoDiv.appendChild(deleteButton);

    contentContainer.appendChild(todoDiv);
  });
};

export { render };
