import './style.css';
import { createLayout } from './views/layouts/application';
import { Project, projectStatic } from './models/project.mjs';
import { Todo } from './models/todo.mjs';

function createDefaultProject() {
  const project = new Project('Default');
  if (project.save()) {
    console.log(`Saved ${project.name} successfully`);
  } else {
    project.errors.forEach((error) => console.log(error.description));
  }
}

createDefaultProject();
console.log(projectStatic);
if (projectStatic.load()) {
  console.log(
    'Data loaded successfully! All projects in localStorage were loaded.'
  );
} else {
  console.log('Data loading failed! No projects found in localStorage.');
}

createLayout();
