import { createLabel, createInput, createButton } from '../helpers';

import { projectParams } from '../../parameters/projectParameters';

import { redirectTo } from '../../routers/router';
import { projectPath, projectsPath } from '../../routers/projectRouteHelpers';

import { renderCachedView } from '../../renderers/renderer';


const form = (project) => {
  const isOnTodoForm =
    project.data.onTodoForm || project.data.id ? true : false;

  const cancelForm = () => {
    projectParams.reset();
    renderCachedView();
  };

  const createProject = (event) => {
    redirectTo('POST', projectsPath, currentData());
  };

  const updateProject = (event) => {
    redirectTo('PATCH', projectPath, currentData());
  };

  const currentData = () => {
    return {
      data: {
        id: project.data.id,
        name: name.input.value,
      },
    };
  };

  const submitButtonCallback = (event) => {
    if (!projectForm.checkValidity()) {
      return;
    }

    if (isOnTodoForm) {
      updateProject(event);
    } else {
      createProject(event);
    }

    event.preventDefault();
  };

  const setupUI = () => {
    const projectForm = document.createElement('form');
    projectForm.appendChild(header.div);
    projectForm.appendChild(errors.div);
    projectForm.appendChild(name.div);
    projectForm.appendChild(cancel.div);
    projectForm.appendChild(submit.div);

    return projectForm;
  };

  const setupData = () => {
    name.input.value = project.data.name;
  };

  const setupEventListeners = () => {
    submit.button.addEventListener('click', submitButtonCallback);
    cancel.button.addEventListener('click', cancelForm);
  };

  const clearErrors = () => {
    project.errors = [];
  };

  const displayErrors = () => {
    project.errors.forEach((error) => {
      const errorDiv = document.createElement('div');
      errorDiv.textContent = error;
      errors.div.appendChild(errorDiv);
    });
    clearErrors();
  };

  const header = (() => {
    const div = document.createElement('div');
    const heading = document.createElement('h2');
    if (isOnTodoForm) {
      heading.textContent = 'Edit Project';
    } else {
      heading.textContent = 'New Project';
    }

    div.appendChild(heading);
    return { div };
  })();

  const errors = (() => {
    const div = document.createElement('div');

    return { div };
  })();

  const name = (() => {
    const div = document.createElement('div');
    div.appendChild(createLabel('name:', 'nameID'));
    const input = createInput('text', 'nameID', 'name');

    input.setAttribute('required', true);
    input.setAttribute('minlength', 2);

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
    if (isOnTodoForm) {
      buttonText = 'Edit Project';
    } else {
      buttonText = 'Add Project';
    }

    const button = createButton('submit', buttonText, 'submitButtonID');
    div.appendChild(button);

    return { div, button };
  })();

  const projectForm = setupUI();
  setupData();
  setupEventListeners();
  if (project.errors.length > 0) {
    displayErrors();
  }

  return projectForm;
};

export { form };
