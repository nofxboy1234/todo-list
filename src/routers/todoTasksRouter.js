import { controller } from '../controllers/todoTasksController';
import { params } from '../parameters/taskParameters';
import {
  todoTasksPath,
  newTodoTaskPath,
  editTodoTaskPath,
  todoTaskPath,
} from '../routes/todoTaskRoutes';

function redirectTo(method, path, taskData = {}) {
  switch (path) {
    case todoTasksPath:
      if (method === 'GET') {
        params.merge(taskData);
        controller.index();
      }
      if (method === 'POST') {
        params.merge(taskData);
        controller.create();
      }
      break;
    case newTodoTaskPath:
      if (method === 'GET') {
        params.reset();
        controller.new();
      }
      break;
    case editTodoTaskPath:
      if (method === 'GET') {
        params.reset();
        params.merge(taskData);
        controller.edit();
      }
      break;
    case todoTaskPath:
      if (method === 'GET') {
        params.merge(taskData);
        controller.show();
      }
      if (method === 'PATCH') {
        params.merge(taskData);
        controller.update();
      }
      if (method === 'PUT') {
        params.merge(taskData);
        controller.update();
      }
      if (method === 'DELETE') {
        params.merge(taskData);
        controller.destroy();
      }
      break;
    default:
      break;
  }
}

export { redirectTo };
