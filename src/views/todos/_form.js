import { Todo } from '../../models/todo';
import {
  createLabel,
  createInput,
  createTextArea,
  createSelect,
  createButton,
} from '../helpers';
import { redirectTo } from '../../helpers';
import { Project } from '../../models/project';

const cancel = () => {
  redirectTo('/todos');
};

const currentUI = () => {
  return {
    title: document.getElementById('titleID'),
    description: document.getElementById('descriptionID'),
    dueDate: document.getElementById('dueDateID'),
    priority: document.getElementById('priorityID'),
    checkList: getChecklist(),
    project: document.getElementById('projectID'),
    newProjectButton: document.getElementById('newProjectButtonID'),
    cancelButton: document.getElementById('cancelButtonID'),
    submitButton: document.getElementById('submitButtonID'),
  };
};

const currentData = () => {
  return {
    title: currentUI().title.value,
    description: currentUI().description.value,
    dueDate: currentUI().dueDate.value,
    priority: currentUI().priority.value,
    checkList: getChecklist(),
    project: currentUI().project.value,
  };
};

const saveState = () => {
  Object.assign(formData, currentData());
};

const newProject = () => {
  saveState();
  redirectTo('/projects/new');
};

const title = () => {
  const titleDiv = document.createElement('div');
  titleDiv.appendChild(createLabel('title:', 'titleID'));
  const titleInput = createInput('text', 'titleID', 'title');
  titleDiv.appendChild(titleInput);
  return titleDiv;
};

const description = () => {
  const descriptionDiv = document.createElement('div');
  descriptionDiv.appendChild(createLabel('description:', 'descriptionID'));
  const descriptionTextArea = createTextArea('descriptionID', 'description');
  descriptionDiv.appendChild(descriptionTextArea);
  return descriptionDiv;
};

const dueDate = () => {
  const dueDateDiv = document.createElement('div');
  dueDateDiv.appendChild(createLabel('due date:', 'dueDateID'));
  const dueDateInput = createInput('date', 'dueDateID', 'dueDate');
  dueDateDiv.appendChild(dueDateInput);
  return dueDateDiv;
};

const priority = () => {
  const priorityDiv = document.createElement('div');
  priorityDiv.appendChild(createLabel('priority:', 'priorityID'));
  const options = [
    { value: 'low', text: 'low' },
    { value: 'medium', text: 'medium' },
    { value: 'high', text: 'high' },
  ];
  const prioritySelect = createSelect('priorityID', 'priority', options);
  priorityDiv.appendChild(prioritySelect);
  return priorityDiv;
};

const checkList = (todo) => {
  const checkListDiv = document.createElement('div');

  const checkListLabelDiv = document.createElement('div');
  checkListLabelDiv.textContent = 'checklist:';
  checkListDiv.appendChild(checkListLabelDiv);

  // { 'fill water bowl': false, 'fill food bowl': false };
  const keys = Object.keys(todo.checkList);
  keys.forEach((key) => {
    const taskPair = document.createElement('div');
    const id = `task-${keys.indexOf(key)}`
    taskPair.appendChild(createLabel(key, id));
    const taskCheckbox = createInput('checkbox', id, 'task');
    taskPair.appendChild(taskCheckbox);

    checkListDiv.appendChild(taskPair);
  });
  return checkListDiv;
};

const project = () => {
  const projectDiv = document.createElement('div');
  projectDiv.appendChild(createLabel('project:', 'projectID'));
  const options = Project.all().map((project) => ({
    value: project.id,
    text: project.name,
  }));

  const projectSelect = createSelect('projectID', 'project', options);
  projectDiv.appendChild(projectSelect);

  const newProjectButton = createButton('button', 'NEW', 'newProjectButtonID');
  projectDiv.appendChild(newProjectButton);

  return projectDiv;
};

const cancelButton = () => {
  const cancelDiv = document.createElement('div');
  const cancelButton = createButton('button', 'Cancel', 'cancelButtonID');
  cancelDiv.appendChild(cancelButton);

  return cancelDiv;
};

const submitButton = (exists) => {
  const submitDiv = document.createElement('div');

  let buttonText;
  if (exists) {
    buttonText = 'UPDATE';
  } else {
    buttonText = 'CREATE';
  }

  const submitButton = createButton('submit', buttonText, 'submitButtonID');
  submitDiv.appendChild(submitButton);

  return submitDiv;
};

const getChecklist = () => {
  const taskCheckboxes = document.getElementsByName('task');
  const checklist = {};
  taskCheckboxes.forEach((checkbox) => {
    checklist[checkbox.value] = checkbox.checked;
  });
  return checklist;
};

const createTodo = (event) => {
  event.preventDefault();
  const commonData = Object.values(currentData());
  redirectTo('/todos/create', ...commonData);
};

const updateTodo = (event) => {
  event.preventDefault();
  const commonData = Object.values(currentData());
  redirectTo('/todos', formData.id, ...commonData, 'UPDATE');
};

const setupUI = () => {
  const todoForm = document.createElement('form');
  todoForm.classList.add('new-todo-form');

  todoForm.appendChild(title());
  todoForm.appendChild(description());
  todoForm.appendChild(dueDate());
  todoForm.appendChild(priority());
  todoForm.appendChild(checkList(formData));
  todoForm.appendChild(project());
  todoForm.appendChild(cancelButton());

  const exists = Todo.find(formData.id);
  todoForm.appendChild(submitButton(exists));

  return todoForm;
};

const setupData = () => {
  if (formData) {
    // set values on ui elements
  }
};

const setupEventListeners = (exists) => {
  const submitButton = currentUI().submitButton;
  if (exists) {
    submitButton.addEventListener('click', updateTodo);
  } else {
    submitButton.addEventListener('click', createTodo);
  }
  currentUI().newProjectButton.addEventListener('click', newProject);
  currentUI().cancelButton.addEventListener('click', cancel);
};

let formData;

const formPartial = (todo) => {
  if (todo) {
    formData = todo;
  }

  const todoForm = setupUI();
  setupData();
  setupEventListeners(exists);

  return todoForm;
};

export { formPartial };
