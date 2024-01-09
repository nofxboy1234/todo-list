import { createTodo } from '../models/todo.js';
import { render as renderNewView } from '../views/todos/new.js';
import { render as renderEditView } from '../views/todos/edit.js';
import { render as renderShowView } from '../views/todos/show.js';
import { render as renderIndexView } from '../views/todos/index.js';

const createTodosController = () => {
  let todo;
  let todos = [];

  // new
  const build = () => {
    todo = createTodo();
    renderNewView(todo);
  };

  const create = (
    title,
    description,
    dueDate,
    priority,
    checkList,
    project
  ) => {
    todo = createTodo(
      title,
      description,
      dueDate,
      priority,
      checkList,
      project
    );

    if (todo.save()) {
      console.log(`'${todo.title}' was successfully created`);
      renderIndexView(todos);
    } else {
      console.log(`'${todo.title}' failed to save`);
    }

    return todo;
  };

  const edit = (todoToEdit) => {
    todo = todoToEdit;
    renderEditView(todo);
  };

  const update = (
    title,
    description,
    dueDate,
    priority,
    checkList,
    project
  ) => {
    if (todo.update(title, description, dueDate, priority, checkList)) {
      console.log(`'${todo.title}' was successfully updated`);
      renderIndexView(todos);
    } else {
      console.log(`'${todo.title}' failed to update`);
    }

    return todo;
  };

  const destroy = (todoToDestroy) => {
    todoToDestroy.destroy();
    // Remove todo from the DOM
    console.log(`'${todo.title}' was successfully destroyed`);
    renderIndexView(todos);
  };

  const show = (todoToShow) => {
    renderShowView(todoToShow);
  };

  const index = () => {
    renderIndexView(todos);
  };

  return { build, create, edit, update, destroy, show, index };
};

export { createTodosController };
