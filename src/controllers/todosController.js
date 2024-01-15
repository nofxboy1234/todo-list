import { Todo } from '../models/todo.js';
import { render as renderShow } from '../views/todos/show.js';
import { render as renderIndex } from '../views/todos/index.js';
import { render as renderNew } from '../views/todos/new.js';
import { render as renderEdit } from '../views/todos/edit.js';

let todo;
let todos;

const setTodo = (id) => (todo = Todo.find(id));

const TodosController = {
  new: function () {
    todo = Todo.new();
    renderNew(todo, this);
  },
  create: function (title, description, dueDate, priority, checkList, project) {
    todo = Todo.new(title, description, dueDate, priority, checkList, project);

    if (todo.save()) {
      console.log(`'${todo.title}' was successfully created`);
      this.index();
    } else {
      console.log(`'${todo.title}' failed to save`);
      this.new();
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
    project
  ) {
    setTodo(id);
    if (
      todo.update(title, description, dueDate, priority, checkList, project)
    ) {
      console.log(`'${todo.title}' was successfully updated`);
      this.index();
    } else {
      console.log(`'${todo.title}' failed to update`);
      this.edit(id);
    }
  },
  destroy: function (id) {
    setTodo(id);
    todo.destroy();
    this.index();
  },
};

export { TodosController };
