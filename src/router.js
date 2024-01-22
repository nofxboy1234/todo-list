import { TodosController as todosController } from './controllers/todosController';
import { ProjectsController as projectsController } from './controllers/projectsController';

const redirectTo = (path, params) => {
  switch (path) {
    case '/todos/new':
      todosController.new();
      break;
    case '/todos/create':
      todosController.create(params);
      break;
    case '/todos/edit':
      todosController.edit(params);
      break;
    case '/todos':
      if (params && params.id) {
        if (params.operation === 'DELETE') {
          delete params.operation;
          todosController.destroy(params);
        } else if (params.operation === 'UPDATE') {
          delete params.operation;
          todosController.update(params);
        } else {
          todosController.show(params);
        }
      } else {
        todosController.index();
      }
      break;

    case '/projects/new':
      projectsController.new();
      break;
    case '/projects/create':
      projectsController.create(params);
      break;
    case '/projects/edit':
      projectsController.edit(params);
      break;
    case '/projects':
      if (params && params.id) {
        if (params.operation === 'DELETE') {
          delete params.operation;
          projectsController.destroy(params);
        } else if (params.operation === 'UPDATE') {
          delete params.operation;
          projectsController.update(params);
        } else {
          projectsController.show(params);
        }
      } else {
        projectsController.index();
      }
      break;
    default:
      break;
  }
};

export { redirectTo };
