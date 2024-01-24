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

const controllers = {
  todos: todosController,
  projects: projectsController,
};

const createRouter = (instanceProperties = {}, staticProperties = {}) => {
  const Router = {
    new: function () {
      const instance = {
        redirectTo: function (path, resource, method) {
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
              if (method === 'GET') controllers['resourcePlural'].index();
              if (method === 'POST') controllers['resourcePlural'].create();
              break;
            // newTodoPath, /todos/new
            case `/${resourcePlural}/new`:
              if (method === 'GET') controllers['resourcePlural'].new();
              break;
            // editTodoPath, /todos/:id/edit
            case `/${resourcePlural}/${resource.id}/edit`:
              if (method === 'GET') controllers['resourcePlural'].edit();
              break;
            // todoPath, /todos/:id
            case `/${resourcePlural}/${resource.id}`:
              if (method === 'GET') controllers['resourcePlural'].show();
              if (method === 'PATCH') controllers['resourcePlural'].update();
              if (method === 'PUT') controllers['resourcePlural'].update();
              if (method === 'DELETE') controllers['resourcePlural'].destroy();
              break;
            // rootPath, /
            case '/':
              if (method === 'GET') controllers['resourcePlural'].index();
              break;
            default:
              break;
          }
        },
        createRoutes: function (resourceSingular, resourcePlural) {
          const entries = new Map([
            [
              `${resourcePlural}Path`,
              {
                route: function () {
                  return `/${resourcePlural}`;
                },
              },
            ],
            [
              `new${resourceSingular.toUpperCase()}Path`,
              {
                route: function () {
                  return `/${resourcePlural}/new`;
                },
              },
            ],
            [
              `edit${resourceSingular}Path`,
              {
                route: function (resource) {
                  return `/${resourcePlural}/${resource.id}/edit`;
                },
              },
            ],
            [
              `${resourceSingular}Path`,
              {
                route: function (resource) {
                  return `/${resourcePlural}/${resource.id}`;
                },
              },
            ],
            [
              'rootPath',
              {
                route: function () {
                  return '/';
                },
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
router.createRoutes('todo', 'todos');
router.createRoutes('project', 'projects');

const redirectTo = router.redirectTo;

export { redirectTo, routes };
