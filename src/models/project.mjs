import { Model, createModelStatic } from './model.mjs';
import { createError } from '../errors/error.mjs';
import { todoStatic } from './todo.mjs';
import { publish } from '../messageQueue/messageQueue.mjs';

const events = {
  create: 'projectCreated',
  createFailed: 'projectCreateFailed',
};

function createProjectStatic() {
  const modelStatic = createModelStatic('project');

  const addBehaviourToInstances = () => {
    // Add methods back onto each instance
    modelStatic.instances.forEach((projectState, index) => {
      const project = new Project(projectState.name);
      Object.assign(project, projectState);
      modelStatic.instances[index] = project;
    });
  };

  const load = () => {
    // Call `base class` implementation in `override`
    if (modelStatic.load()) {
      addBehaviourToInstances();
      return true;
    } else {
      return false;
    }
  };

  return Object.assign({}, modelStatic, { load });
}

const projectStatic = createProjectStatic();
// const projectStatic = createModelStatic('project');

class Project extends Model {
  constructor(name) {
    super();
    this.name = name;
  }

  save() {
    const success = super.save(projectStatic);
    if (success) {
      const data = JSON.stringify(projectStatic.instances);
      localStorage.setItem('projects', data);
      publish(events.create, this);
    } else {
      publish(events.createFailed, this);
    }

    return success;
  }

  validate() {
    if (this.name === '') {
      const error = createError('Name cannot be blank');
      this.errors.add(error);
    }

    if (this.name.length < 2) {
      const error = createError('Name must be 2 or more characters');
      this.errors.add(error);
    }

    if (projectStatic.all().find((project) => project.name === this.name)) {
      const error = createError('A project already exists with this name');
      this.errors.add(error);
    }
  }

  todos() {
    return todoStatic.all().filter((todo) => todo.projectID === this.id);
  }
}

export { events, projectStatic, Project };
