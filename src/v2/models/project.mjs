import { createError } from './error.mjs';
import { createModel, createModelStatic } from './model.mjs';

function createProjectStatic() {
  const modelStatic = createModelStatic();

  const overridesStatic = {};

  const instanceStatic = {};

  return Object.assign({}, modelStatic, overridesStatic, instanceStatic);
}

// "Class"
const Project = createProjectStatic();

function createProject(name) {
  const model = createModel();

  const overrides = {
    save(modelStatic = Project) {
      model.save(modelStatic);
    },
    validate() {
      this.errors.clear();
      if (name === '') {
        const error = createError('Name cannot be blank');
        this.errors.add(error);
      }

      if (name.length < 2) {
        const error = createError('Name must be 2 or more characters');
        this.errors.add(error);
      }

      if (Project.all().find((project) => project.name === name)) {
        const error = createError('A Project already exists with this name');
        this.errors.add(error);
      }
    },
  };

  const todos = () => {
    // return Todo.all().filter((todo) => todo.projectID === id);
  };

  const instance = {
    name,
    todos,
  };

  const tmp = {};
  Object.assign(tmp, model);
  Object.assign(tmp, overrides);
  Object.assign(tmp, instance);
  return tmp;

  // return Object.assign({}, model, overrides, instance);
}

export { Project, createProject };
