import { Project } from '../../models/project';

import { redirectTo } from '../../routers/router';
import { newTodoPath, todosPath } from '../../routers/todoRoutes';
import { projectsPath } from '../../routers/projectRouteHelpers';

import { cacheView } from '../../renderers/renderer';
import { todosView } from '../../renderers/todoRenderers';

import { getProjectForTodosIndex, setProjectForTodosIndex } from '../todos';

const newTodo = () => {
  const project = getProjectForTodosIndex();
  const todos = project.todos();
  cacheView(todosView(todos));

  redirectTo('GET', newTodoPath);
};

const createFlexContainer = (...classList) => {
  const flexContainer = document.createElement('div');
  flexContainer.classList.add(...classList);
  return flexContainer;
};

const nestContainer = (parent, child) => parent.appendChild(child);

const flexContainer = createFlexContainer('flex-container');
nestContainer(document.body, flexContainer);

const menuContainer = createFlexContainer('flex-item', 'flex-item-left');
nestContainer(flexContainer, menuContainer);

const contentContainer = createFlexContainer('flex-item', 'flex-item-right');
nestContainer(flexContainer, contentContainer);

const projectContainer = document.createElement('div');

const createLayout = () => {
  const headingItem = document.createElement('div');
  headingItem.classList.add('heading');
  headingItem.textContent = 'TODO LIST';
  menuContainer.appendChild(headingItem);

  const newTodoButton = document.createElement('button');
  newTodoButton.classList.add('new-todo-button');
  newTodoButton.textContent = 'New Todo';
  newTodoButton.addEventListener('click', newTodo);
  menuContainer.appendChild(newTodoButton);

  menuContainer.appendChild(projectContainer);

  projectsRedirectTo('GET', projectsPath);

  setProjectForTodosIndex(Project.first());
  redirectTo('GET', todosPath);
};

export { createLayout, contentContainer, projectContainer };
