import { events as projectEvents } from '../../models/project.mjs';
import { createButton } from '../helpers';

const createIndexView = () => {
  const createProjectContainer = (project) => {
    const projectContainer = document.createElement('div');
    projectContainer.textContent = project.name;
    projectContainer.addEventListener('click', (event) => {
      renderTodosOfProject(project);
      event.stopPropagation();
    });

    return projectContainer;
  };

  const renderTodosOfProject = (project) => {
    console.log(
      `append ${project.todos()} of ${project.name} to contentContainer`
    );
  };

  const update = (eventName, data) => {
    if (eventName === projectEvents.create) render(data);
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
