import { Todo } from '../models/todo';
import { redirectTo } from '../router';
import { render } from './renderer';
import { params } from './todoParameters';

let todo;
let todos;

const setTodo = () => (todo = Todo.find(params.id));
const todoParams = () => {
  return params
    .require('todo')
    .permit(
      'title',
      'description',
      'dueDate',
      'priority',
      'checkList',
      'projectID'
    );
};

const TodosController = {
  new: function () {
    todo = Todo.new(todoParams());
    render('todos/new');
  },
  create: function () {
    todo = Todo.new(todoParams());

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
    setTodo();
    render('todos/show');
  },
  edit: function () {
    setTodo();
    render('todos/edit');
  },
  update: function () {
    setTodo();

    if (todo.update(todoParams())) {
      redirectTo('/todos');
    } else {
      redirectTo('/todos/edit', todo);
    }
  },
  destroy: function () {
    setTodo();
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
