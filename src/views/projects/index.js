import {
  events as projectEvents,
  projectStatic,
} from '../../models/project.mjs';
import { clearContainer, createButton } from '../helpers';
import { contentContainer } from '../layouts/application';

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
    const todos = project.todos();

    const todosDiv = document.createElement('div');
    todos.forEach((todo) => {
      const todoDiv = document.createElement('div');
      todoDiv.textContent = todo.title;
      todosDiv.appendChild(todoDiv);
    });
    clearContainer(contentContainer);
    contentContainer.appendChild(todosDiv);
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

  return { update, render, renderTodosOfProject };
};

export { createIndexView };
