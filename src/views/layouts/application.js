import { redirectTo, todosPath, newTodoPath, projectsPath } from '../../router';
import { params as todoParams } from '../../parameters/todoParameters';
import { cacheView, indexTodo } from '../../renderer';
import { Project } from '../../models/project';
import { params as projectParams } from '../../parameters/projectParameters';

const newTodo = () => {
  const projectData = {
    data: {
      id: projectParams.data.id,
    },
  };
  const project = Project.find(projectData.data.id);
  const todos = project.todos();
  cacheView(indexTodo, projectData, 'todo', todos);

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

const projectIndex = document.createElement('div');

const createLayout = () => {
  const headingItem = document.createElement('div');
  headingItem.classList.add('heading');
  headingItem.textContent = 'TODO LIST';
  menuContainer.appendChild(headingItem);

  const newTodoButton = document.createElement('button');
  newTodoButton.classList.add('new-todo-button');
  newTodoButton.textContent = 'New List';
  newTodoButton.addEventListener('click', newTodo);
  menuContainer.appendChild(newTodoButton);

  menuContainer.appendChild(projectIndex);

  redirectTo('GET', projectsPath);

  const projectData = {
    data: {
      id: 1,
    },
  };
  projectParams.merge(projectData);
  const project = Project.find(projectData.data.id);
  const todos = project.todos();
  cacheView(indexTodo, projectData, 'todo', todos);

  redirectTo('GET', todosPath, projectData);
};

export { createLayout, menuContainer, contentContainer, projectIndex };
