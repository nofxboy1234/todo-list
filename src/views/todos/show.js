import { subscribe } from '../../messageQueue/messageQueue.mjs';
import { Todo, events } from '../../models/todo.mjs';
import { clearContainer, createButton, createCheckbox } from '../helpers';
import { contentContainer } from '../layouts/application';
import { editView } from './edit';
import { events as taskEvents } from '../../models/task.mjs';
import { Task } from '../../models/task.mjs';
import { newView as taskNewView } from '../tasks/new';

function createShowView() {
  const createEditButton = (todo) => {
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', (event) => {
      edit(todo);
      event.stopPropagation();
    });
    return editButton;
  };

  const createCloseButton = () => {
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', (event) => {
      contentContainer.clear();
      contentContainer.appendPrevious();
      event.stopPropagation();
    });
    return closeButton;
  };

  const newTask = (event, todo) => {
    const task = new Task('', todo.id);
    const render = taskNewView.render(task);
    if (render) {
      contentContainer.clear();
      contentContainer.appendChild(render.form);
      render.focus();
    }
  };

  const createTaskListElement = () => {
    const div = document.createElement('div');

    const checkListLabelDiv = document.createElement('div');
    checkListLabelDiv.textContent = 'Tasks:';
    div.appendChild(checkListLabelDiv);

    const newButton = createButton('button', 'New task', 'newTaskButtonID');
    div.appendChild(newButton);

    return { div, newButton };
  };

  const addTaskToDOM = (task, index, taskListElement) => {
    const taskDiv = document.createElement('div');

    const descriptionSpan = document.createElement('span');
    descriptionSpan.textContent = task.description;
    taskDiv.appendChild(descriptionSpan);

    const checkbox = createCheckbox(task.complete, 'task-checkbox');
    // checkbox.dataset.taskInputValue = generateTaskInputValue(
    //   task,
    //   index
    // );
    taskDiv.appendChild(checkbox);

    // const editButton = createButton('button', 'Edit', 'editTaskButtonID');
    // editButton.addEventListener('click', editTask);
    // editButton.dataset.taskInputValue = generateTaskInputValue(
    //   task,
    //   index
    // );
    // taskDiv.appendChild(editButton);

    // const destroyButton = createButton(
    //   'button',
    //   'Remove',
    //   'destroyTaskButtonID'
    // );
    // destroyButton.addEventListener('click', destroyTask);
    // destroyButton.dataset.taskInputValue = generateTaskInputValue(
    //   task,
    //   index
    // );
    // taskDiv.appendChild(destroyButton);

    taskListElement.div.appendChild(taskDiv);
  };

  const setupTaskListData = (todo, taskListElement) => {
    todo.tasks().forEach((task, index) => {
      addTaskToDOM(task, index, taskListElement);
    });
  };

  const edit = (todo) => {
    const render = editView.render(todo);
    if (render) {
      contentContainer.clear();
      contentContainer.appendChild(render.form);
      render.focus();
    }
  };

  const update = (eventName, data) => {
    if (eventName === events.update) {
      const todo = data;
      const rendered = render(todo);
      if (rendered) {
        contentContainer.clear();
        contentContainer.appendChild(rendered);
      }
    }

    if (eventName === taskEvents.create) {
      const task = data;
      const rendered = render(task.todo());
      if (rendered) {
        contentContainer.clear();
        contentContainer.appendChild(rendered);
        // rendered.focus();
      }
    }
  };

  const render = (todo) => {
    const showTodoDiv = document.createElement('div');
    showTodoDiv.textContent = 'show todo view';

    const titleDiv = document.createElement('div');
    titleDiv.textContent = todo.title;
    showTodoDiv.appendChild(titleDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = todo.description;
    showTodoDiv.appendChild(descriptionDiv);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.textContent = todo.dueDate;
    showTodoDiv.appendChild(dueDateDiv);

    const priorityDiv = document.createElement('div');
    priorityDiv.textContent = todo.priority;
    showTodoDiv.appendChild(priorityDiv);

    // const projectIDDiv = document.createElement('div');
    // projectIDDiv.textContent = todo.projectID;
    // showTodoDiv.appendChild(projectIDDiv);

    // const tasksDiv = document.createElement('div');
    // const tasks = todo.tasks();
    // tasks.forEach((task) => {
    //   const taskDiv = document.createElement('div');
    //   taskDiv.textContent = task.description;
    //   tasksDiv.appendChild(taskDiv);
    // });
    // showTodoDiv.appendChild(tasksDiv);

    const taskListElement = createTaskListElement();
    showTodoDiv.appendChild(taskListElement.div);
    setupTaskListData(todo, taskListElement);
    taskListElement.newButton.addEventListener('click', (event) => {
      newTask(event, todo);
    });

    const editButton = createEditButton(todo);
    showTodoDiv.appendChild(editButton);

    const closeButton = createCloseButton();
    showTodoDiv.appendChild(closeButton);

    return showTodoDiv;
  };

  const instance = { update, render };
  subscribe(events.update, instance);
  subscribe(taskEvents.create, instance);

  return instance;
}

const showView = createShowView();

export { showView };
