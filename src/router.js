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
          if (params[1] === 'DELETE') {
            const id = params[0];
            todosController.destroy(id);
          } else {
            todosController.show(...params);
          }
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
