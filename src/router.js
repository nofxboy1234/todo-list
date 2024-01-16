import { TodosController } from './controllers/todosController';
const todosController = TodosController;

const router = {
  redirectTo: function (path, ...params) {
    switch (path) {
      case '/todos/new':
        todosController.new();
        break;
      case '/todos/create':
        todosController.create(...params);
        break;
      case '/todos':
        if (params.length > 0) {
          todosController.show(...params);
        } else {
          todosController.index();
        }
        break;
      default:
        break;
    }
  },
};

export { router };
