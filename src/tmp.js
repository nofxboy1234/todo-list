const instances = [];

const all = () => instances;
const first = () => instances.at(0);
const last = () => instances.at(-1);

function createProject(name) {
  let id;
  let errors = [];

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
    if (errors.length === 0) {
      id = nextID();
      instances.push(instance);
      return true;
    } else {
      return false;
    }
  };

  const validate = () => {
    if (name === '') {
      errors.push('Name cannot be blank');
    }

    if (name.length < 2) {
      errors.push('Name must be 2 or more characters');
    }

    if (instances.find((project) => project.name === name)) {
      errors.push('A Project already exists with this name');
    }
  };

  // const todos = () => todo.all().filter((todo) => todo.projectID === id);

  const instance = {
    name,
    save,
    // errors,
    get errors() {
      return errors;
    },
    // set errors(value) {
    //   errors = value;
    // },
  };

  return instance;
}

// export { all, first, last, createProject };

const project1 = createProject('project 1');
console.log(project1.errors);
project1.errors.push('a');
console.log(project1.errors);
project1.errors = ['error!'];
console.log(project1.errors);
// project1.save();

// const project2 = createProject('project 2');
// project2.save();

// console.log(all());
// console.log(first());
// console.log(last());
