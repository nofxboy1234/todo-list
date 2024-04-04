import { Project, projectStatic } from '../../models/project.mjs';
import { Todo } from '../../models/todo.mjs';
import {
  createLabel,
  createInput,
  createButton,
  clearContainer,
  createOption,
  createTextArea,
  createSelect,
} from '../helpers';
import { contentContainer } from '../layouts/application';
import { createNewView } from './new';
import { createShowView } from './show';

function createForm(todo) {
  const exists = todo.id ? true : false;

  const cancel = (event) => {
    contentContainer.clear();
    contentContainer.appendPrevious();
  };

  const create = (event) => {
    const data = formData();
    const todo = new Todo(
      data.title,
      data.description,
      data.dueDate,
      data.priority,
      data.projectID
    );
    todo.save();
  };

  const update = (event) => {};

  const formData = () => {
    return {
      id: todo.id,
      title: titleElement.input.value,
      description: descriptionElement.input.value,
      dueDate: dueDateElement.input.value,
      priority: priorityElement.input.value,
      projectID: todo.projectID,
    };
  };

  const submitButtonCallback = (event) => {
    if (!form.checkValidity()) {
      return;
    }

    if (exists) {
      update(event);
    } else {
      create(event);
    }

    event.preventDefault();
  };

  const setupUI = () => {
    const form = document.createElement('form');
    form.classList.add('new-todo-form');
    form.appendChild(headerElement.div);
    form.appendChild(errorsElement.div);
    form.appendChild(titleElement.div);
    form.appendChild(descriptionElement.div);
    form.appendChild(dueDateElement.div);
    form.appendChild(priorityElement.div);
    // form.appendChild(taskList.div);
    form.appendChild(cancelElement.div);
    form.appendChild(submitElement.div);

    return form;
  };

  const setupSimpleData = () => {
    titleElement.input.value = todo.title;
    descriptionElement.input.value = todo.description;
    dueDateElement.input.value = todo.dueDate;
    priorityElement.input.value = todo.priority;
  };

  // const setupTaskListData = () => {
  //   params.data.tasks.forEach((task, indexInParams) => {
  //     addTaskToDOM(task, indexInParams);
  //   });
  // };

  const addProjectToDOM = (projectToAdd, indexInParams) => {
    const option = {
      value: generateProjectInputValue(projectToAdd, indexInParams),
      text: projectToAdd.data.name,
    };
    project.input.add(createOption(option.value, option.text));
  };

  const setupProjectData = () => {
    params.data.projects.forEach((project, index) => {
      addProjectToDOM(project, index);
    });
  };

  const setupData = () => {
    setupSimpleData();
    // setupTaskListData();
  };

  const setupEventListeners = () => {
    submitElement.button.addEventListener('click', submitButtonCallback);
    cancelElement.button.addEventListener('click', cancel);
  };

  const clearErrors = () => {
    todo.errors.clear();
  };

  const displayErrors = () => {
    todo.errors.forEach((error) => {
      const errorDiv = document.createElement('div');
      errorDiv.textContent = error.description;
      errorsElement.div.appendChild(errorDiv);
    });
  };

  const focus = () => {
    titleElement.input.focus();
  };

  const headerElement = (() => {
    const div = document.createElement('div');
    const heading = document.createElement('h2');
    if (exists) {
      heading.textContent = 'Edit Todo';
    } else {
      heading.textContent = 'New Todo';
    }

    div.appendChild(heading);
    return { div };
  })();

  const errorsElement = (() => {
    const div = document.createElement('div');

    return { div };
  })();

  const titleElement = (() => {
    const div = document.createElement('div');
    div.appendChild(createLabel('Title:', 'titleID'));
    const input = createInput('text', 'titleID', 'title');

    input.setAttribute('required', true);
    input.setAttribute('minlength', 2);

    div.appendChild(input);

    return { div, input };
  })();

  const descriptionElement = (() => {
    const div = document.createElement('div');
    div.appendChild(createLabel('Description:', 'descriptionID'));
    const input = createTextArea('descriptionID', 'description');

    input.setAttribute('required', true);
    input.setAttribute('minlength', 2);

    div.appendChild(input);

    return { div, input };
  })();

  const dueDateElement = (() => {
    const div = document.createElement('div');
    div.appendChild(createLabel('Due Date:', 'dueDateID'));
    const input = createInput('date', 'dueDateID', 'dueDate');

    input.setAttribute('required', true);

    div.appendChild(input);

    return { div, input };
  })();

  const priorityElement = (() => {
    const div = document.createElement('div');
    div.appendChild(createLabel('Priority:', 'priorityID'));
    const options = [
      { value: 'low', text: 'low' },
      { value: 'medium', text: 'medium' },
      { value: 'high', text: 'high' },
    ];
    const input = createSelect('priorityID', 'priority', options);
    div.appendChild(input);

    return { div, input };
  })();

  // const taskListElement = (() => {
  //   const div = document.createElement('div');

  //   const checkListLabelDiv = document.createElement('div');
  //   checkListLabelDiv.textContent = 'Tasks:';
  //   div.appendChild(checkListLabelDiv);

  //   const newButton = createButton('button', 'New task', 'newTaskButtonID');
  //   div.appendChild(newButton);

  //   return { div, newButton };
  // })();

  const cancelElement = (() => {
    const div = document.createElement('div');
    const button = createButton('button', 'Cancel', 'cancelButtonID');
    div.appendChild(button);

    return { div, button };
  })();

  const submitElement = (() => {
    const div = document.createElement('div');

    let buttonText;
    if (exists) {
      buttonText = 'Update';
    } else {
      buttonText = 'Create';
    }

    const button = createButton('submit', buttonText, 'submitButtonID');
    div.appendChild(button);

    return { div, button };
  })();

  const form = setupUI();
  setupData();
  setupEventListeners();
  if (todo.errors.size() > 0) {
    displayErrors();
    clearErrors();
  }

  return { form, focus };
}

export { createForm };
