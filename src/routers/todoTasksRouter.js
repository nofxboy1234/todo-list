import { controller } from '../controllers/todoTasksController';
import { params } from '../parameters/taskParameters';

import { router } from './router';

const todoTasksRouter = Object.create(router);
todoTasksRouter.init(controller, params);

export { todoTasksRouter };
