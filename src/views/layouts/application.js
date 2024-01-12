import { TodosController } from '../../controllers/todosController.js';
const todosController = TodosController;

const newTodo = () => {
  todosController.new();
};

const flexContainer = document.createElement('div');
flexContainer.classList.add('flex-container');
document.body.appendChild(flexContainer);

const menuContainer = document.createElement('div');
menuContainer.classList.add('flex-item', 'flex-item-left');
flexContainer.appendChild(menuContainer);

const contentContainer = document.createElement('div');
contentContainer.classList.add('flex-item', 'flex-item-right');
flexContainer.appendChild(contentContainer);

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
};

export { createLayout, menuContainer, contentContainer };
