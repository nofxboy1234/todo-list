import { Todo } from './todo';
import { createModel as Model, exists } from './model';

const instanceProperties = {
  todos: function () {
    return Todo.all().filter((todo) => todo.data.projectID === this.data.id);
  },
  destroyDependent: function () {
    this.todos().forEach((todo) => {
      todo.destroy();
    });
  },
  validate: function () {
    if (this.data.name === '') {
      this.errors.push('Name cannot be blank');
    }
    if (this.data.name.length < 2) {
      this.errors.push('Name must be 2 or more characters');
    }
    if (!this.data.id) {
      if (exists(Project, 'name', this)) {
        this.errors.push('A Project already exists with this name');
      }
    }
  },
  update: function (validationInstance) {
    validationInstance.validate();
    if (validationInstance.errors.length > 0) {
      return false;
    } else {
      this.saveDependent();
      this.updateDependent();

      this.saveParents();
      this.updateParents();

      this.linkToParents(validationInstance);

      updateInstanceInStorage(this, validationInstance);
      this.cleanData();

      return true;
    }
  },
};
const Project = Object.assign({}, Model(instanceProperties));
const staticProperties = {};
Object.assign(Project, staticProperties);

export { Project };
