import { Task } from '../models/task';
import { Todo } from '../models/todo';
import { taskParams as params } from '../parameters/taskParameters';
import { todoParams } from '../parameters/todoParameters';
import { popCachedView, render } from '../renderers/renderer';

import {
  todoTasksView as index,
  newTodoTaskView as new_,
  editTodoTaskView as edit,
  todoTaskView as show,
} from '../views/helpers/todoTaskViews';

import { editTodoView as editTodo } from '../views/helpers/todoViews';

const createTaskInTodoParams = (task) => {
  task.data.onTodoForm = true;
  todoParams.data.tasks.push(task);
};

const addTaskToDestroyedTasks = (todoParamsTask) => {
  todoParams.data.destroyedTasks.push(todoParamsTask);
};

const updateTaskInTodoParams = (task) => {
  const tasks = todoParams.data.tasks;
  const indexOfTask = task.data.indexInTasks;
  const todoParamsTask = tasks.at(indexOfTask);
  Object.assign(todoParamsTask.data, task.data);
};

const destroyTaskInTodoParams = (task) => {
  const tasks = todoParams.data.tasks;
  const indexOfTask = task.data.indexInTasks;
  const todoParamsTask = tasks.at(indexOfTask);
  if (todoParamsTask.data.id) {
    addTaskToDestroyedTasks(todoParamsTask);
  }
  tasks.splice(indexOfTask, 1);
};

const setTodoTask = (controller) => {
  const id = params.data.id;
  const instance = Task.find(id);
  controller.todoTask = instance;
};

const controller = {
  new: function () {
    this.todoTask = Task.new(params);
    render(new_, this.todoTask);
  },
  create: function () {
    this.todoTask = Task.new(params);
    this.todoTask.data.validated = false;

    if (!this.todoTask.data.validated) {
      this.todoTask.validate();
    }

    if (this.todoTask.errors.length === 0) {
      createTaskInTodoParams(this.todoTask);
      params.reset();
      popCachedView();
      render(editTodo, Todo.new(todoParams));
    } else {
      render(new_, this.todoTask);
    }
  },
  index: function () {
    this.todoTasks = Task.all();
    render(index, this.todoTasks);
  },
  show: function () {
    setTodoTask(this);
    render(show, this.todoTask);
  },
  edit: function () {
    this.todoTask = Task.new(params);
    render(edit, this.todoTask);
  },
  update: function () {
    this.todoTask = Task.new(params);
    this.todoTask.data.validated = false;

    if (!this.todoTask.data.validated) {
      this.todoTask.validate();
    }

    if (this.todoTask.errors.length === 0) {
      updateTaskInTodoParams(this.todoTask);
      params.reset();
      popCachedView();
      render(editTodo, Todo.new(todoParams));
    } else {
      render(edit, this.todoTask);
    }
  },
  destroy: function () {
    this.todoTask = Task.new(params);
    destroyTaskInTodoParams(this.todoTask);
    params.reset();
    render(editTodo, Todo.new(todoParams));
  },
};

export { controller };
