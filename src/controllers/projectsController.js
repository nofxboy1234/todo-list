import { createProject } from '../models/project.js';
import { render as renderNewView } from '../views/projects/new.js';
import { render as renderIndexView } from '../views/projects/index.js';

const createProjectsController = () => {
  let project;
  let projects = [];

  // new
  const build = () => {
    project = createProject();
    renderNewView(project);
  };

  const create = (title) => {
    project = createProject(title);

    if (project.save()) {
      console.log(`'${project.title}' was successfully created`);
      renderIndexView(projects);
    } else {
      console.log(`'${project.title}' failed to save`);
    }

    return project;
  };

  const index = () => {
    renderIndexView(projects);
  };

  return { build, create, index };
};

export { createProjectsController };
