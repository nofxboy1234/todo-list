import { createTodo } from '../models/todo.js';

// new
const createTodosController = () => {
  // create
  // edit
  // update
  // destroy
  // index
  // show
  const create = (title, description, dueDate, priority, checkList) => {
    return createTodo(title, description, dueDate, priority, checkList);
  };

  return { create };
};

export { createTodosController };
