// import { Project, createProject } from '../project.mjs';

// const project1 = createProject('p');
// project1.validate();
// project1.errors.forEach((error) => {
//   console.log(error.description);
// });

// // project1.name;
// if (project1.save()) {
//   console.log(`Saved ${project1.name}`);
//   console.log(`ID is ${project1.id}`);
// } else {
//   console.log(`Did not save ${project1.name}`);
//   project1.errors.forEach((error) => {
//     console.log(error.description);
//   });
//   console.log(`ID is ${project1.id}`);

//   project1.name = 'p1';
//   if (project1.save()) {
//     console.log(`Saved ${project1.name}`);
//     console.log(`ID is ${project1.id}`);
//   }
// }

// let allProjects = Project.all().map((project) => project.name);
// console.log(allProjects);

// console.log(`First project is ${Project.first().name}`);
// console.log(`Last project is ${Project.last().name}`);

// console.log('Creating p2');
// const project2 = createProject('p2');
// project2.save();

// console.log('Creating p3');
// const project3 = createProject('p3');
// project3.save();

// allProjects = Project.all().map((project) => project.name);
// console.log(allProjects);

// console.log(`First project is ${Project.first().name}`);
// console.log(`Last project is ${Project.last().name}`);

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);

Player.prototype.getMarker = function () {
  console.log(`My marker is '${this.marker}'`);
};

Player.prototype.sayName = function () {
  console.log('overridden');
  Person.prototype.sayName.call(this);
};

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'
