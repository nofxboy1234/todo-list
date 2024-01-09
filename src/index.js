import { createTodosController } from './controllers/todosController.js';
import './style.css';

console.log('\n');

const todosController = createTodosController();
const checkList = { 'Fill water bowl': false, 'Fill food bowl': false };
let todo = todosController.build();
todo = todosController.create(
  'Feed the dogs',
  'Make sure the dogs are happy!',
  '2024-01-31',
  'high',
  checkList,
  'Home'
);

console.log('\n');

todosController.show(todo);
todosController.index();

console.log('\n');

todosController.edit(todo);
todosController.update(
  'Feed the dogs and cats',
  'Make sure the dogs and cats are happy!',
  '2024-01-31',
  'high',
  checkList,
  'Home'
);

console.log('\n');

todosController.destroy(todo);
