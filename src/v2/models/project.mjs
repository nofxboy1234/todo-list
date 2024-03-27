import { Model, createModelStatic } from './model.mjs';
import { createError } from '../errors/error.mjs';
import { publish } from '../messageQueue/messageQueue.mjs';

const events = {
  create: 'projectCreated',
};

const projectStatic = createModelStatic('project');

class Project extends Model {
  constructor(name) {
    super();
    this.name = name;
  }

  save() {
    const success = super.save(projectStatic);
    if (success) {
      publish(events.create, this);
    }

    return success;
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

    if (projectStatic.all().find((project) => project.name === this.name)) {
      const error = createError('A project already exists with this name');
      this.errors.add(error);
    }
  }

  todos() {
    console.log('Return all todos pointing to this project');
    // return Todo.all().filter((todo) => todo.projectID === id);
  }
}

export { events, projectStatic, Project };

// const project1 = new Project('project1');
// if (project1.save()) {
//   console.log(`Saved ${project1.name} successfully`);
// }
