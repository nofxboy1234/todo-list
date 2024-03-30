import {
  events as projectEvents,
  projectStatic,
} from '../../models/project.mjs';
import { contentContainer } from '../layouts/application';
import { createShowView as createProjectShowView } from './show';

const createIndexView = () => {
  const createProjectContainer = (project) => {
    const projectContainer = document.createElement('div');
    projectContainer.textContent = project.name;
    projectContainer.addEventListener('click', (event) => {
      const projectShowView = createProjectShowView();
      const render = projectShowView.render(project);
      if (render) {
        contentContainer.appendChild(render);
      }
      event.stopPropagation();
    });

    return projectContainer;
  };

  const update = (eventName, data) => {
    const allProjects = projectStatic.all();
    if (eventName === projectEvents.create) render(allProjects);
  };

  const render = (projects) => {
    const projectsContainer = document.createElement('div');

    projects.forEach((project) => {
      const projectContainer = createProjectContainer(project);
      projectsContainer.appendChild(projectContainer);
    });

    return projectsContainer;
  };

  return { update, render };
};

export { createIndexView };
