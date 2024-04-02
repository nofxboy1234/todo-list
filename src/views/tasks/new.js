function createNewView() {
  const update = (eventName, data) => { };

  const render = (task) => {
    const newTaskDiv = document.createElement('div');
    newTaskDiv.textContent = 'New Task Form';

    return newTaskDiv;
  };

  return { update, render };
}

export { createNewView };
