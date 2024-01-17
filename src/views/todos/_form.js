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
    checkList: { a: true, b: true },
    project: '',
  };
};

const cancel = () => {
  redirectTo('/todos');
};

const formPartial = (todo) => {
  const todoCommonData = () => {
    return [
      titleInput.value,
      descriptionTextArea.value,
      dueDateInput.value,
      prioritySelect.value,
      todo.checkList,
      projectInput.value,
    ];
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
  priorityDiv.appendChild(createLabel('priority:', 'priorityID'));
  let options = ['low', 'medium', 'high'];
  const prioritySelect = createSelect('priorityID', 'priority', options);
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
      checkListPair.appendChild(createLabel(key, `checklist-${key}`));
      const checkListCheckbox = createInput(
        'checkbox',
        `checklist-${key}`,
        'checkList',
        key
      );
      checkListCheckbox.checked = value;
      checkListPair.appendChild(checkListCheckbox);

      checkListDiv.appendChild(checkListPair);
    }
  }
  todoForm.appendChild(checkListDiv);

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
  options = ['project1', 'project2', 'project3'];
  const projectDataList = createDataList('projectsID', options);
  projectDiv.appendChild(projectDataList);
  todoForm.appendChild(projectDiv);

  const cancelDiv = document.createElement('div');
  const cancelButton = createButton('button', 'Cancel');
  cancelButton.addEventListener('click', cancel);
  cancelDiv.appendChild(cancelButton);
  todoForm.appendChild(cancelDiv);

  const submitDiv = document.createElement('div');
  const submitButton = createButton('submit', 'Submit');
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
