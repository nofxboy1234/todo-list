import { Todo } from '../models/todo';
import { render } from './renderer';
import { params } from './todoParameters';
import { createRouter as Router } from '../router';

let todo;
let todos;

const router = Router().new('todo', 'todos');
const redirectTo = router.redirectTo;
const todosPath = router.todosPath;

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
      redirectTo(todosPath(), 'GET');
      // redirectTo('/todos');
    } else {
      render('todos/new');
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
      render('todos/edit');
    }
  },
  destroy: function () {
    setTodo();
    todo.destroy();
    redirectTo('/todos');
  },
};

export { TodosController, todo, todos };
