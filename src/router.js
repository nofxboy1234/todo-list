import { TodosController as todosController } from './controllers/todosController';
import { ProjectsController as projectsController } from './controllers/projectsController';
import { params as todoParams } from './controllers/todoParameters';

const createRouter = (instanceProperties = {}, staticProperties = {}) => {
  const addPathHelpers = (resourcePlural, instance) => {
    // Object.defineProperty(instance, `${resourcePlural}Path`, {
    //   value: `/${resourcePlural}`,
    // });

    const entries = new Map([
      [`${resourcePlural}Path`, `/${resourcePlural}`],
      [],
    ]);

    const pathHelpers = Object.fromEntries(entries);
    Object.assign(instance, pathHelpers)
  };

  const Router = {
    new: function (resourcePlural) {
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
      addPathHelpers(resourcePlural, instance);
      Object.assign(instance, instanceProperties);
      return instance;
    },
  };
  Object.assign(Router, staticProperties);
  return Router;
};

export { createRouter };

// const Router = createRouter;
// const router = Router.new('todos');
