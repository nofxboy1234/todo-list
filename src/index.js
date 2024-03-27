import './style.css';
import { createLayout } from './views/layouts/application';
import { Project } from './models/project.mjs';

function createDefaultProject() {
  const project = new Project('Default');
  if (project.save()) {
    console.log(`Saved ${project.name} successfully`);
  } else {
    project.errors.forEach((error) => console.log(error.description));
  }
}

createDefaultProject();
createLayout();
