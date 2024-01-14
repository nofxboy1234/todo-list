const formPartial = (todo) => {
  if (!todo.id) {
    todo.title = 'blank';
    todo.description = 'blank';
    todo.dueDate = 'blank';
    todo.priority = 'blank';
    todo.checkList = 'blank';
    todo.project = 'blank';
  }

  const todoForm = document.createElement('form');
  todoForm.classList.add('new-todo-form');
  // todoForm.action = 'todos/new';
  // todoForm.method = 'post';

  const titleDiv = document.createElement('div');
  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'title:';
  titleLabel.htmlFor = 'titleID';
  titleDiv.appendChild(titleLabel);
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'titleID';
  titleInput.name = 'title';
  titleInput.value = todo.title;
  titleDiv.appendChild(titleInput);
  todoForm.appendChild(titleDiv);

  const descriptionDiv = document.createElement('div');
  const descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'description:';
  descriptionLabel.htmlFor = 'descriptionID';
  descriptionDiv.appendChild(descriptionLabel);
  const descriptionInput = document.createElement('textarea');
  descriptionInput.id = 'descriptionID';
  descriptionInput.name = 'description';
  descriptionInput.value = todo.description;
  descriptionDiv.appendChild(descriptionInput);
  todoForm.appendChild(descriptionDiv);

  const dueDateDiv = document.createElement('div');
  const dueDateLabel = document.createElement('label');
  dueDateLabel.textContent = 'due date:';
  dueDateLabel.htmlFor = 'dueDateID';
  dueDateDiv.appendChild(dueDateLabel);
  const dueDateInput = document.createElement('input');
  dueDateInput.type = 'date';
  dueDateInput.id = 'dueDateID';
  dueDateInput.name = 'dueDate';
  dueDateDiv.appendChild(dueDateInput);
  todoForm.appendChild(dueDateDiv);

  const submitDiv = document.createElement('div');
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  submitDiv.appendChild(submitButton);
  todoForm.appendChild(submitDiv);

  // const priorityDiv = document.createElement('div');
  // priorityDiv.textContent = todo.priority;
  // todoForm.appendChild(priorityDiv);

  // const checkListDiv = document.createElement('div');
  // for (const [key, value] of Object.entries(todo.checkList)) {
  //   const checkListEntryDiv = document.createElement('div');
  //   checkListEntryDiv.textContent = `- ${key}: ${value}`;
  //   checkListDiv.appendChild(checkListEntryDiv);
  // }

  // todoForm.appendChild(checkListDiv);

  // const projectDiv = document.createElement('div');
  // projectDiv.textContent = todo.project;
  // todoForm.appendChild(projectDiv);

  return todoForm;
};

export { formPartial };
