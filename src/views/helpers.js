import { contentContainer, projectIndex } from './layouts/application';
import { Todo } from '../models/todo';
import { render } from '../renderer';

const clearContent = () => {
  while (contentContainer.firstChild) {
    const lastChild = contentContainer.lastChild;
    contentContainer.removeChild(lastChild);
  }
};

const clearProjectIndex = () => {
  while (projectIndex.firstChild) {
    const lastChild = projectIndex.lastChild;
    projectIndex.removeChild(lastChild);
  }
};

const createLabel = (text, forID) => {
  const label = document.createElement('label');
  label.textContent = text;
  label.htmlFor = forID;
  return label;
};

const createInput = (type, id, name) => {
  const input = document.createElement('input');
  input.type = type;
  if (id) input.id = id;
  input.name = name;
  return input;
};

const createTextArea = (id, name) => {
  const textArea = document.createElement('textarea');
  textArea.id = id;
  textArea.name = name;
  return textArea;
};

const createOption = (value, text) => {
  const option = document.createElement('option');
  option.value = value;
  option.text = text;
  return option;
};

const createSelect = (id, name, options) => {
  const select = document.createElement('select');
  select.id = id;
  select.name = name;
  options.forEach((option) => {
    select.add(createOption(option.value, option.text));
  });
  return select;
};

const createDataList = (id, options) => {
  const dataList = document.createElement('datalist');
  dataList.id = id;
  options.forEach((option) => {
    dataList.appendChild(createOption(option, option));
  });
  return dataList;
};

const createButton = (type, text, id) => {
  const button = document.createElement('button');
  button.type = type;
  button.textContent = text;
  button.id = id;
  return button;
};

const renderChildTodosOfProject = (projectInstance) => {
  console.log(`renderChildTodosOfProject: ${projectInstance.project.name}`);
  const todos = Todo.childrenOfProject(projectInstance);
  render('todos/index', todos);
};

export {
  clearContent,
  clearProjectIndex,
  createLabel,
  createInput,
  createTextArea,
  createOption,
  createSelect,
  createDataList,
  createButton,
  renderChildTodosOfProject,
};
