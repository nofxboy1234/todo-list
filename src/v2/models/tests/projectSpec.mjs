import { Project, createProject } from '../project.mjs';

const project1 = createProject('p');
project1.validate();
project1.errors.forEach((error) => {
  console.log(error.description);
});

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

const allProjects = Project.all().map((project) => project.name);
console.log(allProjects);
