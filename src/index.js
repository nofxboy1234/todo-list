import { createLayout } from './views/layouts/application';
import './style.css';
import { Project } from './models/project';

function createDefaultProject() {
  const project = Project.new(defaultProjectData());
  project.save();
}

function defaultProjectData() {
  return {
    id: 1,
    project: {
      name: 'Default',
    },
  };
}

createDefaultProject();
createLayout();
