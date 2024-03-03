import { params } from '../parameters/taskParameters';
import { params as todoParams } from '../parameters/todoParameters';
import { popCachedView, render } from '../renderers/renderer';
import { render as todoTaskRender } from '../renderers/todoTasksRenderer';

import { Todo } from '../models/todo';
import { Task } from '../models/task';
import { edit, index, new_, show } from '../symbols/todoTaskSymbols';

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

const todoTasksController = {
  new: function () {
    this.todoTask = Task.new(params);
    todoTaskRender(new_, this.todoTask);
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
      render('todos/edit', Todo.new(todoParams));
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
      render('todos/edit', Todo.new(todoParams));
    } else {
      render(edit, this.todoTask);
    }
  },
  destroy: function () {
    this.todoTask = Task.new(params);
    destroyTaskInTodoParams(this.todoTask);
    params.reset();
    render('todos/edit', Todo.new(todoParams));
  },
};

export { todoTasksController };
