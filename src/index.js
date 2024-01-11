import { TodosController } from './controllers/todosController.js';
import { Todo } from './models/todo.js';
import { createLayout } from './views/layouts/application.js';
import './style.css';

const todosController = TodosController;

createLayout();

// todosController.new();

// const checkList = { 'Fill water bowl': false, 'Fill food bowl': false };
// todosController.create(
//   'Feed the dogs',
//   'Make sure the dogs are happy!',
//   '2024-01-31',
//   'High',
//   checkList,
//   'Home'
// );

// todosController.edit(Todo.last().id);
// const checkList2 = { 'Fill water bowl': false, 'Fill food bowl': false };
// todosController.create(
//   'Feed the cat',
//   'Make sure the cats are happy!',
//   '2024-01-30',
//   'Medium',
//   checkList2,
//   'Home'
// );

// todosController.show(Todo.last().id);
