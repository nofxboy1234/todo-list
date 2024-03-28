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

  const destroyProject = (project) => {
    if (!window.confirm('Are you sure?')) {
      return;
    }

    console.log(`destroy ${project.name}`);
    project.destroy();
  };

  const createDestroyButton = (project) => {
    const destroyButton = createButton('button', 'DESTROY', 'deleteButtonID');
    destroyButton.addEventListener('click', (event) => {
      destroyProject(project);
      event.stopPropagation();
    });

    return destroyButton;
  };

  const update = (eventName, data) => {
    if (eventName === projectEvents.create) render(data);
  };

  const render = (projects) => {
    const projectsContainer = document.createElement('div');

    projects.forEach((project) => {
      const projectContainer = createProjectContainer(project);

      if (project.id > 1) {
        const destroyButton = createDestroyButton(project);
        projectContainer.appendChild(destroyButton);
      }

      projectsContainer.appendChild(projectContainer);
    });

    return projectsContainer;
  };

  return { update, render };
};

export { createIndexView };

const indexView = createIndexView();
const projects = ['a', 'b', 'c'];
indexView.update(projects);
