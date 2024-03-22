import { createErrorCollection } from './errorCollection.mjs';
import { createModelError } from './modelError.mjs';

const instances = [];

const all = () => instances;
const first = () => instances.at(0);
const last = () => instances.at(-1);

function createProject(name) {
  let id;
  const errors = createErrorCollection();

  const lastID = () => {
    const lastInstance = last();
    if (lastInstance) {
      return lastInstance.id;
    }

    return 0;
  };

  const nextID = () => {
    return lastID() + 1;
  };

  const save = () => {
    validate();
    if (errors.size() === 0) {
      id = nextID();
      instances.push(instance);
      return true;
    } else {
      return false;
    }
  };

  const validate = () => {
    if (name === '') {
      const error = createModelError('Name cannot be blank');
      errors.add(error);
    }

    if (name.length < 2) {
      const error = createModelError('Name must be 2 or more characters');
      errors.add(error);
    }

    if (instances.find((project) => project.name === name)) {
      const error = createModelError('A Project already exists with this name');
      errors.add(error);
    }
  };

  // const todos = () => todo.all().filter((todo) => todo.projectID === id);

  const instance = {
    name,
    save,
    get errors() {
      return errors;
    },
  };

  return instance;
}

// export { all, first, last, createProject };

const project1 = createProject('p');
project1.save();
console.log(all());
console.log(first());
console.log(last());
project1.errors.forEach((error) => console.log(error.description));

const project2 = createProject('p2');
project2.save();
console.log(all());
console.log(first());
console.log(last());
project2.errors.forEach((error) => console.log(error.description));
