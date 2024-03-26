import { Todo } from '../todo.mjs';

console.log('Creating todo1');
const todo1 = new Todo('t1', 'first todo', '2024-03-26', 'high', 1);
if (todo1.save()) {
  console.log(`Saved ${todo1.name}`);
  console.log(`ID is ${todo1.id}`);

  let allTodos = Todo.all();
  console.log(allTodos);
}
