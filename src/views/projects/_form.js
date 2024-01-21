import { Project } from '../../models/project';
import {
  createLabel,
  createInput,
  createButton,
} from '../helpers';
import { redirectTo } from '../../router';

const projectInitialData = () => {
  return {
    name: '',
  };
};

const cancel = () => {
  redirectTo('/projects');
};

const createName = (project) => {
  const nameDiv = document.createElement('div');
  nameDiv.appendChild(createLabel('name:', 'nameID'));
  const nameInput = createInput('text', 'nameID', 'name', project.name);
  nameDiv.appendChild(nameInput);
  return [nameDiv, nameInput];
};

const createCancel = () => {
  const cancelDiv = document.createElement('div');
  const cancelButton = createButton('button', 'Cancel', 'cancelButtonID');
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

  const submitButton = createButton('submit', buttonText, 'createButtonID');
  submitDiv.appendChild(submitButton);

  return [submitDiv, submitButton];
};

const formPartial = (project) => {
  const exists = Project.find(project.id);

  const projectCommonData = () => {
    return [nameInput.value];
  };

  const createProject = (event) => {
    event.preventDefault();
    const commonData = projectCommonData();
    redirectTo('/projects/create', ...commonData);
  };

  const updateProject = (event) => {
    event.preventDefault();
    const commonData = projectCommonData();
    redirectTo('/projects', project.id, ...commonData, 'UPDATE');
  };

  if (!project.id) {
    Object.assign(project, projectInitialData());
  }

  const projectForm = document.createElement('form');
  projectForm.classList.add('new-project-form');
  // todoForm.action = 'todos/new';
  // todoForm.method = 'post';

  const [nameDiv, nameInput] = createName(project);
  projectForm.appendChild(nameDiv);

  const [cancelDiv] = createCancel();
  projectForm.appendChild(cancelDiv);

  const [submitDiv, submitButton] = createSubmit(exists);
  if (exists) {
    submitButton.addEventListener('click', updateProject);
  } else {
    submitButton.addEventListener('click', createProject);
  }
  projectForm.appendChild(submitDiv);

  return projectForm;
};

export { formPartial };
