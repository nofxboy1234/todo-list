import {
  events as projectEvents,
  Project,
  projectStatic,
} from './models/project.mjs';
import { subscribe } from './messageQueue/messageQueue.mjs';
import { index as indexView } from './views/projects/index.mjs';
import { Todo, todoStatic } from './models/todo.mjs';
import { Task } from './models/task.mjs';

subscribe(projectEvents.create, indexView);

const project1 = new Project('project1');
if (project1.save()) {
  console.log(`Saved ${project1.name} successfully`);
}

const project2 = new Project('project2');
if (project2.save()) {
  console.log(`Saved ${project2.name} successfully`);
}

const project3 = new Project('project3');
if (project3.save()) {
  console.log(`Saved ${project3.name} successfully`);
}

console.log(projectStatic.all());
console.log(projectStatic.first());
console.log(projectStatic.last());
console.log(projectStatic.lastID());
console.log(projectStatic.nextID());

console.log(project1.todos());

const todo1 = new Todo('todo1', 'todo1 description', '2024-03-27', 'low', 1);
if (todo1.save()) {
  console.log(`Saved '${todo1.description}' successfully`);
}

const todo2 = new Todo('todo2', 'todo2 description', '2024-03-28', 'medium', 1);
if (todo2.save()) {
  console.log(`Saved '${todo2.description}' successfully`);
}

console.log(project1.todos());

const updateData = {
  title: 'todo2 updated',
  description: 'todo2 description updated',
  dueDate: '2025-01-01',
  priority: 'high',
  projectID: 2,
};
todo1.update(updateData);

console.log(todoStatic.all());
todo1.destroy();
console.log(project1.todos());
console.log(todo2.tasks());

const task1 = new Task('task1', 2);
if (task1.save()) {
  console.log(`Saved ${task1.name} successfully`);
}

const task2 = new Task('task2', 2);
if (task2.save()) {
  console.log(`Saved ${task2.name} successfully`);
}

const task3 = new Task('task3', 2);
if (task3.save()) {
  console.log(`Saved ${task3.name} successfully`);
}

console.log(todo2.tasks());

console.log(todo2.project());
