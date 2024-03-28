// import { Project } from '../../models/project.mjs';
import { projectStatic } from '../../models/project.mjs';
import { createFlexContainer } from '../helpers';
import { createIndexView } from '../projects/index';

const flexContainer = createFlexContainer('flex-container');
document.body.appendChild(flexContainer);

const menuContainer = createFlexContainer('flex-item', 'flex-item-left');
flexContainer.appendChild(menuContainer);

const contentContainer = createFlexContainer('flex-item', 'flex-item-right');
flexContainer.appendChild(contentContainer);

const projectIndexContainer = document.createElement('div');

const newProject = () => {
  console.log('show new project view');
  // append new todo view to layout

  // this.todo = Todo.new(params);
  // render(new_, this.todo);
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
  const projectsIndexView = createIndexView();
  const allProjects = projectStatic.all();
  projectIndexContainer.appendChild(projectsIndexView.render(allProjects));
};

const createLayout = () => {
  addAppTitle();
  addNewProjectButton();
  addProjectsHeading();
  addProjectIndexContainer();
  addProjectIndexView();

  // show todos for Default project
};

export { createLayout, projectIndexContainer, contentContainer };
