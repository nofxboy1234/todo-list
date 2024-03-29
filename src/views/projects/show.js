import {
  events as projectEvents,
  projectStatic,
} from '../../models/project.mjs';
import { clearContainer } from '../helpers';
import { contentContainer } from '../layouts/application';

const createShowView = () => {
  // const createProjectContainer = (project) => {
  //   const projectContainer = document.createElement('div');
  //   projectContainer.textContent = project.name;
  //   projectContainer.addEventListener('click', (event) => {
  //     renderTodosOfProject(project);
  //     event.stopPropagation();
  //   });

  //   return projectContainer;
  // };

  const update = (eventName, data) => {
    // const allProjects = projectStatic.all();
    // if (eventName === projectEvents.create) render(allProjects);
  };

  const render = (project) => {
    clearContainer(contentContainer);

    const todos = project.todos();
    if (todos.length === 0) {
      return;
    }

    const todosDiv = document.createElement('div');
    todos.forEach((todo) => {
      const todoDiv = document.createElement('div');
      todoDiv.textContent = todo.title;
      todosDiv.appendChild(todoDiv);
    });

    return todosDiv;
    // contentContainer.appendChild(todosDiv);
  };

  return { update, render };
};

export { createShowView };
