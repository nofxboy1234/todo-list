const createLayout = () => {
  const flexContainer = document.createElement('div');
  flexContainer.classList.add('flex-container');
  document.body.appendChild(flexContainer);

  const flexItem1 = document.createElement('div');
  flexItem1.classList.add('flex-item', 'flex-item-left');
  flexContainer.appendChild(flexItem1);

  const flexItem2 = document.createElement('div');
  flexItem2.classList.add('flex-item', 'flex-item-right');
  flexContainer.appendChild(flexItem2);
};

export { createLayout };
