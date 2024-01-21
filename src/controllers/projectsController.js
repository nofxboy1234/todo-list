import { Project } from '../models/project';
import { redirectTo } from '../helpers';

import { render as renderNew } from '../views/projects/new';
import { render } from './renderer';

let project;
let projects;

const setProject = (id) => (project = Project.find(id));

const ProjectsController = {
  new: function () {
    project = Project.new();
    // render('new');
    renderNew(project);
  },
  create: function (name) {
    project = Project.new(name);

    if (project.save()) {
      render('todos/new');
      // redirectTo('/projects');
    } else {
      redirectTo('/projects/new');
    }
  },
  index: function () {
    projects = Project.all();
    renderIndex(projects);
  },
  show: function (id) {
    setProject(id);
    renderShow(project);
  },
  edit: function (id) {
    setProject(id);
    renderEdit(project);
  },
  update: function (name) {
    setProject(id);
    if (
      project.update(name)
    ) {
      redirectTo('/projects');
    } else {
      redirectTo('/projects/edit', project.id);
    }
  },
  destroy: function (id) {
    setProject(id);
    project.destroy();
    redirectTo('/projects');
  },
};

export { ProjectsController };
