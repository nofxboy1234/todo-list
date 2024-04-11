import './style.css';
import { createLayout } from './views/layouts/application';
import { Project, projectStatic } from './models/project.mjs';

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

// Create default project if "No Projects found in localStorage!"
createLayout();
