import { Project } from '../project.mjs';
import { Todo } from '../todo.mjs';

console.log('Creating project1');
const project1 = new Project('p');
project1.validate();
project1.errors.forEach((error) => {
  console.log(error.description);
});

// project1.name;
if (project1.save()) {
  console.log(`Saved ${project1.name}`);
  console.log(`ID is ${project1.id}`);
} else {
  console.log(`Did not save ${project1.name}`);
  project1.errors.forEach((error) => {
    console.log(error.description);
  });
  console.log(`ID is ${project1.id}`);

  project1.name = 'p1';
  if (project1.save()) {
    console.log(`Saved ${project1.name}`);
    console.log(`ID is ${project1.id}`);
  }
}

let allProjects = Project.all().map((project) => project.name);
console.log(allProjects);

console.log(`First project is ${Project.first().name}`);
console.log(`Last project is ${Project.last().name}`);

console.log('Creating project2');
const project2 = new Project('p2');
project2.save();

console.log('Creating p3');
const project3 = new Project('p3');
project3.save();

allProjects = Project.all().map((project) => project.name);
console.log(allProjects);

console.log(`First project is ${Project.first().name}`);
console.log(`Last project is ${Project.last().name}`);

console.log('Creating todo1');
const todo1 = new Todo('t1', 'first todo', '2024-03-26', 'high', 1);
if (todo1.save()) {
  console.log(`Saved ${todo1.name}`);
  console.log(`ID is ${todo1.id}`);

  let allTodos = Todo.all();
  console.log(allTodos);
}
