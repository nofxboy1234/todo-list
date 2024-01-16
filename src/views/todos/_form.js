import { router } from '../../router';
import { Todo } from '../../models/todo';

const redirectTo = (path, ...params) => router.redirectTo(path, ...params);

const createLabel = (text, forID) => {
  const label = document.createElement('label');
  label.textContent = text;
  label.htmlFor = forID;
  return label;
};

const createInput = (type, id, name, value) => {
  const input = document.createElement('input');
  input.type = type;
  input.id = id;
  input.name = name;
  input.value = value;
  return input;
};

const createTextArea = (id, name, value) => {
  const textArea = document.createElement('textarea');
  textArea.id = id;
  textArea.name = name;
  textArea.value = value;
  return textArea;
};

const formPartial = (todo) => {
  if (!todo.id) {
    todo.title = '';
    todo.description = '';
    todo.dueDate = '';
    todo.priority = 'low';
    todo.checkList = {};
    todo.project = '';
  }

  const todoForm = document.createElement('form');
  todoForm.classList.add('new-todo-form');
  // todoForm.action = 'todos/new';
  // todoForm.method = 'post';

  const titleDiv = document.createElement('div');
  titleDiv.appendChild(createLabel('title:', 'titleID'));
  const titleInput = createInput('text', 'titleID', 'title', todo.title);
  titleDiv.appendChild(titleInput);
  todoForm.appendChild(titleDiv);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.appendChild(createLabel('description:', 'descriptionID'));
  const descriptionTextArea = createTextArea(
    'descriptionID',
    'description',
    todo.description
  );
  descriptionDiv.appendChild(descriptionTextArea);
  todoForm.appendChild(descriptionDiv);

  const dueDateDiv = document.createElement('div');
  dueDateDiv.appendChild(createLabel('due date:', 'dueDateID'));
  const dueDateInput = createInput(
    'date',
    'dueDateID',
    'dueDate',
    todo.dueDate
  );
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
  prioritySelect.value = todo.priority;
  priorityDiv.appendChild(prioritySelect);
  todoForm.appendChild(priorityDiv);

  const checkListDiv = document.createElement('div');

  const checkListLabelDiv = document.createElement('div');
  checkListLabelDiv.textContent = 'checklist:';
  checkListDiv.appendChild(checkListLabelDiv);

  if (todo.checkList) {
    for (const [key, value] of Object.entries(todo.checkList)) {
      const checkListPair = document.createElement('div');
      const checkBoxLabel = document.createElement('label');
      checkBoxLabel.textContent = key;
      checkBoxLabel.htmlFor = `checklist-${key}`;
      checkListDiv.appendChild(checkBoxLabel);
      checkListPair.appendChild(checkBoxLabel);

      const checkListCheckbox = document.createElement('input');
      checkListCheckbox.type = 'checkbox';
      checkListCheckbox.id = `checklist-${key}`;
      checkListCheckbox.name = 'checkList';
      checkListCheckbox.value = key;
      checkListCheckbox.checked = value;
      checkListPair.appendChild(checkListCheckbox);

      checkListDiv.appendChild(checkListPair);
    }
  }

  todoForm.appendChild(checkListDiv);

  const projectDiv = document.createElement('div');
  const projectLabel = document.createElement('label');
  projectLabel.textContent = 'project:';
  projectLabel.htmlFor = 'projectID';
  projectDiv.appendChild(projectLabel);

  const projectInput = document.createElement('input');
  projectInput.type = 'text';
  projectInput.setAttribute('list', 'projectsID');
  projectInput.id = 'projectID';
  projectInput.name = 'project';
  projectInput.value = todo.project;
  projectDiv.appendChild(projectInput);
  const projectDataList = document.createElement('datalist');
  projectDataList.id = 'projectsID';
  const projectOption1 = document.createElement('option');
  projectOption1.value = 'project1';
  projectOption1.text = 'project1';
  projectDataList.appendChild(projectOption1);
  const projectOption2 = document.createElement('option');
  projectOption2.value = 'project2';
  projectOption2.text = 'project2';
  projectDataList.appendChild(projectOption2);
  const projectOption3 = document.createElement('option');
  projectOption3.value = 'project3';
  projectOption3.text = 'project3';
  projectDataList.appendChild(projectOption3);
  projectDiv.appendChild(projectDataList);
  todoForm.appendChild(projectDiv);

  const createTodo = (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const description = descriptionTextArea.value;
    const dueDate = dueDateInput.value;
    const priority = prioritySelect.value;
    const checkList = todo.checkList;
    const project = projectInput.value;

    redirectTo(
      '/todos/create',
      title,
      description,
      dueDate,
      priority,
      checkList,
      project
    );
  };

  const updateTodo = (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const description = descriptionTextArea.value;
    const dueDate = dueDateInput.value;
    const priority = prioritySelect.value;
    const checkList = todo.checkList;
    const project = projectInput.value;

    redirectTo(
      '/todos',
      todo.id,
      title,
      description,
      dueDate,
      priority,
      checkList,
      project,
      'UPDATE'
    );
  };

  const cancel = () => {
    redirectTo('/todos');
  };

  const cancelDiv = document.createElement('div');
  const cancelButton = document.createElement('button');
  cancelButton.type = 'cancel';
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', cancel);
  cancelDiv.appendChild(cancelButton);
  todoForm.appendChild(cancelDiv);

  const submitDiv = document.createElement('div');
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';

  if (Todo.find(todo.id)) {
    submitButton.addEventListener('click', updateTodo);
  } else {
    submitButton.addEventListener('click', createTodo);
  }

  submitDiv.appendChild(submitButton);
  todoForm.appendChild(submitDiv);

  return todoForm;
};

export { formPartial };
