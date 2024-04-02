function createNewView() {
  const update = (eventName, data) => {};

  const render = (todo) => {
    const newTodoDiv = document.createElement('div');
    newTodoDiv.textContent = 'New Todo Form';

    return newTodoDiv;
  };

  return { update, render };
}

export { createNewView };
