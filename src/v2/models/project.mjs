import { createErrorCollection } from './errorCollection.mjs';
import { createError } from './error.mjs';
import { createModelStatic } from './model.mjs';

const projectStatic = createModelStatic();

class Project {
  id = undefined;
  errors = createErrorCollection();

  constructor(name) {
    this.name = name;
  }

  save() {
    this.validate();
    if (this.errors.size() === 0) {
      this.id = nextID();
      projectStatic.instances.push(this);
      return true;
    } else {
      return false;
    }
  }

  validate() {
    this.errors.clear();
    if (this.name === '') {
      const error = createError('Name cannot be blank');
      this.errors.add(error);
    }

    if (this.name.length < 2) {
      const error = createError('Name must be 2 or more characters');
      this.errors.add(error);
    }

    if (Project.all().find((project) => project.name === this.name)) {
      const error = createError('A project already exists with this name');
      this.errors.add(error);
    }
  }

  todos() {
    console.log('Return all todos pointing to this project');
    // return Todo.all().filter((todo) => todo.projectID === id);
  }
}

export { projectStatic, Project };
