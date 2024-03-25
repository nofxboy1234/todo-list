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

  const save = (modelStatic = Project) => {
    model.save(modelStatic);
  };

  const validate = () => {
    model.errors.clear();
    if (name === '') {
      const error = createError('Name cannot be blank');
      model.errors.add(error);
    }

    if (name.length < 2) {
      const error = createError('Name must be 2 or more characters');
      model.errors.add(error);
    }

    if (Project.all().find((project) => project.name === name)) {
      const error = createError('A Project already exists with this name');
      model.errors.add(error);
    }
  };

  const overrides = {
    save,
    validate,
  };

  const todos = () => {
    // return Todo.all().filter((todo) => todo.projectID === id);
  };

  const extension = {
    name,
    todos,
  };

  const instance = {};

  return Object.assign(instance, model, overrides, extension);
}

export { Project, createProject };
