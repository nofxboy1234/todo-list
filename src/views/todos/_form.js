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

  const priorityDiv = document.createElement('div');
  const priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'priority:';
  priorityLabel.htmlFor = 'priorityID';
  priorityDiv.appendChild(priorityLabel);
  const prioritySelect = document.createElement('select');
  prioritySelect.id = 'priorityID';
  prioritySelect.name = 'priority';
  const lowOption = document.createElement('option');
  lowOption.value = 'low';
  lowOption.text = 'low';
  prioritySelect.add(lowOption);
  const mediumOption = document.createElement('option');
  mediumOption.value = 'medium';
  mediumOption.text = 'medium';
  prioritySelect.add(mediumOption);
  const highOption = document.createElement('option');
  highOption.value = 'high';
  highOption.text = 'high';
  prioritySelect.add(highOption);
  priorityDiv.appendChild(prioritySelect);
  todoForm.appendChild(priorityDiv);

  const projectDiv = document.createElement('div');
  const projectLabel = document.createElement('label');
  projectLabel.textContent = 'project:';
  projectLabel.htmlFor = 'projectID';
  projectDiv.appendChild(projectLabel);
  const projectSelect = document.createElement('select');
  projectSelect.id = 'projectID';
  projectSelect.name = 'project';
  const projectOption1 = document.createElement('option');
  projectOption1.value = 'project1';
  projectOption1.text = 'project1';
  projectSelect.add(projectOption1);
  const projectOption2 = document.createElement('option');
  projectOption2.value = 'project2';
  projectOption2.text = 'project2';
  projectSelect.add(projectOption2);
  const projectOption3 = document.createElement('option');
  projectOption3.value = 'project3';
  projectOption3.text = 'project3';
  projectSelect.add(projectOption3);
  projectDiv.appendChild(projectSelect);
  todoForm.appendChild(projectDiv);

  
  const submitDiv = document.createElement('div');
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  submitDiv.appendChild(submitButton);
  todoForm.appendChild(submitDiv);

  // const checkListDiv = document.createElement('div');
  // for (const [key, value] of Object.entries(todo.checkList)) {
  //   const checkListEntryDiv = document.createElement('div');
  //   checkListEntryDiv.textContent = `- ${key}: ${value}`;
  //   checkListDiv.appendChild(checkListEntryDiv);
  // }

  // todoForm.appendChild(checkListDiv);


  return todoForm;
};

export { formPartial };
