import { Project } from '../models/project';
import { redirectTo } from '../helpers';

import { render as renderNew } from '../views/projects/new';
import { render } from './renderer';

let project;
let projects;

const setProject = (id) => (project = Project.find(id));

const ProjectsController = {
  new: function () {
    const defaultValues = {
      name: '',
    };
    project = Project.new(defaultValues);
    renderNew(project);
  },
  create: function (name) {
    const createValues = {
      name,
    };
    project = Project.new(createValues);

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
  update: function (id, name) {
    setProject(id);
    if (project.update(name)) {
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
