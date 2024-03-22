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
    errors.clear();
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
    validate,
    get errors() {
      return errors;
    },
    get name() {
      return name;
    },
    set name(value) {
      name = value;
    },
    get id() {
      return id;
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
console.log(project1.id);
console.log(all());
console.log(first());
console.log(last());
project2.errors.forEach((error) => console.log(error.description));

const project3 = createProject('p3');
console.log(project3.name);
project3.name = 'p3333333333333333';
console.log(project3.name);
console.log(project3.id);
project3.save();
console.log(project3.id);

const project4 = createProject('');
project4.validate();
project4.errors.forEach((error) => console.log(error.description));
project4.name = 'p4';
project4.validate();
project4.errors.forEach((error) => console.log(error.description));
project4.save();

const project5 = createProject('p4');
project5.validate();
if (project5.save()) {
  console.log(`Saved ${project5.name}!`);
} else {
  console.log(`Did not save ${project5.name}!`);
  project5.errors.forEach((error) => console.log(error.description));
}

console.log(all().map((project) => project.name));
console.log(first().name);
console.log(last().name);
