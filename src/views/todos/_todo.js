import { redirectTo } from '../../helpers';
import { createButton } from '../helpers';

const todoPartial = (todo) => {
  const todoParagraph = document.createElement('p');

  const titleDiv = document.createElement('div');
  titleDiv.textContent = todo.title;
  todoParagraph.appendChild(titleDiv);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.textContent = todo.description;
  todoParagraph.appendChild(descriptionDiv);

  const dueDateDiv = document.createElement('div');
  dueDateDiv.textContent = todo.dueDate;
  todoParagraph.appendChild(dueDateDiv);

  const priorityDiv = document.createElement('div');
  priorityDiv.textContent = todo.priority;
  todoParagraph.appendChild(priorityDiv);

  const checkListDiv = document.createElement('div');
  for (const [key, value] of Object.entries(todo.checkList)) {
    const checkListEntryDiv = document.createElement('div');
    checkListEntryDiv.textContent = `- ${key}: ${value}`;
    checkListDiv.appendChild(checkListEntryDiv);
  }

  todoParagraph.appendChild(checkListDiv);

  const projectDiv = document.createElement('div');
  projectDiv.textContent = todo.project;
  todoParagraph.appendChild(projectDiv);

  const destroyTodo = () => {
    // console.log('destroy');
    redirectTo('/todos', todo.id, 'DELETE');
  };

  const editTodo = () => {
    // console.log('destroy');
    redirectTo('/todos/edit', todo.id);
  };

  const deleteButton = createButton('button', 'DELETE');
  deleteButton.addEventListener('click', destroyTodo);
  todoParagraph.appendChild(deleteButton);

  const updateButton = createButton('button', 'EDIT')
  updateButton.addEventListener('click', editTodo);
  todoParagraph.appendChild(updateButton);

  return todoParagraph;
};

export { todoPartial };
