import { TodosController as todosController } from './controllers/todosController';
import { ProjectsController as projectsController } from './controllers/projectsController';

const router = {
  redirectTo: function (path, ...params) {
    switch (path) {
      case '/todos/new':
        todosController.new();
        break;
      case '/todos/create':
        todosController.create(...params);
        break;
      case '/todos/edit':
        const todoID = params[0];
        todosController.edit(todoID);
        break;
      case '/todos':
        if (params.length > 0) {
          const todoID = params[0];
          const lastIndex = params.length - 1;
          if (params[lastIndex] === 'DELETE') {
            todosController.destroy(todoID);
          } else if (params[lastIndex] === 'UPDATE') {
            todosController.update(todoID, ...params.slice(1, lastIndex));
          } else {
            todosController.show(todoID);
          }
        } else {
          todosController.index();
        }
        break;

      case '/projects/new':
        projectsController.new();
        break;
      case '/projects/create':
        projectsController.create(...params);
        break;
      case '/projects/edit':
        const projectID = params[0];
        projectsController.edit(projectID);
        break;
      case '/projects':
        if (params.length > 0) {
          const projectID = params[0];
          const lastIndex = params.length - 1;
          if (params[lastIndex] === 'DELETE') {
            projectsController.destroy(projectID);
          } else if (params[lastIndex] === 'UPDATE') {
            projectsController.update(projectID, ...params.slice(1, lastIndex));
          } else {
            projectsController.show(projectID);
          }
        } else {
          projectsController.index();
        }
        break;
      default:
        break;
    }
  },
};

export { router };
