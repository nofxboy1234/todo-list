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
      case '/todos/edit':
        const id = params[0];
        todosController.edit(id);
        break;
      case '/todos':
        if (params.length > 0) {
          const id = params[0];
          const lastIndex = params.length - 1;
          if (params[lastIndex] === 'DELETE') {
            todosController.destroy(id);
          } else if (params[lastIndex] === 'UPDATE') {
            todosController.update(id, ...params.slice(1, lastIndex));
          } else {
            todosController.show(id);
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
