import { subscribe } from '../../messageQueue/messageQueue.mjs';
import {
  events,
  events as projectEvents,
  projectStatic,
} from '../../models/project.mjs';
import { clearContainer } from '../helpers';
import {
  contentContainer,
  projectIndexContainer,
} from '../layouts/application';
import { createShowView as createProjectShowView } from './show';

function createIndexView() {
  const createProjectContainer = (project) => {
    const projectContainer = document.createElement('div');
    projectContainer.textContent = project.name;
    projectContainer.addEventListener('click', (event) => {
      const projectShowView = createProjectShowView();
      const render = projectShowView.render(project);
      if (render) {
        contentContainer.clear();
        contentContainer.appendChild(render);
      }
      event.stopPropagation();
    });

    return projectContainer;
  };

  const update = (eventName, data) => {
    if (eventName === projectEvents.create) {
      const allProjects = projectStatic.all();
      const rendered = render(allProjects);
      if (rendered) {
        clearContainer(projectIndexContainer);
        projectIndexContainer.appendChild(rendered);
      }
    }
  };

  const render = (projects) => {
    const projectsContainer = document.createElement('div');

    projects.forEach((project) => {
      const projectContainer = createProjectContainer(project);
      projectsContainer.appendChild(projectContainer);
    });

    return projectsContainer;
  };

  const instance = { update, render };
  subscribe(events.create, instance);

  return instance;
}

export { createIndexView };
