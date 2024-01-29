import { Project } from '../models/project';
import { params } from '../parameters/projectParameters';
import { createController } from './controller';
import { render } from '../renderer';
import { params as todoParams } from '../parameters/todoParameters';

const permittedParams = ['name'];

// const ProjectsController = createController(
//   'project',
//   'projects',
//   Project,
//   params,
//   permittedParams
// );

const Controller = createController(
  'project',
  'projects',
  Project,
  params,
  permittedParams
);

const ProjectsController = {
  resourceSingularName: Controller.resourceSingularName,
  resourcePluralName: Controller.resourcePluralName,
  resourceClass: Controller.resourceClass,
  params: Controller.params,
  permittedParams: Controller.permittedParams,
  resourceSingular: Controller.resourceSingular,
  resourcePlural: Controller.resourcePlural,
  setResourceSingular: Controller.setResourceSingular,
  resourceSingularParams: Controller.resourceSingularParams,
  new: Controller.new,
  create: function () {
    this.resourceSingular = this.resourceClass.new(
      this.resourceSingularParams()
    );

    if (this.resourceSingular.save()) {
      // todos/new and todos/edit use the same rendering
      render('todos/new', todoParams);
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  index: Controller.index,
  show: Controller.show,
  edit: Controller.edit,
  update: Controller.update,
  destroy: Controller.destroy,
};

export { ProjectsController };
