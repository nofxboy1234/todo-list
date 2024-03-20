// const cat = {
//   init: function (sound) {
//     this.sound = sound;
//     return this;
//   },
//   makeSound: function () {
//     sound = this.sound ? this.sound : 'bark';
//     console.log(sound);
//   },
//   hello: () => {
//     console.log('hello!');
//   },
// };

// const mark = Object.create(cat);
// mark.makeSound();
// const waffles = Object.create(cat).init('meow');
// waffles.makeSound();
// waffles.hello();

// model.js

function createModel() {
  const instances = [];

  const all = () => instances;
  const last = () => instances.at(-1);
  const first = () => instances.at(0);

  const init = () => {
    const instance = {
      save() {
        instances.push(this);
      },
      update() {},
      destroy() {},
    };
    return instance;
  };

  return { all, last, first, init };
}

// const model = createModel().init();

// export { createModel };

// project.js
// import { model } from './model';

function createProject(name) {
  const model = createModel();

  const todos = () => {};

  return Object.assign({}, model, { name, todos });
}

const project = createProject('project 1');
console.log(project.all());
const project1 = project.init();
