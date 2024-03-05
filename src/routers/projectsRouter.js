import { controller } from '../controllers/projectsController';
import { params } from '../parameters/projectParameters';

import {
  projectsPath,
  newProjectPath,
  editProjectPath,
  projectPath,
} from '../routes/projectRoutes';



const projectsRouter = {
  redirectTo: function (method, path, taskData) {
    httpGetMethod.redirectTo(path, taskData);

    switch (path) {
      case projectsPath: // indexPath
        if (method === 'GET') {
          params.merge(taskData);
          controller.index();
        }
        if (method === 'POST') {
          params.merge(taskData);
          controller.create();
        }
        break;
      case newProjectPath: // newPath
        if (method === 'GET') {
          params.reset();
          controller.new();
        }
        break;
      case editProjectPath: // editPath
        if (method === 'GET') {
          params.reset();
          params.merge(taskData);
          controller.edit();
        }
        break;
      case projectPath: // path
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

export { projectsRouter };
