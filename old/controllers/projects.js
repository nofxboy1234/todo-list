import { Project } from '../models/project';

import { params } from '../parameters/project';

import { redirectTo } from '../routing/routers/router';
import { projectsPath } from '../routing/helpers/project';
import { todosPath } from '../routing/helpers/todo';

import { render, popCachedView } from '../rendering/renderer';
import {
  projectsView as index,
  newProjectView as new_,
  editProjectView as edit,
  projectView as show,
} from '../rendering/helpers/project';

const setProject = (controller) => {
  const id = params.data.id;
  const instance = Project.find(id);
  controller.project = instance;
};

const controller = {
  new: function () {
    this.project = Project.new(params);
    render(new_, this.project);
  },
  create: function () {
    this.project = Project.new(params);
    this.project.data.validated = false;

    if (this.project.save()) {
      params.reset();
      popCachedView();
      redirectTo('GET', projectsPath);
      redirectTo('GET', todosPath);
    } else {
      render(new_, this.project);
    }
  },
  index: function () {
    this.projects = Project.all();
    render(index, this.projects);
  },
  show: function () {
    setProject(this);
    render(show, this.project);
  },
  edit: function () {
    this.project = Project.new(params);
    render(edit, this.project);
  },
  update: function () {
    this.project = Project.new(params);
    this.project.data.validated = false;
    const validationInstance = Project.new(params);

    if (this.project.update(validationInstance)) {
      params.reset();
      popCachedView();
      redirectTo('GET', projectsPath);
      redirectTo('GET', todosPath);
    } else {
      render(edit, validationInstance);
    }
  },
  destroy: function () {
    setProject(this);
    this.project.destroy();
    redirectTo('GET', projectsPath);
  },
};

export { controller };
