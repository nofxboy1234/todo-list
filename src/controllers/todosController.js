import { Todo } from '../models/todo';
import { redirectTo } from '../helpers';

// import { render as renderNew } from '../views/todos/new';
import { render as renderIndex } from '../views/todos/index';

import { render } from './renderer';

let todo;
let todos;

const setTodo = (id) => (todo = Todo.find(id));

const TodosController = {
  new: function () {
    todo = Todo.new();
    render('todos/new');
    // renderNew(todo);

  },
  create: function (
    title,
    description,
    dueDate,
    priority,
    checkList,
    projectID
  ) {
    todo = Todo.new(
      title,
      description,
      dueDate,
      priority,
      checkList,
      projectID
    );

    if (todo.save()) {
      console.log(`'${todo.title}' was successfully created`);
      redirectTo('/todos');
    } else {
      console.log(`'${todo.title}' failed to save`);
      redirectTo('/todos/new');
    }
  },
  index: function () {
    todos = Todo.all();
    renderIndex(todos);
  },
  show: function (id) {
    setTodo(id);
    renderShow(todo);
  },
  edit: function (id) {
    setTodo(id);
    renderEdit(todo);
  },
  update: function (
    id,
    title,
    description,
    dueDate,
    priority,
    checkList,
    projectID
  ) {
    setTodo(id);
    if (
      todo.update(title, description, dueDate, priority, checkList, projectID)
    ) {
      console.log(`'${todo.title}' was successfully updated`);
      redirectTo('/todos');
    } else {
      console.log(`'${todo.title}' failed to update`);
      redirectTo('/todos/edit', todo.id);
    }
  },
  destroy: function (id) {
    setTodo(id);
    todo.destroy();
    redirectTo('/todos');
  },
  getTodo: function () {
    return todo;
  }
};

export { TodosController };
