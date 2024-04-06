import './style.css';
import { createLayout } from './views/layouts/application';
import { Project } from './models/project.mjs';
import { Todo } from './models/todo.mjs';

function createDefaultProject() {
  const project = new Project('Default');
  if (project.save()) {
    console.log(`Saved ${project.name} successfully`);
  } else {
    project.errors.forEach((error) => console.log(error.description));
  }
}

function createTestProjects() {
  const project1 = new Project('Project 1');
  if (project1.save()) {
    console.log(`Saved ${project1.name} successfully`);
  } else {
    project1.errors.forEach((error) => console.log(error.description));
  }

  const todo1 = new Todo('Todo 1', 'This is Todo 1.', '2024-03-28', 'low', 1);
  if (todo1.save()) {
    console.log(`Saved ${todo1.title} successfully`);
  } else {
    todo1.errors.forEach((error) => console.log(error.description));
  }

  const todo2 = new Todo(
    'Todo 2',
    'This is Todo 2.',
    '2024-03-29',
    'medium',
    1
  );
  if (todo2.save()) {
    console.log(`Saved ${todo2.title} successfully`);
  } else {
    todo2.errors.forEach((error) => console.log(error.description));
  }

  const todo3 = new Todo('Todo 3', 'This is Todo 3.', '2024-03-29', 'high', 1);
  if (todo3.save()) {
    console.log(`Saved ${todo3.title} successfully`);
  } else {
    todo3.errors.forEach((error) => console.log(error.description));
  }

  const project2 = new Project('Project 2');
  if (project2.save()) {
    console.log(`Saved ${project2.name} successfully`);
  } else {
    project2.errors.forEach((error) => console.log(error.description));
  }
}

createDefaultProject();
createTestProjects();
createLayout();
