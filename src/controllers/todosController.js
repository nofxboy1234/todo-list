import { Todo } from '../models/todo.js';
import { render } from '../views/todos/show.js';

let todo;
let todos;

const setTodo = (id) => (todo = Todo.find(id));

const TodosController = {
  new: function () {
    todo = Todo.new();
    console.log('\nnew view:');
    console.log(todo);
    console.log('\n');
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
    console.log('\nindex view:');
    console.log(todos);
    console.log('\n');
  },
  show: function (id) {
    setTodo(id);
    render(todo);
  },
  edit: function (id) {
    setTodo(id);
    console.log('\nedit view:');
    console.log(todo);
    console.log('\n');
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
