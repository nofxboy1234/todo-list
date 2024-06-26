import { Project, projectStatic } from '../../models/project.mjs';
import { clearContainer, createFlexContainer } from '../helpers';
import { indexView as projectsIndexView } from '../projects/index';
import { newView as projectNewView } from '../projects/new';
import { showView as projectShowView } from '../projects/show';

import { contentContainer } from './contentContainer';

const mainContainer = createFlexContainer('main-container');
document.body.appendChild(mainContainer);

const menuContainer = createFlexContainer('flex-item', 'menu-container');
mainContainer.appendChild(menuContainer);

mainContainer.appendChild(contentContainer.domElement);

const projectIndexContainer = document.createElement('div');

const newProject = (event) => {
  const project = new Project('');
  const render = projectNewView.render(project);
  if (render) {
    contentContainer.clearDomElement();
    contentContainer.appendRender(render.form);
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
  const render = projectsIndexView.render(allProjects);
  projectIndexContainer.appendChild(render);
};

const showDefaultProjectView = () => {
  const defaultProject = projectStatic
    .all()
    .find((project) => project.name === 'Default');

  const render = projectShowView.render(defaultProject);
  contentContainer.clearDomElement();
  contentContainer.appendRender(render);
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
