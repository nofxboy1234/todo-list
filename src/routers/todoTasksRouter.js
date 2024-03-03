import { todoTasksController } from '../controllers/todoTasksController';
import { params as taskParams } from '../parameters/taskParameters';
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
        taskParams.merge(taskData);
        todoTasksController.index();
      }
      if (method === 'POST') {
        taskParams.merge(taskData);
        todoTasksController.create();
      }
      break;
    case newTodoTaskPath:
      if (method === 'GET') {
        taskParams.reset();
        todoTasksController.new();
      }
      break;
    case editTodoTaskPath:
      if (method === 'GET') {
        taskParams.reset();
        taskParams.merge(taskData);
        todoTasksController.edit();
      }
      break;
    case todoTaskPath:
      if (method === 'GET') {
        taskParams.merge(taskData);
        todoTasksController.show();
      }
      if (method === 'PATCH') {
        taskParams.merge(taskData);
        todoTasksController.update();
      }
      if (method === 'PUT') {
        taskParams.merge(taskData);
        todoTasksController.update();
      }
      if (method === 'DELETE') {
        taskParams.merge(taskData);
        todoTasksController.destroy();
      }
      break;
    default:
      break;
  }
}

export { redirectTo };
