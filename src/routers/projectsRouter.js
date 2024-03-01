import { TodoTasksController as todoTasksController } from '../controllers/todoTasksController';
import { params as taskParams } from '../parameters/taskParameters';

function redirectTo(method, path, taskData = {}) {
  switch (path) {
    case '/projects':
      if (method === 'GET') {
        taskParams.merge(taskData);
        todoTasksController.index();
      }
      if (method === 'POST') {
        taskParams.merge(taskData);
        todoTasksController.create();
      }
      break;
    case `/projects/new`:
      if (method === 'GET') {
        taskParams.reset();
        todoTasksController.new();
      }
      break;
    case `/projects/${taskData.data.id}/edit`:
      if (method === 'GET') {
        taskParams.reset();
        taskParams.merge(taskData);
        todoTasksController.edit();
      }
      break;
    case `/projects/${taskData.data.id}`:
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
    case '/':
      if (method === 'GET') {
        todoTasksController.index();
      }
      break;
    default:
      break;
  }
}

export { redirectTo };
