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

const routes = {};

const createRouter = (instanceProperties = {}, staticProperties = {}) => {
  const Router = {
    new: function () {
      const instance = {
        redirectTo: function (path, method) {

          let resolvedPath;
          if (Object.hasOwn(routes, path)) {
            const functionStringName = path.name;
            resolvedPath = routes[functionStringName].route();
          } else {
            resolvedPath = path;
          }
          const resourcePlural = resolvedPath.split('/').at(1);
          switch (resolvedPath) {
            // todosPath, /todos
            case `/${resourcePlural}`:
              if (method === 'GET') controller.index();
              if (method === 'POST') controller.create();
              break;
            // newTodoPath, /todos/new
            case `/${resourcePlural}/new`:
              if (method === 'GET') controller.new();
              break;
            // editTodoPath, /todos/:id/edit
            case `/${resourcePlural}/${resource.id}/edit`:
              if (method === 'GET') controller.edit();
              break;
            // todoPath, /todos/:id
            case `/${resourcePlural}/${resource.id}`:
              if (method === 'GET') controller.show();
              if (method === 'PATCH') controller.update();
              if (method === 'PUT') controller.update();
              if (method === 'DELETE') controller.destroy();
              break;
            // rootPath, /
            case '/':
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
                route: function () {
                  return `/${resourcePlural}`;
                },
                controller,
              },
            ],
            [
              `new${resourceSingular.toUpperCase()}Path`,
              {
                route: function () {
                  return `/${resourcePlural}/new`;
                },
                controller,
              },
            ],
            [
              `edit${resourceSingular}Path`,
              {
                route: function (resource) {
                  return `/${resourcePlural}/${resource.id}/edit`;
                },
                controller,
              },
            ],
            [
              `${resourceSingular}Path`,
              {
                route: function (resource) {
                  return `/${resourcePlural}/${resource.id}`;
                },
              },
              controller,
            ],
            [
              'rootPath',
              {
                route: function () {
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
