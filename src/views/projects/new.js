import {
  events as projectEvents,
  projectStatic,
} from '../../models/project.mjs';
import { clearContainer } from '../helpers';
import { contentContainer } from '../layouts/application';

const createNewView = () => {
  // const createProjectContainer = (project) => {
  //   const projectContainer = document.createElement('div');
  //   projectContainer.textContent = project.name;
  //   projectContainer.addEventListener('click', (event) => {
  //     renderTodosOfProject(project);
  //     event.stopPropagation();
  //   });

  //   return projectContainer;
  // };

  const update = (eventName, data) => {
    // const allProjects = projectStatic.all();
    // if (eventName === projectEvents.create) render(allProjects);
  };

  const render = (project) => {
    clearContainer(contentContainer);

    const newProjectDiv = document.createElement('div');
    newProjectDiv.textContent = 'New Project Form';

    return newProjectDiv;
  };

  return { update, render };
};

export { createNewView };
