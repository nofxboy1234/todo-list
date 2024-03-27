import { createError } from './error.mjs';
import { Model, createModelStatic } from './model.mjs';

const modelStatic = createModelStatic();

class Project extends Model {
  constructor(name) {
    super();
    this.name = name;
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

    if (modelStatic.all().find((project) => project.name === this.name)) {
      const error = createError('A project already exists with this name');
      this.errors.add(error);
    }
  }

  todos() {
    console.log('Return all todos pointing to this project');
    // return Todo.all().filter((todo) => todo.projectID === id);
  }
}

export { modelStatic as projectStatic, Project };

const project1 = new Project('project1');
project1.save();
