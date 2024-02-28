import {
  createLabel,
  createInput,
  createTextArea,
  createSelect,
  createButton,
  createOption,
  createCheckbox,
} from '../helpers';
import { Project } from '../../models/project';

import {
  redirectTo,
  todosPath,
  todoPath,
  newProjectPath,
  editProjectPath,
  newTaskPath,
  editTaskPath,
  taskPath,
} from '../../router';
import { cacheView, editTodo, newTodo, renderCachedView } from '../../renderer';
import { params } from '../../parameters/todoParameters';
import { Todo } from '../../models/todo';
import { Task } from '../../models/task';

const form = (todo) => {
  const persisted = todo.data.id ? true : false;

  const cancelForm = () => {
    params.reset();
    renderCachedView();
  };

  const getView = () => {
    let view;
    if (persisted) {
      view = editTodo;
    } else {
      view = newTodo;
    }
    return view;
  };

  const mergeCurrentDataIntoParams = () => {
    params.merge(currentData());
  };

  const cacheCurrentView = () => {
    const view = getView();
    cacheView(view(Todo.new(params)));
  };

  const newProject = () => {
    mergeCurrentDataIntoParams();
    cacheCurrentView();

    redirectTo('GET', newProjectPath);
  };

  const editProject = (event) => {
    mergeCurrentDataIntoParams();
    cacheCurrentView();

    const projectInputValue = event.target.dataset.projectInputValue;
    const project = getProjectFromParams(projectInputValue);

    redirectTo('GET', editProjectPath, project);
  };

  const newTask = () => {
    mergeCurrentDataIntoParams();
    cacheCurrentView();

    redirectTo('GET', newTaskPath);
  };

  const editTask = (event) => {
    mergeCurrentDataIntoParams();
    cacheCurrentView();
    const taskInputValue = event.target.dataset.taskInputValue;
    const task = getTaskFromParams(taskInputValue);

    redirectTo('GET', editTaskPath, task);
  };

  const destroyTask = (event) => {
    mergeCurrentDataIntoParams();
    const formTaskID = event.target.dataset.taskInputValue;
    const task = getTaskFromParams(formTaskID);

    redirectTo('DELETE', taskPath, task);
  };

  const createTodo = (event) => {
    redirectTo('POST', todosPath, currentData());
  };

  const updateTodo = (event) => {
    redirectTo('PATCH', todoPath, currentData());
  };

  const getSavedTask = (formTaskID) => {
    const id = Number(formTaskID);
    const task = Task.find(id);
    return task;
  };

  const getSavedProject = (targetID) => {
    const id = Number(targetID);
    const project = Project.find(id);
    return project;
  };

  const getTaskFromParams = (formTaskID) => {
    let index;
    if (formTaskID.startsWith('undefined-')) {
      index = Number(formTaskID.split('-').at(1));
    } else {
      index = Number(formTaskID);
    }
    const task = params.data.tasks.at(index);
    const cloneOfTask = Object.assign({}, task);
    cloneOfTask.data = Object.assign({}, task.data);
    cloneOfTask.data.indexInTasks = index;

    return cloneOfTask;
  };

  const getProjectFromParams = (projectInputValue) => {
    let index;
    if (projectInputValue.startsWith('undefined-')) {
      index = Number(projectInputValue.split('-').at(1));
    } else {
      index = Number(projectInputValue);
    }
    const project = params.data.projects.at(index);
    const cloneOfProject = Object.assign({}, project);
    cloneOfProject.data = Object.assign({}, project.data);
    cloneOfProject.data.indexInProjects = index;

    return cloneOfProject;
  };

  const currentData = () => {
    updateTasksCompleteStatus();

    return {
      data: {
        id: todo.data.id,
        title: title.input.value,
        description: description.input.value,
        dueDate: dueDate.input.value,
        priority: priority.input.value,
        projectInputValue: project.input.value,
      },
    };
  };

  const updateTasksCompleteStatus = () => {
    const tasksCheckboxes = document.querySelectorAll('.task-checkbox');
    params.data.tasks.forEach((paramsTask, index) => {
      const taskCheckbox = tasksCheckboxes[index];
      const complete = taskCheckbox.checked;
      paramsTask.data.complete = complete;
    });
  };

  const submitButtonCallback = (event) => {
    if (!todoForm.checkValidity()) {
      return;
      // built-in form behaviour runs afterwards, and stops at
      // stage 1 validity check
    }

    // built-in validity check is now going to pass
    if (!window.confirm('Are you sure?')) {
      // stop built-in form behaviour from submitting the form at stage 2
      event.preventDefault();
      return;
    }

    if (persisted) {
      updateTodo(event);
    } else {
      createTodo(event);
    }
    // built-in form submitting behaviour will not run afterwards due to
    // form being removed from DOM, so no need for below preventDefault()
    // event.preventDefault();
  };

  const setupUI = () => {
    const todoForm = document.createElement('form');
    todoForm.classList.add('new-todo-form');
    todoForm.appendChild(header.div);
    todoForm.appendChild(errors.div);
    todoForm.appendChild(title.div);
    todoForm.appendChild(description.div);
    todoForm.appendChild(dueDate.div);
    todoForm.appendChild(priority.div);
    todoForm.appendChild(taskList.div);
    todoForm.appendChild(project.div);
    todoForm.appendChild(cancel.div);
    todoForm.appendChild(submit.div);

    return todoForm;
  };

  const generateTaskInputValue = (task, indexInParams) => {
    let value;
    if (!task.data.id) {
      value = `undefined-${indexInParams}`;
    } else {
      value = indexInParams;
    }
    return value;
  };

  const generateProjectInputValue = (project, indexInParams) => {
    let value;
    if (!project.data.id) {
      value = `undefined-${indexInParams}`;
    } else {
      value = project.data.projectInputValue;
    }
    return value;
  };

  const addTaskToDOM = (task, indexInParams) => {
    const taskDiv = document.createElement('div');

    const descriptionSpan = document.createElement('span');
    descriptionSpan.textContent = task.data.description;
    taskDiv.appendChild(descriptionSpan);

    const checkbox = createCheckbox(task.data.complete, 'task-checkbox');
    checkbox.dataset.taskInputValue = generateTaskInputValue(
      task,
      indexInParams
    );
    taskDiv.appendChild(checkbox);

    const editButton = createButton('button', 'Edit', 'editTaskButtonID');
    editButton.addEventListener('click', editTask);
    editButton.dataset.taskInputValue = generateTaskInputValue(
      task,
      indexInParams
    );
    taskDiv.appendChild(editButton);

    const destroyButton = createButton(
      'button',
      'Remove',
      'destroyTaskButtonID'
    );
    destroyButton.addEventListener('click', destroyTask);
    destroyButton.dataset.taskInputValue = generateTaskInputValue(
      task,
      indexInParams
    );
    taskDiv.appendChild(destroyButton);

    taskList.div.appendChild(taskDiv);
  };

  const addProjectToDOM = (projectToAdd, indexInParams) => {
    const option = {
      value: generateProjectInputValue(projectToAdd, indexInParams),
      text: projectToAdd.data.name,
    };
    project.input.add(createOption(option.value, option.text));
  };

  const setupTaskListData = () => {
    params.data.tasks.forEach((task, indexInParams) => {
      addTaskToDOM(task, indexInParams);
    });
  };

  const selectProject = (value) => {
    project.input.value = value;
  };

  const getProjectInputValue = () => {
    if (params.data.projectInputValue) {
      return params.data.projectInputValue;
    }

    let projectInputValue;
    params.data.projects.forEach((project) => {
      if (project.data.id === todo.data.projectID) {
        projectInputValue = project.data.projectInputValue;
      }
    });
    return projectInputValue;
  };

  const setupProjectData = () => {
    params.data.projects.forEach((project, index) => {
      addProjectToDOM(project, index);
    });
  };

  const setupSimpleData = () => {
    title.input.value = todo.data.title;
    description.input.value = todo.data.description;
    dueDate.input.value = todo.data.dueDate;
    priority.input.value = todo.data.priority;
  };

  const setupData = () => {
    setupSimpleData();
    setupTaskListData();

    setupProjectData();
    const projectInputValue = getProjectInputValue();
    selectProject(projectInputValue);

    setEditProjectButtonState();
    setEditProjectButtonDataset();
  };

  const setupEventListeners = () => {
    submit.button.addEventListener('click', submitButtonCallback);

    taskList.newButton.addEventListener('click', newTask);

    project.newButton.addEventListener('click', newProject);
    project.input.addEventListener('change', setEditProjectButtonState);
    project.input.addEventListener('change', setEditProjectButtonDataset);
    project.editButton.addEventListener('click', editProject);

    cancel.button.addEventListener('click', cancelForm);
  };

  const clearErrors = () => {
    todo.errors = [];
  };

  const displayErrors = () => {
    todo.errors.forEach((error) => {
      const errorDiv = document.createElement('div');
      errorDiv.textContent = error;
      errors.div.appendChild(errorDiv);
    });
    clearErrors();
  };

  const header = (() => {
    const div = document.createElement('div');
    const heading = document.createElement('h2');
    if (persisted) {
      heading.textContent = 'Edit Todo';
    } else {
      heading.textContent = 'New Todo';
    }

    div.appendChild(heading);
    return { div };
  })();

  const errors = (() => {
    const div = document.createElement('div');

    return { div };
  })();

  const title = (() => {
    const div = document.createElement('div');
    div.appendChild(createLabel('Title:', 'titleID'));
    const input = createInput('text', 'titleID', 'title');

    input.setAttribute('required', true);
    input.setAttribute('minlength', 2);

    div.appendChild(input);

    return { div, input };
  })();

  const description = (() => {
    const div = document.createElement('div');
    div.appendChild(createLabel('Description:', 'descriptionID'));
    const input = createTextArea('descriptionID', 'description');

    input.setAttribute('required', true);
    input.setAttribute('minlength', 2);

    div.appendChild(input);

    return { div, input };
  })();

  const dueDate = (() => {
    const div = document.createElement('div');
    div.appendChild(createLabel('Due Date:', 'dueDateID'));
    const input = createInput('date', 'dueDateID', 'dueDate');

    input.setAttribute('required', true);

    div.appendChild(input);

    return { div, input };
  })();

  const priority = (() => {
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

  const taskList = (() => {
    const div = document.createElement('div');

    const checkListLabelDiv = document.createElement('div');
    checkListLabelDiv.textContent = 'Tasks:';
    div.appendChild(checkListLabelDiv);

    const newButton = createButton('button', 'New task', 'newTaskButtonID');
    div.appendChild(newButton);

    return { div, newButton };
  })();

  const setEditProjectButtonState = () => {
    if (project.input.value === '0') {
      project.editButton.disabled = true;
    } else {
      project.editButton.disabled = false;
    }
  };

  const setEditProjectButtonDataset = () => {
    project.editButton.dataset.projectInputValue = project.input.value;
  };

  const project = (() => {
    const div = document.createElement('div');
    div.appendChild(createLabel('Project:', 'projectID'));

    const input = createSelect('projectID', 'project');
    div.appendChild(input);

    const newButton = createButton(
      'button',
      'New Project',
      'newProjectButtonID'
    );
    div.appendChild(newButton);

    const editButton = createButton(
      'button',
      'Edit Project',
      'editProjectButtonID'
    );
    div.appendChild(editButton);

    return { div, input, newButton, editButton };
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
      buttonText = 'Update Todo';
    } else {
      buttonText = 'Create Todo';
    }

    const button = createButton('submit', buttonText, 'submitButtonID');
    div.appendChild(button);

    return { div, button };
  })();

  const todoForm = setupUI();
  setupData();
  setupEventListeners();
  if (todo.errors.length > 0) {
    displayErrors();
  }

  return todoForm;
};

export { form };
