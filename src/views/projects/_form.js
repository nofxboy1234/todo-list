import { createLabel, createInput, createButton } from '../helpers';

import { redirectTo, projectsPath, projectPath } from '../../router';
import { renderPreviousView } from '../../renderer';

const form = (project) => {
  const persisted = project.data.id ? true : false;

  const cancelForm = () => {
    renderPreviousView();
  };

  const createProject = (event) => {
    event.preventDefault();
    redirectTo('POST', projectsPath, currentData());
  };

  const updateProject = (event) => {
    event.preventDefault();
    redirectTo('PATCH', projectPath, currentData());
  };

  const currentData = () => {
    return {
      id: project.data.id,
      project: {
        name: name.input.value,
      },
    };
  };

  const submitButtonCallback = () => {
    if (persisted) {
      return updateProject;
    } else {
      return createProject;
    }
  };

  const setupUI = () => {
    const projectForm = document.createElement('form');
    projectForm.appendChild(name.div);
    projectForm.appendChild(cancel.div);
    projectForm.appendChild(submit.div);

    return projectForm;
  };

  const setupData = () => {
    name.input.value = project.data.name;
  };

  const setupEventListeners = () => {
    submit.button.addEventListener('click', submitButtonCallback());
    cancel.button.addEventListener('click', cancelForm);
  };

  const name = (() => {
    const div = document.createElement('div');
    div.appendChild(createLabel('name:', 'nameID'));
    const input = createInput('text', 'nameID', 'name');
    div.appendChild(input);

    return { div, input };
  })();

  const cancel = (() => {
    const div = document.createElement('div');
    const button = createButton('button', 'Cancel', 'cancelButtonID');
    div.appendChild(button);

    return { div, button };
  })();

  const submit = (() => {
    const div = document.createElement('div');

    let buttonText;
    if (persisted) {
      buttonText = 'UPDATE';
    } else {
      buttonText = 'CREATE';
    }

    const button = createButton('submit', buttonText, 'submitButtonID');
    div.appendChild(button);

    return { div, button };
  })();

  const projectForm = setupUI();
  setupData();
  setupEventListeners();

  return projectForm;
};

export { form };
