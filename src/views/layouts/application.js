// import { Project } from '../../models/project.mjs';
import { createFlexContainer } from '../helpers';

const newProject = () => {
  console.log('show new project view');
  // append new todo view to layout

  // this.todo = Todo.new(params);
  // render(new_, this.todo);
};

const flexContainer = createFlexContainer('flex-container');
document.body.appendChild(flexContainer);

const menuContainer = createFlexContainer('flex-item', 'flex-item-left');
flexContainer.appendChild(menuContainer);

const contentContainer = createFlexContainer('flex-item', 'flex-item-right');
flexContainer.appendChild(contentContainer);

const projectIndexContainer = document.createElement('div');

const setupHeading = () => {
  const headingItem = document.createElement('div');
  headingItem.classList.add('heading');
  headingItem.textContent = 'TODO LIST';
  menuContainer.appendChild(headingItem);
};

const setupNewProjectButton = () => {
  const newProjectButton = document.createElement('button');
  newProjectButton.classList.add('new-project-button');
  newProjectButton.textContent = 'New Project';
  newProjectButton.addEventListener('click', newProject);
  menuContainer.appendChild(newProjectButton);
};

const createLayout = () => {
  setupHeading();
  setupNewProjectButton();
  menuContainer.appendChild(projectIndexContainer);

  // append index project view to projectIndexContainer
  // show todos for Default project
};

export { createLayout, projectIndexContainer, contentContainer };
