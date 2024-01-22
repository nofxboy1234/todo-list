import { Todo } from '../models/todo';
import { redirectTo } from '../router';
import { render } from './renderer';
import { params } from './todoParameters';

let todo;
let todos;

const setTodo = () => (todo = Todo.find(params.id));
const todoParams = () => {
  params
    .require('todo')
    .permit('title', 'description', 'dueDate', 'priority', 'checkList');
};

const TodosController = {
  new: function () {
    todo = Todo.new(params);
    render('todos/new');
  },
  create: function () {
    todo = Todo.new(params);

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
  show: function () {
    setTodo(params);
    render('todos/show');
  },
  edit: function () {
    setTodo(params);
    render('todos/edit');
  },
  update: function () {
    setTodo(params);

    if (todo.update(params)) {
      redirectTo('/todos');
    } else {
      redirectTo('/todos/edit', todo);
    }
  },
  destroy: function () {
    setTodo(params);
    todo.destroy();
    redirectTo('/todos');
  },
  getTodo: function () {
    return todo;
  },
  getTodos: function () {
    return todos;
  },
};

export { TodosController };
