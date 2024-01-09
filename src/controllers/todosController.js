import { createTodo } from '../models/todo.js';
import { render } from '../renderers/todoRenderer.js';

const createTodosController = () => {
  let todo;

  // new
  const build = () => {
    todo = createTodo();
    render('new', todo);
  };

  const create = (title, description, dueDate, priority, checkList) => {
    todo = createTodo(title, description, dueDate, priority, checkList);

    if (todo.save()) {
      console.log(`'${todo.title}' was successfully created`);
      render('show', todo);
    } else {
      console.log(`'${todo.title}' failed to save`);
    }

    return todo;
  };

  const edit = (todoToEdit) => {
    todo = todoToEdit;
    render('edit', todo);
  };

  const update = (title, description, dueDate, priority, checkList) => {
    if (todo.update(title, description, dueDate, priority, checkList)) {
      console.log(`'${todo.title}' was successfully updated`);
      render('show', todo);
    } else {
      console.log(`'${todo.title}' failed to update`);
    }

    return todo;
  };

  const destroy = (todoToDestroy) => {
    todoToDestroy.destroy();
    // Remove todo from the DOM
    console.log(`'${todo.title}' was successfully destroyed`);
  };

  const show = (todoToShow) => {
    render('show', todoToShow);
  };

  const index = () => {
    console.log('Get all todos from array/local storage')
    const todos = [];
    render('index', todos);
  };

  return { todo, build, create, edit, update, destroy, show, index };
};

export { createTodosController };
