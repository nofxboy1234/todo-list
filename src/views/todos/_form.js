import {
  createLabel,
  createInput,
  createTextArea,
  createSelect,
  createButton,
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

  if (!params.data.tasks) {
    params.data.tasks = [];
  }

  const cancelForm = () => {
    delete params.data.tasks;
    renderCachedView();
  };

  const newProject = () => {
    let view;
    if (persisted) {
      view = editTodo;
    } else {
      view = newTodo;
    }
    params.merge(currentData());
    cacheView(view(Todo.new(params)));
    redirectTo('GET', newProjectPath);
  };

  const editProject = () => {
    let view;
    if (persisted) {
      view = editTodo;
    } else {
      view = newTodo;
    }
    params.merge(currentData());
    cacheView(view(Todo.new(params)));
    const projectToEdit = Project.find(Number(project.input.value));
    redirectTo('GET', editProjectPath, projectToEdit);
  };

  const newTask = () => {
    let view;
    if (persisted) {
      view = editTodo;
    } else {
      view = newTodo;
    }
    params.merge(currentData());
    cacheView(view(Todo.new(params)));
    redirectTo('GET', newTaskPath);
  };

  const editTask = (event) => {
    let view;
    if (persisted) {
      view = editTodo;
    } else {
      view = newTodo;
    }
    params.merge(currentData());
    cacheView(view(Todo.new(params)));

    const temp = params;
    const taskID = event.target.dataset.id;
    let task;
    if (taskID.startsWith('undefined-')) {
      const index = Number(taskID.split('-').at(1));
      const taskData = params.data.tasks.at(index);
      task = Task.new(taskData);
    } else {
      task = getTask(event.target.dataset.id);
    }

    redirectTo('GET', editTaskPath, task);
  };

  const destroyTask = (event) => {
    const task = getTask(event.target.dataset.id);
    removeTaskFromParamTasks(task);
    params.merge(currentData());
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

  const getTask = (targetID) => {
    const id = Number(targetID);
    const task = Task.find(id);
    return task;
  };

  const removeTaskFromParamTasks = (task) => {
    const paramTasks = params.data.tasks;
    const removeIndex = paramTasks.indexOf(task);
    paramTasks.splice(removeIndex, 1);
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
        projectID: Number(project.input.value),
      },
    };
  };

  const savedTasks = () => {
    return todo.tasks();
  };

  const unsavedTasks = () => {
    return params.data.tasks;
  };

  const getAllTasks = () => {
    const persistedTasks = todo.tasks();
    const unsavedTasks = params.data.tasks;
    return persistedTasks.concat(unsavedTasks);
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

  const getTaskID = (task, index) => {
    let id;
    if (!task.data.id) {
      id = `undefined-${index}`;
    } else {
      id = task.data.id;
    }
    return id;
  };

  const addTaskToDOM = (task, index) => {
    const taskDiv = document.createElement('div');

    const descriptionSpan = document.createElement('span');
    descriptionSpan.textContent = task.data.description;
    taskDiv.appendChild(descriptionSpan);

    const editButton = createButton('button', 'EDIT', 'editTaskButtonID');
    editButton.addEventListener('click', editTask);
    editButton.dataset.id = getTaskID(task, index);
    taskDiv.appendChild(editButton);

    const destroyButton = createButton(
      'button',
      'DESTROY',
      'destroyTaskButtonID'
    );
    destroyButton.addEventListener('click', destroyTask);
    destroyButton.dataset.id = getTaskID(task, index);
    taskDiv.appendChild(destroyButton);

    taskList.div.appendChild(taskDiv);
  };

  const setupTaskListData = () => {
    savedTasks().forEach((task, index) => {
      addTaskToDOM(task, index);
    });

    unsavedTasks().forEach((task, index) => {
      addTaskToDOM(task, index);
    });
  };

  const setupProjectData = () => {
    if (todo.data.projectID) {
      project.input.value = todo.data.projectID;
    } else {
      project.input.value = Project.first().data.id;
    }
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
  };

  const setupEventListeners = () => {
    submit.button.addEventListener('click', submitButtonCallback);
    taskList.newButton.addEventListener('click', newTask);
    project.newButton.addEventListener('click', newProject);
    project.input.addEventListener('change', setEditProjectButtonState);
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
    if (project.input.value === '1') {
      project.editButton.disabled = true;
    } else {
      project.editButton.disabled = false;
    }
  };

  const project = (() => {
    const div = document.createElement('div');
    div.appendChild(createLabel('project:', 'projectID'));
    const options = Project.all().map((project) => ({
      value: project.data.id,
      text: project.data.name,
    }));

    const input = createSelect('projectID', 'project', options);
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
