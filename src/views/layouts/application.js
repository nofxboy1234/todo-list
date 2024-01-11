const createLayout = () => {
  const flexContainer = document.createElement('div');
  flexContainer.classList.add('flex-container');
  document.body.appendChild(flexContainer);

  const flexItemLeft = document.createElement('div');
  flexItemLeft.classList.add('flex-item', 'flex-item-left');
  flexContainer.appendChild(flexItemLeft);

  const flexItemRight = document.createElement('div');
  flexItemRight.classList.add('flex-item', 'flex-item-right');
  flexContainer.appendChild(flexItemRight);

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  flexItemLeft.appendChild(menuContainer);

  const headingItem = document.createElement('div');
  headingItem.classList.add('heading');
  headingItem.textContent = 'TODO LIST';
  menuContainer.appendChild(headingItem);

  const newTodoButton = document.createElement('button');
  newTodoButton.classList.add('new-todo-button');
  newTodoButton.textContent = 'New List';
  menuContainer.appendChild(newTodoButton);
};

export { createLayout };
