import { Project } from '../models/project';
import { params } from '../parameters/projectParameters';
import { params as todoParams } from '../parameters/todoParameters';
import { createController } from './controller';
import { popCachedView, render } from '../renderer';

import { Todo } from '../models/todo';

const createProjectInTodoParams = (task) => {
  const tempTodoParams = todoParams;
  const projects = tempTodoParams.data.projects;
  projects.push(task);
  const indexOfCreatedProject = projects.length - 1;

  return indexOfCreatedProject;
};

const setProjectInputValueOfTodo = (index) => {
  const tempTodoParams = todoParams;
  tempTodoParams.data.projectInputValue = `undefined-${index}`;
};

const updateProjectInTodoParams = (task) => {
  const tempTodoParams = todoParams;
  const tasks = tempTodoParams.data.projects;
  const indexOfTask = task.data.indexInProjects;
  const todoParamsTask = tasks.at(indexOfTask);
  Object.assign(todoParamsTask.data, task.data);
};

// const destroyProjectInTodoParams = (task) => {
//   const tempTodoParams = todoParams;
//   const tasks = tempTodoParams.data.projects;
//   const indexOfTask = task.data.indexInProjects;
//   tasks.splice(indexOfTask, 1);
// };

const Controller = createController('projects', Project, params);

const ProjectsController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    this.resourceSingular.validate();

    if (this.resourceSingular.errors.length === 0) {
      const indexOfCreatedProject = createProjectInTodoParams(
        this.resourceSingular
      );
      setProjectInputValueOfTodo(indexOfCreatedProject);
      params.reset();
      popCachedView();
      render('todos/edit', Todo.new(todoParams));
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  update: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    this.resourceSingular.validate();

    if (this.resourceSingular.errors.length === 0) {
      updateProjectInTodoParams(this.resourceSingular);
      params.reset();
      popCachedView();
      render('todos/edit', Todo.new(todoParams));
    } else {
      render(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  destroy: function () {
    this.setResourceSingular();
    this.resourceSingular.destroy();
    redirectTo('GET', projectsPath);

    if (!Project.all().includes(getProjectForTodosIndex())) {
      setProjectForTodosIndex(Project.first());
      redirectTo('GET', todosPath);
    }
  },
};
Object.assign(ProjectsController, instanceProperties);

export { ProjectsController };
