import {
  createLabel,
  createInput,
  createTextArea,
  createSelect,
  createButton,
  createOption,
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
    const tempParams = params;
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
    
    const formProjectID = event.target.dataset.id;
    const project = getProjectFromParams(formProjectID);

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
    const formTaskID = event.target.dataset.id;
    const task = getTaskFromParams(formTaskID);

    redirectTo('GET', editTaskPath, task);
  };

  const destroyTask = (event) => {
    mergeCurrentDataIntoParams();
    const formTaskID = event.target.dataset.id;
    const task = getTaskFromParams(formTaskID);

    redirectTo('DELETE', taskPath, task);
  };

  const createTodo = (event) => {
    event.preventDefault();
    redirectTo('POST', todosPath, currentData());
  };

  const updateTodo = (event) => {
    event.preventDefault();
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

  // const createTaskFromParams = (formTaskID) => {
  //   let task;
  //   if (formTaskID.startsWith('undefined-')) {
  //     const index = Number(formTaskID.split('-').at(1));
  //     const taskData = params.data.tasks.at(index);

  //     task = Task.new(taskData);
  //     task.data.indexInTasks = index;
  //   } else {
  //     task = getSavedTask(formTaskID);
  //     task.data.indexInTasks = Number(formTaskID);
  //   }

  //   return task;
  // };

  const getTaskFromParams = (formTaskID) => {
    let index;
    if (formTaskID.startsWith('undefined-')) {
      index = Number(formTaskID.split('-').at(1));
    } else {
      index = Number(formTaskID);
    }
    const task = params.data.tasks.at(index);
    task.data.indexInTasks = index;

    return task;
  };

  const getProjectFromParams = (formProjectID) => {
    let index;
    if (formProjectID.startsWith('undefined-')) {
      index = Number(formProjectID.split('-').at(1));
    } else {
      index = Number(formProjectID);
    }
    const project = params.data.projects.at(index);
    project.data.indexInProjects = index;

    return project;
  };

  const currentData = () => {
    return {
      data: {
        id: todo.data.id,
        title: title.input.value,
        description: description.input.value,
        dueDate: dueDate.input.value,
        priority: priority.input.value,
        tasks: params.data.tasks,
        projectInputValue: project.input.value,
        // projectID: Number(project.input.value),
      },
    };
  };

  const submitButtonCallback = (event) => {
    if (persisted) {
      updateTodo(event);
    } else {
      createTodo(event);
    }
  };

  const setupUI = () => {
    const todoForm = document.createElement('form');
    todoForm.classList.add('new-todo-form');
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

  const generateFormTaskID = (task, indexInParams) => {
    let id;
    if (!task.data.id) {
      id = `undefined-${indexInParams}`;
    } else {
      id = indexInParams;
    }
    return id;
  };

  const generateFormProjectID = (project, indexInParams) => {
    let id;
    if (!project.data.id) {
      id = `undefined-${indexInParams}`;
    } else {
      // id = project.data.id;
      id = indexInParams;
    }
    return id;
  };

  const addTaskToDOM = (task, indexInParams) => {
    const taskDiv = document.createElement('div');

    const descriptionSpan = document.createElement('span');
    descriptionSpan.textContent = task.data.description;
    taskDiv.appendChild(descriptionSpan);

    const editButton = createButton('button', 'EDIT', 'editTaskButtonID');
    editButton.addEventListener('click', editTask);
    editButton.dataset.id = generateFormTaskID(task, indexInParams);
    taskDiv.appendChild(editButton);

    const destroyButton = createButton(
      'button',
      'DESTROY',
      'destroyTaskButtonID'
    );
    destroyButton.addEventListener('click', destroyTask);
    destroyButton.dataset.id = generateFormTaskID(task, indexInParams);
    taskDiv.appendChild(destroyButton);

    taskList.div.appendChild(taskDiv);
  };

  const addProjectToDOM = (projectToAdd, indexInParams) => {
    const option = {
      value: generateFormProjectID(projectToAdd, indexInParams),
      text: projectToAdd.data.name,
    };
    project.input.add(createOption(option.value, option.text));
  };

  const setupTaskListData = () => {
    params.data.tasks.forEach((task, indexInParams) => {
      addTaskToDOM(task, indexInParams);
    });
  };

  const selectProject = (indexInParams) => {
    project.input.value = indexInParams;
  };

  const getProjectInputValueToSelect = (indexOfTodoProject) => {
    let index;
    const tempParams = params;
    let projectInputValue = tempParams.data.projectInputValue;
    if (projectInputValue) {
      index = projectInputValue;
    } else {
      index = indexOfTodoProject;
    }

    return index;
  };

  const setupProjectData = () => {
    const tempParams = params;
    let indexOfTodoProject;
    let indexOfDefaultProject;
    tempParams.data.projects.forEach((project, indexInParams) => {
      addProjectToDOM(project, indexInParams);

      if (project === Project.find(todo.data.projectID)) {
        indexOfTodoProject = indexInParams;
      }
      // if (project === Project.first()) {
      //   indexOfDefaultProject = indexInParams;
      // }
    });

    const index = getProjectInputValueToSelect(indexOfTodoProject);
    selectProject(index);
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
    setEditProjectButtonState();
    setEditProjectButtonDatasetID();
  };

  const setupEventListeners = () => {
    submit.button.addEventListener('click', submitButtonCallback);
    taskList.newButton.addEventListener('click', newTask);
    project.newButton.addEventListener('click', newProject);
    project.input.addEventListener('change', setEditProjectButtonState);
    project.input.addEventListener('change', setEditProjectButtonDatasetID);
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

  const errors = (() => {
    const div = document.createElement('div');

    return { div };
  })();

  const title = (() => {
    const div = document.createElement('div');
    div.appendChild(createLabel('title:', 'titleID'));
    const input = createInput('text', 'titleID', 'title');
    div.appendChild(input);

    return { div, input };
  })();

  const description = (() => {
    const div = document.createElement('div');
    div.appendChild(createLabel('description:', 'descriptionID'));
    const input = createTextArea('descriptionID', 'description');
    div.appendChild(input);

    return { div, input };
  })();

  const dueDate = (() => {
    const div = document.createElement('div');
    div.appendChild(createLabel('due date:', 'dueDateID'));
    const input = createInput('date', 'dueDateID', 'dueDate');
    div.appendChild(input);

    return { div, input };
  })();

  const priority = (() => {
    const div = document.createElement('div');
    div.appendChild(createLabel('priority:', 'priorityID'));
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
    checkListLabelDiv.textContent = 'tasks:';
    div.appendChild(checkListLabelDiv);

    const newButton = createButton('button', 'NEW', 'newTaskButtonID');
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

  const setEditProjectButtonDatasetID = () => {
    project.editButton.dataset.id = project.input.value;
  };

  const project = (() => {
    const div = document.createElement('div');
    div.appendChild(createLabel('project:', 'projectID'));

    const input = createSelect('projectID', 'project');
    div.appendChild(input);

    const newButton = createButton('button', 'NEW', 'newProjectButtonID');
    div.appendChild(newButton);

    const editButton = createButton('button', 'EDIT', 'editProjectButtonID');
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
      buttonText = 'UPDATE';
    } else {
      buttonText = 'CREATE';
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
