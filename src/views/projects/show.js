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

  const createNewTodoButton = (project) => {
    const newTodoButton = document.createElement('button');
    newTodoButton.textContent = 'New Todo';
    newTodoButton.addEventListener('click', (event) => {
      newTodo(project);
      event.stopPropagation();
    });

    return newTodoButton;
  };

  const newTodo = (project) => {
    console.log(`Show new todo form for project: ${project.name}`);
  };

  const update = (eventName, data) => {
    // const allProjects = projectStatic.all();
    // if (eventName === projectEvents.create) render(allProjects);
  };

  const render = (project) => {
    clearContainer(contentContainer);

    const showProjectDiv = document.createElement('div');

    const newTodoButton = createNewTodoButton(project);
    showProjectDiv.appendChild(newTodoButton);

    const todos = project.todos();
    if (todos.length === 0) {
      return showProjectDiv;
    }

    const todosDiv = document.createElement('div');
    todos.forEach((todo) => {
      const todoDiv = document.createElement('div');
      todoDiv.textContent = todo.title;
      todosDiv.appendChild(todoDiv);
    });

    showProjectDiv.appendChild(todosDiv);

    return showProjectDiv;
  };

  return { update, render };
};

export { createShowView };
