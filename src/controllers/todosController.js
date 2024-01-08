import { createTodo } from '../models/todo.js';
import { render } from '../renderers/todoRenderer.js';

// new
const createTodosController = () => {
  // new
  // create
  // edit
  // update
  // destroy
  // index
  // show

  let todo;

  const create = (title, description, dueDate, priority, checkList) => {
    todo = createTodo(title, description, dueDate, priority, checkList);

    if (todo.save()) {
      console.log('Todo was successfully created');
      console.log(`Show '${todo.title}'`);
    } else {
      console.log('Todo failed to save');
    }

    return todo;
  };

  const edit = (todoToEdit) => {
    todo = todoToEdit;
    render('edit', todo);
  };

  return { create, edit, todo };
};

export { createTodosController };
