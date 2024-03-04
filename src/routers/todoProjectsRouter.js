import { controller } from '../controllers/todoProjectsController';
import { params } from '../parameters/projectParameters';
import {
  todoProjectsPath,
  newTodoProjectPath,
  editTodoProjectPath,
  todoProjectPath,
} from '../routes/todoProjectRoutes';

function redirectTo(method, path, projectData = {}) {
  switch (path) {
    case todoProjectsPath:
      if (method === 'GET') {
        params.merge(projectData);
        controller.index();
      }
      if (method === 'POST') {
        params.merge(projectData);
        controller.create();
      }
      break;
    case newTodoProjectPath:
      if (method === 'GET') {
        params.reset();
        controller.new();
      }
      break;
    case editTodoProjectPath:
      if (method === 'GET') {
        params.reset();
        params.merge(projectData);
        controller.edit();
      }
      break;
    case todoProjectPath:
      if (method === 'GET') {
        params.merge(projectData);
        controller.show();
      }
      if (method === 'PATCH') {
        params.merge(projectData);
        controller.update();
      }
      if (method === 'PUT') {
        params.merge(projectData);
        controller.update();
      }
      if (method === 'DELETE') {
        params.merge(projectData);
        controller.destroy();
      }
      break;
    default:
      break;
  }
}

export { redirectTo };
