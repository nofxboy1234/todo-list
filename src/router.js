import { TodosController as todosController } from './controllers/todosController';
import { ProjectsController as projectsController } from './controllers/projectsController';

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

// const routes = { todosPath: { path: () => `/${resourcePlural}`, controller } };
const routes = {};

// const pathHelpers = Object.keys(routes);

const createRouter = (instanceProperties = {}, staticProperties = {}) => {
  const Router = {
    new: function () {
      const instance = {
        redirectTo: function (path, method) {
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

          const resolvedPath = routes[path];
          switch (path) {
            case routes.resourcePluralPath || routes.resourcePluralPath.path():
              if (method === 'GET') controller.index();
              if (method === 'POST') controller.create();
              break;
            case newResourceSingularPath() || this[newResourceSingularPath()]:
              if (method === 'GET') controller.new();
              break;
            case editResourceSingularPath() || this[editResourceSingularPath()]:
              if (method === 'GET') controller.edit();
              break;
            case resourceSingularPath() || this[resourceSingularPath()]:
              if (method === 'GET') controller.show();
              if (method === 'PATCH') controller.update();
              if (method === 'PUT') controller.update();
              if (method === 'DELETE') controller.destroy();
              break;
            case rootPath() || this[rootPath()]:
              if (method === 'GET') controller.index();
              break;
            default:
              break;
          }
        },
        createRoutes: function (resourceSingular, resourcePlural, controller) {
          const entries = new Map([
            [
              `${resourcePlural}Path`,
              {
                path: function () {
                  return `/${resourcePlural}`;
                },
                controller,
              },
            ],
            [
              `new${resourceSingular.toUpperCase()}Path`,
              {
                path: function () {
                  return `/${resourcePlural}/new`;
                },
                controller,
              },
            ],
            [
              `edit${resourceSingular}Path`,
              {
                path: function (resource) {
                  return `/${resourcePlural}/${resource.id}/edit`;
                },
                controller,
              },
            ],
            [
              `${resourceSingular}Path`,
              {
                path: function (resource) {
                  return `/${resourcePlural}/${resource.id}`;
                },
              },
              controller,
            ],
            [
              'rootPath',
              {
                path: function () {
                  return '/';
                },
                controller,
              },
            ],
          ]);
          Object.assign(routes, Object.fromEntries(entries));
        },
      };
      Object.assign(instance, instanceProperties);
      return instance;
    },
  };
  Object.assign(Router, staticProperties);
  return Router;
};

const Router = createRouter();
const router = Router.new();
router.createRoutes('todo', 'todos', todosController);
router.createRoutes('project', 'projects', projectsController);

const redirectTo = router.redirectTo;

export { redirectTo, routes };
