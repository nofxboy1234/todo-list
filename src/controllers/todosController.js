import { Todo } from '../models/todo';
import { redirectTo } from '../helpers';

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
      redirectTo('/todos');
    } else {
      redirectTo('/todos/new');
    }
  },
  index: function () {
    todos = Todo.all();
    render('todos/index');
  },
  show: function (id) {
    setTodo(id);
    render('todos/show')
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
      redirectTo('/todos');
    } else {
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
  },
  getTodos: function () {
    return todos
  }
};

export { TodosController };
