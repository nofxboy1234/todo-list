import { TodosController } from './controllers/todosController.js';
import { Todo } from './models/todo.js';
import './style.css';

const todosController = TodosController;

todosController.new();
console.log('Fill in new view form');
const checkList = { 'Fill water bowl': false, 'Fill food bowl': false };
todosController.create(
  'Feed the dogs',
  'Make sure the dogs are happy!',
  '2024-01-31',
  'High',
  checkList,
  'Home'
);
todosController.show(Todo.last().id);
todosController.edit(Todo.last().id);
todosController.update(
  Todo.last().id,
  'Feed the dogs urgently!',
  'Make sure the dogs are very happy!',
  '2024-01-28',
  'High',
  checkList,
  'Home'
);
todosController.destroy(Todo.last().id);
