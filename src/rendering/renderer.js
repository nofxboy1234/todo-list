import { clearContainer } from '../views/helpers';

const cache = [];

const cacheView = (view) => {
  cache.push(view);
};

const popCachedView = () => {
  return cache.pop();
};

const renderCachedView = () => {
  const view = popCachedView();
  addViewToLayout(view);
};

const addViewToLayout = (view, container) => {
  clearContainer(container);
  container.appendChild(view);
};

const focusInput = (view) => {
  const focusID = view.focusID;
  document.getElementById(focusID).focus();
};

const render = (view, data) => {
  const renderedView = view.render(data);
  const container = view.container;
  addViewToLayout(renderedView, container);
  focusInput(view);
};

const createRenderer = (view) => {
  return Object.create(renderer).init(view);
};

export {
  cacheView,
  popCachedView,
  renderCachedView,
  addViewToLayout,
  render,
  createRenderer,
};
