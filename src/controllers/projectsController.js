import { Project } from '../models/todo.js';
import { render as renderShow } from '../views/todos/show.js';
import { render as renderIndex } from '../views/todos/index.js';
import { render as renderNew } from '../views/todos/new.js';
import { render as renderEdit } from '../views/todos/edit.js';
import { redirectTo } from '../helpers.js';

let project;
let projects;

const setProject = (id) => (project = Project.find(id));

const ProjectsController = {
  new: function () {
    project = Project.new();
    renderNew(project);
  },
  create: function (name) {
    project = Project.new(name);

    if (project.save()) {
      console.log(`'${project.title}' was successfully created`);
      redirectTo('/projects');
    } else {
      console.log(`'${project.title}' failed to save`);
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
      console.log(`'${project.title}' was successfully updated`);
      redirectTo('/projects');
    } else {
      console.log(`'${project.title}' failed to update`);
      redirectTo('/projects/edit', project.id);
    }
  },
  destroy: function (id) {
    setProject(id);
    project.destroy();
    redirectTo('/todos');
  },
};

export { ProjectsController };
