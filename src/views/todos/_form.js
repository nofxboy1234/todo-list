import { Todo } from '../../models/todo';
import {
  createLabel,
  createInput,
  createTextArea,
  createSelect,
  createDataList,
  createButton,
} from '../helpers';
import { redirectTo } from '../../helpers';

const todoInitialData = () => {
  return {
    title: '',
    description: '',
    dueDate: '',
    priority: 'high',
    checkList: { 'fill water bowl': false, 'fill food bowl': false },
    project: '',
  };
};

const cancel = () => {
  redirectTo('/todos');
};

const createTitle = (todo) => {
  const titleDiv = document.createElement('div');
  titleDiv.appendChild(createLabel('title:', 'titleID'));
  const titleInput = createInput('text', 'titleID', 'title', todo.title);
  titleDiv.appendChild(titleInput);
  return [titleDiv, titleInput];
};

const createDescription = (todo) => {
  const descriptionDiv = document.createElement('div');
  descriptionDiv.appendChild(createLabel('description:', 'descriptionID'));
  const descriptionTextArea = createTextArea(
    'descriptionID',
    'description',
    todo.description
  );
  descriptionDiv.appendChild(descriptionTextArea);
  return [descriptionDiv, descriptionTextArea];
};

const createDueDate = (todo) => {
  const dueDateDiv = document.createElement('div');
  dueDateDiv.appendChild(createLabel('due date:', 'dueDateID'));
  const dueDateInput = createInput(
    'date',
    'dueDateID',
    'dueDate',
    todo.dueDate
  );
  dueDateDiv.appendChild(dueDateInput);
  return [dueDateDiv, dueDateInput];
};

const createPriority = (todo) => {
  const priorityDiv = document.createElement('div');
  priorityDiv.appendChild(createLabel('priority:', 'priorityID'));
  const options = ['low', 'medium', 'high'];
  const prioritySelect = createSelect('priorityID', 'priority', options);
  prioritySelect.value = todo.priority;
  priorityDiv.appendChild(prioritySelect);
  return [priorityDiv, prioritySelect];
};

const createChecklist = (todo) => {
  const checkListDiv = document.createElement('div');

  const checkListLabelDiv = document.createElement('div');
  checkListLabelDiv.textContent = 'checklist:';
  checkListDiv.appendChild(checkListLabelDiv);

  // { 'fill water bowl': false, 'fill food bowl': false };
  for (const [key, value] of Object.entries(todo.checkList)) {
    const taskPair = document.createElement('div');
    taskPair.appendChild(createLabel(key, `checklist-${key}`));
    const taskCheckbox = createInput('checkbox', undefined, 'task', key);
    taskCheckbox.checked = value;
    taskPair.appendChild(taskCheckbox);

    checkListDiv.appendChild(taskPair);
  }
  return [checkListDiv];
};

const createProject = (todo) => {
  const projectDiv = document.createElement('div');
  projectDiv.appendChild(createLabel('project:', 'projectID'));
  const projectInput = createInput(
    'text',
    'projectID',
    'project',
    todo.project
  );
  projectInput.setAttribute('list', 'projectsID');
  projectDiv.appendChild(projectInput);
  const options = ['project1', 'project2', 'project3'];
  const projectDataList = createDataList('projectsID', options);
  projectDiv.appendChild(projectDataList);
  return [projectDiv, projectInput];
};

const createCancel = () => {
  const cancelDiv = document.createElement('div');
  const cancelButton = createButton('button', 'Cancel');
  cancelButton.addEventListener('click', cancel);
  cancelDiv.appendChild(cancelButton);

  return [cancelDiv];
};

const createSubmit = (exists) => {
  const submitDiv = document.createElement('div');

  let buttonText;
  if (exists) {
    buttonText = 'UPDATE';
  } else {
    buttonText = 'CREATE';
  }

  const submitButton = createButton('submit', buttonText);
  submitDiv.appendChild(submitButton);

  return [submitDiv, submitButton];
};

const formPartial = (todo) => {
  const exists = Todo.find(todo.id);

  const todoCommonData = () => {
    return [
      titleInput.value,
      descriptionTextArea.value,
      dueDateInput.value,
      prioritySelect.value,
      getChecklist(),
      projectInput.value,
    ];
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
    const commonData = todoCommonData();
    redirectTo('/todos/create', ...commonData);
  };

  const updateTodo = (event) => {
    event.preventDefault();
    const commonData = todoCommonData();
    redirectTo('/todos', todo.id, ...commonData, 'UPDATE');
  };

  if (!todo.id) {
    Object.assign(todo, todoInitialData());
  }

  const todoForm = document.createElement('form');
  todoForm.classList.add('new-todo-form');
  // todoForm.action = 'todos/new';
  // todoForm.method = 'post';

  const [titleDiv, titleInput] = createTitle(todo);
  todoForm.appendChild(titleDiv);

  const [descriptionDiv, descriptionTextArea] = createDescription(todo);
  todoForm.appendChild(descriptionDiv);

  const [dueDateDiv, dueDateInput] = createDueDate(todo);
  todoForm.appendChild(dueDateDiv);

  const [priorityDiv, prioritySelect] = createPriority(todo);
  todoForm.appendChild(priorityDiv);

  const [checkListDiv] = createChecklist(todo);
  todoForm.appendChild(checkListDiv);

  const [projectDiv, projectInput] = createProject(todo);
  todoForm.appendChild(projectDiv);

  const [cancelDiv] = createCancel();
  todoForm.appendChild(cancelDiv);

  const [submitDiv, submitButton] = createSubmit(exists);
  if (exists) {
    submitButton.addEventListener('click', updateTodo);
  } else {
    submitButton.addEventListener('click', createTodo);
  }
  todoForm.appendChild(submitDiv);

  return todoForm;
};

export { formPartial };
