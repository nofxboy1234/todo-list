import { events as projectEvents, Project } from './models/project.mjs';
import { subscribe } from './messageQueue/messageQueue.mjs';
import { index as indexView } from './views/projects/index.mjs';

subscribe(projectEvents.create, indexView);

const project1 = new Project('project1');
if (project1.save()) {
  console.log(`Saved ${project1.name} successfully`);
}
