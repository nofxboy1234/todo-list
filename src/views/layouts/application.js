// import { Project } from '../../models/project.mjs';
import { subscribe } from '../../messageQueue/messageQueue.mjs';
import {
  Project,
  events as projectEvents,
  projectStatic,
} from '../../models/project.mjs';
import { clearContainer, createFlexContainer } from '../helpers';
import { createIndexView } from '../projects/index';
import { createNewView as createProjectNewView } from '../projects/new';
import { createShowView as createProjectShowView } from '../projects/show';

import { contentContainer } from './contentContainer';

const mainContainer = createFlexContainer('main-container');
document.body.appendChild(mainContainer);

const menuContainer = createFlexContainer('flex-item', 'menu-container');
mainContainer.appendChild(menuContainer);

mainContainer.appendChild(contentContainer.domElement);

const projectIndexContainer = document.createElement('div');

const projectsIndexView = createIndexView();

const newProject = (event) => {
  const projectNewView = createProjectNewView();
  const project = new Project('');
  const render = projectNewView.render(project);
  if (render) {
    contentContainer.clear();
    contentContainer.appendChild(render.form);
    render.focus();
  }

  event.stopPropagation();
};

const addAppTitle = () => {
  const headingItem = document.createElement('div');
  headingItem.classList.add('heading');
  headingItem.textContent = 'TODO LIST';
  menuContainer.appendChild(headingItem);
};

const addNewProjectButton = () => {
  const newProjectButton = document.createElement('button');
  newProjectButton.classList.add('new-project-button');
  newProjectButton.textContent = 'New Project';
  newProjectButton.addEventListener('click', newProject);
  menuContainer.appendChild(newProjectButton);
};

const addProjectsHeading = () => {
  const header = document.createElement('h2');
  header.textContent = 'Projects:';
  menuContainer.appendChild(header);
};

const addProjectIndexContainer = () => {
  menuContainer.appendChild(projectIndexContainer);
};

const addProjectIndexView = () => {
  const allProjects = projectStatic.all();
  clearContainer(projectIndexContainer);
  projectIndexContainer.appendChild(projectsIndexView.render(allProjects));
  subscribe(projectEvents.create, projectsIndexView);
};

const showDefaultProjectView = () => {
  const defaultProject = projectStatic
    .all()
    .find((project) => project.name === 'Default');

  const projectShowView = createProjectShowView();
  contentContainer.clear();
  contentContainer.appendChild(projectShowView.render(defaultProject));
};

const createLayout = () => {
  addAppTitle();
  addNewProjectButton();
  addProjectsHeading();
  addProjectIndexContainer();
  addProjectIndexView();
  showDefaultProjectView();
};

export { createLayout, projectIndexContainer, contentContainer };
