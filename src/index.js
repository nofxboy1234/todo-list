import { createLayout } from './views/layouts/application';
import './style.css';
import { Project } from './models/project';
import { projectParams } from './parameters/projectParameters';
import { todoParams } from './parameters/todoParameters';

function createDefaultProject() {
  updateProjectParams();
  todoParams.data.projects = [];
  const project = Project.new(projectParams);
  if (project.save()) {
    console.log('saved Default project');
  } else {
    project.errors.forEach((error) => {
      console.log(error);
    });
  }
}

function defaultProjectData() {
  return {
    data: {
      id: 1,
      name: 'Default',
    },
  };
}

function updateProjectParams() {
  const updatedData = defaultProjectData();
  projectParams.merge(updatedData);
}

createDefaultProject();
createLayout();
