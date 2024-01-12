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

  const headingItem = document.createElement('div');
  headingItem.classList.add('heading');
  headingItem.textContent = 'TODO LIST';
  flexItemLeft.appendChild(headingItem);

  const newTodoButton = document.createElement('button');
  newTodoButton.classList.add('new-todo-button');
  newTodoButton.textContent = 'New List';
  flexItemLeft.appendChild(newTodoButton);
  newTodoButton.addEventListener('click', () =>
    flexItemRight.appendChild(newTodoForm)
  );

  const newTodoForm = document.createElement('div');
  newTodoForm.classList.add('new-todo-form');
};

export { createLayout };
