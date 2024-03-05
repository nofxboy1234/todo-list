import { Project } from '../models/project';
import { params } from '../parameters/projectParameters';
import { projectsPath } from '../routes/projectRoutes';
import { render, popCachedView } from '../renderers/projectsRenderer';
import { todosPath } from '../routes/todoRoutes';
import { edit, index, new_, show } from '../symbols/resourceSymbols';
import { redirectTo } from '../routers/projectsRouter';
import { redirectTo as todoRedirectTo } from '../routers/todosRouter';

const setProject = (controller) => {
  const id = params.data.id;
  const instance = Project.find(id);
  controller.todoProject = instance;
};

const controller = {
  new: function () {
    this.project = Project.new(params);
    render(new_, this.project);
  },
  create: function () {
    this.project = this.Project.new(this.params);
    this.project.data.validated = false;

    if (this.project.save()) {
      params.reset();
      popCachedView();
      redirectTo('GET', projectsPath);
      todoRedirectTo('GET', todosPath);
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
    this.project = this.Project.new(this.params);
    this.project.data.validated = false;

    const validationInstance = Project.new(this.params);
    if (this.project.update(validationInstance)) {
      params.reset();
      popCachedView();
      redirectTo('GET', projectsPath);
      todoRedirectTo('GET', todosPath);
    } else {
      render(`${this.resourcePluralName}/edit`, validationInstance);
    }
  },
  destroy: function () {
    setProject(this);
    this.project.destroy();

    redirectTo('GET', projectsPath);
  },
};

export { controller };
