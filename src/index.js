import './style.css';
import { createLayout } from './views/layouts/application';
import { Project, projectStatic } from './models/project.mjs';
import { todoStatic } from './models/todo.mjs';
import { taskStatic } from './models/task.mjs';

function createDefaultProject() {
  const project = new Project('Default');
  project.save();
}

if (projectStatic.load()) {
  console.log('Projects in localStorage were loaded.');
} else {
  console.log('No Projects found in localStorage. Creating Default project.');
  createDefaultProject();
}

if (todoStatic.load()) {
  console.log('Todos in localStorage were loaded.');
} else {
  console.log('No Todos found in localStorage.');
  createDefaultProject();
}

if (taskStatic.load()) {
  console.log('Tasks in localStorage were loaded.');
} else {
  console.log('No Tasks found in localStorage.');
  createDefaultProject();
}

createLayout();
