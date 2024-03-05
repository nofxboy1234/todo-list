import { controller } from '../controllers/todosController';
import { params } from '../parameters/todoParameters';

import { router } from './router';

const todosRouter = Object.create(router);
todosRouter.init(controller, params);

export { todosRouter };
