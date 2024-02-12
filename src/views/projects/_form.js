import { createLabel, createInput, createButton } from '../helpers';

import { redirectTo, projectsPath, projectPath, editTodoPath } from '../../router';
import {
  editTodo,
  newTodo,
  popCachedView,
  renderCachedView,
} from '../../renderer';
import { params as todoParams } from '../../parameters/todoParameters';

const form = (project) => {
  const persisted = project.data.id ? true : false;

  const cancelForm = () => {
    renderCachedView();
  };

  const createProject = (event) => {
    event.preventDefault();
    popCachedView();
    redirectTo('POST', projectsPath, currentData());
  };

  const updateProject = (event) => {
    event.preventDefault();
    popCachedView();
    redirectTo('PATCH', projectPath, currentData());
    // redirectTo('GET', editTodoPath)
  };

  const currentData = () => {
    return {
      data: {
        id: project.data.id,
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
