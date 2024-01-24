import { redirectTo as todoRedirectTo } from '../../router';
import { createRouter as Router } from '../../router';

const todosRouter = Router().new('todo', 'todos');
const todoRedirectTo = todosRouter.redirectTo;

const todosPath = todosRouter.todosPath;
const newTodoPath = todosRouter.newTodoPath;

const newTodo = () => {
  todoRedirectTo(newTodoPath, 'GET');
};

const createFlexContainer = (...classList) => {
  const flexContainer = document.createElement('div');
  flexContainer.classList.add(...classList);
  return flexContainer;
};

const nestContainer = (parent, child) => parent.appendChild(child);

const flexContainer = createFlexContainer('flex-container');
nestContainer(document.body, flexContainer);

const menuContainer = createFlexContainer('flex-item', 'flex-item-left');
nestContainer(flexContainer, menuContainer);

const contentContainer = createFlexContainer('flex-item', 'flex-item-right');
nestContainer(flexContainer, contentContainer);

const createLayout = () => {
  const headingItem = document.createElement('div');
  headingItem.classList.add('heading');
  headingItem.textContent = 'TODO LIST';
  menuContainer.appendChild(headingItem);

  const newTodoButton = document.createElement('button');
  newTodoButton.classList.add('new-todo-button');
  newTodoButton.textContent = 'New List';
  menuContainer.appendChild(newTodoButton);

  newTodoButton.addEventListener('click', newTodo);

  todoRedirectTo(todosPath(), 'GET');
};

export { createLayout, menuContainer, contentContainer };
