import { Todo } from '../models/todo';
import { redirectTo } from '../router';
import { render } from './renderer';

let todo;
let todos;

const setTodo = (id) => (todo = Todo.find(id));

const TodosController = {
  new: function () {
    const defaultValues = {
      title: '',
      description: '',
      dueDate: '',
      priority: 'high',
      checkList: {},
      projectID: undefined,
    };
    todo = Todo.new(defaultValues);
    
    render('todos/new');
  },
  create: function (
    title,
    description,
    dueDate,
    priority,
    checkList,
    projectID
  ) {
    const createValues = {
      title,
      description,
      dueDate,
      priority,
      checkList,
      projectID,
    };
    todo = Todo.new(createValues);

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
    render('todos/show');
  },
  edit: function (id) {
    setTodo(id);
    render('todos/edit');
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

    const updateValues = {
      title,
      description,
      dueDate,
      priority,
      checkList,
      projectID,
    };

    if (
      todo.update(updateValues)
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
    return todos;
  },
};

export { TodosController };
