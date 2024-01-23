import { TodosController as todosController } from './controllers/todosController';
import { ProjectsController as projectsController } from './controllers/projectsController';
import { params as todoParams } from './controllers/todoParameters';

const createRouter = (instanceProperties = {}, staticProperties = {}) => {
  const Router = {
    new: function (resourceSingular, resourcePlural) {
      const resourcePluralPath = () => {
        return `${resourcePlural}Path`;
      };

      const instance = {
        redirectTo: function (path, method) {
          switch (path) {
            case resourcePluralPath() || this[resourcePluralPath()]:
              if (method === 'GET') todosController.index();
              if (method === 'POST') todosController.create();
              break;
            default:
              break;
          }
        },
      };
      Object.defineProperty(instance, `${resourcePlural}Path`, {
        value: `/${resourcePlural}`,
      });
      Object.assign(instance, instanceProperties);
      return instance;
    },
  };
  Object.assign(Router, staticProperties);
  return Router;
};

export { createRouter };

// const Router = createRouter;
// const router = Router.new('todo', 'todos');
