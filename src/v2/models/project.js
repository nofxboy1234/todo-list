import { Todo } from './todo';
import { createModel } from './model';
import { todoParams as todoParams } from '../parameters/todoParameters';

import { pathHelpers } from '../routing/helpers/project';

const hasCollidingName = (project) => {
  const paramsProjects = todoParams.data.projects;
  const indexInProjects = project.data.indexInProjects;
  let found;

  if (indexInProjects) {
    const otherProjects = paramsProjects.filter(
      (project, index) => index !== indexInProjects
    );
    found = otherProjects.find(
      (otherProject) => otherProject.data.name === project.data.name
    );
    return found;
  } else {
    found = paramsProjects.find(
      (otherProject) => otherProject.data.name === project.data.name
    );
    return found;
  }
};

const instanceProperties = {
  pathHelpers: pathHelpers,
  todos: function () {
    return Todo.all().filter((todo) => todo.data.projectID === this.data.id);
  },
  destroyDependent: function () {
    this.todos().forEach((todo) => {
      todo.destroy();
    });
  },
  update: function (validationInstance) {
    if (!validationInstance.data.validated) {
      validationInstance.validate();
    }

    if (validationInstance.errors.length > 0) {
      return false;
    } else {
      this.saveDependent();
      this.updateDependent();

      this.saveParents();
      this.updateParents();

      this.linkToParents(validationInstance);

      updateInstanceInStorage(this, validationInstance);
      this.cleanData();
      return true;
    }
  },
};

const Project = createModel(instanceProperties);

export { Project };
