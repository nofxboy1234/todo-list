import { TodosController as todosController } from './controllers/todosController';
import { ProjectsController as projectsController } from './controllers/projectsController';
import { params as todoParams } from './controllers/todoParameters';

//     Prefix Verb   URI Pattern                 Controller#Action
//     kittens GET    /kittens(.:format)          kittens#index
//             POST   /kittens(.:format)          kittens#create
//  new_kitten GET    /kittens/new(.:format)      kittens#new
// edit_kitten GET    /kittens/:id/edit(.:format) kittens#edit
//      kitten GET    /kittens/:id(.:format)      kittens#show
//             PATCH  /kittens/:id(.:format)      kittens#update
//             PUT    /kittens/:id(.:format)      kittens#update
//             DELETE /kittens/:id(.:format)      kittens#destroy
//        root GET    /                           kittens#index

const createRouter = (instanceProperties = {}, staticProperties = {}) => {
  const addPathHelpers = (resourceSingular, resourcePlural, instance) => {

    const entries = new Map([
      [`${resourcePlural}Path`, () => `/${resourcePlural}`],
      [
        `new${resourceSingular.toUpperCase()}Path`,
        () => `/${resourcePlural}/new`,
      ],
      [
        `edit${resourceSingular}Path`,
        (resource) => `/${resourcePlural}/${resource.id}/edit`,
      ],
      [
        `${resourceSingular}Path`,
        (resource) => `/${resourcePlural}/${resource.id}`,
      ],
      ['rootPath', () => '/'],
    ]);

    const pathHelpers = Object.fromEntries(entries);
    Object.assign(instance, pathHelpers);
  };

  const Router = {
    new: function (resourceSingular, resourcePlural) {
      const resourcePluralPath = () => {
        return `${resourcePlural}Path`;
      };

      const newResourceSingularPath = () => {
        return `new${resourceSingular.toUpperCase()}Path`;
      };

      const editResourceSingularPath = () => {
        return `edit${resourceSingular}Path`;
      };

      const resourceSingularPath = () => {
        return `${resourceSingular}Path`;
      };

      const rootPath = () => {
        return '/';
      };

      const instance = {
        redirectTo: function (path, method) {
          switch (path) {
            case resourcePluralPath() || this[resourcePluralPath()]:
              if (method === 'GET') todosController.index();
              if (method === 'POST') todosController.create();
              break;
            case newResourceSingularPath() || this[newResourceSingularPath()]:
              if (method === 'GET') todosController.new();
              break;
            case editResourceSingularPath() || this[editResourceSingularPath()]:
              if (method === 'GET') todosController.edit();
              break;
            case resourceSingularPath() || this[resourceSingularPath()]:
              if (method === 'GET') todosController.show();
              if (method === 'PATCH') todosController.update();
              if (method === 'PUT') todosController.update();
              if (method === 'DELETE') todosController.destroy();
              break;
            case rootPath() || this[rootPath()]:
              if (method === 'GET') todosController.index();
              break;
            default:
              break;
          }
        },
      };
      addPathHelpers(resourceSingular, resourcePlural, instance);
      Object.assign(instance, instanceProperties);
      return instance;
    },
  };
  Object.assign(Router, staticProperties);
  return Router;
};

export { createRouter };
