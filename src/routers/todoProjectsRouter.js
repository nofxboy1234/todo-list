import { controller } from '../controllers/todoProjectsController';
import { params } from '../parameters/projectParameters';

import {
  todoProjectsPath,
  newTodoProjectPath,
  editTodoProjectPath,
  todoProjectPath,
} from '../routes/todoProjectRoutes';

const todoProjectsRouter = {
  redirectTo: function (method, path, taskData) {
    switch (path) {
      case todoProjectsPath:
        if (method === 'GET') {
          params.merge(taskData);
          controller.index();
        }
        if (method === 'POST') {
          params.merge(taskData);
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
          params.merge(taskData);
          controller.edit();
        }
        break;
      case todoProjectPath:
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
  },
};

export { todoProjectsRouter };
