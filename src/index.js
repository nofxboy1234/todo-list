import { createLayout } from './views/layouts/application';
import './style.css';
import { Project } from './models/project';
import { params as projectParams } from './parameters/projectParameters';

function createDefaultProject() {
  updateProjectParams(defaultProjectData());
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
  const updatedData = {
    data: {
      id: 1,
      name: 'Default',
    },
  };
  Object.assign(projectParams.data, updatedData.data);
}

createDefaultProject();
createLayout();
