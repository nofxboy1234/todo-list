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

const project1 = new Project('Project 1');
if (project1.save()) {
  console.log(`Saved ${project1.name} successfully`);
} else {
  project1.errors.forEach((error) => console.log(error.description));
}

const project2 = new Project('Project 2');
if (project2.save()) {
  console.log(`Saved ${project2.name} successfully`);
} else {
  project2.errors.forEach((error) => console.log(error.description));
}

createLayout();
